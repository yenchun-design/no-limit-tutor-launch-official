import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import nltLogo from "../assets/nlt-logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={nltLogo} alt="No Limit Tutor" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-foreground">No Limit Tutor</h1>
                <p className="text-sm text-muted-foreground">無限家教</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                返回首頁
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto p-8 shadow-elegant">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
              No Limit Tutor 隱私條款
            </h1>
            
            <div className="text-center mb-8 text-muted-foreground">
              <p><strong>最後更新日期：</strong>2025年5月10日</p>
              <p><strong>生效日期：</strong>2025年3月10日</p>
            </div>

            <div className="space-y-8">
              <section>
                <p className="text-lg leading-relaxed text-foreground">
                  歡迎您使用由睿思博遠有限公司（下稱「本公司」或「我們」）所經營之「No Limit Tutor」線上一對一視訊教學暨媒合平台（下稱「本平台」或「本服務」）。本公司非常重視您的隱私權及個人資料保護，為遵循中華民國《個人資料保護法》（下稱「個資法」）及相關法令規定，特制訂本隱私權政策（下稱「本政策」），旨在向您說明本平台如何蒐集、處理、利用及保護您的個人資料，以及您依法所得行使之權利。
                </p>
                <p className="text-lg leading-relaxed text-foreground mt-4">
                  請您於註冊成為本平台會員（包含學生會員及教師會員）、造訪本平台網域與子網域，或使用本服務前，詳細閱讀並充分理解本政策之所有內容。若您開始使用本服務或在本政策更新後繼續使用，即視為您或您的法定代理人（或監護人）已閱讀、瞭解並同意接受本政策及其後任何修改變更之所有內容。
                </p>
                <p className="text-lg leading-relaxed text-foreground mt-4">
                  若您不同意本政策之任何內容或其後之修改變更，請您立即停止使用本服務。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">一、適用範圍</h2>
                <p className="text-lg leading-relaxed text-foreground">
                  本政策適用於您因使用本平台網站（網址：www.nolimittutor.com）與子網域、未來可能開發之行動應用程式（App）及其他由本公司提供之相關服務時，所涉及之個人資料蒐集、處理、利用與保護。
                </p>
                <p className="text-lg leading-relaxed text-foreground mt-4">
                  本政策不適用於本平台以外的第三方獨立網站或服務。若您透過本平台連結至第三方網站（例如：教師個人YouTube頻道、綠界科技金流支付頁面、Google/Facebook登入驗證頁面）或使用其服務，該等網站或服務有其各自獨立之隱私權政策或使用者條款，應由各該第三方對其行為負責，與本平台無涉。建議您於提供個人資料前，先行閱覽該等第三方之隱私權政策。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">二、個人資料之蒐集類別</h2>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  為提供並優化本服務，本平台將於您使用各項功能時，基於特定目的並在必要範圍內，向您蒐集下列類別之個人資料：
                </p>
                
                <div className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">C001 辨識個人者</h3>
                    <p className="text-foreground">如姓名、電子郵件地址、手機號碼（選填）、社群帳號資訊（若您選擇使用Google、Facebook等第三方帳號註冊或登入本服務時，由該第三方平台提供之公開資訊或您授權提供之資訊）、本平台帳號及密碼、照片（使用者自願提供之大頭照）。</p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">C002 辨識財務者</h3>
                    <ul className="text-foreground space-y-2">
                      <li><strong>學生會員：</strong> 信用卡資訊（包含卡號、有效期限、安全碼，此部分主要由合作之金流服務業者「綠界科技股份有限公司」在其安全環境下蒐集與處理，本平台原則上不直接儲存您完整的支付工具敏感資訊，僅可能儲存經遮蔽後的部分卡號或交易識別碼供對帳及客服使用）。</li>
                      <li><strong>教師會員：</strong> 用以接收款項之銀行帳戶資訊（如銀行名稱、分行、帳號、戶名，供收益提領使用）。</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Continue with other sections... */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">三、個人資料蒐集、處理及利用之特定目的</h2>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  本平台蒐集、處理及利用您的個人資料，係基於下列特定目的：
                </p>
                <ul className="text-foreground space-y-2 list-disc list-inside">
                  <li>040 行銷 (例如：本平台服務推廣、新進教師優惠、學生優惠、行銷Promo Code發送與核銷，將於取得您同意後進行)。</li>
                  <li>052 法人對會員名冊之內部管理 (例如：學生及教師會員帳戶建立、維護與管理)。</li>
                  <li>063 非公務機關依法定義務所進行個人資料之蒐集處理及利用 (例如：配合司法機關調查、稅務申報)。</li>
                  <li>069 契約、類似契約或其他法律關係事務 (例如：履行本平台服務條款、課程預約與授課、試教課安排、款項支付與收取、平台抽成計算與執行)。</li>
                  <li>090 消費者、客戶管理與服務 (例如：教師篩選與媒合、課程排程、評價系統管理、客服支援、爭議協調處理、No-Show處理、退款作業)。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">四、當事人權利</h2>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  依據個資法第三條規定，您就本公司所保有您的個人資料，得向本公司行使以下權利：
                </p>
                <ul className="text-foreground space-y-2 list-disc list-inside">
                  <li>查詢或請求閱覽您的個人資料。</li>
                  <li>請求製給您個人資料之複製本。</li>
                  <li>請求補充或更正您的個人資料（惟依法您應為適當之釋明）。</li>
                  <li>請求停止蒐集、處理或利用您的個人資料。</li>
                  <li>請求刪除您的個人資料。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">十三、聯絡我們</h2>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <p className="text-lg leading-relaxed text-foreground mb-4">
                    若您對於本隱私權政策或任何與個人資料保護相關之事宜有任何需要協助之處，歡迎隨時透過以下方式與本公司聯繫：
                  </p>
                  <ul className="text-foreground space-y-2">
                    <li><strong>公司名稱：</strong>睿思博遠有限公司</li>
                    <li><strong>統一編號：</strong>00205513</li>
                    <li><strong>網站服務：</strong>No Limit Tutor 無限家教</li>
                    <li><strong>客服電子郵件：</strong>info.nolimittutor@gmail.com</li>
                    <li><strong>公司登記地址：</strong>324 桃園市平鎮區平東路一段183號</li>
                  </ul>
                  <p className="text-lg leading-relaxed text-foreground mt-4">
                    本公司客服人員將儘速處理您的請求或疑問。
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;