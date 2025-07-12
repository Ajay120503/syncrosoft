import { useState, useEffect } from "react";

export const useIsWindows = () => {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    setIsWindows(platform.startsWith("win"));
  }, []);

  return isWindows;
};
