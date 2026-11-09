import { 
  trackPageView, 
  trackEvent, 
  trackConversion, 
  trackUserEngagement 
} from '@/lib/googleAnalytics.js';

export const useGoogleAnalytics = () => {
  return {
    trackPageView,
    trackEvent,
    trackConversion,
    trackUserEngagement
  };
};

export default useGoogleAnalytics;