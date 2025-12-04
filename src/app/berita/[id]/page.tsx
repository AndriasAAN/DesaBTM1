import { newsArticles } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = newsArticles.find((a) => a.id === params.id);

  if (!article) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: `${article.title} - Berita Desa Batumarta 1`,
    description: article.excerpt,
  };
}

export default function BeritaDetailPage({ params }: { params: { id: string } }) {
  const article = newsArticles.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Link href="/berita" passHref>
                <Button variant="outline">
                    &larr; Kembali ke Arsip Berita
                </Button>
            </Link>
        </div>
        
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-headline font-bold mb-4">{article.title}</h1>
          <div className="flex items-center justify-center text-muted-foreground text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{article.date}</span>
          </div>
        </header>

        <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={article.image.imageUrl}
            alt={article.image.description}
            fill
            className="object-cover"
            data-ai-hint={article.image.imageHint}
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none mx-auto text-foreground/80 leading-relaxed whitespace-pre-wrap">
            <p>{article.fullContent}</p>
        </div>
      </article>
    </div>
  );
}
