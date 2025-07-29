import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, MessageSquare, Star, Shield, Zap } from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">N</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-black">NO LIMIT TUTOR</h1>
                <p className="text-sm text-gray-600">無限家教</p>
              </div>
            </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">首頁</button>
            <button onClick={() => scrollToSection('principles')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">NLT 三大主張</button>
            <button onClick={() => scrollToSection('features')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">功能特色</button>
            <button onClick={() => scrollToSection('process')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">學習流程</button>
            <button onClick={() => scrollToSection('pricing')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">收費方式</button>
            <button onClick={() => scrollToSection('cta')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">免費體驗</button>
          </nav>
        </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-amber-700 mb-6">
            台灣線上家教平台 - No Limit Tutor
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            NLT 是台灣全新線上一對一家教平台，提供無抽成、彈性排課的教學空間。現正招募元老級教師與早鳥學生，免費加入，搶先體驗！
          </p>
          <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
            立即免費加入 <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Three Service Principles Section */}
      <section id="principles" className="py-20 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-12 text-center">
            NLT 三大主張
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 1: Democratic Platform */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Users className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                民主式群眾導向平台
              </h3>
              <p className="text-gray-600">
                教師自由授課，學生自選課題。NLT 打造開放、對等的教學環境，讓知識交流更有效率。
              </p>
            </div>

            {/* Principle 2: Professional Tutoring System */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <BookOpen className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                專業視訊教學系統
              </h3>
              <p className="text-gray-600">
                穩定的線上預約與視訊上課。NLT 提供流暢的教學體驗，讓師生專注於知識的傳遞與吸收。
              </p>
            </div>

            {/* Principle 3: No Commission System */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <MessageSquare className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">不抽成制度</h3>
              <p className="text-gray-600">
                教師獲得完整報酬，打造公平的學習環境。NLT 讓教師的努力得到應有的回報，激勵更多優秀人才投入教學。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-amber-700 mb-12 text-center">
            功能特色
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Personalized Learning */}
            <div className="p-6 bg-amber-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Star className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                個人化學習體驗
              </h3>
              <p className="text-gray-600">
                根據學生的程度與需求，量身打造學習內容，讓學習更有效率。
              </p>
            </div>

            {/* Feature 2: Secure Payment */}
            <div className="p-6 bg-amber-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Shield className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                安全支付環境
              </h3>
              <p className="text-gray-600">
                提供安全的支付方式，保障師生的權益，讓交易更安心。
              </p>
            </div>

            {/* Feature 3: Real-time Interaction */}
            <div className="p-6 bg-amber-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Zap className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                即時互動教學
              </h3>
              <p className="text-gray-600">
                透過視訊、文字等多種方式，讓師生即時互動，提升學習效果。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-12 text-center">
            學習流程
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1: Registration */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-200 text-blue-700 font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                免費註冊
              </h3>
              <p className="text-gray-600">
                填寫基本資料，即可免費成為 NLT 的一份子。
              </p>
            </div>

            {/* Step 2: Find a Tutor */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-200 text-blue-700 font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                尋找家教
              </h3>
              <p className="text-gray-600">
                瀏覽家教列表，找到最適合您的老師。
              </p>
            </div>

            {/* Step 3: Start Learning */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-200 text-blue-700 font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                開始學習
              </h3>
              <p className="text-gray-600">
                與家教預約時間，開始您的學習之旅。
              </p>
            </div>

            {/* Step 4: Improve Skills */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-200 text-blue-700 font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                提升技能
              </h3>
              <p className="text-gray-600">
                透過 NLT 的專業家教，不斷提升您的技能。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-amber-700 mb-12 text-center">
            收費方式
          </h2>
          <p className="text-xl text-gray-700 mb-8 text-center">
            NLT 提供多種收費方案，讓您根據需求選擇最適合的方案。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                基本方案
              </h3>
              <p className="text-gray-600 mb-4">
                適合初學者，提供基本的家教服務。
              </p>
              <div className="text-4xl font-extrabold text-amber-700 mb-4">
                免費
              </div>
              <Button className="w-full bg-amber-500 text-white hover:bg-amber-600">
                立即體驗
              </Button>
            </div>

            {/* Standard Plan */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                標準方案
              </h3>
              <p className="text-gray-600 mb-4">
                適合進階學習者，提供更豐富的家教服務。
              </p>
              <div className="text-4xl font-extrabold text-amber-700 mb-4">
                NT$ 500 / 月
              </div>
              <Button className="w-full bg-amber-500 text-white hover:bg-amber-600">
                立即訂閱
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                高級方案
              </h3>
              <p className="text-gray-600 mb-4">
                適合專業學習者，提供最完整的家教服務。
              </p>
              <div className="text-4xl font-extrabold text-amber-700 mb-4">
                NT$ 1000 / 月
              </div>
              <Button className="w-full bg-amber-500 text-white hover:bg-amber-600">
                立即訂閱
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-8">
            立即加入 No Limit Tutor，開啟您的學習之旅！
          </h2>
          <p className="text-xl text-gray-100 mb-12">
            NLT 提供最自由、最彈性的家教平台，讓您輕鬆找到最適合的家教。
          </p>
          <Button size="lg" className="bg-white text-amber-500 hover:bg-gray-100">
            免費註冊 <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Email Subscription Section */}
      <EmailSubscription />

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 No Limit Tutor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
