
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Store email in localStorage for now (you can access this data)
    const existingEmails = JSON.parse(localStorage.getItem('nlt-emails') || '[]');
    const newEmail = {
      email,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    
    existingEmails.push(newEmail);
    localStorage.setItem('nlt-emails', JSON.stringify(existingEmails));
    
    toast({
      title: "訂閱成功！",
      description: "我們會在平台上線時第一時間通知您。",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-orange-600">No Limit Tutor</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-sm hover:text-orange-600 transition-colors">首頁</button>
            <button onClick={() => scrollToSection('features')} className="text-sm hover:text-orange-600 transition-colors">功能特色</button>
            <button onClick={() => scrollToSection('process')} className="text-sm hover:text-orange-600 transition-colors">學習流程</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-orange-600 transition-colors">收費方式</button>
            <button onClick={() => scrollToSection('teacher')} className="text-sm hover:text-orange-600 transition-colors">成為教師</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-orange-700">線上一對一教學平台</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                No Limit Tutor
                <br />
                <span className="text-orange-600">無限可能的學習</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                連接全球優質教師與學生，提供個人化的線上一對一教學體驗。
                <br />
                專業師資、彈性時間、量身定制的學習方案。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
                  onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                >
                  成為 No Limit Tutor 首批元老級教師
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg"
                  onClick={() => scrollToSection('features')}
                >
                  了解更多
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl transform rotate-3" />
              <Card className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">個人化學習</h3>
                      <p className="text-sm text-gray-600">根據學生需求量身定制課程</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Video className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">視訊教學</h3>
                      <p className="text-sm text-gray-600">高品質線上一對一互動</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">優質師資</h3>
                      <p className="text-sm text-gray-600">經驗豐富的專業教師</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">功能特色</h2>
            <p className="text-xl text-gray-600">突破規則，知識無限 - 讓每個人都能享受優質的一對一教學</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>師資介紹與篩選</CardTitle>
                <CardDescription>智能推薦算法，根據熱門度、評分、價格等綜合排序</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 依科目、價格、地區篩選</li>
                  <li>• 可授課時間查詢</li>
                  <li>• 星級評分系統</li>
                  <li>• 學生評價展示</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>彈性預約系統</CardTitle>
                <CardDescription>互動式時段選擇，即時預約確認</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 25分鐘試教課程</li>
                  <li>• 4、8、12、16堂課選擇</li>
                  <li>• 自動月扣款訂閱</li>
                  <li>• 隨時取消訂閱</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>視訊教學平台</CardTitle>
                <CardDescription>專業線上教室，支持多種互動功能</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 高品質視訊通話</li>
                  <li>• 螢幕分享功能</li>
                  <li>• 課程筆記系統</li>
                  <li>• 課後存取資料</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>安全聊天系統</CardTitle>
                <CardDescription>加密通訊，保護用戶隱私</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 文字即時聊天</li>
                  <li>• 圖片檔案傳送</li>
                  <li>• 基本加密保護</li>
                  <li>• 25MB檔案限制</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle>透明收費機制</CardTitle>
                <CardDescription>公平定價，支持多種支付方式</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 試教課50%優惠</li>
                  <li>• 30天無條件退款</li>
                  <li>• 綠界金流整合</li>
                  <li>• 信用卡支付</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>完善保障機制</CardTitle>
                <CardDescription>多重保護，確保教學品質</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 課程發生認證</li>
                  <li>• No-Show處理</li>
                  <li>• 投訴檢舉系統</li>
                  <li>• 客服爭議處理</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">學習流程</h2>
            <p className="text-xl text-gray-600">簡單四步，開始您的學習之旅</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "選擇教師",
                description: "瀏覽師資介紹，根據科目、價格、評分篩選合適的教師",
                icon: <Users className="w-6 h-6" />
              },
              {
                step: "2", 
                title: "預約試教",
                description: "選擇合適時間，預約25分鐘試教課程，體驗教學品質",
                icon: <Clock className="w-6 h-6" />
              },
              {
                step: "3",
                title: "開始學習",
                description: "進入視訊教室，享受一對一個人化教學體驗",
                icon: <Video className="w-6 h-6" />
              },
              {
                step: "4",
                title: "持續進步",
                description: "訂閱正式課程，與教師建立長期學習關係",
                icon: <Star className="w-6 h-6" />
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">收費方式</h2>
            <p className="text-xl text-gray-600">透明公平的定價機制，讓學習更有價值</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-orange-100 text-orange-800">體驗課程</Badge>
                <CardTitle className="text-2xl">試教課程</CardTitle>
                <CardDescription>25分鐘體驗</CardDescription>
                <div className="text-3xl font-bold text-orange-600 mt-4">
                  正式課程 50% 折扣
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm">25分鐘一對一教學</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm">了解教師教學風格</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm">不滿意可退費</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-blue-100 text-blue-800">推薦方案</Badge>
                <CardTitle className="text-2xl">正式課程</CardTitle>
                <CardDescription>50分鐘完整課程</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">
                  教師定價 × 1.25
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">4/8/12/16堂課選擇</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">自動月扣款</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">隨時取消訂閱</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-green-100 text-green-800">品質保證</Badge>
                <CardTitle className="text-2xl">退款保障</CardTitle>
                <CardDescription>30天保證期</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">
                  100% 退款
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm">購買後30天內</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm">未完成課程退款</span>
                  </li>
                  <li className="flex items-center space-x-2">
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
      <section id="teacher" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              成為首批元老級教師
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              留下您的電子郵件，我們將在平台上線時第一時間通知您，並邀請您成為
              <br />
              No Limit Tutor 的元老級教師
            </p>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 text-xl"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              立即加入
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              * 完全免費，我們承諾不會向您收取任何費用
            </p>
          </div>
        </div>
      </section>

      {/* Email Collection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">搶先體驗</h2>
            <p className="text-xl text-gray-600 mb-8">
              訂閱我們的通知，第一時間了解 No Limit Tutor 最新動態
            </p>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="請輸入您的電子郵件地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 text-lg"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                >
                  {isSubmitting ? '提交中...' : '立即訂閱'}
                </Button>
              </div>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              * 完全免費，我們承諾不會向您收取任何費用
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">No Limit Tutor</span>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">
                突破規則，知識無限 - 讓每個人都能享受優質的一對一教學
              </p>
              <p className="text-gray-500 text-sm">
                © 2024 No Limit Tutor. 保留所有權利。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
