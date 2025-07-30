import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - No Limit Tutor",
    "description": "Privacy policy for No Limit Tutor tutoring platform",
    "url": "https://join.nolimittutor.com/privacy"
  };

  return (
    <>
      <SEOHead 
        title="Privacy Policy - No Limit Tutor"
        description="Learn how No Limit Tutor protects your personal information and data privacy."
        canonical="https://join.nolimittutor.com/privacy"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700">
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our services, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700">
                We use the information we collect to provide, maintain, and improve our tutoring services, 
                communicate with you, and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at privacy@nolimittutor.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
