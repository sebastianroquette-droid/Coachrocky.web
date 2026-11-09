import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

router.get('/', async (req, res) => {
  logger.info('[Reach Segments] REQUEST RECEIVED');
  logger.info('[Reach Segments] STEP 1: Checking API key configuration');

  const hostingerReachApiKey = process.env.HOSTINGER_REACH_API_KEY;
  if (!hostingerReachApiKey || hostingerReachApiKey.trim() === '') {
    logger.error('[Reach Segments] CRITICAL: HOSTINGER_REACH_API_KEY is not configured or empty');
    throw new Error('HOSTINGER_REACH_API_KEY is not configured');
  }

  logger.info('[Reach Segments] API key is configured (length: ' + hostingerReachApiKey.length + ' chars)');

  // ===== STEP 2: PREPARE API REQUEST =====
  logger.info('[Reach Segments] STEP 2: Preparing Hostinger Reach API request');

  const headers = {
    'Authorization': `Bearer ${hostingerReachApiKey}`,
    'Content-Type': 'application/json',
  };
  logger.info('[Reach Segments] Headers: Authorization: Bearer [REDACTED], Content-Type: application/json');

  const apiUrl = 'https://developers.hostinger.com/api/reach/v1/segments';
  logger.info('[Reach Segments] API URL configured, HTTP Method: GET');

  // ===== STEP 3: MAKE API REQUEST =====
  logger.info('[Reach Segments] STEP 3: Making API request to Hostinger Reach');

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers,
  });

  logger.info(`[Reach Segments] Fetch completed. Status: ${response.status} ${response.statusText}`);

  // ===== STEP 4: PARSE RESPONSE =====
  logger.info('[Reach Segments] STEP 4: Parsing API response');

  let responseBody = {};
  const responseText = await response.text();

  if (responseText) {
    try {
      responseBody = JSON.parse(responseText);
    } catch (parseError) {
      logger.warn(`[Reach Segments] Could not parse response body as JSON: ${parseError.message}`);
    }
  } else {
    logger.info('[Reach Segments] Response body is empty');
  }

  // ===== STEP 5: CHECK RESPONSE STATUS =====
  logger.info('[Reach Segments] STEP 5: Checking response status');

  if (!response.ok) {
    logger.error('[Reach Segments] API REQUEST FAILED');
    logger.error(`[Reach Segments] Status: ${response.status} ${response.statusText}`);

    const errorMessage = `Hostinger Reach API error: ${response.status} ${response.statusText}`;
    logger.error(`[Reach Segments] Throwing error: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  // ===== STEP 6: SUCCESS =====
  logger.info('[Reach Segments] API REQUEST SUCCESSFUL: segments retrieved');

  res.json(responseBody);
});

export default router;
