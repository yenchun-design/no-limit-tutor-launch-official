
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Zap, Target, CheckCircle, Star } from "lucide-react";
import { EmailSignupPopup } from "@/components/EmailSignupPopup";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { useEmailCount } from "@/hooks/useEmailCount";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isTriggered } = useScrollTrigger('features-section');
  const { count } = useEmailCount();

  // Auto-open popup when scroll trigger is activated
  useState(() => {
    if (isTriggered && !isPopupOpen) {
      setIsPopupOpen(true);
    }
  }, [isTriggered]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">NLT AI</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">功能特色</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">關於我們</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">聯絡我們</a>
              <Button onClick={() => setIsPopupOpen(true)}>立即加入</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI 驅動的<br />語言學習革命
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              結合人工智慧與創新教學法，為教師和學生提供個人化、高效的語言學習體驗
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => setIsPopupOpen(true)}
              >
                開始使用 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                觀看演示
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>已有 <span className="font-semibold text-secondary">{count}+</span> 位老師加入</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">功能特色</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我們的 AI 平台為語言教學帶來前所未有的創新體驗
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">智能課程設計</h3>
              <p className="text-muted-foreground">
                AI 自動分析學生程度，量身打造最適合的學習內容和進度安排
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">即時互動回饋</h3>
              <p className="text-muted-foreground">
                提供即時的語音辨識和發音矯正，讓學習更有效率
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">個人化學習路徑</h3>
              <p className="text-muted-foreground">
                根據每位學生的學習風格和進度，提供專屬的學習建議
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                為什麼選擇 NLT AI？
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                我們結合最新的 AI 技術與教育專業，創造出真正能幫助教師和學生的學習平台
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">專業教育團隊</h3>
                    <p className="text-muted-foreground">由資深語言教師和 AI 專家共同開發</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">持續創新</h3>
                    <p className="text-muted-foreground">不斷更新和改進，跟上最新的教學趨勢</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">全方位支援</h3>
                    <p className="text-muted-foreground">提供完整的技術支援和教學資源</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-5 h-5 text-secondary" />
                    <span className="font-semibold">用戶好評</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "NLT AI 完全改變了我的教學方式，學生的學習成效顯著提升！"
                  </p>
                  <div className="text-sm text-muted-foreground">
                    - 王老師，台北市某國中
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            準備好開始 AI 教學之旅了嗎？
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            加入我們的教師社群，一起探索 AI 在語言教學上的無限可能
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6"
            onClick={() => setIsPopupOpen(true)}
          >
            立即免費體驗 <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">NLT AI</div>
              <p className="text-muted-foreground mb-4">
                致力於用 AI 技術革新語言教學
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">產品</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>AI 課程設計</div>
                <div>智能評測</div>
                <div>學習分析</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">支援</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>使用說明</div>
                <div>技術支援</div>
                <div>常見問題</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">聯絡我們</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>contact@nlt-ai.com</div>
                <div>+886-2-1234-5678</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 NLT AI. 版權所有。</p>
          </div>
        </div>
      </footer>

      {/* Email Signup Popup */}
      <EmailSignupPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        currentCount={count}
      />

      <Toaster />
    </div>
  );
};

export default Index;
