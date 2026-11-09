import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import healthCheck from './health-check.js';
import healthNewsletterRouter from './health-newsletter.js';
import hostingerReachRouter from './hostinger-reach.js';
import newsletterRouter from './newsletter.js';
import segmentsRouter from './segments.js';
import reachSegmentsRouter from './reach-segments.js';
import metaCapi from './meta-capi.js';

const router = Router();

// Abuse protection for the Meta CAPI endpoint: 30 requests / minute / IP.
const metaCapiRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later' },
  validate: { trustProxy: false },
});

export default () => {
  router.get('/health', healthCheck);
  router.use('/health/newsletter', healthNewsletterRouter);
  router.use('/', hostingerReachRouter);
  router.use('/newsletter', newsletterRouter);
  router.use('/segments', segmentsRouter);
  router.use('/reach/segments', reachSegmentsRouter);
  router.post('/meta-capi', metaCapiRateLimit, metaCapi);

  return router;
};
