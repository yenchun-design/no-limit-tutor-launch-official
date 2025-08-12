import { useState, useEffect } from 'react';
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
  ArrowRight,
  Mail,
  ExternalLink,
  UserCheck
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailCount, setEmailCount] = useState(11);

  // Fetch email count from Supabase
  useEffect(() => {
    const fetchEmailCount = async () => {
      try {
        const { count, error } = await supabase
          .from('email_list')
          .select('*', { count: 'exact', head: true });
        
        if (error) {
          console.error('Error fetching email count:', error);
        } else if (count !== null) {
          setEmailCount(count);
        }
      } catch (error) {
        console.error('Error fetching email count:', error);
      }
    };

    fetchEmailCount();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "請輸入 Email",
        description: "請輸入有效的 Email 地址",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingEmail(true);
    
    try {
      const { error } = await supabase
        .from('email_list')
        .insert([{ email: email.trim() }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Email 已存在",
            description: "此 Email 已在我們的通知列表中",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "訂閱成功！",
          description: "我們會在平台上線時第一時間通知你",
        });
        setEmail('');
        setEmailCount(prevCount => prevCount + 1);
      }
    } catch (error) {
      toast({
        title: "訂閱失敗",
        description: "請稍後再試，或聯繫我們的客服",
        variant: "destructive",
      });
      console.error('Email subscription error:', error);
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header - Simplified for mobile */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 border-2 md:border-4 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-lg md:text-2xl font-black text-black">N</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-xl font-black text-black uppercase tracking-tight">No Limit Tutor</span>
              <span className="text-xs md:text-sm text-amber-600 font-black">無限家教</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">首頁</button>
            <button onClick={() => scrollToSection('principles')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">主張</button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">功能</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">流程</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">收費</button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-xs px-4 py-2 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              立即加入
            </Button>
          </nav>
          
          <div className="lg:hidden">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-xs px-3 py-2 uppercase tracking-wide transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              加入
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Streamlined for mobile */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-red-400">
        <div className="relative container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              {/* Title and Logo - Mobile Optimized */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] md:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                    No Limit<br className="md:hidden" /> Tutor
                  </h1>
                  <div className="mt-1 mb-2 md:mt-2 md:mb-4">
                    <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] md:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                      無限家教
                    </span>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/6ed7f059-777c-4ced-8660-78aa11ba900f.png" 
                    alt="No Limit Tutor Logo" 
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                  />
                </div>
              </div>
              
              {/* Main Value Proposition - Simplified */}
              <div className="mt-4 md:mt-8">
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black text-black leading-tight bg-white px-3 md:px-6 py-2 md:py-4 border-3 md:border-6 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
                  台灣首個民主、群眾導向線上家教平台
                </h2>
              </div>
              
              {/* Key Benefits - Mobile Streamlined */}
              <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-black leading-relaxed max-w-4xl bg-white border-3 md:border-6 border-black p-3 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-6 md:mt-10">
                <p className="font-bold text-sm md:text-xl">
                  專為台灣師生打造，不抽成、100% 退款保障、確保安全
                </p>
                <div className="grid grid-cols-1 gap-2 md:gap-3 bg-gradient-to-r from-orange-100 to-amber-100 border-2 md:border-4 border-black p-3 md:p-5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 md:w-4 md:h-4 bg-red-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
                    <span className="font-black text-xs md:text-base">不滿意試教？全額退費</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 md:w-4 md:h-4 bg-blue-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
                    <span className="font-black text-xs md:text-base">零抽成、零綁約、零名目費用</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 md:w-4 md:h-4 bg-green-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
                    <span className="font-black text-xs md:text-base">公平爭議處理機制</span>
                  </div>
                </div>
              </div>

              {/* CTA Section - Mobile First Design */}
              <div className="flex flex-col items-center gap-4 md:gap-6 pt-4 md:pt-6">
                {/* Teacher Count */}
                <div className="w-full max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-3 md:border-6 border-black px-4 md:px-8 py-3 md:py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] text-center transform rotate-1">
                    <h2 className="text-lg md:text-3xl font-black text-black uppercase tracking-wide mb-1 md:mb-2">
                      已有 {emailCount} 位老師申請
                    </h2>
                    <p className="text-sm md:text-xl font-black text-black">
                      搶先成為元老級教師
                    </p>
                  </div>
                </div>

                {/* Mobile Optimized Action Cards */}
                <div className="w-full max-w-4xl mx-auto px-2 md:px-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    {/* Teacher Signup */}
                    <div className="space-y-3 md:space-y-4">
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-3 md:border-6 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-base md:text-xl px-4 md:px-10 py-4 md:py-7 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                        onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                      >
                        立即加入教師招募
                        <ArrowRight className="ml-1 md:ml-2 w-4 h-4 md:w-6 md:h-6" />
                      </Button>

                      {/* Email Form - Simplified */}
                      <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-3 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] p-3 md:p-6">
                        <div className="flex items-center justify-center mb-2 md:mb-4">
                          <Mail className="w-4 h-4 md:w-6 md:h-6 text-black mr-1 md:mr-2" />
                          <h3 className="text-sm md:text-lg font-black text-black">Email 通知</h3>
                        </div>
                        <p className="text-xs md:text-lg font-bold text-black text-center mb-3 md:mb-5">搶先加入首批教師！</p>
                        <form onSubmit={handleEmailSubmit} className="space-y-2 md:space-y-4">
                          <input
                            type="email"
                            placeholder="請輸入 Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-2 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold focus:outline-none focus:ring-2 focus:ring-black"
                            required
                          />
                          <button
                            type="submit"
                            disabled={isSubmittingEmail}
                            className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black border-2 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm md:text-lg py-2 md:py-3 uppercase tracking-wide transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmittingEmail ? '訂閱中...' : '立即加入'}
                            <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-5 md:h-5" />
                          </button>
                        </form>
                        <p className="text-xs font-bold text-black text-center mt-2 md:mt-4">
                          * 不濫用、不分享給第三方
                        </p>
                      </div>
                    </div>

                    {/* Student Section - Simplified */}
                    <div className="bg-white border-3 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] p-3 md:p-6">
                      <div className="mb-3 md:mb-6 text-center">
                        <div className="flex items-center justify-center mb-2 md:mb-4">
                          <UserCheck className="w-4 h-4 md:w-6 md:h-6 text-blue-600 mr-1 md:mr-2" />
                          <h3 className="text-sm md:text-lg font-black text-black">學生專區</h3>
                        </div>
                        <p className="text-sm md:text-lg font-bold text-black mb-3 md:mb-4">
                          平台開發中，搶先登記！
                        </p>
                        <div className="bg-blue-50 border-2 md:border-3 border-black p-2 md:p-4 mb-3 md:mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <p className="text-xs md:text-base font-bold text-black mb-2">
                            🎓 學生優先通知
                          </p>
                          <p className="text-xs text-black">
                            優先獲得平台上線通知
                          </p>
                        </div>
                      </div>
                      
                      <Button
                        size="lg"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white border-2 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-sm md:text-base px-4 md:px-6 py-3 md:py-4 transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
                        onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
                      >
                        學生登記表單
                        <ExternalLink className="ml-1 md:ml-2 w-3 h-3 md:w-5 md:h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Service Principles Section - Mobile Optimized */}
      <section id="principles" className="py-12 md:py-20 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-3 md:border-8 border-black px-4 md:px-8 py-3 md:py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8 inline-block transform rotate-1">
              <span className="text-lg md:text-4xl font-black text-black uppercase tracking-wide">NLT 三大服務主張</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-2 md:px-0">
            {/* Principle 1 */}
            <div className="bg-white border-3 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 md:hover:translate-x-1 md:hover:translate-y-1 transition-all duration-200 h-full">
              <div className="bg-gradient-to-br from-orange-200 to-amber-200 p-4 md:p-8 border-b-3 md:border-b-4 border-black">
                <div className="flex items-center space-x-3 md:space-x-6">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-orange-500 border-3 md:border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <BookOpen className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-black text-sm md:text-xl uppercase mb-1 md:mb-3 tracking-wide">民主、群眾導向</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 md:p-6 flex-grow">
                <p className="text-sm md:text-lg text-black font-bold leading-relaxed">自由授課，自選課題，無綁定教材或長期合約</p>
              </div>
            </div>
            
            {/* Principle 2 */}
            <div className="bg-white border-3 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 md:hover:translate-x-1 md:hover:translate-y-1 transition-all duration-200 h-full">
              <div className="bg-gradient-to-br from-orange-200 to-amber-200 p-4 md:p-8 border-b-3 md:border-b-4 border-black">
                <div className="flex items-center space-x-3 md:space-x-6">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-orange-500 border-3 md:border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                   <Video className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-black text-sm md:text-xl uppercase mb-1 md:mb-3 tracking-wide">視訊教學</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 md:p-6 flex-grow">
                <p className="text-sm md:text-lg text-black font-bold leading-relaxed">穩定線上預約與視訊系統，實現一對一彈性學習</p>
              </div>
            </div>
            
            {/* Principle 3 */}
            <div className="bg-white border-3 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 md:hover:translate-x-1 md:hover:translate-y-1 transition-all duration-200 h-full">
              <div className="bg-gradient-to-br from-orange-200 to-amber-200 p-4 md:p-8 border-b-3 md:border-b-4 border-black">
                <div className="flex items-center space-x-3 md:space-x-6">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-orange-500 border-3 md:border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <Star className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-black text-sm md:text-xl uppercase mb-1 md:mb-3 tracking-wide">零抽成</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 md:p-6 flex-grow">
                <p className="text-sm md:text-lg text-black font-bold leading-relaxed">不從教師抽成，而是增加服務費保障退款、安全互動與金流。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Streamlined for Mobile */}
      <section id="features" className="py-12 md:py-20 bg-gradient-to-br from-amber-200 to-orange-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block bg-white border-2 md:border-4 border-black px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-black mb-3 md:mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              功能特色
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-3 md:border-8 border-black px-4 md:px-8 py-3 md:py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-4 md:mb-8 inline-block transform -rotate-1">
              <h2 className="text-lg md:text-4xl font-black text-black uppercase tracking-wide">完整教學生態系統</h2>
            </div>
            <p className="text-sm md:text-lg text-black font-bold max-w-3xl mx-auto bg-white border-2 md:border-4 border-black p-3 md:p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">從師資篩選到課程管理，全方位學習支援</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-2 md:px-0">
            {/* Feature cards with mobile-first design */}
            {[
              {
                icon: <Users className="w-6 h-6 md:w-10 md:h-10 text-black" />,
                title: "師資媒合",
                subtitle: "多元篩選最適教師",
                color: "bg-gradient-to-br from-amber-300 to-orange-300",
                features: ["依科目、價格篩選", "時間查詢", "星級評分", "學生評價"]
              },
              {
                icon: <Clock className="w-6 h-6 md:w-10 md:h-10 text-black" />,
                title: "彈性預約",
                subtitle: "即時預約確認",
                color: "bg-gradient-to-br from-blue-300 to-blue-400",
                features: ["25分鐘試教", "4-16堂課選擇", "自動月扣款", "隨時取消"]
              },
              {
                icon: <Video className="w-6 h-6 md:w-10 md:h-10 text-black" />,
                title: "視訊教學",
                subtitle: "專業線上教室",
                color: "bg-gradient-to-br from-green-300 to-green-400",
                features: ["高品質視訊", "螢幕分享", "即時聊天", "評價回饋"]
              },
              {
                icon: <MessageSquare className="w-6 h-6 md:w-10 md:h-10 text-black" />,
                title: "安全聊天",
                subtitle: "加密通訊保護",
                color: "bg-gradient-to-br from-purple-300 to-purple-400",
                features: ["文字聊天", "圖片傳送", "基本加密", "25MB限制"]
              },
              {
                icon: <DollarSign className="w-6 h-6 md:w-10 md:h-10 text-black" />,
                title: "透明收費",
                subtitle: "公平定價機制",
                color: "bg-gradient-to-br from-yellow-300 to-yellow-400",
                features: ["試教50%優惠", "30天退款", "綠界金流", "信用卡支付"]
              },
              {
                icon: <Shield className="w-6 h-6 md:w-10 md:h-10 text-black" />,
                title: "完善保障",
                subtitle: "多重品質保護",
                color: "bg-gradient-to-br from-red-300 to-red-400",
                features: ["課程認證", "No-Show處理", "投訴檢舉", "客服爭議"]
              }
            ].map((feature, index) => (
              <div key={index} className={`${feature.color} border-3 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 md:hover:translate-x-1 md:hover:translate-y-1 transition-all duration-200 p-4 md:p-8 h-full flex flex-col`}>
                <div className="mb-3 md:mb-6">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-white border-3 md:border-4 border-black flex items-center justify-center mb-2 md:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm md:text-xl font-black text-black mb-1 md:mb-2 uppercase tracking-wide">{feature.title}</h3>
                  <p className="font-bold text-black text-xs md:text-base">{feature.subtitle}</p>
                </div>
                <div className="bg-white border-2 md:border-4 border-black p-2 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow">
                  <ul className="space-y-1 md:space-y-3 text-xs md:text-sm text-black font-bold">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center space-x-1 md:space-x-2">
                        <div className="w-2 h-2 md:w-4 md:h-4 bg-red-500 border border-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mid-Page CTA - Simplified */}
          <div className="text-center mt-8 md:mt-16">
            <div className="flex flex-col items-center gap-3 md:gap-6 max-w-sm md:max-w-md mx-auto px-2 md:px-0">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-3 md:border-6 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-sm md:text-lg px-4 md:px-8 py-3 md:py-6 uppercase tracking-wide transform hover:translate-x-0.5 hover:translate-y-0.5 md:hover:translate-x-1 md:hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
              >
                搶先成為元老級教師
                <ArrowRight className="ml-1 md:ml-2 w-3 h-3 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process - Mobile Optimized */}
      <section id="process" className="py-12 md:py-20 bg-gradient-to-br from-orange-300 to-red-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block bg-white border-2 md:border-4 border-black px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-black mb-3 md:mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              學習流程
            </div>
            <h2 className="text-lg md:text-4xl font-black text-black mb-3 md:mb-6 bg-amber-400 border-3 md:border-4 border-black p-3 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">簡單三步，開始學習</h2>
            <p className="text-sm md:text-lg text-black font-bold max-w-3xl mx-auto bg-white border-2 md:border-4 border-black p-3 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">從註冊到上課，簡單順暢</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto px-2 md:px-0">
            {[
              {
                step: "1",
                title: "選擇教師",
                description: "瀏覽教師檔案，查看評價，選擇最適合的老師",
                color: "bg-amber-300"
              },
              {
                step: "2", 
                title: "預約試教",
                description: "25分鐘試教課程，確認教學風格",
                color: "bg-blue-300"
              },
              {
                step: "3",
                title: "開始學習",
                description: "購買方案，開始個人化學習旅程",
                color: "bg-pink-300"
              }
            ].map((item, index) => (
              <div key={index} className={`text-center border-3 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 md:hover:translate-x-1 md:hover:translate-y-1 transition-all duration-200 ${item.color} p-4 md:p-8 h-full flex flex-col`}>
                <div className="pb-2 md:pb-4">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-white border-3 md:border-4 border-black flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-xl md:text-4xl font-black text-black">{item.step}</span>
                  </div>
                  <h3 className="text-sm md:text-xl font-black text-black mb-2 md:mb-4 uppercase">{item.title}</h3>
                </div>
                <div className="bg-white border-2 md:border-4 border-black p-2 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow">
                  <p className="text-black font-bold leading-relaxed text-xs md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Streamlined for Mobile */}
      <section id="pricing" className="py-12 md:py-20 bg-gradient-to-br from-orange-200 to-amber-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block bg-white border-2 md:border-4 border-black px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-black mb-3 md:mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              收費方式
            </div>
            <h2 className="text-lg md:text-4xl font-black text-black mb-3 md:mb-6 bg-amber-400 border-3 md:border-4 border-black p-3 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 uppercase">透明公平定價</h2>
            <p className="text-sm md:text-lg text-black font-bold bg-white border-2 md:border-4 border-black p-3 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">雙贏學習環境</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-2 md:px-0">
            <div className="border-6 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white h-full flex flex-col">
              <div className="bg-blue-300 text-center p-4 md:p-6 border-b-4 border-black">
                <div className="bg-white border-4 border-black px-3 py-1 md:px-4 md:py-2 text-black font-black mb-3 md:mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase text-sm">體驗課程</div>
                <h3 className="text-lg md:text-xl font-black text-black mb-2 uppercase">試教課程</h3>
                <p className="font-bold text-black mb-3 md:mb-4 text-base">25分鐘體驗</p>
                <div className="text-xl md:text-2xl font-black text-black mt-3 md:mt-4 bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-6 border-black p-3 md:p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  正式課程 50% 折扣
                </div>
              </div>
              <div className="bg-white p-3 md:p-4 flex-grow">
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">25分鐘一對一教學</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">了解教師教學風格</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">不滿意可退費</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-6 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white relative h-full flex flex-col">
              <div className="bg-blue-300 text-center p-4 md:p-6 border-b-4 border-black">
                <div className="bg-white border-4 border-black px-3 py-1 md:px-4 md:py-2 text-black font-black mb-3 md:mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase text-sm">進入課程</div>
                <h3 className="text-lg md:text-xl font-black text-black mb-2 uppercase">正式課程</h3>
                <p className="font-bold text-black mb-3 md:mb-4 text-base">50分鐘完整課程</p>
                <div className="text-xl md:text-2xl font-black text-black mt-3 md:mt-4 bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-6 border-black p-3 md:p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  教師定價 + 保障服務費
                </div>
              </div>
              <div className="bg-white p-3 md:p-4 flex-grow">
                <ul className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">4/8/12/16 堂課選擇</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">自動月訂制</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">隨時取消訂閱</span>
                  </li>
                </ul>
                <div className="bg-orange-200 border-4 border-black p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-sm md:text-base font-black text-black mb-2 uppercase">保障服務費用以確保:</p>
                  <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-black font-bold">
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

            <div className="border-6 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white h-full flex flex-col">
              <div className="bg-blue-300 text-center p-4 md:p-6 border-b-4 border-black">
                <div className="bg-white border-4 border-black px-3 py-1 md:px-4 md:py-2 text-black font-black mb-3 md:mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase text-sm">品質保證</div>
                <h3 className="text-lg md:text-xl font-black text-black mb-2 uppercase">退款保障</h3>
                <p className="font-bold text-black mb-3 md:mb-4 text-base">30天保證期</p>
                <div className="text-xl md:text-2xl font-black text-black mt-3 md:mt-4 bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-6 border-black p-3 md:p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  100% 退款
                </div>
              </div>
              <div className="bg-white p-3 md:p-4 flex-grow">
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">購買後30天內</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">未完成課程退款</span>
                  </li>
                  <li className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 border-2 border-black" />
                    <span className="text-sm md:text-base font-bold text-black">無條件申請</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher CTA - Consolidated Section */}
      <section id="teacher" className="py-16 md:py-20 bg-gradient-to-br from-orange-200 to-orange-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-4 py-2 text-sm font-black mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              教師招募
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6 md:mb-8 bg-amber-300 border-4 border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase mx-2 md:mx-0">
              成為首批元老級教師
            </h2>
            <div className="bg-white border-4 border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8 mx-2 md:mx-0">
              <p className="text-base md:text-lg text-black font-bold leading-relaxed">
                留下你的聯繫方式，我們將在平台上線時第一時間通知你
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 md:gap-6 max-w-md mx-auto px-2 md:px-0">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-4 md:border-6 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] md:shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-base md:text-lg px-6 md:px-8 py-4 md:py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
              >
                立即加入教師招募
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>

              {/* Email Form */}
              <div className="w-full">
                <form onSubmit={handleEmailSubmit}>
                  <div className="flex flex-col space-y-3 md:space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="請輸入你的 Email 地址"
                      disabled={isSubmittingEmail}
                      className="w-full h-12 md:h-14 px-4 text-center text-base md:text-lg font-black text-gray-700 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                      type="submit"
                      disabled={isSubmittingEmail}
                      className="w-full h-12 md:h-14 bg-green-500 hover:bg-green-600 text-black text-base md:text-lg font-black tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transform hover:translate-x-0.5 hover:translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmittingEmail ? '訂閱中...' : '加入NLT 首批教師行列'}
                      {!isSubmittingEmail && <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />}
                    </button>
                  </div>
                  <p className="text-xs md:text-sm font-black text-black text-center mt-3 md:mt-4">
                    * 我們承諾不會濫用你的 Email，也不會分享給第三方
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Follow Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-100 to-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-4 py-2 text-sm font-black mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              搶先追蹤
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6 bg-amber-400 border-4 border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase mx-2 md:mx-0">社群互動</h2>
            <div className="bg-white border-4 border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8 mx-2 md:mx-0">
              <p className="text-base md:text-lg text-black font-bold">
                進一步了解 No Limit Tutor 文化與價值訴求，及平台努力的方向<br />
                提供回饋，共造嶄新的民主學習環境
              </p>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6 justify-center items-center max-w-lg mx-auto px-2 md:px-0">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-black border-4 md:border-6 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] font-black text-base md:text-lg px-6 md:px-8 py-4 md:py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 w-full"
                onClick={() => window.open('https://www.facebook.com/nolimittutor', '_blank')}
              >
                追蹤臉書 - 掌握 NLT 價值與動態
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 text-black border-4 md:border-6 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] font-black text-base md:text-lg px-6 md:px-8 py-4 md:py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 w-full"
                onClick={() => window.open('https://www.instagram.com/no_limit_tutor/', '_blank')}
              >
                追蹤 IG - 觀看國外搞笑迷因學英文
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black border-4 md:border-6 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] font-black text-base md:text-lg px-6 md:px-8 py-4 md:py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 w-full"
                onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
              >
                填寫表單 - 成為 NLT 的一員
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
            
            <div className="text-center mt-4 md:mt-6">
              <p className="text-xs md:text-sm font-bold text-black">
                * 平台上線後將優先通知你註冊使用
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-400 to-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-4 md:border-6 border-black px-6 md:px-8 py-4 md:py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8 md:mb-12 mx-2 md:mx-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-3 md:mb-4 uppercase">
                還在等什麼？
              </h2>
              <p className="text-lg md:text-xl text-black font-bold">
                現在就加入 No Limit Tutor 教師行列
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-2 md:px-0">
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="w-full max-w-md bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-4 md:border-6 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] md:shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                >
                  立即加入教師招募
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-4 md:border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-black mr-2 md:mr-3" />
                  <h3 className="text-lg md:text-xl font-black text-black">輸入你的 Email 地址</h3>
                </div>
                <p className="text-base md:text-lg font-bold text-black text-center mb-4 md:mb-6">申請加入 NLT 老師行列！</p>
                <form onSubmit={handleEmailSubmit} className="space-y-3 md:space-y-4">
                  <input
                    type="email"
                    placeholder="請輸入你的 Email 地址"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-base md:text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingEmail}
                    className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-base md:text-lg py-2 md:py-3 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmittingEmail ? '訂閱中...' : '加入教師招募'}
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </form>
                <p className="text-xs md:text-sm font-bold text-black text-center mt-3 md:mt-4">
                  * 我們承諾不會濫用你的 Email，也不會分享給第三方
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 border-2 md:border-4 border-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] md:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                <span className="text-lg md:text-2xl font-black text-black">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-black text-white uppercase tracking-tight">No Limit Tutor</span>
                <span className="text-xs md:text-sm text-amber-400 font-black">無限家教</span>
              </div>
            </div>
            
            <div className="text-left flex-1 max-w-2xl">
              <div className="mb-3 md:mb-6">
                <p className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4">No Limit Tutor</p>
                <p className="text-white text-sm md:text-lg font-bold">
                  突破規則，知識無限 -<br />
                  優質、民主、自在的一對一教學
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4 mb-3 md:mb-6">
                <a href="/privacy" className="text-amber-400 hover:text-amber-300 text-xs md:text-sm font-bold underline transition-colors">隱私條款</a>
              </div>
              <p className="text-gray-400 text-xs font-medium">
                © 2025 No Limit Tutor. All rights reserved.<br />
                No Limit Tutor 無限家教為睿思博遠有限公司註冊之商標
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
