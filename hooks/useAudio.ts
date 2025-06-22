export const initializeAudio = () => {
  if (typeof Audio !== "undefined") {
    return new Audio("https://res.cloudinary.com/dgzdswdgg/video/upload/v1750576281/sakura_x24gbd.mp3");
  }
  return undefined;
};
