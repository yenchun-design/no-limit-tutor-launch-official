
import React, { useState } from 'react';
import { CheckCircle, Users, Shield, Clock, Star, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const Index = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const questions = [
    {
      question: "NLT 跟其他平台有什麼不同？",
      answer: "NLT 採用透明定價，老師抽成 0%，僅收取 25% 保障服務費。提供完整退款保障、專業客服、安全金流等服務，讓教學更有保障。"
    },
    {
      question: "如果我對課程不滿意怎麼辦？",
      answer: "我們提供 100% 退款保障。如果您對試教課程不滿意，我們會全額退款。未消耗的課程餘額也會 100% 退回，不像其他平台會有各種限制。"
    },
    {
      question: "保障服務費包含什麼服務？",
      answer: "保障服務費包含：100% 退款保障、安全金流處理、平台內視訊系統、客服支援、老師評價系統、自動排課通知、檢舉仲裁機制等完整服務。"
    },
    {
      question: "老師如何在 NLT 開始教學？",
      answer: "老師只需免費註冊，建立個人教學頁面，設定課程內容和時間，學生就能找到並預約您的課程。我們提供完整的教學工具和客服支援。"
    },
    {
      question: "平台的視訊系統穩定嗎？",
      answer: "是的，我們使用專業的視訊技術，確保上課品質穩定。同時提供錄影功能、聊天室、白板工具等完整的教學功能。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png" alt="NLT Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-900">NLT</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">NLT 是什麼</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">如何運作</button>
                <button onClick={() => scrollToSection('how-to-use')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">如何使用</button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">課程方案</button>
                <button onClick={() => scrollToSection('comparison')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">平台比較</button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">熱門問答</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium w-full text-left">NLT 是什麼</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium w-full text-left">如何運作</button>
              <button onClick={() => scrollToSection('how-to-use')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium w-full text-left">如何使用</button>
              <button onClick={() => scrollToSection('pricing')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium w-full text-left">課程方案</button>
              <button onClick={() => scrollToSection('comparison')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium w-full text-left">平台比較</button>
              <button onClick={() => scrollToSection('faq')} className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium w-full text-left">熱門問答</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6 md:mb-8">
              <img src="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png" alt="NLT Logo" className="w-20 h-20 md:w-24 md:h-24" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              No Limit Tutor
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
              透明定價、零抽成的線上教學平台
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-500 mb-8 md:mb-10 max-w-2xl mx-auto">
              老師專心教學，學生安心學習，讓教育回歸本質
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors shadow-lg">
                開始使用
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">NLT 是什麼</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              一個真正為教育而生的平台，讓老師和學生都能獲得最好的體驗
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">老師零抽成</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">
                老師設定多少學費，就收到多少，沒有任何平台抽成
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Shield className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">完整保障</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">
                100% 退款保障，安全金流，讓學習沒有後顧之憂
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Clock className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">彈性安排</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">
                自由選擇上課時間，I人E人都愛的智能排課系統
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">NLT 如何運作</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              簡單四步驟，開始您的學習之旅
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">免費註冊，免費使用</h3>
              <p className="text-gray-600">
                無需任何費用即可開始使用平台
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">老師自訂每堂課 (50 分鐘) 學費</h3>
              <p className="text-gray-600">
                老師可自由設定課程價格
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">NLT 在老師費用基礎加保障服務費</h3>
              <p className="text-gray-600">
                透明加收 25% 保障服務費
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">學生支付老師與 NLT 保障服務費，享受平台保障的權利</h3>
              <p className="text-gray-600">
                享受完整保障服務
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              注: 保障服務費是您學習路上的最佳投資，確保優質教學體驗
            </p>
          </div>
        </div>
      </section>

      {/* How to use Section */}
      <section id="how-to-use" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">如何使用 NLT</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              三個簡單步驟，開始您的學習體驗
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">老師建立自介頁，學生瀏覽選擇老師</h3>
              <p className="text-gray-600">
                瀏覽老師個人頁面，了解教學風格和專業背景
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">學生選擇時間，預約上課</h3>
              <p className="text-gray-600">
                彈性選擇適合的時間，輕鬆預約課程
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">上 NLT 視訊，開始課程</h3>
              <p className="text-gray-600">
                使用平台內建視訊系統，享受高品質教學
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">學生自主學習管理</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">即時聊天室</h4>
                  <p className="text-gray-600 text-sm">課堂內外都能與老師即時溝通</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">彈性退款機制</h4>
                  <p className="text-gray-600 text-sm">100% 退款保障，學習無壓力</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">學習進度追蹤</h4>
                  <p className="text-gray-600 text-sm">清楚掌握學習狀況和進度</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">課程評價系統</h4>
                  <p className="text-gray-600 text-sm">分享學習心得，幫助其他學生選擇</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Fee Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-xl md:text-2xl mb-4 transform -rotate-1 shadow-lg">
              進入課程
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              保障服務費用來確保
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto border-4 border-yellow-400">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800 font-medium">學生試教不滿意，100% 退款</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800 font-medium">未消耗課程，剩餘金額 100% 退回 (不會像其他平台一樣不給退)</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800 font-medium">I人、E人都愛的排課系統 (自動通知老師，不用寫訊息)</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800 font-medium">老師評價系統</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800 font-medium">平台內視訊、安全金流</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800 font-medium">安全回報機制</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-800 font-medium">檢舉與仲裁機制</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-lg px-6 py-4 shadow-lg border-2 border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">NLT 學習體驗流程</h3>
              <p className="text-gray-600">從註冊到學習，每一步都有完整保障</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">彈性課程方案</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              根據您的學習需求，選擇最適合的課程頻率
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Teacher Card */}
            <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-xl p-6 md:p-8 text-white shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-white rounded-lg p-3 mr-4">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">對老師</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-gray-900 mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-green-600">0%</span>
                  <p className="text-xl font-bold">平台抽成</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">設定 $500/堂，實拿 $500</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">學生先付款再上課</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">無隱藏費用</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Card */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl p-6 md:p-8 text-white shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-white rounded-lg p-3 mr-4">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">對學生</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-gray-900 mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-blue-600">25%</span>
                  <p className="text-xl font-bold">保障服務費</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">老師設定 $500，學生付 $625</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">試教退款依據係保障服務費</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">第三方服務、爭議排解</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">隨時可退款成新台幣合幣</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">與老師們聊天、評價系統</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="font-bold text-gray-900 mb-2">1堂/週</h4>
              <p className="text-sm text-gray-600">適合入門學習</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="font-bold text-gray-900 mb-2">2堂/週</h4>
              <p className="text-sm text-gray-600">穩定進步節奏</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 text-center border-2 border-blue-200">
              <h4 className="font-bold text-blue-600 mb-2">3堂/週</h4>
              <p className="text-sm text-blue-600">推薦方案</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="font-bold text-gray-900 mb-2">彈性安排</h4>
              <p className="text-sm text-gray-600">自由調整</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">與其他平台比較</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              看看 NLT 如何為您提供更好的價值
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-white sticky left-0 bg-gray-900 z-20 w-32">平台</th>
                    <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-white min-w-[120px]">老師抽成</th>
                    <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-white min-w-[120px]">學生額外費用</th>
                    <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-white min-w-[200px]">退款政策</th>
                    <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-white min-w-[150px]">總成本影響</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-green-100 z-10 w-32">No Limit Tutor</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-green-600">0%</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">25%</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-green-600">100% 退款，剩餘課程 100% 退回</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-green-600">25%</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-white z-10 w-32">平台A</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">8-38%</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">10%</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">退款麻煩有匯損，預設退成平台幣</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">18-48%</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-white z-10 w-32">平台B</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">20-35%</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">0%</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">極難退款，通常退不成</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">20-35%</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-white z-10 w-32">其他多數平台</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black ">不透明</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black ">不透明</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black ">超過七天不能退款，只能轉讓或吸收損失</td>
                    <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">不透明，可能在33-65%之間不等</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * 數據基於公開資料和用戶反饋統計，實際費用可能因個別情況而異
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">熱門問答集</h2>
            <p className="text-lg text-gray-600">
              解答您對 NLT 的疑問
            </p>
          </div>
          
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-semibold text-gray-900 leading-relaxed">{item.question}</span>
                  {activeQuestion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                  )}
                </button>
                {activeQuestion === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            準備開始您的學習之旅？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            加入 NLT，體驗零抽成、有保障的線上教學平台
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
              立即註冊
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png" alt="NLT Logo" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">NLT</span>
              </div>
              <p className="text-gray-400">
                讓教育回歸本質的線上教學平台
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">服務</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">線上教學</a></li>
                <li><a href="#" className="hover:text-white transition-colors">課程管理</a></li>
                <li><a href="#" className="hover:text-white transition-colors">學習追蹤</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">支援</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">幫助中心</a></li>
                <li><a href="#" className="hover:text-white transition-colors">聯絡我們</a></li>
                <li><a href="#" className="hover:text-white transition-colors">回報問題</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">法律</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">隱私政策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">服務條款</a></li>
                <li><a href="#" className="hover:text-white transition-colors">使用規範</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 No Limit Tutor. 保留所有權利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
