import Image from "next/image";
import { Download } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Image as ImageType } from "@/lib/mock-data";

interface ImageDetailModalProps {
  image: ImageType;
}

export default function ImageDetailModal({ image }: ImageDetailModalProps) {
  return (
    <div className="flex h-[85vh] w-full flex-col md:flex-row">
      {/* 图片展示区域 */}
      <div className="relative flex h-1/2 w-full items-center justify-center bg-gray-900 md:h-full md:w-2/3">
        <Image
          src={image.url || "/placeholder.svg"}
          alt={image.name}
          width={1200}
          height={900}
          className="max-h-full max-w-full object-contain"
          priority
        />
      </div>
      
      {/* 详情信息区域 */}
      <aside className="flex h-1/2 w-full flex-col bg-white md:h-full md:w-1/3">
        <div className="flex flex-col h-full p-8">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 line-clamp-2">
            {image.name}
          </h2>
          
          <div className="flex-1 space-y-6 overflow-y-auto">
            <div>
              <h3 className="mb-2 font-medium text-gray-500 text-base">分类</h3>
              <p className="text-gray-800 text-base">{image.category}</p>
            </div>
            
            <div>
              <h3 className="mb-2 font-medium text-gray-500 text-base">朝代</h3>
              <p className="text-gray-800 text-base">{image.dynasty}</p>
            </div>
            
            <div>
              <h3 className="mb-3 font-medium text-gray-500 text-base">标签</h3>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal text-sm px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="mb-3 font-medium text-gray-500 text-base">简介</h3>
              <p className="text-gray-800 leading-relaxed text-base">
                {image.description}
              </p>
            </div>
            
            <div>
              <h3 className="mb-2 font-medium text-gray-500 text-base">来源</h3>
              <p className="text-gray-600 italic text-base">{image.source}</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Button className="w-full text-base py-3">
              <Download className="mr-2 h-5 w-5" />
              下载原图
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
