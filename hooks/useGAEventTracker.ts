import ReactGA from 'react-ga4';

interface GAEventProps{
  category: string
}
const useGAEventTracker = ({ category = 'General' }: GAEventProps) => {
  const trackEvent = (action = 'action', label = 'label') => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  return trackEvent;
};

export default useGAEventTracker;