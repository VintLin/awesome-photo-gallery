"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import ImageCard from "./image-card";
import LoadingSpinner from "./loading-spinner";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { Image } from "@/lib/mock-data";

interface ImageGalleryProps {
  images: Image[];
}

const IMAGES_PER_LOAD = 50; // 每次加载50张图片（约两屏）

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [displayedImages, setDisplayedImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryKey, setGalleryKey] = useState(0); // 用于确保组件重新渲染

  // 使用 Intersection Observer 监听滚动到底部
  const { ref: loadMoreRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px' // 提前100px开始加载
  });

  // 计算是否还有更多图片
  const hasMore = useMemo(() => {
    return displayedImages.length < images.length;
  }, [displayedImages.length, images.length]);

  // 加载更多图片的函数
  const loadMoreImages = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // 模拟网络延迟，提供更好的用户体验
    await new Promise(resolve => setTimeout(resolve, 500));

    const startIndex = (currentPage - 1) * IMAGES_PER_LOAD;
    const endIndex = startIndex + IMAGES_PER_LOAD;
    const newImages = images.slice(startIndex, endIndex);

    setDisplayedImages(prev => [...prev, ...newImages]);
    setCurrentPage(prev => prev + 1);
    setLoading(false);
  }, [loading, hasMore, currentPage, images]);

  // 当传入的 images 发生变化时，重置状态
  useEffect(() => {
    setDisplayedImages([]);
    setCurrentPage(1);
    setLoading(false);
    setGalleryKey(prev => prev + 1); // 强制重新渲染整个组件
  }, [images]);

  // 初始加载第一批图片
  useEffect(() => {
    if (images.length > 0 && displayedImages.length === 0 && !loading) {
      loadMoreImages();
    }
  }, [images, displayedImages.length, loading, loadMoreImages]);

  // 当用户滚动到底部时加载更多
  useEffect(() => {
    if (isVisible && hasMore && !loading) {
      loadMoreImages();
    }
  }, [isVisible, hasMore, loading, loadMoreImages]);

  return (
    <div className="w-full">
      {/* 图片网格 */}
      <div className="columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5">
        {displayedImages.map((image, index) => (
          <ImageCard key={`${galleryKey}-${image.id}-${index}`} image={image} />
        ))}
      </div>

      {/* 加载更多的触发器和加载动画 */}
      {hasMore && (
        <div ref={loadMoreRef} className="w-full">
          {loading && (
            <LoadingSpinner 
              size="md" 
              text="正在加载更多图片..." 
              className="my-8"
            />
          )}
        </div>
      )}

      {/* 没有更多图片时的提示 */}
      {!hasMore && displayedImages.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-base">
            已显示全部 {images.length} 张图片
          </p>
        </div>
      )}

      {/* 无图片时的提示 */}
      {images.length === 0 && !loading && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            暂无符合条件的图片
          </p>
        </div>
      )}
    </div>
  );
}
