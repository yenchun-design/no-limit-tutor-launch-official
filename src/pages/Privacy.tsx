
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-2xl font-black text-black">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-black uppercase tracking-tight">No Limit Tutor</span>
              <span className="text-sm text-amber-600 font-black">無限家教</span>
            </div>
          </div>
          
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
            className="border-4 border-black bg-white hover:bg-gray-100 text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            返回首頁
          </Button>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-6 border-black px-8 py-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8 inline-block transform rotate-1">
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-wide">No Limit Tutor 隱私條款</h1>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-4">
              <p className="text-lg text-black font-bold">
                最後更新日期：2025年5月10日
              </p>
              <p className="text-lg text-black font-bold">
                生效日期：2025年3月10日
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-base text-black font-bold leading-relaxed">
                歡迎您使用由睿思博遠有限公司（下稱「本公司」或「我們」）所經營之「No Limit Tutor」線上一對一視訊教學暨媒合平台（下稱「本平台」或「本服務」）。本公司非常重視您的隱私權及個人資料保護，為遵循中華民國《個人資料保護法》（下稱「個資法」）及相關法令規定，特制訂本隱私權政策（下稱「本政策」），旨在向您說明本平台如何蒐集、處理、利用及保護您的個人資料，以及您依法所得行使之權利。
              </p>
              <br />
              <p className="text-base text-black font-bold leading-relaxed">
                請您於註冊成為本平台會員（包含學生會員及教師會員）、造訪本平台網域與子網域，或使用本服務前，詳細閱讀並充分理解本政策之所有內容。若您開始使用本服務或在本政策更新後繼續使用，即視為您或您的法定代理人（或監護人）已閱讀、瞭解並同意接受本政策及其後任何修改變更之所有內容。
              </p>
              <br />
              <p className="text-base text-black font-bold leading-relaxed">
                若您不同意本政策之任何內容或其後之修改變更，請您立即停止使用本服務。
              </p>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-amber-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                一、適用範圍
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>
                  本政策適用於您因使用本平台網站（網址：www.nolimittutor.com）與子網域、未來可能開發之行動應用程式（App）及其他由本公司提供之相關服務時，所涉及之個人資料蒐集、處理、利用與保護。
                </p>
                <p>
                  本政策不適用於本平台以外的第三方獨立網站或服務。若您透過本平台連結至第三方網站（例如：教師個人YouTube頻道、綠界科技金流支付頁面、Google/Facebook登入驗證頁面）或使用其服務，該等網站或服務有其各自獨立之隱私權政策或使用者條款，應由各該第三方對其行為負責，與本平台無涉。建議您於提供個人資料前，先行閱覽該等第三方之隱私權政策。
                </p>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-blue-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                二、個人資料之蒐集類別
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>
                  為提供並優化本服務，本平台將於您使用各項功能時，基於特定目的並在必要範圍內，向您蒐集下列類別之個人資料：
                </p>
                
                <div className="bg-orange-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-lg mb-3">C001 辨識個人者</h3>
                  <p>如姓名、電子郵件地址、手機號碼（選填）、社群帳號資訊（若您選擇使用Google、Facebook等第三方帳號註冊或登入本服務時，由該第三方平台提供之公開資訊或您授權提供之資訊）、本平台帳號及密碼、照片（使用者自願提供之大頭照）。</p>
                </div>

                <div className="bg-green-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-lg mb-3">C002 辨識財務者</h3>
                  <p><strong>學生會員：</strong> 信用卡資訊（包含卡號、有效期限、安全碼，此部分主要由合作之金流服務業者「綠界科技股份有限公司」在其安全環境下蒐集與處理，本平台原則上不直接儲存您完整的支付工具敏感資訊，僅可能儲存經遮蔽後的部分卡號或交易識別碼供對帳及客服使用）。</p>
                  <p><strong>教師會員：</strong> 用以接收款項之銀行帳戶資訊（如銀行名稱、分行、帳號、戶名，供收益提領使用）。</p>
                </div>

                <div className="bg-yellow-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-black text-lg mb-3">其他類別資料</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• C003 政府資料中之辨識者（如身分證字號，特定情況下需要）</li>
                    <li>• C011 個人描述（性別、出生年月日、國籍、居住地）</li>
                    <li>• C034 旅行及其他遷徙細節（教師所在地）</li>
                    <li>• C035 休閒活動及興趣（學習目標、課程領域）</li>
                    <li>• C036 生活格調（可授課或上課時段偏好）</li>
                    <li>• C038 職業（教學經驗、現職）</li>
                    <li>• C052 資格或技術（學經歷背景、專業證照）</li>
                    <li>• C132 未分類之資料（帳戶設定、服務使用紀錄、交易紀錄、技術性資料等）</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-green-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                三、個人資料蒐集、處理及利用之特定目的
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>本平台蒐集、處理及利用您的個人資料，係基於下列特定目的：</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <ul className="text-sm space-y-1">
                      <li>• 040 行銷</li>
                      <li>• 052 法人對會員名冊之內部管理</li>
                      <li>• 063 依法定義務進行個人資料處理</li>
                      <li>• 067 信用卡等金融業務</li>
                      <li>• 069 契約或法律關係事務</li>
                      <li>• 090 消費者、客戶管理與服務</li>
                      <li>• 091 消費者保護</li>
                      <li>• 098 商業與技術資訊</li>
                    </ul>
                  </div>
                  <div className="bg-pink-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <ul className="text-sm space-y-1">
                      <li>• 107 採購與供應管理</li>
                      <li>• 129 會計與相關服務</li>
                      <li>• 135 資(通)訊服務</li>
                      <li>• 136 資(通)訊與資料庫管理</li>
                      <li>• 137 資通安全與管理</li>
                      <li>• 148 網路購物及電子商務服務</li>
                      <li>• 152 廣告或商業行為管理</li>
                      <li>• 157 調查、統計與研究分析</li>
                      <li>• 176 其他正當目的</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-orange-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                四、個人資料利用之期間、地區、對象及方式
              </h2>
              <div className="space-y-6 text-base text-black font-bold leading-relaxed">
                <div>
                  <h3 className="font-black text-lg mb-3 bg-yellow-200 border-2 border-black p-2 inline-block">期間</h3>
                  <p>本平台將於前述特定目的存續期間、本服務營運期間、相關法令規定之保存期限、因執行業務所必須之保存期間內，或您與本公司契約關係存續期間內，處理及利用您的個人資料。</p>
                </div>

                <div>
                  <h3 className="font-black text-lg mb-3 bg-yellow-200 border-2 border-black p-2 inline-block">對象</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• 本公司內部人員（僅於執行業務必要範圍內）</li>
                    <li>• 使用者之間（教師與學生資料互相瀏覽）</li>
                    <li>• 第三方服務供應商（金流、雲端、通訊等服務商）</li>
                    <li>• 政府機關或司法單位（法令規定時）</li>
                    <li>• 權益保護（防止詐欺、維護安全時）</li>
                    <li>• 經您同意之其他對象</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-black text-lg mb-3 bg-yellow-200 border-2 border-black p-2 inline-block">方式</h3>
                  <p>以自動化機器或非自動化方式蒐集、處理、國際傳輸及利用您的個人資料，包含書面或電子形式。利用方式包括但不限於：會員註冊驗證、教師檔案建立與展示、課程搜尋與媒合、線上視訊教學、款項支付與收取、發送服務通知、使用者評價管理、客戶服務、爭議處理、數據統計與分析等。</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-pink-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                五、當事人權利
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>依據個資法第三條規定，您就本公司所保有您的個人資料，得向本公司行使以下權利：</p>
                <div className="bg-amber-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <ul className="space-y-2">
                    <li>• 查詢或請求閱覽您的個人資料</li>
                    <li>• 請求製給您個人資料之複製本</li>
                    <li>• 請求補充或更正您的個人資料</li>
                    <li>• 請求停止蒐集、處理或利用您的個人資料</li>
                    <li>• 請求刪除您的個人資料</li>
                  </ul>
                </div>
                <p>您可透過本政策第十三條所載之聯絡方式提出請求。本公司將於收到您的請求及確認身分後，於法定期間內處理。</p>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-purple-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                六、Cookie 及類似技術之使用
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>為了提供您更便利、個人化及順暢的服務體驗，本平台網站及行動應用程式可能會使用Cookie及類似技術。</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black mb-2">必要性Cookie</h4>
                    <p className="text-sm">確保網站基本功能運作</p>
                  </div>
                  <div className="bg-green-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black mb-2">功能性Cookie</h4>
                    <p className="text-sm">記住您的偏好設定</p>
                  </div>
                  <div className="bg-yellow-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black mb-2">效能/分析性Cookie</h4>
                    <p className="text-sm">蒐集匿名統計數據</p>
                  </div>
                  <div className="bg-pink-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black mb-2">目標/廣告性Cookie</h4>
                    <p className="text-sm">提供相關廣告內容</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-red-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                七、資料安全與保護措施
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>本公司致力於採取合理且適當之技術性及組織性安全措施，以保護您的個人資料免於未經授權之存取、洩漏、竄改、毀損或滅失。</p>
                <p>這些措施包括：資料傳輸加密（SSL/TLS）、資料庫存取控制、防火牆、定期安全漏洞掃描、內部人員權限控管及保密協定簽署等。請您務必妥善保管您的帳號、密碼，於使用完畢後登出帳戶。</p>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-teal-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                八、試教課、課程訂閱與平台費用
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <div className="bg-orange-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black mb-2">試教課</h4>
                  <p>25分鐘試教課程相關預約、進行及回饋資料將被蒐集與保存。</p>
                </div>
                <div className="bg-blue-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black mb-2">課程訂閱</h4>
                  <p>每月4、8、12、16堂課程之方案選擇、付款紀錄、自動續訂狀態等資料將被處理。</p>
                </div>
                <div className="bg-green-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black mb-2">平台費用</h4>
                  <p>學生支付課程費用已內含平台服務費，教師設定之鐘點費即為教師稅前所得。</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-indigo-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                九、課程認證與檢舉機制
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>課程結束後的確認結果、學生評價、回報與檢舉內容將被記錄，作為課程完成、爭議處理、退款判斷或改善服務之依據。所有檢舉內容將提報至平台客服系統進行後續處理。</p>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-cyan-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                十、未成年人保護
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>本平台主要服務對象為依法得為完全法律行為之成年人。未成年人使用本平台服務時，應由其法定代理人代為註冊、陪同監督。</p>
                <p>平台僅提供資訊中介與技術支持，無法逐一審查使用者真實年齡。家長應負監督責任，如發現未成年人未經同意使用本平台，應立即通知本公司採取適當處置。</p>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-lime-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                十一、隱私權政策之修訂
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>本公司將因應業務需求、技術發展及法令變遷，不定時修訂本政策。當本政策有任何重大修改時，將以電子郵件通知您。建議您隨時留意本政策之最新版本。</p>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-rose-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                十二、準據法與管轄法院
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>本隱私權政策之解釋與適用，以及相關爭議，雙方同意以中華民國法律為準據法，並以臺灣臺北地方法院為第一審專屬管轄法院。</p>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-violet-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                十三、聯絡我們
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>若您對於本隱私權政策或個人資料保護相關事宜有任何需要協助之處，歡迎透過以下方式與本公司聯繫：</p>
                <div className="bg-amber-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="space-y-3">
                    <p><strong>公司名稱：</strong>睿思博遠有限公司</p>
                    <p><strong>統一編號：</strong>00205513</p>
                    <p><strong>網站服務：</strong>No Limit Tutor 無限家教</p>
                    <p><strong>客服電子郵件：</strong>info.nolimittutor@gmail.com</p>
                    <p><strong>公司登記地址：</strong>324 桃園市平鎮區平東路一段183號</p>
                  </div>
                </div>
                <p>本公司客服人員將儘速處理您的請求或疑問。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                <span className="text-2xl font-black text-black">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white uppercase tracking-tight">No Limit Tutor</span>
                <span className="text-sm text-amber-400 font-black">無限家教</span>
              </div>
            </div>
            
            <div className="text-left flex-1 max-w-2xl">
              <div className="mb-6">
                <p className="text-3xl font-black text-white mb-4">No Limit Tutor</p>
                <p className="text-white text-lg font-bold">
                  突破規則，知識無限 -<br />
                  讓每個人都能享受優質、民主、自在的一對一教學
                </p>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                © 2025 No Limit Tutor. All rights reserved.<br />
                No Limit Tutor 無限家教為睿思博遠有限公司註冊之商標
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
