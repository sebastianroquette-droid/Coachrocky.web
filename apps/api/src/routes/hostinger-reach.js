import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Segment mapping: 'Krafttraining für Frauen' maps to segment ID
const SEGMENT_MAPPING = {
  'Krafttraining für Frauen': '6153c229-590f-4e5c-90ec-eec072c3d2d2', // Segment ID for 'Krafttraining für Frauen'
};

// GET /hostinger-reach - Retrieve contact from Hostinger Reach
router.get('/hostinger-reach', async (req, res) => {
  logger.info('[Hostinger Reach GET] REQUEST RECEIVED');

  const { email, firstName, lastName } = req.query;

  // ===== STEP 1: INPUT VALIDATION =====
  logger.info('[Hostinger Reach GET] STEP 1: Validating input parameters');

  if (!email) {
    logger.warn('[Hostinger Reach GET] VALIDATION FAILED: Email parameter is missing');
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!emailRegex.test(email)) {
    logger.warn('[Hostinger Reach GET] VALIDATION FAILED: Invalid email format');
    return res.status(400).json({ error: 'Invalid email format' });
  }

  logger.info('[Hostinger Reach GET] VALIDATION PASSED');

  // ===== STEP 2: CHECK API KEY CONFIGURATION =====
  logger.info('[Hostinger Reach GET] STEP 2: Checking API key configuration');

  const hostingerReachApiKey = process.env.HOSTINGER_REACH_API_KEY;
  if (!hostingerReachApiKey || hostingerReachApiKey.trim() === '') {
    logger.error('[Hostinger Reach GET] CRITICAL: HOSTINGER_REACH_API_KEY is not configured or empty');
    throw new Error('HOSTINGER_REACH_API_KEY is not configured');
  }

  logger.info('[Hostinger Reach GET] API key is configured (length: ' + hostingerReachApiKey.length + ' chars)');

  // ===== STEP 3: CHECK API URL CONFIGURATION =====
  logger.info('[Hostinger Reach GET] STEP 3: Checking API URL configuration');

  const hostingerReachUrl = process.env.HOSTINGER_REACH_URL;
  if (!hostingerReachUrl || hostingerReachUrl.trim() === '') {
    logger.error('[Hostinger Reach GET] CRITICAL: HOSTINGER_REACH_URL is not configured or empty');
    throw new Error('HOSTINGER_REACH_URL is not configured');
  }

  logger.info('[Hostinger Reach GET] API URL is configured');

  // ===== STEP 4: PREPARE API REQUEST =====
  logger.info('[Hostinger Reach GET] STEP 4: Preparing Hostinger Reach API request');

  const headers = {
    'Authorization': `Bearer ${hostingerReachApiKey}`,
    'Content-Type': 'application/json',
  };
  logger.info('[Hostinger Reach GET] Headers: Authorization: Bearer [REDACTED], Content-Type: application/json');

  // Build query string for GET request
  const queryParams = new URLSearchParams();
  queryParams.append('email', email);
  if (firstName) queryParams.append('firstName', firstName);
  if (lastName) queryParams.append('lastName', lastName);

  const apiUrl = `${hostingerReachUrl}?${queryParams.toString()}`;
  logger.info('[Hostinger Reach GET] API URL configured, HTTP Method: GET');

  // ===== STEP 5: MAKE API REQUEST =====
  logger.info('[Hostinger Reach GET] STEP 5: Making API request to Hostinger Reach');

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers,
  });

  logger.info(`[Hostinger Reach GET] Fetch completed. Status: ${response.status} ${response.statusText}`);

  // ===== STEP 6: PARSE RESPONSE =====
  logger.info('[Hostinger Reach GET] STEP 6: Parsing API response');

  let responseBody = {};
  let responseText = '';

  try {
    responseText = await response.text();

    if (responseText) {
      responseBody = JSON.parse(responseText);
    } else {
      logger.info('[Hostinger Reach GET] Response body is empty');
    }
  } catch (parseError) {
    logger.warn(`[Hostinger Reach GET] Could not parse response body as JSON: ${parseError.message}`);
  }

  // ===== STEP 7: CHECK RESPONSE STATUS =====
  logger.info('[Hostinger Reach GET] STEP 7: Checking response status');

  if (!response.ok) {
    logger.error('[Hostinger Reach GET] API REQUEST FAILED');
    logger.error(`[Hostinger Reach GET] Status: ${response.status} ${response.statusText}`);

    const errorMessage = `Hostinger Reach API error: ${response.status} ${response.statusText}`;
    logger.error(`[Hostinger Reach GET] Throwing error: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  // ===== STEP 8: SUCCESS =====
  logger.info('[Hostinger Reach GET] API REQUEST SUCCESSFUL: contact retrieved');

  res.json({
    success: true,
    message: 'Contact retrieved successfully',
    data: responseBody,
    timestamp: new Date().toISOString(),
  });
});

// POST /hostinger-reach - Add contact to Hostinger Reach
router.post('/hostinger-reach', async (req, res) => {
  logger.info('[Hostinger Reach POST] REQUEST RECEIVED');

  const { email, name } = req.body;

  // ===== STEP 1: INPUT VALIDATION =====
  logger.info('[Hostinger Reach POST] STEP 1: Validating input parameters');

  if (!email) {
    logger.warn('[Hostinger Reach POST] VALIDATION FAILED: Email parameter is missing');
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!emailRegex.test(email)) {
    logger.warn('[Hostinger Reach POST] VALIDATION FAILED: Invalid email format');
    return res.status(400).json({ error: 'Invalid email format' });
  }

  logger.info('[Hostinger Reach POST] VALIDATION PASSED');

  // ===== STEP 2: CHECK API KEY CONFIGURATION =====
  logger.info('[Hostinger Reach POST] STEP 2: Checking API key configuration');

  const hostingerReachApiKey = process.env.HOSTINGER_REACH_API_KEY;
  if (!hostingerReachApiKey || hostingerReachApiKey.trim() === '') {
    logger.error('[Hostinger Reach POST] CRITICAL: HOSTINGER_REACH_API_KEY is not configured or empty');
    throw new Error('HOSTINGER_REACH_API_KEY is not configured');
  }

  logger.info('[Hostinger Reach POST] API key is configured (length: ' + hostingerReachApiKey.length + ' chars)');

  // ===== STEP 3: CHECK API URL CONFIGURATION =====
  logger.info('[Hostinger Reach POST] STEP 3: Checking API URL configuration');

  const hostingerReachUrl = process.env.HOSTINGER_REACH_URL;
  if (!hostingerReachUrl || hostingerReachUrl.trim() === '') {
    logger.error('[Hostinger Reach POST] CRITICAL: HOSTINGER_REACH_URL is not configured or empty');
    throw new Error('HOSTINGER_REACH_URL is not configured');
  }

  logger.info('[Hostinger Reach POST] API URL is configured');

  // ===== STEP 4: PREPARE API REQUEST =====
  logger.info('[Hostinger Reach POST] STEP 4: Preparing Hostinger Reach API request');

  const headers = {
    'Authorization': `Bearer ${hostingerReachApiKey}`,
    'Content-Type': 'application/json',
  };
  logger.info('[Hostinger Reach POST] Headers: Authorization: Bearer [REDACTED], Content-Type: application/json');

  const segmentId = '6153c229-590f-4e5c-90ec-eec072c3d2d2';

  // Request body structure: { email, name, segmentIds }
  const requestBody = {
    email,
    ...(name && name.trim() !== '' && { name }),
    segmentIds: [segmentId],
  };

  logger.info('[Hostinger Reach POST] Request body prepared (PII redacted)');

  // ===== STEP 5: MAKE API REQUEST =====
  logger.info('[Hostinger Reach POST] STEP 5: Making API request to Hostinger Reach');
  logger.info('[Hostinger Reach POST] HTTP Method: POST');

  const response = await fetch(hostingerReachUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody),
  });

  logger.info(`[Hostinger Reach POST] Fetch completed. Status: ${response.status} ${response.statusText}`);

  // ===== STEP 6: PARSE RESPONSE =====
  logger.info('[Hostinger Reach POST] STEP 6: Parsing API response');

  let responseBody = {};
  let responseText = '';

  try {
    responseText = await response.text();

    if (responseText) {
      responseBody = JSON.parse(responseText);
    } else {
      logger.info('[Hostinger Reach POST] Response body is empty');
    }
  } catch (parseError) {
    logger.warn(`[Hostinger Reach POST] Could not parse response body as JSON: ${parseError.message}`);
  }

  // ===== STEP 7: CHECK RESPONSE STATUS =====
  logger.info('[Hostinger Reach POST] STEP 7: Checking response status');

  if (!response.ok) {
    logger.error('[Hostinger Reach POST] API REQUEST FAILED');
    logger.error(`[Hostinger Reach POST] Status: ${response.status} ${response.statusText}`);

    const errorMessage = `Hostinger Reach API error: ${response.status} ${response.statusText}`;
    logger.error(`[Hostinger Reach POST] Throwing error: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  // ===== STEP 8: SUCCESS =====
  logger.info('[Hostinger Reach POST] API REQUEST SUCCESSFUL: contact added');

  res.json({
    success: true,
    message: 'Contact added successfully',
    data: {
      email: email,
      name: name || null,
      segmentId: segmentId,
    },
    timestamp: new Date().toISOString(),
  });
});

export default router;
