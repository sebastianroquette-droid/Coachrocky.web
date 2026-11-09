import crypto from 'crypto';

const ALLOWED_EVENTS = new Set([
  'PageView',
  'Contact',
  'Lead',
  'ViewContent',
  'CompleteRegistration',
  'Purchase',
  'InitiateCheckout',
]);

// Expected top-level fields only — anything else is ignored.
const MAX_LEN = {
  eventId: 128,
  eventSourceUrl: 2048,
  fbp: 128,
  fbc: 256,
  email: 320,
  phone: 32,
};

const MAX_CUSTOM_DATA_BYTES = 8192;

const hash = (value) => {
  if (!value) return undefined;
  const normalized = String(value).trim().toLowerCase();
  if (!normalized) return undefined;
  return crypto.createHash('sha256').update(normalized).digest('hex');
};

const boundedString = (value, max) => {
  if (value === undefined || value === null) return undefined;
  const str = String(value);
  return str.length > max ? str.slice(0, max) : str;
};

export default async (req, res) => {
  const body = req.body || {};

  const eventName = body.event_name;
  if (!eventName || !ALLOWED_EVENTS.has(eventName)) {
    return res.status(422).json({ error: 'Invalid or missing event_name' });
  }

  const accessToken = process.env.META_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;
  const testEventCode = process.env.META_TEST_EVENT_CODE;

  if (!accessToken || !pixelId) {
    return res.status(503).json({ error: 'Meta CAPI is not configured' });
  }

  // Only expected, length-bounded fields are forwarded.
  const eventId = boundedString(body.event_id, MAX_LEN.eventId);
  const eventSourceUrl = boundedString(body.event_source_url, MAX_LEN.eventSourceUrl);
  const fbp = boundedString(body.fbp, MAX_LEN.fbp);
  const fbc = boundedString(body.fbc, MAX_LEN.fbc);
  const email = boundedString(body.email, MAX_LEN.email);
  const phone = boundedString(body.phone, MAX_LEN.phone);

  // custom_data must be a plain object and within a size budget.
  let customData = undefined;
  if (body.custom_data && typeof body.custom_data === 'object' && !Array.isArray(body.custom_data)) {
    const serialized = JSON.stringify(body.custom_data);
    if (serialized.length <= MAX_CUSTOM_DATA_BYTES) {
      customData = body.custom_data;
    }
  }

  const userData = {
    client_ip_address: req.ip,
    client_user_agent: req.get('user-agent') || undefined,
  };
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;
  // E-Mail und Telefon werden vor dem Senden an Meta per SHA-256 gehasht
  // (kleingeschrieben, ohne Leerzeichen).
  const hashedEmail = hash(email);
  if (hashedEmail) userData.em = [hashedEmail];
  const hashedPhone = hash(phone && String(phone).replace(/[^0-9]/g, ''));
  if (hashedPhone) userData.ph = [hashedPhone];

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId || undefined,
        event_source_url: eventSourceUrl || undefined,
        action_source: 'website',
        user_data: userData,
        custom_data: customData || undefined,
      },
    ],
  };
  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  const url = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Meta CAPI request failed: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  res.json(result);
};
