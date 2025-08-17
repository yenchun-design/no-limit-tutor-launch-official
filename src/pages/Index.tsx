import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { CheckCheck, Copy, Mail, RefreshCw } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Inputs = {
  email: string;
};

const Index = () => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCount, setEmailCount] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { refetch } = useQuery({
    queryKey: ["emailCount"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_email_count');
      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message);
      }
      return data as number;
    },
    onError: (error) => {
      console.error("Query error:", error);
      toast({
        title: "Something went wrong!",
        description: "There was an issue fetching the email count.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      setEmailCount(data);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("email_list").insert([
        {
          email: data.email,
        },
      ]);

      if (error) {
        console.error("Supabase error:", error);
        toast({
          title: "Something went wrong!",
          description: "There was an issue submitting your email.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: "Your email has been submitted.",
        });
        refetch();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Something went wrong!",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchEmailCount = async () => {
    try {
      const { data, error } = await supabase.rpc('get_email_count');
      
      if (error) {
        console.error('Error fetching email count:', error);
        return 0;
      }
      
      return data || 0;
    } catch (error) {
      console.error('Error fetching email count:', error);
      return 0;
    }
  };

  return (
    <div className="container grid w-full gap-12 p-4 mx-auto md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Newsletter</CardTitle>
          <CardDescription>
            Subscribe to our newsletter to stay up to date with our latest
            news and updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="your-email@example.com"
                type="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? (
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Mail className="mr-2 h-4 w-4" />
              )}
              Subscribe
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          We will never share your email with anyone else.
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Email Count</CardTitle>
          <CardDescription>
            There are currently {emailCount !== null ? emailCount : "..."}
            {emailCount === 1 ? " email" : " emails"} in our database.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Emails</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will expose all the emails in our database.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => setOpen(true)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {open && (
            <Popover>
              <PopoverTrigger asChild>
                <Button className="ml-4" variant="outline">
                  Copy Emails
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <p>
                  {copied ? "Copied!" : "Copy all emails to clipboard?"}
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    supabase
                      .from("email_list")
                      .select("email")
                      .then((res) => {
                        const emails = res.data?.map((email) => email.email);
                        navigator.clipboard.writeText(emails?.join(", ") || "");
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 1000);
                      });
                  }}
                >
                  {copied ? <CheckCheck className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </PopoverContent>
            </Popover>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
