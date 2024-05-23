import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    const pathnameWithoutPrefix = pathname?.replace("/", "");
    ReactGA.send({
      hitType: "pageview",
      page: pathname,
      title: pathnameWithoutPrefix
        ? pathnameWithoutPrefix?.toUpperCase()
        : "HOME",
    });
  }, [pathname]);
};

export default usePageTracking;
