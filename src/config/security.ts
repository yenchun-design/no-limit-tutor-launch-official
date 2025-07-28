
/**
 * Security configuration and constants
 * This file documents the security measures implemented in the application
 */

export const SECURITY_CONFIG = {
  // Content Security Policy settings
  CSP: {
    defaultSrc: "'self'",
    scriptSrc: "'self' 'unsafe-inline' 'unsafe-eval'",
    styleSrc: "'self' 'unsafe-inline'",
    imgSrc: "'self' data: https:",
    fontSrc: "'self' data:",
    connectSrc: "'self' https:",
    frameAncestors: "'none'",
    baseUri: "'self'",
    formAction: "'self' https://docs.google.com"
  },

  // Allowed external domains for future use
  ALLOWED_DOMAINS: [
    'docs.google.com',
    'lovable.dev',
    'www.facebook.com',
    'www.instagram.com'
  ],

  // Security headers
  HEADERS: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=(), vibrate=(), fullscreen=(self)'
  }
};

// Security utility functions
export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return SECURITY_CONFIG.ALLOWED_DOMAINS.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
};
