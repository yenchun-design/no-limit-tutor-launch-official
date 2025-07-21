import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Video, Shield, Star, MessageSquare, Calendar, Zap, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import nltLogo from "../assets/nlt-logo-new.png";
import heroImage from "../assets/online-tutoring-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Header */}
      <header className="border-b border-border/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/7b719794-14bd-4d76-97c8-2bb7e2c88b06.png" alt="No Limit Tutor" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-foreground">No Limit Tutor</h1>
                <p className="text-sm text-muted-foreground">無限家教</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">平台特色</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">收費方式</a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors">學習流程</a>
              <a href="#join" className="text-foreground hover:text-primary transition-colors">加入我們</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-foreground leading-tight">
                  No Limit Tutor<br />
                  <span className="text-primary">無限家教</span>
                </h1>
                <div className="space-y-3 text-xl text-foreground leading-relaxed">
                  <p>
                    連接全台灣優質教師與學生，提供個人化的線上一對一視訊教學體驗、訂課系統、自動上課通知與支付安全保證。
                  </p>
                  <p>
                    專業師資、彈性時間、為學生量身訂製的學習方案
                  </p>
                  <p>
                    自由、民主、群眾導向，無抽成的兼職教課環境
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-elegant hover:shadow-glow transition-all duration-300"
                  style={{ transition: 'var(--transition-smooth)' }}
                  onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                >
                  成為 No Limit Tutor 首批元老級教師
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="現代線上家教教學" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-8 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              平台特色
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">為什麼選擇 No Limit Tutor？</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我們致力於打造最優質的線上教學體驗，讓學習變得更有效率、更有趣
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">個人化學習</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  根據每位學生的學習需求和進度，量身打造專屬的教學計畫
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <Video className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">視訊教學</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  高品質的線上視訊教學系統，讓您在家就能享受面對面的學習體驗
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">安全保障</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  完善的退款機制和品質保證，讓您的學習投資更有保障
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">優質師資</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  嚴格篩選的專業教師，確保每一堂課都是高品質的學習體驗
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">彈性時間</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  24/7 彈性預約系統，配合您的時間安排，學習不受限制
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">即時互動</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  內建聊天系統和互動工具，讓師生溝通更順暢，學習更有效
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4" style={{ background: 'var(--gradient-subtle)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">透明公平的定價機制</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              為教師與學生創造雙贏的學習環境
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Trial Class */}
            <Card className="border-secondary shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-8 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
                  試教課程
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">試教課程</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">25分鐘體驗</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">
                  正式課程 50% 折扣
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  25分鐘一對一教學
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  了解教師教學風格
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  不滿意可退費
                </div>
              </CardContent>
            </Card>

            {/* Regular Course */}
            <Card className="border-border shadow-elegant hover:shadow-glow transition-all duration-300 relative bg-card/80 backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  進入課程
                </div>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-card-foreground">正式課程</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">50分鐘完整課程</CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">
                  教師報價 + 系統服務費
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  費用已含：平台內視訊、安全金流、試教課退費保障機制
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  排課系統 (自動通知老師，不用寫訊息)
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  評價系統與安全回報機制
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  4/8/12/16堂課選擇
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  自動月訂制
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  隨時取消訂閱
                </div>
              </CardContent>
            </Card>

            {/* Refund Policy */}
            <Card className="border-accent shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-8 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
                  品質保證
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">退款保障</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">30天保證期</CardDescription>
                <div className="text-3xl font-bold text-accent mt-4">
                  100% 退款
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-accent mr-3" />
                  購買後30天內
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-accent mr-3" />
                  未完成課程退款
                </div>
                <div className="flex items-center text-card-foreground">
                  <Check className="h-5 w-5 text-accent mr-3" />
                  無條件申請
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-8 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              學習流程
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">簡單三步驟，開始您的學習之旅</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              從註冊到上課，我們讓整個過程變得簡單而順暢
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">選擇教師</h3>
              <p className="text-muted-foreground">
                瀏覽教師檔案，查看教學經驗、學生評價，選擇最適合您的老師
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">預約試教</h3>
              <p className="text-muted-foreground">
                預約25分鐘試教課程，體驗教師的教學風格，確認是否符合需求
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">開始學習</h3>
              <p className="text-muted-foreground">
                購買課程方案，開始您的個人化學習旅程，隨時追蹤學習進度
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Teacher Section */}
      <section id="join" className="py-20 px-4" style={{ background: 'var(--gradient-subtle)' }}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-8 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              教師招募
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              成為首批元老級教師
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              留下您的聯繫方式，我們將在平台上線第一時間通知您，並邀請您成為<br />
              No Limit Tutor 的元老級教師
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 mb-8"
              style={{ transition: 'var(--transition-smooth)' }}
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              立即加入
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>* 完全免費，我們承諾不會向您收取任何費用</p>
              <p>您的個人資料（包括電子郵件與回答內容）將依據隱私政策，僅限於 No Limit Tutor 內部使用與儲存，絕不對外公開</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-8 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              搶先追蹤
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              搶先追蹤
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              第一時間了解 No Limit Tutor 最新動態
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-elegant hover:shadow-glow transition-all duration-300"
                style={{ transition: 'var(--transition-smooth)' }}
                onClick={() => window.open('https://www.facebook.com/nolimittutor', '_blank')}
              >
                立即追蹤 No Limit Tutor 粉絲專業
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-elegant hover:shadow-glow transition-all duration-300"
                style={{ transition: 'var(--transition-smooth)' }}
                onClick={() => window.open('https://www.instagram.com/no_limit_tutor/', '_blank')}
              >
                立即追蹤 Instagram @no_limit_tutor 迷因粉專，看國外迷因學英文
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/lovable-uploads/7b719794-14bd-4d76-97c8-2bb7e2c88b06.png" alt="No Limit Tutor" className="h-8 w-auto" />
                <div>
                  <h3 className="text-lg font-bold text-background">No Limit Tutor</h3>
                  <p className="text-sm text-muted">無限家教</p>
                </div>
              </div>
              <p className="text-muted leading-relaxed">
                專業的線上一對一教學平台，連接全台灣最優質的教師與學生
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-background">快速連結</h4>
              <ul className="space-y-2 text-muted">
                <li><a href="#features" className="hover:text-background transition-colors">平台特色</a></li>
                <li><a href="#pricing" className="hover:text-background transition-colors">收費方式</a></li>
                <li><a href="#process" className="hover:text-background transition-colors">學習流程</a></li>
                <li><a href="#join" className="hover:text-background transition-colors">加入我們</a></li>
                <li><Link to="/privacy" className="hover:text-background transition-colors">隱私條款</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-background">聯絡資訊</h4>
              <div className="space-y-2 text-muted">
                <p>客服信箱：info.nolimittutor@gmail.com</p>
                <p>服務時間：週一至週五 9:00-18:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-muted mt-8 pt-8 text-center text-muted">
            <p>© 2024 No Limit Tutor. No Limit Tutor 無限家教為睿思博遠有限公司註冊之商標，All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
