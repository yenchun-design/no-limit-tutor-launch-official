
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, BookOpen, Shield, Clock, MessageCircle, RefreshCw } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NLT
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
                NLT 是什麼
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-blue-600 transition-colors">
                如何運作
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600 transition-colors">
                NLT 學習體驗流程
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-blue-600 transition-colors">
                熱門問答集
              </button>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              進入課程
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-3xl md:text-4xl">N</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            No Limit Tutor
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            連接全球優質華語教師，打造專屬你的學習體驗
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-4">
              開始學習
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-xl px-10 py-4">
              成為教師
            </Button>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-blue-600 mb-2">保障服務費用來確保</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">學生試教不滿意，100% 退款</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">未消耗課程，剩餘金額 100% 退回（不會像其他平台一樣不給退）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">I人、E人都愛的排課系統（自動通知老師，不用寫訊息）</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">老師評價系統</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">平台內視訊、安全金流</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">安全回報機制</span>
                  </div>
                  <div className="flex items-start space-x-3 md:col-span-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">檢舉與仲裁機制</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NLT 是什麼？
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              No Limit Tutor 是一個專為華語學習者設計的線上教學平台，連接全球優質華語教師與學習者
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">全球師資</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">來自世界各地的專業華語教師，提供多元化的教學風格與文化體驗</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">彈性學習</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">24/7 隨時隨地學習，自由選擇課程時間與頻率，完全配合你的生活節奏</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">品質保證</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">嚴格的教師審核機制，完善的評價系統，確保每堂課都是高品質的學習體驗</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">NLT 如何運作</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              簡單四個步驟，開始你的華語學習之旅
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">免費註冊，免費使用</h3>
              <p className="text-gray-600">快速註冊帳號，立即開始探索平台功能</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">老師自訂每堂課 (50 分鐘) 學費</h3>
              <p className="text-gray-600">教師根據經驗和專業設定合理的課程費用</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">NLT 在老師費用基礎加保障服務費</h3>
              <p className="text-gray-600">透明的收費機制，保障雙方權益</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">學生支付老師與 NLT 保障服務費，享受平台保障的權利</h3>
              <p className="text-gray-600">享受完整的學習保障和優質服務體驗</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              <strong>注：</strong>保障服務費確保學習品質與雙方權益，是合理且必要的服務投資
            </p>
          </div>
        </div>
      </section>

      {/* How to use NLT */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">如何使用 NLT</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-2 hover:border-blue-200 hover:shadow-lg transition-all">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">課程流程</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">老師建立自介頁，學生瀏覽選擇老師</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">學生選擇時間，預約上課</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">上 NLT 視訊，開始課程</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-green-200 hover:shadow-lg transition-all">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">學習支援</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">課程聊天室，即時溝通無障礙</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">不滿意課程？100% 退款保障</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">完善的評價與回饋機制</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">24/7 客服支援，學習無憂</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">NLT 學習體驗流程</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              透明公平的定價機制，讓學習更有保障
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* For Teachers */}
            <Card className="relative overflow-hidden border-2 border-green-200 hover:shadow-xl transition-all">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader className="text-center pt-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">對老師</CardTitle>
                <CardDescription className="text-4xl font-bold text-green-600 mt-4">
                  0%
                  <span className="text-lg font-normal text-gray-600 ml-2">平台抽成</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">設定 $500/堂，實拿 $500</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">學生先付款上課</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">無隱藏費用</span>
                </div>
              </CardContent>
            </Card>

            {/* For Students */}
            <Card className="relative overflow-hidden border-2 border-blue-200 hover:shadow-xl transition-all">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader className="text-center pt-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">對學生</CardTitle>
                <CardDescription className="text-4xl font-bold text-blue-600 mt-4">
                  25%
                  <span className="text-lg font-normal text-gray-600 ml-2">保障服務費</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">老師設定 $500，學生付 $625</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">試教退款依照保障服務費</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">第三方服務、爭議排解</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">隨時可退款成新台幣</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">與老師們聊天、評價系統</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Plans */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">彈性課程方案</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['1堂/週', '2堂/週', '3堂/週', '4堂/週'].map((plan, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{plan}</div>
                    <p className="text-gray-600 text-sm">彈性安排學習節奏</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">與其他平台比較</h3>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                <Table className="w-full">
                  <TableHeader className="bg-gray-50">
                    <TableRow>
                      <TableHead className="sticky left-0 bg-gray-50 z-10 w-32 min-w-[8rem] font-bold text-center border-r">平台</TableHead>
                      <TableHead className="text-center min-w-[6rem]">老師抽成</TableHead>
                      <TableHead className="text-center min-w-[6rem]">退款政策</TableHead>
                      <TableHead className="text-center min-w-[6rem]">課程彈性</TableHead>
                      <TableHead className="text-center min-w-[6rem]">平台功能</TableHead>
                      <TableHead className="text-center min-w-[6rem]">客服支援</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-blue-50">
                      <TableCell className="sticky left-0 bg-blue-100 z-10 font-bold text-center border-r">No Limit Tutor</TableCell>
                      <TableCell className="text-center text-green-600 font-semibold">0%</TableCell>
                      <TableCell className="text-center text-green-600 font-semibold">100% 退款</TableCell>
                      <TableCell className="text-center text-green-600 font-semibold">完全彈性</TableCell>
                      <TableCell className="text-center text-green-600 font-semibold">完整功能</TableCell>
                      <TableCell className="text-center text-green-600 font-semibold">24/7 支援</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="sticky left-0 bg-gray-50 z-10 font-semibold text-center border-r">平台 A</TableCell>
                      <TableCell className="text-center text-red-600">8-38%</TableCell>
                      <TableCell className="text-center text-orange-600">部分退款</TableCell>
                      <TableCell className="text-center text-orange-600">限制較多</TableCell>
                      <TableCell className="text-center text-orange-600">基本功能</TableCell>
                      <TableCell className="text-center text-orange-600">工作時間</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="sticky left-0 bg-gray-50 z-10 font-semibold text-center border-r">平台 B</TableCell>
                      <TableCell className="text-center text-red-600">20-35%</TableCell>
                      <TableCell className="text-center text-red-600">不退款</TableCell>
                      <TableCell className="text-center text-red-600">固定時段</TableCell>
                      <TableCell className="text-center text-red-600">功能有限</TableCell>
                      <TableCell className="text-center text-red-600">回應較慢</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="sticky left-0 bg-gray-50 z-10 font-semibold text-center border-r">其他多數平台</TableCell>
                      <TableCell className="text-center text-red-600">不透明</TableCell>
                      <TableCell className="text-center text-red-600">條件嚴格</TableCell>
                      <TableCell className="text-center text-red-600">彈性有限</TableCell>
                      <TableCell className="text-center text-red-600">陽春介面</TableCell>
                      <TableCell className="text-center text-red-600">支援不足</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">熱門問答集</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "如何選擇適合的老師？",
                answer: "您可以透過老師的自介影片、教學經歷、學生評價等資訊來選擇。我們建議先預約試教課程，親自體驗老師的教學風格。"
              },
              {
                question: "課程費用如何計算？",
                answer: "老師自訂每堂課（50分鐘）的費用，NLT 會加收 25% 的保障服務費。例如老師收費 $500，學生實付 $625。"
              },
              {
                question: "如果不滿意課程可以退款嗎？",
                answer: "當然可以！我們提供 100% 退款保障。試教不滿意可全額退款，未消耗的課程餘額也可隨時退回。"
              },
              {
                question: "平台提供哪些學習支援？",
                answer: "我們提供課程聊天室、自動排課系統、老師評價機制、平台內視訊功能、24/7 客服支援等完整服務。"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">準備開始學習了嗎？</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            加入 NLT 大家庭，與全球優質華語教師一起開啟你的學習之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-10 py-4">
              立即註冊學習
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-10 py-4">
              申請成為教師
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="text-xl font-bold">NLT</span>
              </div>
              <p className="text-gray-300">
                No Limit Tutor - 連接全球優質華語教師與學習者的專業平台
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">服務</h4>
              <ul className="space-y-2 text-gray-300">
                <li>線上華語課程</li>
                <li>教師媒合服務</li>
                <li>學習進度追蹤</li>
                <li>客服支援</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">支援</h4>
              <ul className="space-y-2 text-gray-300">
                <li>幫助中心</li>
                <li>聯絡我們</li>
                <li>退款政策</li>
                <li>隱私權政策</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
              <div className="space-y-2 text-gray-300">
                <p>客服信箱：support@nlt.com</p>
                <p>客服專線：0800-123-456</p>
                <p>服務時間：24/7 全年無休</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 No Limit Tutor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
