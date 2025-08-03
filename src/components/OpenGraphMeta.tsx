
import { useEffect } from 'react';

interface OpenGraphMetaProps {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName?: string;
  joinCount?: number;
}

const OpenGraphMeta = ({ 
  title, 
  description, 
  image, 
  url, 
  siteName = "NLT Community",
  joinCount 
}: OpenGraphMetaProps) => {
  useEffect(() => {
    // Update or create meta tags
    const metaTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteName },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { property: 'fb:app_id', content: 'YOUR_FB_APP_ID' }, // Replace with actual Facebook App ID if you have one
    ];

    // Add join count to description if provided
    if (joinCount) {
      const updatedDescription = `${description} ${joinCount} people have already joined!`;
      metaTags[1].content = updatedDescription;
      metaTags[7].content = updatedDescription;
    }

    metaTags.forEach(({ property, name, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector);
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) tag.setAttribute('property', property);
        if (name) tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    });
  }, [title, description, image, url, siteName, joinCount]);

  return null;
};

export default OpenGraphMeta;
