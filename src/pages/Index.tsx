
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Award, BookOpen, Globe, Zap, Heart, Star, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import InternalLinks from "@/components/InternalLinks";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "No Limit Tutor 無限家教",
    "alternateName": "NLT",
    "url": "https://join.nolimittutor.com",
    "logo": "https://lovable.dev/lovable-uploads/3a04511e-76e1-4dd5-95cc-61798d6a055b.png",
    "description": "台灣首個民主、群眾導向的線上一對一家教平台，提供無抽成、彈性排課的教學空間",
    "foundingDate": "2025",
    "foundingLocation": "台灣",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info.nolimittutor@gmail.com",
      "contactType": "customer support"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "教學服務",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "線上一對一家教",
            "description": "專業視訊教學系統，彈性預約排課"
          }
        }
      ]
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "No Limit Tutor 是什麼？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No Limit Tutor 是台灣首個民主、群眾導向的線上一對一家教平台。我們不從教師收入抽成，保障服務費由學生端負擔，讓教學更自由、收費更公平。"
        }
      },
      {
        "@type": "Question",
        "name": "使用 No Limit Tutor 要收費嗎？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "目前招募階段完全免費！我們正在招募首批元老級教師與早鳥學生。教師註冊免費且無抽成，學生可享試教課 50% 折扣。"
        }
      }
    ]
  };

  const combinedStructuredData = [structuredData, faqStructuredData];

  return (
    <>
      <SEOHead
        title="台灣線上家教平台 | No Limit Tutor 教師學生招募中"
        description="NLT 是台灣全新線上一對一家教平台，提供無抽成、彈性排課的教學空間。現正招募元老級教師與早鳥學生，免費加入，搶先體驗！"
        keywords="台灣線上家教平台,線上家教,家教工作,教師學生招募,一對一家教,視訊教學,家教媒合,無抽成家教"
        ogTitle="No Limit Tutor 招募教師與學生中｜台灣線上家教平台"
        ogDescription="無抽成、彈性教學、全台最自由的家教平台。NLT 正在招募首批教師與學生，免費申請中！"
        ogImage="https://lovable.dev/lovable-uploads/3a04511e-76e1-4dd5-95cc-61798d6a055b.png"
        canonicalUrl="https://join.nolimittutor.com/"
        structuredData={combinedStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30">
                🚀 台灣首個民主家教平台
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                No Limit Tutor
                <span className="block text-2xl md:text-3xl font-normal mt-2 text-blue-100">
                  無限家教 • 無限可能
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                台灣首個<strong className="text-white">群眾導向</strong>線上家教平台
                <br />
                <span className="text-lg">教師無抽成 • 彈性教學 • 民主決策</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdvQvq7gzTBJ6xU3FI23m1JXxDWaGjWGVXlJemlC21sKrJTkQ/viewform', '_blank')}
                >
                  <Users className="mr-2" />
                  教師免費申請
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSczgFI1_sCtRd6xRPtvBMKi1R95aT7xSHaE79eC7KmQfODnDQ/viewform', '_blank')}
                >
                  <BookOpen className="mr-2" />
                  學生搶先登記
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-sm text-blue-100">教師抽成</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-blue-100">彈性排課</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-blue-100">民主決策</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 opacity-20">
            <div className="w-20 h-20 bg-white rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <div className="w-16 h-16 bg-pink-300 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Status Banner */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <div className="container mx-auto">
            <div className="flex items-center">
              <CheckCircle className="text-green-400 mr-3" />
              <div>
                <p className="font-semibold text-green-800">🎯 現在加入 = 元老級身份</p>
                <p className="text-green-700">搶先體驗台灣最自由的家教平台，享受終身優惠權益</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">為什麼選擇 No Limit Tutor？</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                我們重新定義家教平台，讓教學回歸純粹，讓學習更有價值
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">民主式群眾導向</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    教師自由授課，學生自選課題。平台功能由使用者共同決策，真正屬於大家的教育空間。
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">專業視訊教學</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    穩定的線上預約與視訊上課系統，讓距離不再是學習的障礙，隨時隨地開始學習。
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-200 transition-all hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">教師零抽成</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    教師獲得100%課程收入，平台僅收取學生端合理保障費用，打造最公平的教學環境。
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recruitment Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">🚀 元老招募進行中</h2>
              <p className="text-xl mb-8 text-blue-100">
                成為台灣最自由家教平台的創始成員，享受終身專屬權益
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-white/10 border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Award className="mr-3 w-6 h-6" />
                      元老級教師招募
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> 完全免費加入</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> 零抽成政策</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> 優先推薦權</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> 平台決策參與</li>
                    </ul>
                    <Button 
                      className="w-full mt-4 bg-white text-blue-600 hover:bg-blue-50"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdvQvq7gzTBJ6xU3FI23m1JXxDWaGjWGVXlJemlC21sKrJTkQ/viewform', '_blank')}
                    >
                      立即申請教師
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Star className="mr-3 w-6 h-6" />
                      早鳥學生登記
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> 試教課50%折扣</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> 不滿意全額退費</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> 優質師資優先選</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> 終身會員優惠</li>
                    </ul>
                    <Button 
                      className="w-full mt-4 bg-white text-purple-600 hover:bg-purple-50"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSczgFI1_sCtRd6xRPtvBMKi1R95aT7xSHaE79eC7KmQfODnDQ/viewform', '_blank')}
                    >
                      搶先登記學習
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">常見問題</h2>
              <p className="text-xl text-gray-600">解答您對 No Limit Tutor 的疑問</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">No Limit Tutor 是什麼？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    No Limit Tutor 是台灣首個民主、群眾導向的線上一對一家教平台。我們不從教師收入抽成，
                    保障服務費由學生端負擔，讓教學更自由、收費更公平。平台提供視訊教學、師資媒合、
                    彈性預約等完整服務。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">使用 No Limit Tutor 要收費嗎？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    目前招募階段完全免費！我們正在招募首批元老級教師與早鳥學生。教師註冊免費且無抽成，
                    學生可享試教課50%折扣，不滿意可全額退費。平台正式營運後僅收取合理的保障服務費。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg">如何成為 No Limit Tutor 的教師？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    目前開放元老級教師招募，完全免費加入。您可以填寫教師申請表單，我們將在平台上線時
                    優先通知您註冊。教師可自由設定課程價格，平台不收取任何抽成費用。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-pink-500">
                <CardHeader>
                  <CardTitle className="text-lg">No Limit Tutor 有什麼特色？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    我們的三大特色：1) 民主式群眾導向平台 - 教師自由授課，學生自選課題；
                    2) 專業視訊教學系統 - 穩定的線上預約與視訊上課；3) 不抽成制度 - 教師獲得完整報酬，
                    打造公平的學習環境。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Internal Links */}
          <InternalLinks />

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-3xl p-12 mt-20">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">準備好加入革命了嗎？</h2>
            <p className="text-xl text-gray-600 mb-8">
              成為台灣教育改革的一份子，讓學習更自由、教學更公平
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 font-semibold rounded-full"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdvQvq7gzTBJ6xU3FI23m1JXxDWaGjWGVXlJemlC21sKrJTkQ/viewform', '_blank')}
              >
                <Users className="mr-2" />
                我要成為教師
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg border-2 font-semibold rounded-full"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSczgFI1_sCtRd6xRPtvBMKi1R95aT7xSHaE79eC7KmQfODnDQ/viewform', '_blank')}
              >
                <BookOpen className="mr-2" />
                我要開始學習
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center mt-16 p-8 border-t">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
              <span className="text-lg font-medium">聯絡我們</span>
            </div>
            <p className="text-gray-600">
              Email: <a href="mailto:info.nolimittutor@gmail.com" className="text-blue-600 hover:underline">info.nolimittutor@gmail.com</a>
            </p>
            <p className="text-gray-600 mt-2">
              追蹤我們：
              <a href="https://www.facebook.com/nolimittutor" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">Facebook</a> • 
              <a href="https://www.instagram.com/no_limit_tutor/" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
