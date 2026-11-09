import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

// GET /segments - Retrieve all segments from Hostinger Reach
router.get('/', async (req, res) => {
  logger.info('[Segments] REQUEST RECEIVED');
  logger.info('[Segments] STEP 1: Checking API key configuration');

  const hostingerReachApiKey = process.env.HOSTINGER_REACH_API_KEY;
  if (!hostingerReachApiKey || hostingerReachApiKey.trim() === '') {
    logger.error('[Segments] CRITICAL: HOSTINGER_REACH_API_KEY is not configured or empty');
    throw new Error('HOSTINGER_REACH_API_KEY is not configured');
  }

  logger.info('[Segments] API key is configured (length: ' + hostingerReachApiKey.length + ' chars)');

  // ===== STEP 2: PREPARE API REQUEST =====
  logger.info('[Segments] STEP 2: Preparing Hostinger Reach API request');

  const headers = {
    'Authorization': `Bearer ${hostingerReachApiKey}`,
    'Content-Type': 'application/json',
  };
  logger.info('[Segments] Headers: Authorization: Bearer [REDACTED], Content-Type: application/json');

  const apiUrl = 'https://developers.hostinger.com/api/reach/v1/segmentation/segments';
  logger.info('[Segments] API URL configured, HTTP Method: GET');

  // ===== STEP 3: MAKE API REQUEST =====
  logger.info('[Segments] STEP 3: Making API request to Hostinger Reach');

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers,
  });

  logger.info(`[Segments] Fetch completed. Status: ${response.status} ${response.statusText}`);

  // ===== STEP 4: PARSE RESPONSE =====
  logger.info('[Segments] STEP 4: Parsing API response');

  let responseBody = {};
  let responseText = '';

  try {
    responseText = await response.text();

    if (responseText) {
      responseBody = JSON.parse(responseText);
    } else {
      logger.info('[Segments] Response body is empty');
    }
  } catch (parseError) {
    logger.warn(`[Segments] Could not parse response body as JSON: ${parseError.message}`);
  }

  // ===== STEP 5: CHECK RESPONSE STATUS =====
  logger.info('[Segments] STEP 5: Checking response status');

  if (!response.ok) {
    logger.error('[Segments] API REQUEST FAILED');
    logger.error(`[Segments] Status: ${response.status} ${response.statusText}`);

    const errorMessage = `Hostinger Reach API error: ${response.status} ${response.statusText}`;
    logger.error(`[Segments] Throwing error: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  // ===== STEP 6: SUCCESS =====
  logger.info('[Segments] API REQUEST SUCCESSFUL: segments retrieved');

  res.json({
    success: true,
    message: 'Segments retrieved successfully',
    data: responseBody,
    timestamp: new Date().toISOString(),
  });
});

export default router;
