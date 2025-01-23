import { sendGAEvent } from "@next/third-parties/google";

const trackEvent = (label = "label") => {
  sendGAEvent({ event: label });
};

export default trackEvent;
