export const initializeAudio = () => {
  if (typeof Audio !== "undefined") {
    return new Audio("/audio/sakura.mp3");
  }
  return undefined;
};
