
import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: object;
  canonicalUrl?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData,
  canonicalUrl
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    updateMetaTag('name', 'description', description);
    
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', ogTitle || title);
    updateMetaTag('property', 'og:description', ogDescription || description);
    updateMetaTag('property', 'og:url', canonicalUrl || window.location.href);
    
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
    }

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', ogTitle || title);
    updateMetaTag('name', 'twitter:description', ogDescription || description);
    
    if (ogImage) {
      updateMetaTag('name', 'twitter:image', ogImage);
    }

    // Add canonical link
    if (canonicalUrl) {
      updateCanonicalLink(canonicalUrl);
    }

    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, structuredData, canonicalUrl]);

  const updateMetaTag = (attribute: string, name: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  const updateCanonicalLink = (url: string) => {
    let element = document.querySelector('link[rel="canonical"]');
    if (element) {
      element.setAttribute('href', url);
    } else {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      element.setAttribute('href', url);
      document.head.appendChild(element);
    }
  };

  const addStructuredData = (data: object) => {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  return null;
};

export default SEOHead;
