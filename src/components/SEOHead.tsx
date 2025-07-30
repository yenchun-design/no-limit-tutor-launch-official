
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
}

const SEOHead = ({
  title = "台灣線上家教平台 | No Limit Tutor 教師學生招募中",
  description = "NLT 是台灣全新線上一對一家教平台，提供無抽成、彈性排課的教學空間。現正招募元老級教師與早鳥學生，免費加入，搶先體驗！",
  keywords = "台灣線上家教平台,線上家教,家教工作,教師學生招募,一對一家教,視訊教學,家教媒合,無抽成家教",
  url = "https://join.nolimittutor.com/",
  image = "https://lovable.dev/lovable-uploads/3a04511e-76e1-4dd5-95cc-61798d6a055b.png",
  type = "website"
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="No Limit Tutor" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="420" />
      <meta property="og:site_name" content="No Limit Tutor 無限家教" />
      <meta property="og:locale" content="zh_TW" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@nolimittutor" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
    </Helmet>
  );
};

export default SEOHead;
