
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-800 flex items-center justify-center rounded">
            <span className="text-white font-bold text-lg md:text-xl">N</span>
          </div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">NO LIMIT TUTOR</h1>
            <p className="text-xs md:text-sm text-white/90">無限家教</p>
          </div>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-colors">
          加入報名
        </button>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 pb-8">
        {/* Hero Logo Section */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex justify-center items-center mb-4 md:mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-amber-800 flex items-center justify-center rounded-lg transform rotate-12">
              <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl transform -rotate-12">N</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-900 mb-2 md:mb-4">
            NO LIMIT TUTOR 無限家教
          </h2>
        </div>

        {/* New CTA Card - 招募2026年線上家教老師中！ */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 border-0 shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-2xl w-full">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 animate-pulse">
                招募 2026 年線上家教老師中！
              </h3>
              <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
            </CardContent>
          </Card>
        </div>

        {/* Taiwan's First Platform Card */}
        <div className="mb-8 md:mb-12">
          <Card className="bg-white border-4 border-black shadow-xl">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-amber-900 mb-4">
                台灣第一個民主、群眾導向的一對一家教平台
              </h3>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="bg-white border-2 border-black">
            <CardContent className="p-4 md:p-6 text-center">
              <h4 className="font-bold text-base md:text-lg mb-2 text-amber-900">透明收費</h4>
              <p className="text-sm md:text-base text-gray-700">所有費用公開透明</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-2 border-black">
            <CardContent className="p-4 md:p-6 text-center">
              <h4 className="font-bold text-base md:text-lg mb-2 text-amber-900">民主決策</h4>
              <p className="text-sm md:text-base text-gray-700">平台政策由使用者共同決定</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-2 border-black">
            <CardContent className="p-4 md:p-6 text-center">
              <h4 className="font-bold text-base md:text-lg mb-2 text-amber-900">無限制度</h4>
              <p className="text-sm md:text-base text-gray-700">打破傳統平台限制</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-2 border-black">
            <CardContent className="p-4 md:p-6 text-center">
              <h4 className="font-bold text-base md:text-lg mb-2 text-amber-900">群眾導向</h4>
              <p className="text-sm md:text-base text-gray-700">以用戶需求為核心</p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border-4 border-black rounded-lg p-4 md:p-6 mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 text-amber-900">
            平台比較表
          </h3>
          
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-2 border-black p-3 md:p-4 bg-orange-200 text-base md:text-lg lg:text-xl font-black">平台</th>
                    <th className="border-2 border-black p-3 md:p-4 bg-orange-200 text-base md:text-lg lg:text-xl font-black">收費透明度</th>
                    <th className="border-2 border-black p-3 md:p-4 bg-orange-200 text-base md:text-lg lg:text-xl font-black">退費政策</th>
                    <th className="border-2 border-black p-3 md:p-4 bg-orange-200 text-base md:text-lg lg:text-xl font-black">退費條件</th>
                    <th className="border-2 border-black p-3 md:p-4 bg-orange-200 text-base md:text-lg lg:text-xl font-black">平台抽成</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg lg:text-xl font-black sticky left-0 bg-green-50 z-10 w-20 
                                   min-w-[5rem] max-w-[5rem] break-words   
                                   md:w-auto md:min-w-[8rem] md:max-w-none">無限家教</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg lg:text-xl font-black w-28 md:w-auto">完全透明</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg lg:text-xl font-black w-28 md:w-auto">完全透明</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg lg:text-xl font-black w-36 md:w-auto">上課前都能全額退款</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg lg:text-xl font-black text-green-600 w-36 md:w-auto">0%</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-white z-10 w-20 
                                   min-w-[5rem] max-w-[5rem] break-words   
                                   md:w-auto md:min-w-[8rem] md:max-w-none">多數其他平台</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black w-28 md:w-auto">不透明</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black w-28 md:w-auto">不透明</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black w-36 md:w-auto">超過七天不能全額退款，只能轉讓或吸收損失</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600 w-36 md:w-auto">不透明，可能在33-65%之間，老師實拿更少</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Card className="bg-white border-2 border-black">
            <CardContent className="p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-amber-900">對學生的好處</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>• 更透明的收費制度</li>
                <li>• 更好的退費保障</li>
                <li>• 參與平台決策權利</li>
                <li>• 更多優質師資選擇</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-2 border-black">
            <CardContent className="p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-amber-900">對老師的好處</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>• 零平台抽成</li>
                <li>• 更高的收入</li>
                <li>• 參與平台治理</li>
                <li>• 更公平的競爭環境</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-red-600 border-2 border-black inline-block">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                準備好加入革命了嗎？
              </h3>
              <button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-colors">
                立即註冊
              </button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
