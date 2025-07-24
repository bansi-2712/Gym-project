 import React, { useEffect, useRef } from 'react';

const GoogleReviews = () => {
  const widgetId = "4bedd72a-fa50-4a0f-bb8f-90e79a793b53"; // your actual widget ID
  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    // Load script only once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={widgetRef}
      className={`elfsight-app-${widgetId}`}
      data-elfsight-app-lazy
    ></div>
  );
};

export default GoogleReviews;
