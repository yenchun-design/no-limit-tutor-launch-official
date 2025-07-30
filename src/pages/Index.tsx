import SEOHead from "@/components/SEOHead";
import GoogleVerification from "@/components/GoogleVerification";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Index = () => {
  return (
    <>
      <SEOHead />
      <GoogleVerification />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="w-full max-w-md p-4">
          <CardHeader>
            <CardTitle>歡迎加入 No Limit Tutor!</CardTitle>
            <CardDescription>搶先體驗台灣最 демократический 線上家教平台</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">姓名</Label>
                  <Input type="text" id="name" placeholder="請輸入您的姓名" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="請輸入您的 Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="role">您是？</Label>
                  <select className="rounded-md border border-gray-200 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                    <option>學生</option>
                    <option>老師</option>
                  </select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Index;
