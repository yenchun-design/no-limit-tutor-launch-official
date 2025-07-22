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
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-amber-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png" 
                alt="No Limit Tutor Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-black uppercase">No Limit Tutor</span>
              <span className="text-sm text-amber-600 font-black">無限家教</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase">首頁</button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase">功能特色</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase">學習流程</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase">收費方式</button>
            <button onClick={() => scrollToSection('teacher')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase">成為教師</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-amber-400">
        <div className="relative container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-white border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-3 h-3 bg-orange-500 border-2 border-black" />
                  <span className="text-sm font-black text-black uppercase tracking-wide">No Limit Tutor 的三大服務主張</span>
                </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-black text-black leading-tight tracking-tight uppercase">
                  No Limit Tutor 無限家教
                </h1>
                <h2 className="text-2xl md:text-3xl font-black text-black leading-tight bg-white px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
                  台灣首個民主、群眾導向的線上一對一家教平台
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-black leading-relaxed max-w-2xl bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-bold">
                  No Limit Tutor 是專為台灣師生打造的線上教學平台，讓老師自主開課、學生自由選師，透過平台完成預約、付款與視訊教學，全程安全透明。
                </p>
                <p className="font-bold">
                  我們不從教師收入抽成，服務費由學生端負擔，讓教學更自由、收費更公平。
                </p>
                <div className="space-y-3 bg-orange-100 border-4 border-black p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span className="font-black">不滿意試教？全額退費</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span className="font-black">沒有綁約、沒有抽成、沒有名目費用</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span className="font-black">教學與學習皆擁有真正的選擇權</span>
                  </div>
                </div>
                <div className="bg-orange-300 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black text-black">
                    現在開放招募首批元老教師與早鳥學生<br />
                    共同建立一個由群眾驅動的自主學習社群！
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-400 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg px-8 py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                >
                  成為首批元老級教師
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg px-8 py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  onClick={() => scrollToSection('features')}
                >
                  了解更多
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 border-4 border-black transform rotate-3" />
              <div className="absolute inset-0 bg-red-400 border-4 border-black transform -rotate-2" />
              <div className="relative bg-white border-8 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                  <div className="space-y-8">
                  <div className="flex items-start space-x-4 bg-orange-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-16 h-16 bg-orange-500 border-4 border-black flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-black text-lg uppercase"><strong>民主式、群眾導向平台</strong></h3>
                      <p className="text-sm text-black font-bold">老師自由授課，學生自選課題，無需綁定固定教材或長期合約</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 bg-orange-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-16 h-16 bg-orange-500 border-4 border-black flex items-center justify-center flex-shrink-0">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-black text-lg uppercase">視訊教學</h3>
                      <p className="text-sm text-black font-bold">簡潔、穩定的線上預約與視訊上課系統，實現一對一學習的彈性與效率</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 bg-orange-100 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-16 h-16 bg-orange-500 border-4 border-black flex items-center justify-center flex-shrink-0">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-black text-lg uppercase">不抽成、沒有名目費用</h3>
                      <p className="text-sm text-black font-bold">NLT 不從教師收入中抽成，保障服務費由學生支付。<br />老師拿回完整報酬，打造民主、群眾導向的線上學習空間。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-orange-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-sm font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              功能特色
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 bg-amber-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 uppercase">完整的教學生態系統</h2>
            <p className="text-xl text-black font-bold max-w-3xl mx-auto bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">從師資篩選到課程管理，為您提供全方位的學習支援</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-6">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">師資媒合</h3>
                <p className="font-bold text-black">多元篩選，匹配最適合的教師</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>依科目、價格、地區篩選</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>可授課時間查詢</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>星級評分系統</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 border-2 border-black" />
                    <span>學生評價展示</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-6">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Clock className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">彈性預約系統</h3>
                <p className="font-bold text-black">互動式時段選擇，即時預約確認</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>25分鐘試教課程</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-black" />
                    <span>4、8、12、16堂課選擇</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>自動月扣款訂閱 (含自動通知)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 border-2 border-black" />
                    <span>隨時取消訂閱</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-6">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Video className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">視訊教學平台</h3>
                <p className="font-bold text-black">專業線上教室，支持多種互動功能</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>高品質視訊通話</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>螢幕分享功能</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-black" />
                    <span>即時文字聊天</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 border-2 border-black" />
                    <span>評價回饋系統</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-6">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MessageSquare className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">安全聊天系統</h3>
                <p className="font-bold text-black">加密通訊，保護用戶隱私</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>文字即時聊天</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>圖片檔案傳送</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>基本加密保護</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-black" />
                    <span>25MB檔案限制</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-6">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <DollarSign className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">透明收費機制</h3>
                <p className="font-bold text-black">公平定價，支持多種支付方式</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>試教課 50 % 優惠，不滿意可全額退費</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>30天無條件退款</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>綠界金流整合</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 border-2 border-black" />
                    <span>信用卡支付與刷退，安全、簡便</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-300 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-6">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Shield className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">完善保障機制</h3>
                <p className="font-bold text-black">多重保護，確保教學品質</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>課程發生認證</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>No-Show處理</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>投訴檢舉系統</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-black" />
                    <span>客服爭議處理</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section id="process" className="py-24 bg-orange-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-sm font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              學習流程
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 bg-amber-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">簡單三步，開始您的學習之旅</h2>
            <p className="text-xl text-black font-bold max-w-3xl mx-auto bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">從註冊到上課，我們讓整個過程變得簡單而順暢</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "選擇教師",
                description: "瀏覽教師檔案，查看教師經驗、學生評價，選擇最適合您的老師",
                icon: <Users className="w-8 h-8" />,
                color: "bg-amber-300"
              },
              {
                step: "2", 
                title: "預約試教",
                description: "預約25分鐘試教課程，驗證教師的教學風格，確認是否符合需求",
                icon: <Clock className="w-8 h-8" />,
                color: "bg-blue-300"
              },
              {
                step: "3",
                title: "開始學習",
                description: "購買課程方案，開始您的個人化學習旅程，隨時追蹤學習進度",
                icon: <Video className="w-8 h-8" />,
                color: "bg-pink-300"
              }
            ].map((item, index) => (
              <div key={index} className={`text-center border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 ${item.color} p-8`}>
                <div className="pb-4">
                  <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-4xl font-black text-black">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 uppercase">{item.title}</h3>
                </div>
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-black font-bold leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-sm font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              收費方式
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 bg-amber-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 uppercase">透明公平的定價機制</h2>
            <p className="text-xl text-black font-bold bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">為教師與學生創造雙贏的學習環境</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-orange-300">
              <div className="text-center p-6">
                <div className="bg-white border-4 border-black px-4 py-2 text-black font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">體驗課程</div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">試教課程</h3>
                <p className="font-bold text-black mb-4">25分鐘體驗</p>
                <div className="text-3xl font-black text-black mt-4 bg-amber-400 border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  正式課程 50% 折扣
                </div>
              </div>
              <div className="bg-white border-t-4 border-black p-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">25分鐘一對一教學</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">了解教師教學風格</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">不滿意可退費</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-orange-400 relative">
              <div className="text-center p-6">
                <div className="bg-white border-4 border-black px-4 py-2 text-black font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">進入課程</div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">正式課程</h3>
                <p className="font-bold text-black mb-4">50分鐘完整課程</p>
                <div className="text-3xl font-black text-black mt-4 bg-amber-400 border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  教師定價 + 保障服務費
                </div>
              </div>
              <div className="bg-white border-t-4 border-black p-4">
                <ul className="space-y-3 mb-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">4/8/12/16 堂課選擇</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">自動月訂制</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">隨時取消訂閱</span>
                  </li>
                </ul>
                <div className="bg-orange-200 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-sm font-black text-black mb-2 uppercase">保障服務費用以確保:</p>
                  <ul className="space-y-2 text-xs text-black font-bold">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 border border-black" />
                      <span>平台內視訊、安全金流、試教課退費保障</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 border border-black" />
                      <span>排課系統（自動通知老師，不用寫訊息）</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 border border-black" />
                      <span>評價系統</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 border border-black" />
                      <span>安全回報機制</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-orange-300">
              <div className="text-center p-6">
                <div className="bg-white border-4 border-black px-4 py-2 text-black font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">品質保證</div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">退款保障</h3>
                <p className="font-bold text-black mb-4">30天保證期</p>
                <div className="text-3xl font-black text-black mt-4 bg-amber-400 border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  100% 退款
                </div>
              </div>
              <div className="bg-white border-t-4 border-black p-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">購買後30天內</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">未完成課程退款</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span className="text-sm font-bold text-black">無條件申請</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher CTA */}
      <section id="teacher" className="py-24 bg-orange-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-sm font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              教師招募
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 bg-amber-300 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">
              成為首批元老級教師
            </h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
              <p className="text-xl text-black font-bold leading-relaxed">
                留下您的聯繫方式，我們將在平台上線時第一時間通知您，並邀請您成為
                <br />
                No Limit Tutor 的元老級教師
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-400 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-xl px-12 py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
            >
              立即加入
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <div className="bg-orange-300 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-6 inline-block">
              <p className="text-sm text-black font-black uppercase">
                * 完全免費，我們承諾不會向您收取任何費用
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student CTA */}
      <section className="py-24 bg-orange-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-sm font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              學生招募
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 bg-amber-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 uppercase">
              成為早鳥學生
            </h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
              <p className="text-xl text-black font-bold leading-relaxed">
                加入 No Limit Tutor 的學習社群，享受最民主的一對一教學體驗
                <br />
                早鳥學生有機會享有特別優惠與專屬權益
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-blue-400 hover:bg-blue-300 text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-xl px-12 py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              onClick={() => window.open('#', '_blank')}
            >
              立即加入學習
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <div className="bg-green-300 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-6 inline-block">
              <p className="text-sm text-black font-black uppercase">
                * 平台上線後將優先通知您註冊使用
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-24 bg-orange-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-sm font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              搶先追蹤
            </div>
            <h2 className="text-4xl font-black text-black mb-6 bg-amber-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">搶先追蹤</h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
              <p className="text-xl text-black font-bold">
                進一步了解 No Limit Tutor 文化與價值訴求，以及平台努力的方向<br />
                加入討論，共同營造嶄新的民主式學習環境
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-400 hover:bg-blue-300 text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg px-8 py-4 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://www.facebook.com/nolimittutor', '_blank')}
              >
                追蹤臉書 - 掌握 NLT 價值與動態
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-pink-400 hover:bg-pink-300 text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg px-8 py-4 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://www.instagram.com/no_limit_tutor/', '_blank')}
              >
                追蹤 IG - 觀看國外搞笑迷因學英文
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-300 text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg px-8 py-4 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
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
      <footer className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/a4afac6a-13e5-4713-8b1d-66db48ddd8e9.png" 
                  alt="No Limit Tutor Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white uppercase tracking-wide">No Limit Tutor</span>
                <span className="text-sm text-amber-400 font-black uppercase">無限家教</span>
              </div>
            </div>
            
            <div className="text-left flex-1 max-w-2xl">
              <p className="text-white mb-6 text-lg font-bold">
                突破規則，知識無限 - 讓每個人都能享受優質的一對一教學
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="/privacy" className="text-amber-400 hover:text-amber-300 text-sm font-bold underline transition-colors">隱私條款</a>
              </div>
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

export default Index;
