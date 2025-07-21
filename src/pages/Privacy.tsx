import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center">
              <img 
                src="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png" 
                alt="No Limit Tutor Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">No Limit Tutor</span>
              <span className="text-sm text-amber-600 font-medium">無限家教</span>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-700 hover:text-amber-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回首頁</span>
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border border-amber-200">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold text-center">No Limit Tutor 隱私條款</CardTitle>
              <div className="text-center text-amber-100">
                <p>最後更新日期：2025年5月10日</p>
                <p>生效日期：2025年3月10日</p>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  歡迎您使用由睿思博遠有限公司（下稱「本公司」或「我們」）所經營之「No Limit Tutor」線上一對一視訊教學暨媒合平台（下稱「本平台」或「本服務」）。本公司非常重視您的隱私權及個人資料保護，為遵循中華民國《個人資料保護法》（下稱「個資法」）及相關法令規定，特制訂本隱私權政策（下稱「本政策」），旨在向您說明本平台如何蒐集、處理、利用及保護您的個人資料，以及您依法所得行使之權利。
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  請您於註冊成為本平台會員（包含學生會員及教師會員）、造訪本平台網域與子網域，或使用本服務前，詳細閱讀並充分理解本政策之所有內容。若您開始使用本服務或在本政策更新後繼續使用，即視為您或您的法定代理人（或監護人）已閱讀、瞭解並同意接受本政策及其後任何修改變更之所有內容。
                </p>
                
                <p className="text-gray-700 leading-relaxed font-medium">
                  若您不同意本政策之任何內容或其後之修改變更，請您立即停止使用本服務。
                </p>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    一、適用範圍
                  </h2>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      本政策適用於您因使用本平台網站（網址：www.nolimittutor.com）與子網域、未來可能開發之行動應用程式（App）及其他由本公司提供之相關服務時，所涉及之個人資料蒐集、處理、利用與保護。
                    </p>
                    <p className="text-gray-700">
                      本政策不適用於本平台以外的第三方獨立網站或服務。若您透過本平台連結至第三方網站（例如：教師個人YouTube頻道、綠界科技金流支付頁面、Google/Facebook登入驗證頁面）或使用其服務，該等網站或服務有其各自獨立之隱私權政策或使用者條款，應由各該第三方對其行為負責，與本平台無涉。建議您於提供個人資料前，先行閱覽該等第三方之隱私權政策。
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    二、個人資料之蒐集類別
                  </h2>
                  <p className="text-gray-700 mb-4">
                    為提供並優化本服務，本平台將於您使用各項功能時，基於特定目的並在必要範圍內，向您蒐集下列類別之個人資料：
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-2">C001 辨識個人者</h3>
                      <p className="text-sm text-gray-700">
                        如姓名、電子郵件地址、手機號碼（選填）、社群帳號資訊（若您選擇使用Google、Facebook等第三方帳號註冊或登入本服務時，由該第三方平台提供之公開資訊或您授權提供之資訊）、本平台帳號及密碼、照片（使用者自願提供之大頭照）。
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-bold text-green-800 mb-2">C002 辨識財務者</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>學生會員：</strong> 信用卡資訊（包含卡號、有效期限、安全碼，此部分主要由合作之金流服務業者「綠界科技股份有限公司」在其安全環境下蒐集與處理，本平台原則上不直接儲存您完整的支付工具敏感資訊，僅可能儲存經遮蔽後的部分卡號或交易識別碼供對帳及客服使用）。
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>教師會員：</strong> 用以接收款項之銀行帳戶資訊（如銀行名稱、分行、帳號、戶名，供收益提領使用）。
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-bold text-purple-800 mb-2">其他類別資料</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
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
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    三、個人資料蒐集、處理及利用之特定目的
                  </h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">本平台蒐集、處理及利用您的個人資料，係基於下列特定目的：</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>• 040 行銷</div>
                      <div>• 052 法人對會員名冊之內部管理</div>
                      <div>• 063 依法定義務進行個人資料處理</div>
                      <div>• 067 信用卡等金融業務</div>
                      <div>• 069 契約或法律關係事務</div>
                      <div>• 090 消費者、客戶管理與服務</div>
                      <div>• 091 消費者保護</div>
                      <div>• 098 商業與技術資訊</div>
                      <div>• 107 採購與供應管理</div>
                      <div>• 129 會計與相關服務</div>
                      <div>• 135 資(通)訊服務</div>
                      <div>• 136 資(通)訊與資料庫管理</div>
                      <div>• 137 資通安全與管理</div>
                      <div>• 148 網路購物及電子商務服務</div>
                      <div>• 152 廣告或商業行為管理</div>
                      <div>• 157 調查、統計與研究分析</div>
                      <div>• 176 其他正當目的</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    四、個人資料利用之期間、地區、對象及方式
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-bold text-red-800 mb-2">期間</h3>
                      <p className="text-sm text-gray-700">
                        本平台將於前述特定目的存續期間、本服務營運期間、相關法令規定之保存期限、因執行業務所必須之保存期間內，或您與本公司契約關係存續期間內，處理及利用您的個人資料。
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-bold text-orange-800 mb-2">對象</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 本公司內部人員（僅於執行業務必要範圍內）</li>
                        <li>• 使用者之間（教師與學生資料互相瀏覽）</li>
                        <li>• 第三方服務供應商（金流、雲端、通訊等服務商）</li>
                        <li>• 政府機關或司法單位（法令規定時）</li>
                        <li>• 權益保護（防止詐欺、維護安全時）</li>
                        <li>• 經您同意之其他對象</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-bold text-yellow-800 mb-2">方式</h3>
                      <p className="text-sm text-gray-700">
                        以自動化機器或非自動化方式蒐集、處理、國際傳輸及利用您的個人資料，包含書面或電子形式。利用方式包括但不限於：會員註冊驗證、教師檔案建立與展示、課程搜尋與媒合、線上視訊教學、款項支付與收取、發送服務通知、使用者評價管理、客戶服務、爭議處理、數據統計與分析等。
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    五、當事人權利
                  </h2>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">依據個資法第三條規定，您就本公司所保有您的個人資料，得向本公司行使以下權利：</p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 查詢或請求閱覽您的個人資料</li>
                      <li>• 請求製給您個人資料之複製本</li>
                      <li>• 請求補充或更正您的個人資料</li>
                      <li>• 請求停止蒐集、處理或利用您的個人資料</li>
                      <li>• 請求刪除您的個人資料</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-3">
                      您可透過本政策第十三條所載之聯絡方式提出請求。本公司將於收到您的請求及確認身分後，於法定期間內處理。
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    六、Cookie 及類似技術之使用
                  </h2>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      為了提供您更便利、個人化及順暢的服務體驗，本平台網站及行動應用程式可能會使用Cookie及類似技術。
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded">
                        <h4 className="font-bold text-green-800 mb-1">必要性Cookie</h4>
                        <p className="text-xs text-gray-600">確保網站基本功能運作</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <h4 className="font-bold text-blue-800 mb-1">功能性Cookie</h4>
                        <p className="text-xs text-gray-600">記住您的偏好設定</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <h4 className="font-bold text-purple-800 mb-1">效能/分析性Cookie</h4>
                        <p className="text-xs text-gray-600">蒐集匿名統計數據</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <h4 className="font-bold text-orange-800 mb-1">目標/廣告性Cookie</h4>
                        <p className="text-xs text-gray-600">提供相關廣告內容</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    七、資料安全與保護措施
                  </h2>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      本公司致力於採取合理且適當之技術性及組織性安全措施，以保護您的個人資料免於未經授權之存取、洩漏、竄改、毀損或滅失。
                    </p>
                    <p className="text-gray-700 text-sm">
                      這些措施包括：資料傳輸加密（SSL/TLS）、資料庫存取控制、防火牆、定期安全漏洞掃描、內部人員權限控管及保密協定簽署等。請您務必妥善保管您的帳號、密碼，於使用完畢後登出帳戶。
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    八、試教課、課程訂閱與平台費用
                  </h2>
                  <div className="space-y-3">
                    <div className="bg-amber-50 p-3 rounded">
                      <h4 className="font-bold text-amber-800">試教課</h4>
                      <p className="text-sm text-gray-700">25分鐘試教課程相關預約、進行及回饋資料將被蒐集與保存。</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <h4 className="font-bold text-blue-800">課程訂閱</h4>
                      <p className="text-sm text-gray-700">每月4、8、12、16堂課程之方案選擇、付款紀錄、自動續訂狀態等資料將被處理。</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <h4 className="font-bold text-green-800">平台費用</h4>
                      <p className="text-sm text-gray-700">學生支付課程費用已內含平台服務費，教師設定之鐘點費即為教師稅前所得。</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    九、課程認證與檢舉機制
                  </h2>
                  <p className="text-gray-700">
                    課程結束後的確認結果、學生評價、回報與檢舉內容將被記錄，作為課程完成、爭議處理、退款判斷或改善服務之依據。所有檢舉內容將提報至平台客服系統進行後續處理。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    十、未成年人保護
                  </h2>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      本平台主要服務對象為依法得為完全法律行為之成年人。未成年人使用本平台服務時，應由其法定代理人代為註冊、陪同監督。
                    </p>
                    <p className="text-gray-700 text-sm">
                      平台僅提供資訊中介與技術支持，無法逐一審查使用者真實年齡。家長應負監督責任，如發現未成年人未經同意使用本平台，應立即通知本公司採取適當處置。
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    十一、隱私權政策之修訂
                  </h2>
                  <p className="text-gray-700">
                    本公司將因應業務需求、技術發展及法令變遷，不定時修訂本政策。當本政策有任何重大修改時，將以電子郵件通知您。建議您隨時留意本政策之最新版本。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    十二、準據法與管轄法院
                  </h2>
                  <p className="text-gray-700">
                    本隱私權政策之解釋與適用，以及相關爭議，雙方同意以中華民國法律為準據法，並以臺灣臺北地方法院為第一審專屬管轄法院。
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    十三、聯絡我們
                  </h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      若您對於本隱私權政策或個人資料保護相關事宜有任何需要協助之處，歡迎透過以下方式與本公司聯繫：
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>公司名稱：</strong>睿思博遠有限公司</p>
                      <p><strong>統一編號：</strong>00205513</p>
                      <p><strong>網站服務：</strong>No Limit Tutor 無限家教</p>
                      <p><strong>客服電子郵件：</strong>info.nolimittutor@gmail.com</p>
                      <p><strong>公司登記地址：</strong>324 桃園市平鎮區平東路一段183號</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      本公司客服人員將儘速處理您的請求或疑問。
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;