import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import ImageDetailModal from "./image-detail-modal";
import type { Image as ImageType } from "@/lib/mock-data";

interface ImageCardProps {
  image: ImageType;
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
          <Image
            src={image.url || "/placeholder.svg"}
            alt={image.name}
            width={500}
            height={image.height}
            className="h-auto w-full"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="font-semibold">{image.name}</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="!max-w-[95vw] !w-[95vw] h-[85vh] p-0 border-0 overflow-hidden sm:!max-w-[95vw]">
        <VisuallyHidden>
          <DialogTitle>{image.name}</DialogTitle>
        </VisuallyHidden>
        <ImageDetailModal image={image} />
      </DialogContent>
    </Dialog>
  );
}
