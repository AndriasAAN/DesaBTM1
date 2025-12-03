import Image from "next/image";
import { galleryImages } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export const metadata = {
  title: "Galeri Kegiatan Desa - Website Desa Batumarta 1",
  description: "Dokumentasi foto berbagai kegiatan yang diadakan di Desa Batumarta 1.",
};

export default function GaleriPage() {
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
                <div className="relative aspect-video w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                </div>
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
    </div>
  );
}
