
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Shield, Star, BookOpen, MessageSquare } from "lucide-react";

const IndexSEO = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3a04511e-76e1-4dd5-95cc-61798d6a055b.png" 
              alt="No Limit Tutor 台灣線上家教平台 Logo"
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-blue-600">No Limit Tutor</span>
          </div>
          <nav>
            <Button variant="outline" className="mr-2">登入</Button>
            <Button>註冊</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          台灣線上家教平台｜No Limit Tutor 教師學生招募中
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          <strong>NLT 是台灣全新線上一對一家教平台</strong>，提供<strong>無抽成、彈性排課</strong>的教學空間。現正招募<strong>元老級教師與早鳥學生</strong>，<strong>免費加入，搶先體驗</strong>！
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <strong>教師免費註冊</strong>
          </Button>
          <Button size="lg" variant="outline">
            <strong>學生早鳥註冊</strong>
          </Button>
        </div>
      </section>

      {/* Teacher Recruitment Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          家教老師招募中：免費加入、無抽成
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/lovable-uploads/4e11ff9d-5010-4b7a-b3e5-9400b087e145.png" 
              alt="線上家教老師平台示意圖 - 教師在 No Limit Tutor 平台上課"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Users className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">教師自主訂價、學生自由選課</h3>
                <p className="text-gray-600">在我們的<strong>無抽成教學平台</strong>上，教師可以自由設定價格，獲得100%的教學收入。</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">彈性排課，自由教學</h3>
                <p className="text-gray-600">支援<strong>線上英文家教</strong>、<strong>成人英文會話家教推薦</strong>等各類科目教學。</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">平台保障，安心教學</h3>
                <p className="text-gray-600">提供完整的教學保障機制，讓您專注於教學品質。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Registration Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            學生早鳥註冊：安全付款、彈性試教
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Star className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">保障試教，不滿意可退費</h3>
                  <p className="text-gray-600">提供<strong>免費試教、保障退費</strong>機制，讓您安心選擇適合的家教老師。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">學生自選教師，自由彈性排課</h3>
                  <p className="text-gray-600">在我們的<strong>家教平台比較</strong>中，學生可以自由選擇最適合的教師和時間。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">即時溝通，學習無障礙</h3>
                  <p className="text-gray-600">支援<strong>找家教老師</strong>的完整溝通功能，讓學習更有效率。</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/6ed7f059-777c-4ced-8660-78aa11ba900f.png" 
                alt="學生使用 No Limit Tutor 線上家教平台學習示意圖"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          我們的特色：民主平台、彈性排課、保障學習體驗
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <img 
                  src="/lovable-uploads/14031a01-40e6-445e-a3b8-86de374b35e9.png" 
                  alt="民主式群眾導向平台特色圖示"
                  className="mx-auto mb-4 w-16 h-16"
                />
                民主式群眾導向
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                <strong>線上家教老師平台</strong>以民主方式運作，教師自由授課，學生自選課題，打造真正的學習自由。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <img 
                  src="/lovable-uploads/51a45798-27ad-4620-99ff-003ad04c3aad.png" 
                  alt="專業視訊教學系統特色圖示"
                  className="mx-auto mb-4 w-16 h-16"
                />
                專業視訊教學
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                提供穩定的線上預約與視訊上課系統，支援各種教學需求。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <img 
                  src="/lovable-uploads/364d3470-729e-41fa-85f9-7644676981ce.png" 
                  alt="不抽成制度特色圖示"
                  className="mx-auto mb-4 w-16 h-16"
                />
                不抽成制度
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                教師獲得完整報酬，學生享受合理價格，打造公平的學習環境。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">立即加入 No Limit Tutor</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            成為首批元老級教師或早鳥學生，搶先體驗台灣最自由的<strong>線上家教老師平台</strong>！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <strong>教師立即註冊</strong>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <strong>學生免費試教</strong>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">No Limit Tutor</h3>
              <p className="text-gray-400">台灣首創無抽成線上家教平台</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">教師服務</h4>
              <ul className="text-gray-400 space-y-2">
                <li>免費註冊</li>
                <li>無抽成制度</li>
                <li>彈性排課</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">學生服務</h4>
              <ul className="text-gray-400 space-y-2">
                <li>免費試教</li>
                <li>保障退費</li>
                <li>自選教師</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">聯絡我們</h4>
              <p className="text-gray-400">info.nolimittutor@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 No Limit Tutor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexSEO;
