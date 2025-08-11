import imageData from '@/data/images.json';
import metadata from '@/data/metadata.json';

export interface Image {
  id: number;
  name: string;
  url: string;
  height: number;
  category: "建筑" | "服饰";
  dynasty: "战国" | "秦汉" | "魏晋南北朝" | "唐" | "宋辽元" | "明清";
  tags: string[];
  description: string;
  source: string;
}

export interface ImageData {
  version: string;
  lastUpdated: string;
  description: string;
  images: Image[];
}

export interface Metadata {
  categories: string[];
  dynasties: string[];
  tags: Record<string, string[]>;
  statistics: {
    totalImages: number;
    categoryCounts: Record<string, number>;
  };
}

// 导出数据
export const images: Image[] = imageData.images;
export const imageDataInfo: ImageData = imageData;
export const metadataInfo: Metadata = metadata;

// 导出便捷的访问函数
export const getImagesByCategory = (category: string): Image[] => {
  return images.filter(image => image.category === category);
};

export const getImagesByDynasty = (dynasty: string): Image[] => {
  return images.filter(image => image.dynasty === dynasty);
};

export const getImagesByTag = (tag: string): Image[] => {
  return images.filter(image => image.tags.includes(tag));
};

export const getAvailableTags = (selectedCategories: string[] = []): string[] => {
  if (selectedCategories.length === 0) {
    return Object.values(metadataInfo.tags).flat();
  }
  return selectedCategories.flatMap(category => 
    metadataInfo.tags[category] || []
  );
};