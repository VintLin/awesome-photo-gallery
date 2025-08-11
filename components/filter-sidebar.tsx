"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { metadataInfo } from "@/lib/mock-data";

const allCategories = metadataInfo.categories;
// 按时间顺序排列的朝代，其他放在最后
const dynastyOrder = [
  "战国",
  "秦朝", 
  "西汉",
  "东汉",
  "三国",
  "西晋",
  "东晋",
  "南北朝",
  "北魏",
  "隋朝",
  "唐朝",
  "五代",
  "宋朝",
  "元朝",
  "明朝",
  "清朝",
  "其他"
];

// 根据时间顺序重新排列朝代
const allDynasties = dynastyOrder.filter(dynasty => 
  metadataInfo.dynasties.includes(dynasty)
);
const allTags = metadataInfo.tags;

interface FilterSidebarProps {
  filters: {
    category: string[];
    dynasty: string[];
    tags: string[];
  };
  onFilterChange: (
    filterType: "category" | "dynasty" | "tags",
    value: string
  ) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  onClearFilters,
}: FilterSidebarProps) {

  const availableTags =
    filters.category.length === 0
      ? Object.values(allTags).flat()
      : filters.category.flatMap((cat) => allTags[cat] || []);

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 flex-shrink-0 border-r border-gray-200 bg-white p-6 lg:block">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">筛选</h2>
        <Button variant="link" className="p-0 text-sm" onClick={onClearFilters}>
          清除所有
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={["category", "dynasty", "tags"]}
        className="w-full"
      >
        <AccordionItem value="category">
          <AccordionTrigger className="text-base">分类</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-2">
            {allCategories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`cat-${category}`}
                  checked={filters.category.includes(category)}
                  onCheckedChange={() => onFilterChange("category", category)}
                />
                <Label htmlFor={`cat-${category}`} className="font-normal">
                  {category}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="dynasty">
          <AccordionTrigger className="text-base">朝代</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-2">
            {allDynasties.map((dynasty) => (
              <div key={dynasty} className="flex items-center space-x-2">
                <Checkbox
                  id={`dyn-${dynasty}`}
                  checked={filters.dynasty.includes(dynasty)}
                  onCheckedChange={() => onFilterChange("dynasty", dynasty)}
                />
                <Label htmlFor={`dyn-${dynasty}`} className="font-normal">
                  {dynasty}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tags">
          <AccordionTrigger className="text-base">标签</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-2">
            {availableTags.map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  id={`tag-${tag}`}
                  checked={filters.tags.includes(tag)}
                  onCheckedChange={() => onFilterChange("tags", tag)}
                />
                <Label htmlFor={`tag-${tag}`} className="font-normal">
                  {tag}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
