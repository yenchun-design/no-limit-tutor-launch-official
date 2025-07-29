
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowRight, Mail } from 'lucide-react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "請輸入 Email",
        description: "請輸入您的 Email 地址",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email 格式錯誤",
        description: "請輸入有效的 Email 地址",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('email_list')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        console.error('Supabase error:', error);
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Email 已存在",
            description: "此 Email 已經註冊過了",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "訂閱成功！",
          description: "感謝您的訂閱，我們會在平台上線時第一時間通知您",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "訂閱失敗",
        description: "請稍後再試，或聯繫客服",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white border-4 border-black px-6 py-3 text-base font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
            搶先通知
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8 bg-amber-300 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">
            平台上線第一時間通知您
          </h2>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
            <p className="text-xl text-black font-bold leading-relaxed mb-6">
              留下您的 Email，我們會在 No Limit Tutor 正式上線時<br />
              第一時間通知您註冊使用，享有早鳥優惠！
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <Input
                    type="email"
                    placeholder="請輸入您的 Email 地址"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 text-lg border-4 border-gray-400 bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold focus:border-gray-600 hover:border-gray-500"
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-xl px-12 py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                >
                  {isSubmitting ? '送出中...' : '立即訂閱通知'}
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="text-center">
            <p className="text-sm font-bold text-black">
              * 我們承諾不會濫用您的 Email，也不會分享給第三方
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
