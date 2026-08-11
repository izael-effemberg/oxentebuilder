"use client";

export const trackEvent = (eventName: string, metadata?: Record<string, string>) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...metadata
  });

  window.gtag?.("event", eventName, metadata);
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}
