import 'dotenv/config';
import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/', async (req, res) => {
  const { email, name } = req.body;

  // Input validation - email
  if (!email) {
    logger.warn('Newsletter signup attempt with missing email');
    return res.status(400).json({ error: 'Bitte gib deine E-Mail-Adresse ein.' });
  }

  if (!emailRegex.test(email)) {
    logger.warn('Newsletter signup attempt with invalid email format');
    return res.status(400).json({ error: 'Bitte gib eine gültige E-Mail-Adresse ein.' });
  }

  // Input validation - name (optional)
  if (!name || name.trim() === '') {
    logger.warn('Newsletter signup attempt with missing name');
  }

  // ===== STEP 1: CHECK API KEY CONFIGURATION =====
  logger.info('[Newsletter] STEP 1: Checking API key configuration');
  const apiKey = process.env.HOSTINGER_REACH_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    logger.error('[Newsletter] CRITICAL: HOSTINGER_REACH_API_KEY is not configured or empty');
    throw new Error('Die Anmeldung ist gerade nicht möglich. Schreib mir bitte kurz per E-Mail.');
  }

  logger.info('[Newsletter] API key is present (length: ' + apiKey.length + ' chars)');

  // ===== STEP 2: DETERMINE API URL =====
  logger.info('[Newsletter] STEP 2: Determining API URL');
  const apiUrl = process.env.HOSTINGER_REACH_URL;

  if (!apiUrl || apiUrl.trim() === '') {
    logger.error('[Newsletter] CRITICAL: HOSTINGER_REACH_URL is not configured or empty');
    throw new Error('Die Anmeldung ist gerade nicht möglich. Schreib mir bitte kurz per E-Mail.');
  }

  logger.info('[Newsletter] Signup attempt received');

  // ===== STEP 3: PREPARE API REQUEST =====
  logger.info('[Newsletter] STEP 3: Preparing Hostinger Reach API request');
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const requestBody = {
    email,
    ...(name && name.trim() !== '' && { name }),
  };

  logger.info('[Newsletter] API Request Details: method=POST, Authorization: Bearer [REDACTED]');

  // ===== STEP 4: MAKE API REQUEST =====
  logger.info('[Newsletter] STEP 4: Making API request to Hostinger Reach...');
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody),
  });

  logger.info(`[Newsletter] API Response Status: ${response.status} ${response.statusText}`);

  // ===== STEP 5: PARSE RESPONSE =====
  logger.info('[Newsletter] STEP 5: Parsing API response');
  let responseBody = {};
  const responseText = await response.text();

  if (responseText) {
    try {
      responseBody = JSON.parse(responseText);
    } catch (parseError) {
      logger.warn('[Newsletter] Could not parse response body as JSON');
    }
  }

  // ===== STEP 6: CHECK RESPONSE STATUS =====
  logger.info('[Newsletter] STEP 6: Checking response status');
  if (!response.ok) {
    logger.error(`[Newsletter] API REQUEST FAILED: ${response.status} ${response.statusText}`);
    throw new Error('Die Anmeldung konnte nicht gespeichert werden. Versuch es noch einmal.');
  }

  // ===== STEP 7: SUCCESS =====
  logger.info('[Newsletter] API REQUEST SUCCESSFUL: contact added');

  // Return success response
  res.json({
    success: true,
    message: 'Kontakt erfolgreich hinzugefügt',
    email,
    timestamp: new Date().toISOString(),
  });
});

export default router;
