
-- 移除現有的讀取政策
DROP POLICY IF EXISTS "Only authenticated users can read email_list" ON public.email_list;

-- 建立新的政策：只允許計算數量，不允許讀取實際 email 內容
-- 這個政策允許 COUNT(*) 查詢，但不允許 SELECT email 或其他敏感資料
CREATE POLICY "Allow public count only" 
  ON public.email_list 
  FOR SELECT 
  USING (false);

-- 建立一個安全的函數來獲取 email 數量
CREATE OR REPLACE FUNCTION public.get_email_count()
RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM public.email_list);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 賦予匿名使用者執行此函數的權限
GRANT EXECUTE ON FUNCTION public.get_email_count() TO anon;
GRANT EXECUTE ON FUNCTION public.get_email_count() TO authenticated;
