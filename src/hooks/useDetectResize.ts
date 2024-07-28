import { useCallback, useEffect, useState } from "react";

interface Dimension {
  w: number;
  h: number;
}

interface WindowMedia {
  isMobile: boolean;
  isDesktop: boolean;
  windowDimension: Dimension;
}

//upper limit (BP) for each device. based off Bootstrap breakpoints
const mobileBP = 768; //sm
const laptopBP = 1200; //lg

const isTouchScreenDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

const defaultWindowMedia: WindowMedia = {
  isMobile: isTouchScreenDevice() ? true : false,
  isDesktop: !isTouchScreenDevice() ? true : false,
  windowDimension: { w: 0, h: 0 },
};

const useDetectResize = () => {
  const [windowInfo, setWindowInfo] = useState<WindowMedia>(defaultWindowMedia);
  let timeout = false;

  //register callback so our function isn't instantiated on each re-render.
  const handleWindowResize = useCallback((timeout: any) => {
    // clear the timeout
    clearTimeout(timeout);
    // debounce getDimensions function ever N ms
    timeout = setTimeout(getDimensions, 1000);

    //store width/height and mediaState
    function getDimensions() {
      const dimension: Dimension = {
        w: window.innerWidth,
        h: window.innerHeight,
      };

      const windowMedia: WindowMedia = {
        isMobile: window.innerWidth <= mobileBP ? true : false,
        isDesktop: window.innerWidth > laptopBP ? true : false,
        windowDimension: dimension,
      };

      setWindowInfo(windowMedia);
    }
  }, []);

  useEffect(() => {
    // window.resize event listener will call handleWindowResize() whenever screen width is adjusted.
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowInfo;
};

export default useDetectResize;
