
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
              <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-wide">隱私條款</h1>
            </div>
            <p className="text-xl text-black font-bold bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              No Limit Tutor 致力於保護用戶的隱私權
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-amber-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                資料蒐集與使用
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>
                  我們僅在提供服務所必要的範圍內蒐集您的個人資料，包括但不限於：
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>基本聯絡資訊（姓名、電子郵件、電話號碼）</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>學習需求與偏好設定</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>課程預約與學習記錄</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>付款資訊（透過第三方安全支付系統處理）</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-blue-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                資料保護措施
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>
                  我們採用業界標準的安全措施來保護您的個人資料：
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>SSL 加密傳輸技術</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>定期安全性評估與更新</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>嚴格的內部存取控制</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>符合相關法規要求</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-green-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                資料分享政策
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>
                  我們不會出售、租賃或以其他方式向第三方披露您的個人資料，除非：
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>獲得您的明確同意</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>法律要求或法院命令</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>保護平台與用戶安全的必要措施</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>與信任的服務供應商合作（如支付處理商）</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-orange-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                您的權利
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>
                  根據相關法規，您享有以下權利：
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>查詢、更正或刪除個人資料</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>限制或反對資料處理</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>資料可攜性</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>撤回同意</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-pink-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                聯絡我們
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>
                  如您對本隱私條款有任何疑問或需要行使您的權利，請透過以下方式聯絡我們：
                </p>
                <div className="bg-amber-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 border-2 border-black" />
                      <span>電子郵件：privacy@nolimittutor.com</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 border-2 border-black" />
                      <span>公司名稱：睿思博遠有限公司</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-black mb-4 uppercase bg-purple-300 border-4 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                條款更新
              </h2>
              <div className="space-y-4 text-base text-black font-bold leading-relaxed">
                <p>
                  我們保留隨時修改本隱私條款的權利。任何重大變更將會：
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>在網站上公告至少 30 天</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>透過電子郵件通知註冊用戶</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 border-2 border-black mt-2 flex-shrink-0" />
                    <span>更新生效日期</span>
                  </li>
                </ul>
                <div className="bg-yellow-200 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-6">
                  <p className="font-black text-black text-lg">
                    最後更新日期：2025年1月22日
                  </p>
                </div>
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
              <p className="text-white mb-6 text-lg font-bold">
                突破規則，知識無限 - 讓每個人都能享受優質的一對一教學
              </p>
              <p className="text-gray-400 text-sm font-medium">
                © 2025 No Limit Tutor. No Limit Tutor 無限家教為睿思博遠有限公司註冊之商標，All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
