
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Star, 
  MessageSquare, 
  Video,
  DollarSign,
  Shield,
  BookOpen,
  Globe,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

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
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">首頁</button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">功能特色</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">學習流程</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">收費方式</button>
            <button onClick={() => scrollToSection('teacher')} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">成為教師</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-orange-100/50 to-yellow-100/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-amber-200">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-amber-700">No Limit Tutor 的三大服務主張</span>
                </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  No Limit Tutor 無限家教
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-600 leading-tight">
                  台灣首個民主、群眾導向的線上一對一家教平台
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
                <p>
                  No Limit Tutor 是專為台灣師生打造的線上教學平台，讓老師自主開課、學生自由選師，透過平台完成預約、付款與視訊教學，全程安全透明。
                </p>
                <p>
                  我們不從教師收入抽成，服務費由學生端負擔，讓教學更自由、收費更公平。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>不滿意試教？全額退費</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>沒有綁約、沒有抽成、沒有名目費用</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>教學與學習皆擁有真正的選擇權</span>
                  </div>
                </div>
                <p className="font-semibold text-amber-700">
                  現在開放招募首批元老教師與早鳥學生<br />
                  共同建立一個由群眾驅動的自主學習社群！
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                >
                  成為 No Limit Tutor 首批元老級教師
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-6 text-lg font-semibold transition-all duration-300"
                  onClick={() => scrollToSection('features')}
                >
                  了解更多
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl transform rotate-2 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl transform -rotate-1" />
              <Card className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-amber-200">
                  <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-7 h-7 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg"><strong>民主式、群眾導向平台</strong></h3>
                      <p className="text-sm text-gray-600">老師自由授課，學生自選課題，無需綁定固定教材或長期合約</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Video className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">視訊教學</h3>
                      <p className="text-sm text-gray-600">簡潔、穩定的線上預約與視訊上課系統，實現一對一學習的彈性與效率</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">不抽成、沒有名目費用</h3>
                      <p className="text-sm text-gray-600">NLT 不從教師收入中抽成，保障服務費由學生支付。<br />老師拿回完整報酬，打造民主、群眾導向的線上學習空間。</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          功能特色
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">完整的教學生態系統</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">從師資篩選到課程管理，為您提供全方位的學習支援</p>
      </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">師資媒合</CardTitle>
                <CardDescription>多元篩選，匹配最適合的教師</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>依科目、價格、地區篩選</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>可授課時間查詢</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>星級評分系統</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>學生評價展示</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">彈性預約系統</CardTitle>
                <CardDescription>互動式時段選擇，即時預約確認</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>25分鐘試教課程</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>4、8、12、16堂課選擇</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>自動月扣款訂閱 (含自動通知)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>隨時取消訂閱</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">視訊教學平台</CardTitle>
                <CardDescription>專業線上教室，支持多種互動功能</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>高品質視訊通話</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>螢幕分享功能</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>即時文字聊天</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>評價回饋系統</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">安全聊天系統</CardTitle>
                <CardDescription>加密通訊，保護用戶隱私</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>文字即時聊天</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>圖片檔案傳送</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>基本加密保護</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>25MB檔案限制</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">透明收費機制</CardTitle>
                <CardDescription>公平定價，支持多種支付方式</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>試教課 50 % 優惠，不滿意可全額退費</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>30天無條件退款</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>綠界金流整合</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>信用卡支付與刷退，安全、簡便</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-rose-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">完善保障機制</CardTitle>
                <CardDescription>多重保護，確保教學品質</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>課程發生認證</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>No-Show處理</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>投訴檢舉系統</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>客服爭議處理</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              學習流程
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">簡單三步，開始您的學習之旅</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">從註冊到上課，我們讓整個過程變得簡單而順暢</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "選擇教師",
                description: "瀏覽教師檔案，查看教師經驗、學生評價，選擇最適合您的老師",
                icon: <Users className="w-8 h-8" />,
                color: "from-amber-500 to-orange-500"
              },
              {
                step: "2", 
                title: "預約試教",
                description: "預約25分鐘試教課程，請驗教師的教學風格，確認是否符合需求",
                icon: <Clock className="w-8 h-8" />,
                color: "from-blue-500 to-indigo-500"
              },
              {
                step: "3",
                title: "開始學習",
                description: "購買課程方案，開始您的個人化學習旅程，隨時追蹤學習進度",
                icon: <Video className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              收費方式
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">透明公平的定價機制</h2>
            <p className="text-xl text-gray-600">為教師與學生創造雙贏的學習環境</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">體驗課程</Badge>
                <CardTitle className="text-2xl font-bold">試教課程</CardTitle>
                <CardDescription>25分鐘體驗</CardDescription>
                <div className="text-3xl font-bold text-amber-600 mt-4">
                  正式課程 50% 折扣
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-sm">25分鐘一對一教學</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-sm">了解教師教學風格</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-sm">不滿意可退費</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 relative">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">進入課程</Badge>
                <CardTitle className="text-2xl font-bold">正式課程</CardTitle>
                <CardDescription>50分鐘完整課程</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">
                  教師定價 + 保障服務費
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">4/8/12/16 堂課選擇</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">自動月訂制</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">隨時取消訂閱</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-100/50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800 mb-2">保障服務費用以確保:</p>
                  <ul className="space-y-2 text-xs text-blue-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>平台內視訊、安全金流、試教課退費保障</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>排課系統（自動通知老師，不用寫訊息）</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>評價系統</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>安全回報機制</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">品質保證</Badge>
                <CardTitle className="text-2xl font-bold">退款保障</CardTitle>
                <CardDescription>30天保證期</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">
                  100% 退款
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm">購買後30天內</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm">未完成課程退款</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm">無條件申請</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teacher CTA */}
      <section id="teacher" className="py-24 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/80 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              教師招募
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              成為首批元老級教師
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              留下您的聯繫方式，我們將在平台上線時第一時間通知您，並邀請您成為
              <br />
              No Limit Tutor 的元老級教師
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
            >
              立即加入
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-sm text-gray-500 mt-6">
              * 完全免費，我們承諾不會向您收取任何費用
            </p>
          </div>
        </div>
      </section>

      {/* Student CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/80 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              學生招募
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              成為早鳥學生
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              加入 No Limit Tutor 的學習社群，享受最民主的一對一教學體驗
              <br />
              早鳥學生有機會享有特別優惠與專屬權益
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('#', '_blank')}
            >
              立即加入學習
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="text-sm text-gray-500 mt-6">
              * 平台上線後將優先通知您註冊使用
            </p>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              搶先追蹤
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">搶先追蹤</h2>
            <p className="text-xl text-gray-600 mb-12">
              進一步了解 No Limit Tutor 文化與價值訴求，以及平台努力的方向<br />
              加入討論，共同營造嶄新的民主式學習環境
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-600"
                onClick={() => window.open('https://www.facebook.com/nolimittutor', '_blank')}
              >
                追蹤臉書 - 掌握 NLT 價值與動態
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-pink-500"
                onClick={() => window.open('https://www.instagram.com/no_limit_tutor/', '_blank')}
              >
                追蹤 IG - 觀看國外搞笑迷因學英文
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-amber-500"
                onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
              >
                填寫表單 - 成為 NLT 的一員
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png" 
                  alt="No Limit Tutor Logo"
                  className="w-10 h-10 object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">No Limit Tutor</span>
                <span className="text-sm text-amber-400 font-medium">無限家教</span>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-4 text-lg">
                突破規則，知識無限 - 讓每個人都能享受優質的一對一教學
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a href="/privacy" className="text-amber-400 hover:text-amber-300 text-sm transition-colors">隱私條款</a>
              </div>
              <p className="text-gray-500 text-sm">
                © 2025 No Limit Tutor. No Limit Tutor 無限家教為睿思博遠有限公司註冊之商標，All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
