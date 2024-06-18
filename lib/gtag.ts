
export const GA_TRACKING_ID = 'G-R2SSW6FQ6V';
export const GTM_TRACKING_ID = 'GTM-KSW24XS4';
// Function to send pageview events
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};