"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

type GalleryImage = {
  id: string;
  imageUrl: string;
  description: string;
  imageHint: string;
};

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Galeri Kegiatan Desa
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Momen-momen yang terekam dari berbagai acara, program, dan aktivitas
          warga Desa Batumarta 1.
        </p>
      </div>

      {galleryImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => openModal(image)}
                  className="relative aspect-video w-full block"
                  aria-label={`Lihat gambar ${image.description} lebih besar`}
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                </button>
              </CardContent>
              <CardFooter className="p-4">
                <CardDescription className="text-sm">
                  {image.description}
                </CardDescription>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            Saat ini belum ada foto di galeri.
          </p>
        </div>
      )}

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={closeModal}>
          <DialogOverlay className="bg-black/80" />
          <DialogContent className="max-w-4xl w-full p-2 bg-transparent border-0 shadow-none">
             <DialogTitle className="sr-only">{selectedImage.description}</DialogTitle>
            <div className="relative aspect-video">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.description}
                fill
                className="object-contain"
                data-ai-hint={selectedImage.imageHint}
              />
            </div>
            <p className="text-center text-white mt-2 bg-black/50 p-2 rounded-b-lg">
              {selectedImage.description}
            </p>
             <DialogClose asChild>
                <button 
                  onClick={closeModal}
                  className="absolute -top-10 right-0 rounded-full p-1 bg-white/20 text-white hover:bg-white/40 transition-colors"
                  aria-label="Tutup"
                >
                  <X className="h-6 w-6" />
                </button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
