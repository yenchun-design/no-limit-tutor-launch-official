
import { useEffect } from 'react';

interface OpenGraphMetaProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  joinCount?: number;
}

const OpenGraphMeta = ({ title, description, image, url, joinCount }: OpenGraphMetaProps) => {
  useEffect(() => {
    // Remove existing OG tags
    const existingOGTags = document.querySelectorAll('meta[property^="og:"], meta[name="twitter:"]');
    existingOGTags.forEach(tag => tag.remove());

    // Create dynamic description with join count
    const dynamicDescription = joinCount 
      ? `${description} 已有 ${joinCount.toLocaleString()} 人加入！`
      : description;

    // Create new meta tags
    const metaTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: dynamicDescription },
      { property: 'og:image', content: `${window.location.origin}${image}` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: url || window.location.href },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'No Limit Tutor' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: dynamicDescription },
      { name: 'twitter:image', content: `${window.location.origin}${image}` },
    ];

    metaTags.forEach(({ property, name, content }) => {
      const meta = document.createElement('meta');
      if (property) meta.setAttribute('property', property);
      if (name) meta.setAttribute('name', name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });

    return () => {
      // Cleanup on unmount
      const tags = document.querySelectorAll('meta[property^="og:"], meta[name="twitter:"]');
      tags.forEach(tag => tag.remove());
    };
  }, [title, description, image, url, joinCount]);

  return null; // This component doesn't render anything
};

export default OpenGraphMeta;
