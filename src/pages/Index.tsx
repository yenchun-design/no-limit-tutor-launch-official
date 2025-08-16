
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-400">
      {/* Navigation */}
      <nav className="bg-black text-white p-3 md:p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="bg-orange-500 text-black font-black text-lg md:text-xl px-2 py-1 rounded">N</div>
            <div>
              <div className="font-black text-sm md:text-base">NO LIMIT TUTOR</div>
              <div className="text-xs md:text-sm">無限家教</div>
            </div>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-black px-4 py-2 text-sm md:text-base">
            加入招募
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-black mb-6 md:mb-8">
            NO LIMIT TUTOR
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl">無限家教</span>
          </h1>
          
          <div className="bg-white text-black p-6 md:p-8 rounded-lg mb-6 md:mb-8 shadow-lg">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black mb-4">
              台灣首個民主、群眾導向的一對一線上教平台
            </h2>
          </div>

          <div className="bg-orange-200 p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-6 text-center">
              NLT 專為台灣師生打造，對老師零抽成、100% 退款保障、確保師生安全
            </h3>
            
            <div className="bg-yellow-100 p-4 md:p-6 rounded-lg border-4 border-black">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center text-sm md:text-base lg:text-lg font-bold">
                  <span className="w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-sm mr-3 flex-shrink-0"></span>
                  不滿意試教？全額退費
                </div>
                <div className="flex items-center text-sm md:text-base lg:text-lg font-bold">
                  <span className="w-4 h-4 md:w-5 md:h-5 bg-blue-500 rounded-sm mr-3 flex-shrink-0"></span>
                  對老師零抽成、零仲介、零名目費用
                </div>
                <div className="flex items-center text-sm md:text-base lg:text-lg font-bold">
                  <span className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-sm mr-3 flex-shrink-0"></span>
                  公平爭議處理機制
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is NLT Section */}
      <section className="py-8 md:py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-8 md:mb-12">NLT 是什麼</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* NLT 如何運作 */}
            <div className="bg-green-100 p-6 md:p-8 rounded-lg border-4 border-black">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-green-500 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <span className="text-white text-lg md:text-xl">💚</span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-black">NLT 如何運作</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3 flex-shrink-0 mt-1">1</span>
                  <p className="text-sm md:text-base lg:text-lg">免費註冊使用，學生可直接聯絡老師，無須透過 NLT</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3 flex-shrink-0 mt-1">2</span>
                  <p className="text-sm md:text-base lg:text-lg">老師自訂每 50 分鐘學費，按小時提供可訂課時段</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3 flex-shrink-0 mt-1">3</span>
                  <p className="text-sm md:text-base lg:text-lg">NLT 會在老師學費基礎上加些許保障服務費</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3 flex-shrink-0 mt-1">4</span>
                  <p className="text-sm md:text-base lg:text-lg">學生支付老師費用與 NLT 保障服務費</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white rounded border-2 border-green-500">
                <p className="text-xs md:text-sm lg:text-base font-medium">
                  <strong>注：</strong>保障服務費 = 平台成本 + 微薄收益，提供學生無條件退費權利、老師推廣、安全收付及平台發展。
                </p>
              </div>
            </div>

            {/* 如何使用 NLT */}
            <div className="bg-blue-100 p-6 md:p-8 rounded-lg border-4 border-black">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-blue-500 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <span className="text-white text-lg md:text-xl">🎯</span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-black">如何使用 NLT</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <span className="bg-red-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3 flex-shrink-0 mt-1">1</span>
                  <p className="text-sm md:text-base lg:text-lg">依照片、履歷、學生評價自選老師，課前私訊老師溝通需求</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3 flex-shrink-0 mt-1">2</span>
                  <p className="text-sm md:text-base lg:text-lg">選擇時間，預約上課</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3 flex-shrink-0 mt-1">3</span>
                  <p className="text-sm md:text-base lg:text-lg">選定地點，開始課程。不管在哪，台灣電訊可上課</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-100 rounded border-2 border-blue-500">
                <p className="text-xs md:text-sm lg:text-base font-bold">
                  學生自主、自由選師，學生可主動用 NLT 聊天室聯絡老師，確認需求。試教不滿意可全額退費！
                </p>
              </div>
            </div>
          </div>

          {/* 4個愛用NLT的理由 */}
          <div className="bg-yellow-200 p-6 md:p-8 rounded-lg border-4 border-black mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-4 md:mb-6 flex items-center">
              <span className="text-2xl md:text-3xl mr-2">⚡</span>
              4個愛用NLT的理由
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-5 rounded-lg border-2 border-black">
                <div className="flex items-center mb-2 md:mb-3">
                  <span className="bg-red-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3">1</span>
                  <h4 className="text-sm md:text-base lg:text-lg font-black">100% 退款保障</h4>
                </div>
                <p className="text-xs md:text-sm lg:text-base">試上不滿意？全額退費，零風險換老師</p>
              </div>
              
              <div className="bg-white p-4 md:p-5 rounded-lg border-2 border-black">
                <div className="flex items-center mb-2 md:mb-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3">2</span>
                  <h4 className="text-sm md:text-base lg:text-lg font-black">優質師資</h4>
                </div>
                <p className="text-xs md:text-sm lg:text-base">嚴選專業教師，提供高品質教學服務</p>
              </div>
              
              <div className="bg-white p-4 md:p-5 rounded-lg border-2 border-black">
                <div className="flex items-center mb-2 md:mb-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3">3</span>
                  <h4 className="text-sm md:text-base lg:text-lg font-black">彈性安排</h4>
                </div>
                <p className="text-xs md:text-sm lg:text-base">自由選擇時間地點，學習更有彈性</p>
              </div>
              
              <div className="bg-white p-4 md:p-5 rounded-lg border-2 border-black">
                <div className="flex items-center mb-2 md:mb-3">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3">4</span>
                  <h4 className="text-sm md:text-base lg:text-lg font-black">安全保障</h4>
                </div>
                <p className="text-xs md:text-sm lg:text-base">平台提供完整保障機制，學習更安心</p>
              </div>
            </div>
          </div>

          {/* 透明公開的收費機制 */}
          <div className="bg-orange-100 p-6 md:p-8 rounded-lg border-4 border-black mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-4 md:mb-6 text-center">透明公開的收費機制</h3>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* 對老師 */}
              <div className="bg-green-200 p-4 md:p-6 rounded-lg border-2 border-black">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-white p-2 rounded mr-3">
                    <span className="text-lg md:text-xl">🎓</span>
                  </div>
                  <h4 className="text-base md:text-lg lg:text-xl font-black">對老師</h4>
                </div>
                
                <div className="bg-white p-4 md:p-5 rounded border-2 border-green-500 mb-3 md:mb-4">
                  <div className="text-center mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-black text-green-600">0%</span>
                    <p className="text-sm md:text-base lg:text-lg font-black">平台抽成</p>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center text-xs md:text-sm lg:text-base">
                      <span className="text-green-500 mr-2">✓</span>
                      設定 $500/堂，實拿 $500
                    </div>
                    <div className="flex items-center text-xs md:text-sm lg:text-base">
                      <span className="text-green-500 mr-2">✓</span>
                      無隱藏費用
                    </div>
                    <div className="flex items-center text-xs md:text-sm lg:text-base">
                      <span className="text-green-500 mr-2">✓</span>
                      學生先付款上課，保證收款
                    </div>
                  </div>
                </div>
              </div>

              {/* 對學生 */}
              <div className="bg-blue-200 p-4 md:p-6 rounded-lg border-2 border-black">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-white p-2 rounded mr-3">
                    <span className="text-lg md:text-xl">👨‍🎓</span>
                  </div>
                  <h4 className="text-base md:text-lg lg:text-xl font-black">對學生</h4>
                </div>
                
                <div className="bg-white p-4 md:p-5 rounded border-2 border-blue-500 mb-3 md:mb-4">
                  <div className="text-center mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-black text-blue-600">25%</span>
                    <p className="text-sm md:text-base lg:text-lg font-black">服務費</p>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center text-xs md:text-sm lg:text-base">
                      <span className="text-blue-500 mr-2">✓</span>
                      老師收費 $500，學生付 $500 + 25% = $625
                    </div>
                    <div className="flex items-center text-xs md:text-sm lg:text-base">
                      <span className="text-blue-500 mr-2">✓</span>
                      試教 100% 退款保障
                    </div>
                    <div className="flex items-center text-xs md:text-sm lg:text-base">
                      <span className="text-blue-500 mr-2">✓</span>
                      售後服務、爭議排解
                    </div>
                    <div className="flex items-center text-xs md:text-sm lg:text-base">
                      <span className="text-blue-500 mr-2">✓</span>
                      上完課老師才有收入，沒完成的可退費查富
                    </div>
                    <div className="flex items-center text-xs md:text-sm lg:text-base">
                      <span className="text-blue-500 mr-2">✓</span>
                      豐富教師資料庫
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 與其他平台比較 */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg border-4 border-black mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl lg:text-2xl font-black mb-4 md:mb-6 text-center">與其他平台比較</h3>
            
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <table className="w-full border-collapse border-2 border-black text-center">
                  <thead>
                    <tr className="bg-yellow-200">
                      <th className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">平台</th>
                      <th className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">老師抽成</th>
                      <th className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">學生服務費</th>
                      <th className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">退款政策</th>
                      <th className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">平台總營收率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">No Limit Tutor</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">0%</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">25%</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">全額退款</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">25%</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">台灣知名平台A</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">8-38%</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">10%</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">可以，但流程困難，只能退成外幣</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">18 - 48% (+ 匯差)</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">國際知名平台B</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">20-35%</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">0%</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">可以，但流程困難</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">20 - 35%</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black">其他多數平台</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">不透明</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">不透明</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">多數購買超過七天就不能全額退款</td>
                      <td className="border-2 border-black p-2 md:p-3 text-xs md:text-sm lg:text-base font-black text-red-600">不透明，可能在33 - 65%之間不等</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* NLT 獨有優勢 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-green-200 p-4 md:p-6 rounded-lg border-4 border-black">
              <h4 className="text-base md:text-lg lg:text-xl font-black mb-3 md:mb-4 text-center">對老師 0 抽成</h4>
              <p className="text-xs md:text-sm lg:text-base text-center">珍惜台灣教育工作者與寶貴教育資源</p>
            </div>
            
            <div className="bg-blue-200 p-4 md:p-6 rounded-lg border-4 border-black">
              <h4 className="text-base md:text-lg lg:text-xl font-black mb-3 md:mb-4 text-center">100% 原路退款新台幣保障</h4>
              <p className="text-xs md:text-sm lg:text-base text-center">不滿意立即退費，保障學生權益</p>
            </div>
            
            <div className="bg-yellow-200 p-4 md:p-6 rounded-lg border-4 border-black">
              <h4 className="text-base md:text-lg lg:text-xl font-black mb-3 md:mb-4 text-center">平台商業模式公開透明</h4>
              <p className="text-xs md:text-sm lg:text-base text-center">收費機制完全公開，建立信任關係</p>
            </div>
          </div>
        </div>
      </section>

      {/* 教學生態系統詳解 */}
      <section className="py-12 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">教學生態系統詳解</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 雙贏學習環境 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-black">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h3 className="text-2xl font-black">雙贏學習環境</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-lg">面對面視訊</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-lg">螢幕分享</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-lg">即時聊天</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-lg">評價回饋</span>
                </div>
              </div>
            </div>

            {/* 安全聊天 */}
            <div className="bg-purple-200 p-8 rounded-2xl shadow-lg border-4 border-black">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h3 className="text-2xl font-black">安全聊天</h3>
                <p className="text-lg mt-2">加密通訊保護</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-lg">文字聊天</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-lg">圖片傳送</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-lg">基本加密</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-lg">25MB限制</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 彈性課程方案 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex bg-gradient-to-r from-orange-400 to-yellow-400 text-black px-8 py-4 rounded-2xl shadow-lg mb-4">
              <span className="text-lg font-black mr-4">收費方式</span>
              <span className="bg-yellow-300 px-4 py-1 rounded-lg text-lg font-black">透明公平定價</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">雙贏學習環境</h2>
          
          <div className="bg-blue-200 p-8 rounded-2xl shadow-lg border-4 border-black">
            <div className="bg-white p-6 rounded-xl border-2 border-black mb-6">
              <h3 className="text-2xl font-black text-center mb-4">體驗課程</h3>
              <div className="text-center mb-4">
                <p className="text-lg mb-2">試教課程</p>
                <p className="text-lg font-bold">25分鐘體驗</p>
              </div>
              
              <div className="bg-yellow-300 p-4 rounded-lg border-2 border-black text-center">
                <p className="text-xl font-black">正式課程 50% 折扣</p>
              </div>
            </div>
            
            <div className="space-y-3 text-lg">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-red-500 rounded-sm mr-3"></span>
                <span>25分鐘一對一教學</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-red-500 rounded-sm mr-3"></span>
                <span>了解教師教學風格</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-red-500 rounded-sm mr-3"></span>
                <span>不滿意可退費</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-purple-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-black text-white px-6 py-3 rounded-lg inline-block mb-4">
              <h2 className="text-2xl font-black">常見問題</h2>
            </div>
            <div className="bg-yellow-300 px-8 py-4 rounded-2xl shadow-lg border-4 border-black">
              <h3 className="text-2xl md:text-3xl font-black">你可能想知道的問題</h3>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "NLT 真的對老師零抽成嗎？",
                answer: "是的！NLT 對老師完全零抽成。老師設定多少學費就實拿多少，我們不會從老師的收入中抽取任何費用。我們的營運是透過向學生收取25%的服務費來維持。"
              },
              {
                question: "如果試上不滿意怎麼辦？",
                answer: "完全不用擔心！如果您對試教課程不滿意，我們提供100%全額退款保障。退款會直接退回您的原支付方式，過程簡單快速。"
              },
              {
                question: "平台什麼時候會正式上線？",
                answer: "我們正在積極準備中，預計很快就會正式上線。目前正在進行最後的測試和優化工作，請關注我們的官方公告。"
              },
              {
                question: "如何確保教師品質？",
                answer: "我們有嚴格的教師審核機制，包括資格驗證、教學經驗審查等。同時提供學生評價系統，讓您可以參考其他學生的真實反饋來選擇適合的老師。"
              },
              {
                question: "支援哪些科目和語言？",
                answer: "我們支援各種學科和語言教學，包括但不限於數學、英文、中文、物理、化學、程式設計等。您可以在平台上找到各領域的專業教師。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border-4 border-black shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 bg-white hover:bg-gray-50 text-left flex justify-between items-center transition-colors"
                >
                  <span className="text-xl font-black">{faq.question}</span>
                  <div className="bg-black text-white w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ml-4">
                    <span className="text-lg font-bold">
                      {openFAQ === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t-2 border-black">
                    <p className="text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="bg-yellow-300 px-8 py-6 rounded-2xl shadow-lg border-4 border-black">
              <h3 className="text-2xl font-black mb-4">還有其他問題？</h3>
              <p className="text-lg mb-6">我們很樂意為你解答！歡迎透過社群媒體訊息聯繫我們</p>
              
              <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center">
                  FACEBOOK 粉專 ↗
                </button>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-black py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center">
                  INSTAGRAM ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-green-200 to-blue-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white px-6 py-3 rounded-lg border-2 border-black mr-4">
              <span className="text-xl font-black">搶先追蹤</span>
            </div>
            <div className="bg-orange-400 px-6 py-3 rounded-lg border-2 border-black">
              <span className="text-xl font-black text-white">社群互動</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-4 border-black">
            <h2 className="text-2xl md:text-3xl font-black mb-6">
              進一步了解 No Limit Tutor 文化與價值訴求，及平台努力的方向
            </h2>
            <p className="text-xl mb-8">提供回饋，共造嶄新的民主學習環境</p>
            
            <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-500">
              <p className="text-lg font-bold flex items-center justify-center">
                追蹤臉書 - 掌握 NLT 價值與動態 →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-400 to-pink-400">
        <div className="max-w-md mx-auto">
          <div className="bg-yellow-300 p-8 rounded-2xl shadow-lg border-4 border-black text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-3xl mr-3">✉️</span>
              <div>
                <h2 className="text-2xl font-black">最後機會！立即登記</h2>
                <p className="text-lg font-bold mt-2">成為 NLT 首批元老教師</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <input
                type="email"
                placeholder="請輸入你的 Email 地址"
                className="w-full px-4 py-3 rounded-lg border-2 border-black text-lg"
              />
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 px-6 rounded-lg text-lg transition-colors flex items-center justify-center">
                立即登記 →
              </button>
            </div>
            
            <p className="text-sm">* 我們承諾不會濫用你的 Email，也不會分享給第三方</p>
          </div>
          
          <div className="mt-6">
            <button className="w-full bg-transparent border-4 border-white text-white font-black py-4 px-6 rounded-lg text-xl hover:bg-white hover:text-red-500 transition-colors">
              立即加入教師招募 →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
