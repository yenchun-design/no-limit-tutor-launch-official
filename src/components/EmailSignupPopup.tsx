
import React, { useState } from 'react';
import { X, Mail, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface EmailSignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
  currentCount: number;
}

export const EmailSignupPopup: React.FC<EmailSignupPopupProps> = ({
  isOpen,
  onClose,
  currentCount
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "請輸入有效的 Email 地址",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "這個 Email 已經註冊過了",
            description: "感謝您的支持！",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "成功加入 NLT 老師行列！",
          description: "歡迎您的加入，我們會持續為您提供最新資訊。"
        });
        setEmail('');
        onClose();
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "提交失敗",
        description: "請稍後再試，或聯繫客服。",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleFormClick = () => {
    window.open('https://forms.google.com/your-form-link', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-in fade-in-0 zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary-foreground/20 rounded-full">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold">加入 NLT 老師行列</h2>
          </div>
          <p className="text-primary-foreground/90 text-sm">
            與 <span className="font-semibold text-secondary">{currentCount}+</span> 位老師一起探索 AI 教學的無限可能
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email 地址
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 pl-10 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground"
                  disabled={isSubmitting}
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 font-medium"
            >
              {isSubmitting ? '加入中...' : '立即加入'}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">或</span>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={handleGoogleFormClick}
            className="w-full py-3 font-medium border-2 hover:bg-muted/50"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            填寫學生 Google 表單
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
            <Users className="w-3 h-3" />
            <span>已有 {currentCount} 位老師加入我們的行列</span>
          </div>
        </div>
      </div>
    </div>
  );
};
