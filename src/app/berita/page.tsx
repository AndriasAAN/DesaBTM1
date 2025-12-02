import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { newsArticles } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Berita Desa - Website Desa Batumarta 1",
  description: "Kumpulan berita dan informasi terbaru dari Desa Batumarta 1.",
};

export default function BeritaPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Arsip Berita Desa</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Ikuti terus perkembangan, kegiatan, dan pengumuman penting dari Pemerintah Desa Batumarta 1.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newsArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-52 w-full">
              <Image
                src={article.image.imageUrl}
                alt={article.image.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={article.image.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-lg h-14">{article.title}</CardTitle>
              <CardDescription>{article.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                Baca Selengkapnya
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
