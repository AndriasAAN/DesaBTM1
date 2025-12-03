"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryImages as initialGalleryImages } from "@/lib/data";
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
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type GalleryImage = {
  id: string;
  imageUrl: string;
  description: string;
  imageHint: string;
};

export default function GaleriPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(initialGalleryImages);
  
  useEffect(() => {
    // This effect can be used to load dynamic data from localStorage
    // For now, we ensure the initial state is consistent.
    setGalleryImages(initialGalleryImages);
  }, []);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === null ? 0 : (prevIndex + 1) % galleryImages.length
      );
    }
  };

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === null ? 0 : (prevIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };
  
  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

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
              key={image.id}
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => openModal(index)}
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
        <Dialog open={selectedIndex !== null} onOpenChange={(isOpen) => !isOpen && closeModal()}>
          <DialogOverlay className="bg-black/80" />
          <DialogContent className="max-w-5xl w-full p-2 bg-transparent border-0 shadow-none flex items-center justify-center">
             <DialogTitle className="sr-only">{selectedImage.description}</DialogTitle>
            <div className="relative aspect-video w-full max-w-4xl">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.description}
                fill
                className="object-contain"
                data-ai-hint={selectedImage.imageHint}
              />
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white mt-2 bg-black/50 p-2 rounded-lg text-sm">
              {selectedImage.description}
            </p>
             <DialogClose asChild>
                <button 
                  onClick={closeModal}
                  className="absolute -top-2 -right-2 md:top-0 md:right-0 rounded-full p-1 bg-white/20 text-white hover:bg-white/40 transition-colors"
                  aria-label="Tutup"
                >
                  <X className="h-6 w-6" />
                </button>
            </DialogClose>
             <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-white/20 text-white hover:bg-white/40"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-white/20 text-white hover:bg-white/40"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
