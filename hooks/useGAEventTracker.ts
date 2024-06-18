import { sendGAEvent } from '@next/third-parties/google';

const useGAEventTracker = () => {
  const trackEvent = (label = 'label') => {
    sendGAEvent({event: label })
  };

  return trackEvent;
};

export default useGAEventTracker;