
import { Helmet } from 'react-helmet-async';

const GoogleVerification = () => {
  return (
    <Helmet>
      {/* Add your verification codes here when you get them from search engines */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
      {/* <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" /> */}
    </Helmet>
  );
};

export default GoogleVerification;
