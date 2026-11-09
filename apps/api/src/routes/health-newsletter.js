import express from 'express';
import logger from '../utils/logger.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const hostingerApiKey = process.env.HOSTINGER_API_KEY;
  const hostingerConfigured = !!(hostingerApiKey && hostingerApiKey.trim() !== '');

  logger.info(`Health check for newsletter integration: hostinger_configured=${hostingerConfigured}`);

  res.json({
    status: 'ok',
    hostinger_configured: hostingerConfigured,
    timestamp: new Date().toISOString(),
  });
});

export default router;