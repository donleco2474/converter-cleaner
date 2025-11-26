import { useEffect } from "react";
import { TRACKING_CONFIG } from "@/lib/tracking";

const TrackingScripts = () => {
  useEffect(() => {
    // Google Analytics 4
    if (TRACKING_CONFIG.googleAnalytics.enabled) {
      // Load gtag script
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_CONFIG.googleAnalytics.measurementId}`;
      document.head.appendChild(gtagScript);

      // Initialize gtag
      const gtagInit = document.createElement("script");
      gtagInit.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${TRACKING_CONFIG.googleAnalytics.measurementId}', {
          page_title: 'CleanMax Pro - Catalytic Converter Cleaner',
          custom_map: {'custom_parameter': 'automotive_cleaner'}
        });
      `;
      document.head.appendChild(gtagInit);

      console.log(
        "Google Analytics loaded:",
        TRACKING_CONFIG.googleAnalytics.measurementId,
      );
    }

    // Facebook Pixel
    if (TRACKING_CONFIG.facebookPixel.enabled) {
      const fbScript = document.createElement("script");
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        fbq('init', '${TRACKING_CONFIG.facebookPixel.pixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);

      // Add noscript fallback
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `
        <img height="1" width="1" style="display:none"
             src="https://www.facebook.com/tr?id=${TRACKING_CONFIG.facebookPixel.pixelId}&ev=PageView&noscript=1"/>
      `;
      document.head.appendChild(noscript);

      console.log(
        "Facebook Pixel loaded:",
        TRACKING_CONFIG.facebookPixel.pixelId,
      );
    }

    // Google Ads (included with gtag if Google Ads is enabled)
    if (
      TRACKING_CONFIG.googleAds.enabled &&
      TRACKING_CONFIG.googleAnalytics.enabled
    ) {
      // Google Ads conversion tracking is handled through gtag
      console.log("Google Ads conversion tracking enabled");
    }

    // TikTok Pixel
    if (TRACKING_CONFIG.tiktokPixel.enabled) {
      const ttqScript = document.createElement("script");
      ttqScript.innerHTML = `
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["pageview","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<e.length;n++)e[n]&&e[n].apply(null,arguments)};for(var o=ttq.instances={},a=0;a<1;a++){var s="instance"+a;ttq.setAndDefer(o,s),o[s]=function(t){return ttq.instance(t)}}
        }(window, document, 'ttq');
        ttq.track('PageView');
        ttq.instance("${TRACKING_CONFIG.tiktokPixel.pixelId}");
      `;
      document.head.appendChild(ttqScript);

      console.log("TikTok Pixel loaded:", TRACKING_CONFIG.tiktokPixel.pixelId);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default TrackingScripts;
