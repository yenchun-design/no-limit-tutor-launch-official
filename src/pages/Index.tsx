import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, TrendingUp, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teacherCount, setTeacherCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchTeacherCount();
    
    // Subscribe to real-time updates
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'email_list'
        },
        () => {
          fetchTeacherCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchTeacherCount = async () => {
    try {
      // Use the existing get_email_count function
      const { data, error } = await supabase.rpc('get_email_count');
      
      if (error) {
        console.error('Error fetching teacher count:', error);
        return;
      }

      setTeacherCount(data || 0);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Insert into the existing email_list table
      const { error } = await supabase
        .from('email_list')
        .insert([{ email }]);

      if (error) {
        console.error('Error inserting email:', error);
        toast({
          title: "錯誤",
          description: "註冊時發生錯誤，請稍後再試。",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "註冊成功！",
        description: "感謝您的報名，我們會盡快與您聯繫。",
      });
      
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "錯誤",
        description: "註冊時發生錯誤，請稍後再試。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="text-lg px-6 py-2 mb-6">
            🎯 限時招募中
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            成為頂尖
            <br />
            線上教師
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            加入我們的教育平台，分享您的專業知識，
            <br />
            創造穩定收入，影響更多學生的未來
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 py-8">
            <div className="flex items-center gap-2 text-primary">
              <Users className="w-6 h-6" />
              <span className="text-2xl font-bold">{teacherCount.toLocaleString()}</span>
              <span className="text-muted-foreground">位教師已加入</span>
            </div>
          </div>

          {/* CTA Form */}
          <Card className="max-w-md mx-auto bg-card/80 backdrop-blur-sm border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">立即報名</CardTitle>
              <CardDescription>
                填寫您的資料，我們將盡快與您聯繫
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="email"
                    placeholder="請輸入您的電子郵件"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "處理中..." : "免費報名"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">為什麼選擇我們？</h2>
          <p className="text-xl text-muted-foreground">專業平台，助您實現教學夢想</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <CardHeader>
              <CardTitle>靈活時間</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                自由安排教學時間，完美平衡工作與生活
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <CardHeader>
              <CardTitle>豐厚收入</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                透明的收費制度，讓您的專業知識獲得應有回報
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <CardHeader>
              <CardTitle>專業支援</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                完整的技術支援和教學資源，助您順利開課
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
