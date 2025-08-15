// Tracking Configuration for CleanMax Pro
// Add your tracking IDs here when ready to deploy

export const TRACKING_CONFIG = {
  // Google Analytics 4 (GA4)
  googleAnalytics: {
    measurementId: "G-XXXXXXXXXX", // Replace with your GA4 Measurement ID
    enabled: false, // Set to true when you add your tracking ID
  },

  // Google Ads Conversion Tracking
  googleAds: {
    conversionId: "AW-XXXXXXXXXX", // Replace with your Google Ads Conversion ID
    conversionLabel: "XXXXXXXXXXXX", // Replace with your conversion label
    enabled: false, // Set to true when you add your tracking IDs
  },

  // Facebook Pixel
  facebookPixel: {
    pixelId: "470683655547090", // Replace with your Facebook Pixel ID
    enabled: true, // Set to true when you add your pixel ID
  },
};

// Google Analytics 4 Functions
export const gtag = (...args: any[]) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (TRACKING_CONFIG.googleAnalytics.enabled) {
    gtag("config", TRACKING_CONFIG.googleAnalytics.measurementId, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters: Record<string, any> = {},
) => {
  // Google Analytics
  if (TRACKING_CONFIG.googleAnalytics.enabled) {
    gtag("event", eventName, parameters);
  }

  // Facebook Pixel
  if (
    TRACKING_CONFIG.facebookPixel.enabled &&
    typeof window !== "undefined" &&
    (window as any).fbq
  ) {
    (window as any).fbq("track", eventName, parameters);
  }
};

// Track order/conversion events
export const trackOrderSubmission = (orderData: {
  value: number;
  currency: string;
  packageType: string;
  customerName: string;
}) => {
  const eventData = {
    value: orderData.value,
    currency: orderData.currency,
    content_name: orderData.packageType,
    content_category: "automotive_cleaner",
  };

  // Google Analytics Purchase Event
  if (TRACKING_CONFIG.googleAnalytics.enabled) {
    gtag("event", "purchase", {
      transaction_id: `order_${Date.now()}`,
      value: orderData.value,
      currency: orderData.currency,
      items: [
        {
          item_id: orderData.packageType.toLowerCase().replace(/\s+/g, "_"),
          item_name: orderData.packageType,
          category: "automotive_cleaner",
          price: orderData.value,
          quantity: 1,
        },
      ],
    });
  }

  // Google Ads Conversion
  if (TRACKING_CONFIG.googleAds.enabled) {
    gtag("event", "conversion", {
      send_to: `${TRACKING_CONFIG.googleAds.conversionId}/${TRACKING_CONFIG.googleAds.conversionLabel}`,
      value: orderData.value,
      currency: orderData.currency,
    });
  }

  // Facebook Pixel Purchase Event
  if (
    TRACKING_CONFIG.facebookPixel.enabled &&
    typeof window !== "undefined" &&
    (window as any).fbq
  ) {
    (window as any).fbq("track", "Purchase", eventData);
  }
};

// Track form interactions
export const trackFormStart = () => {
  trackEvent("begin_checkout", {
    content_category: "automotive_cleaner",
  });

  // Facebook specific InitiateCheckout event
  if (
    TRACKING_CONFIG.facebookPixel.enabled &&
    typeof window !== "undefined" &&
    (window as any).fbq
  ) {
    (window as any).fbq("track", "InitiateCheckout", {
      content_category: "automotive_cleaner",
      content_name: "CleanMax Pro Order Form",
    });
  }
};

export const trackFormStep = (step: string) => {
  trackEvent("checkout_progress", {
    checkout_step: step,
    content_category: "automotive_cleaner",
  });

  // Track package selection as AddToCart event
  if (step === "package_selected") {
    if (
      TRACKING_CONFIG.facebookPixel.enabled &&
      typeof window !== "undefined" &&
      (window as any).fbq
    ) {
      (window as any).fbq("track", "AddToCart", {
        content_category: "automotive_cleaner",
        content_name: "CleanMax Pro Package Selected",
      });
    }
  }
};

// Track video engagement
export const trackVideoPlay = () => {
  trackEvent("video_start", {
    video_title: "CleanMax Pro Product Demo",
    content_category: "product_video",
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("click", {
    button_name: buttonName,
    page_location: location,
  });
};

// Price mapping for conversion tracking
export const PACKAGE_PRICES = {
  "Basic Package (2 bottles)": 20500,
  "Complete Package (4 bottles)": 37000,
  "Premium Package (6 bottles)": 55500,
} as const;

// Helper function to get price from package name
export const getPriceFromPackage = (packageName: string): number => {
  return PACKAGE_PRICES[packageName as keyof typeof PACKAGE_PRICES] || 0;
};
