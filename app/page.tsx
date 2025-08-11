"use client";

import { useState, useMemo } from "react";
import Header from "@/components/header";
import FilterSidebar from "@/components/filter-sidebar";
import ImageGallery from "@/components/image-gallery";
import { images } from "@/lib/mock-data";
import type { Image } from "@/lib/mock-data";

export default function HomePage() {
  const [filters, setFilters] = useState<{
    category: string[];
    dynasty: string[];
    tags: string[];
  }>({
    category: [],
    dynasty: [],
    tags: [],
  });

  const handleFilterChange = (
    filterType: "category" | "dynasty" | "tags",
    value: string
  ) => {
    setFilters((prevFilters) => {
      const currentFilterValues = prevFilters[filterType];
      const newFilterValues = currentFilterValues.includes(value)
        ? currentFilterValues.filter((item) => item !== value)
        : [...currentFilterValues, value];
      
      const newFilters = {
        ...prevFilters,
        [filterType]: newFilterValues,
      };

      // When category changes, reset tags
      if (filterType === 'category') {
        newFilters.tags = [];
      }

      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({ category: [], dynasty: [], tags: [] });
  };

  const filteredImages = useMemo(() => {
    return images.filter((image: Image) => {
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(image.category);
      const dynastyMatch =
        filters.dynasty.length === 0 ||
        filters.dynasty.includes(image.dynasty);
      const tagsMatch =
        filters.tags.length === 0 ||
        filters.tags.some((tag) => image.tags.includes(tag));

      return categoryMatch && dynastyMatch && tagsMatch;
    });
  }, [filters]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8f5f1]">
      <Header />
      <main className="flex flex-1">
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
        />
        <div className="flex-1 p-6 lg:p-8">
          <ImageGallery images={filteredImages} />
        </div>
      </main>
    </div>
  );
}
