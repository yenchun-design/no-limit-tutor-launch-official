import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "隱私權政策 - No Limit Tutor",
    "description": "No Limit Tutor 隱私權政策，了解我們如何收集、使用和保護您的個人資料",
    "url": "https://join.nolimittutor.com/privacy"
  };

  return (
    <>
      <SEOHead
        title="隱私權政策 - No Limit Tutor | 台灣線上家教平台"
        description="No Limit Tutor 隱私權政策，了解我們如何收集、使用和保護您的個人資料，確保您的隱私安全"
        keywords="隱私權政策,個人資料保護,No Limit Tutor,線上家教平台"
        canonicalUrl="https://join.nolimittutor.com/privacy"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">隱私權政策</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                最後更新日期：2025年1月30日
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. 政策概述</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No Limit Tutor（以下簡稱「我們」、「本平台」）重視您的隱私權。本隱私權政策說明我們如何收集、使用、儲存和保護您的個人資料。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  使用本平台服務即表示您同意本隱私權政策的內容。如果您不同意本政策，請勿使用我們的服務。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. 資料收集</h2>
                <p className="text-gray-700 leading-relaxed mb-4">我們可能收集以下類型的個人資料：</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>基本資料：姓名、電子郵件地址、電話號碼</li>
                  <li>教學相關資料：學歷、教學經驗、專業領域</li>
                  <li>學習相關資料：學習需求、學習目標、課程紀錄</li>
                  <li>技術資料：IP地址、瀏覽器資訊、使用記錄</li>
                  <li>付款資料：交易紀錄（不包含完整信用卡號碼）</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. 資料使用目的</h2>
                <p className="text-gray-700 leading-relaxed mb-4">我們使用您的個人資料用於：</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>提供和維護我們的服務</li>
                  <li>處理您的註冊申請和帳戶管理</li>
                  <li>媒合教師和學生</li>
                  <li>處理付款和交易</li>
                  <li>發送重要通知和服務更新</li>
                  <li>改善我們的服務品質</li>
                  <li>防範詐欺和確保平台安全</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. 資料分享</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  我們不會出售您的個人資料。我們僅在以下情況分享您的資料：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>獲得您的明確同意</li>
                  <li>為提供服務所必需（如教師學生媒合）</li>
                  <li>遵守法律義務或法院命令</li>
                  <li>保護我們的權利、財產或安全</li>
                  <li>與可信的第三方服務提供商合作（如付款處理）</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. 資料安全</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  我們採用適當的技術和組織措施來保護您的個人資料：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>使用加密技術保護資料傳輸</li>
                  <li>實施存取控制和身份驗證</li>
                  <li>定期備份和安全監控</li>
                  <li>員工隱私培訓和保密協議</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. 您的權利</h2>
                <p className="text-gray-700 leading-relaxed mb-4">根據相關法律，您享有以下權利：</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>查詢您的個人資料</li>
                  <li>更正不正確的資料</li>
                  <li>要求刪除您的資料</li>
                  <li>限制資料處理</li>
                  <li>資料可攜權</li>
                  <li>反對資料處理</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  如需行使這些權利，請聯絡我們：info.nolimittutor@gmail.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Cookie 使用</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  我們使用 Cookie 和類似技術來改善您的使用體驗。Cookie 幫助我們：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>記住您的偏好設定</li>
                  <li>分析網站使用情況</li>
                  <li>提供個人化內容</li>
                  <li>確保網站安全</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  您可以透過瀏覽器設定管理 Cookie 偏好。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. 未成年人隱私</h2>
                <p className="text-gray-700 leading-relaxed">
                  我們的服務主要面向成年人。如果您未滿18歲，請在家長或監護人同意下使用我們的服務。
                  我們不會故意收集未滿13歲兒童的個人資料。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. 政策更新</h2>
                <p className="text-gray-700 leading-relaxed">
                  我們可能定期更新本隱私權政策。重大變更將透過網站公告或電子郵件通知您。
                  建議您定期查看本政策以了解最新資訊。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. 聯絡我們</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  如果您對本隱私權政策有任何問題或疑慮，請聯絡我們：
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>電子郵件：</strong> info.nolimittutor@gmail.com<br />
                    <strong>平台名稱：</strong> No Limit Tutor 無限家教<br />
                    <strong>地址：</strong> 台灣
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
