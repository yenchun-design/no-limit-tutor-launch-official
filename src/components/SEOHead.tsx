
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.nolimittutor.com/#organization",
        "name": "No Limit Tutor 無限家教",
        "alternateName": ["NLT", "無限家教", "No Limit Tutor"],
        "url": "https://www.nolimittutor.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lovable.dev/lovable-uploads/3a04511e-76e1-4dd5-95cc-61798d6a055b.png",
          "width": 800,
          "height": 420
        },
        "description": "台灣首個民主、群眾導向的線上一對一家教平台",
        "foundingDate": "2025",
        "foundingLocation": {
          "@type": "Place",
          "name": "台灣"
        },
        "areaServed": {
          "@type": "Place",
          "name": "台灣"
        },
        "serviceArea": {
          "@type": "Place",
          "name": "台灣"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info.nolimittutor@gmail.com",
          "contactType": "customer support",
          "availableLanguage": ["zh-TW", "zh-CN"]
        },
        "sameAs": [
          "https://www.facebook.com/nolimittutor",
          "https://www.instagram.com/no_limit_tutor/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nolimittutor.com/#website",
        "url": "https://www.nolimittutor.com",
        "name": "No Limit Tutor 無限家教",
        "description": description,
        "publisher": {
          "@id": "https://www.nolimittutor.com/#organization"
        },
        "inLanguage": "zh-TW",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.nolimittutor.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "線上家教服務",
        "description": "提供一對一線上家教媒合服務，無抽成制度",
        "provider": {
          "@id": "https://www.nolimittutor.com/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "台灣"
        },
        "serviceType": "教育服務",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "TWD",
          "description": "目前招募階段完全免費"
        }
      }
    ]
  };

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
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional structured data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "No Limit Tutor 是什麼？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No Limit Tutor 是台灣首個民主、群眾導向的線上一對一家教平台。我們不從教師收入抽成，保障服務費由學生端負擔，讓教學更自由、收費更公平。平台提供視訊教學、師資媒合、彈性預約等完整服務。"
              }
            },
            {
              "@type": "Question",
              "name": "使用 No Limit Tutor 要收費嗎？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "目前招募階段完全免費！我們正在招募首批元老級教師與早鳥學生。教師註冊免費且無抽成，學生可享試教課 50% 折扣，不滿意可全額退費。平台正式營運後僅收取合理的保障服務費。"
              }
            },
            {
              "@type": "Question",
              "name": "如何成為 No Limit Tutor 的教師？",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "目前開放元老級教師招募，完全免費加入。您可以填寫教師申請表單，我們將在平台上線時優先通知您註冊。教師可自由設定課程價格，平台不收取任何抽成費用。"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
