import Image from "next/image";
import Link from "next/link";
// 暂时隐藏的组件导入
// import { Search, UserCircle2 } from 'lucide-react';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 px-6 backdrop-blur-sm">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/web_icon.png"
            alt="图库 Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="hidden text-xl font-semibold text-gray-800 sm:inline-block">
            图库
          </span>
        </Link>
        {/* 暂时隐藏导航菜单 */}
        {/* <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            资料库
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            独立内容
          </Link>
        </nav> */}
      </div>
      {/* 暂时隐藏搜索框和用户中心 */}
      {/* <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="关键词搜索..."
            className="w-64 pl-9"
          />
        </div>
        <Button variant="ghost" size="icon">
          <UserCircle2 className="h-6 w-6 text-gray-600" />
          <span className="sr-only">用户菜单</span>
        </Button>
      </div> */}
    </header>
  );
}
