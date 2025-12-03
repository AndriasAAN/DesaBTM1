import Image from "next/image";
import { galleryImages } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Galeri Kegiatan - Website Desa Batumarta 1",
  description: "Dokumentasi foto dan video dari berbagai kegiatan yang diselenggarakan di Desa Batumarta 1.",
};

export default function GaleriPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Galeri Kegiatan Desa</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Momen-momen kebersamaan dan aktivitas warga Desa Batumarta 1 yang terekam dalam gambar.
        </p>
      </div>

      {galleryImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm drop-shadow-md">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">Saat ini belum ada foto di galeri.</p>
        </div>
      )}
    </div>
  );
}

    