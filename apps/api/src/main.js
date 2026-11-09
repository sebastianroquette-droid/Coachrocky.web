import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { domainRedirectMiddleware } from './middleware/domain-redirect.js';
import routes from './routes/index.js';
import { errorMiddleware } from './middleware/error.js';
import { globalRateLimit } from './middleware/global-rate-limit.js';
import logger from './utils/logger.js';
import { BodyLimit } from './constants/common.js';

const app = express();

app.set('trust proxy', true);

// Log Hostinger API configuration status on startup
const hostingerApiKey = process.env.HOSTINGER_API_KEY;
if (hostingerApiKey) {
  logger.info('INFO: Hostinger API key configured and ready');
} else {
  logger.error('CRITICAL ERROR: HOSTINGER_API_KEY is not configured');
}

process.on('uncaughtException', (error) => {
	logger.error('Uncaught exception:', error);
});
  
process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled rejection at:', promise, 'reason:', reason);
});

process.on('SIGINT', async () => {
	logger.info('Interrupted');
	process.exit(0);
});

process.on('SIGTERM', async () => {
	logger.info('SIGTERM signal received');

	await new Promise(resolve => setTimeout(resolve, 3000));

	logger.info('Exiting');
	process.exit();
});

// Domain redirect middleware - MUST be first, before all other middleware
app.use(domainRedirectMiddleware);

app.use(helmet());

// CORS: fail-closed. Only origins listed in CORS_ORIGIN are allowed.
// If CORS_ORIGIN is unset/empty, no cross-origin browser request is permitted.
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
app.use(cors({
  origin: (origin, callback) => {
    // No Origin header (same-origin / server-to-server / curl) -> allow.
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    // Origin not in allow-list (or allow-list empty) -> reject, send no ACAO header.
    return callback(null, false);
  },
  credentials: true,
}));

// Log method + path (without query string) and status only — never raw URLs,
// which could carry PII (e.g. ?email=...).
morgan.token('pathonly', (req) => req.path);
app.use(morgan(':method :pathonly :status :res[content-length] - :response-time ms'));
app.use(globalRateLimit);
app.use(express.json({
	limit: BodyLimit,
}));
app.use(express.urlencoded({ 
	extended: true,
	limit: BodyLimit,
}));

app.use('/', routes());

app.use(errorMiddleware);

app.use((req, res) => {
	res.status(404).json({ error: 'Route not found' });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	logger.info(`🚀 API Server running on http://localhost:${port}`);
});

export default app;