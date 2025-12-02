import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { newsArticles, publicServices, umkmList, eventCalendar } from "@/lib/data";
import { ArrowRight, Calendar, Newspaper, Briefcase } from "lucide-react";
import * as Lucide from "lucide-react";
import { placeholderImages } from "@/lib/placeholder-images.json";

const heroImage = placeholderImages.find(img => img.id === 'hero-1');

const getIcon = (iconName: string) => {
  const Icon = Lucide[iconName as keyof typeof Lucide] as Lucide.LucideIcon;
  return Icon ? <Icon className="h-8 w-8 text-primary" /> : null;
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold drop-shadow-lg">
              Selamat Datang di Batumarta Satu
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
              Menjelajahi Informasi, Layanan, dan Potensi Desa Kami.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/profil">
                Jelajahi Profil Desa <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          
          {/* Berita Terbaru */}
          <section id="berita">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">Berita Terbaru</h2>
              <p className="text-muted-foreground mt-2">Ikuti perkembangan dan informasi terkini dari desa kami.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.slice(0, 3).map((article) => (
                <Card key={article.id} className="overflow-hidden flex flex-col group">
                  <div className="relative h-56 w-full">
                    <Image
                      src={article.image.imageUrl}
                      alt={article.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={article.image.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                    <CardDescription>{article.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="link" asChild className="p-0 h-auto text-primary">
                      <Link href="/berita">
                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/berita">
                  <Newspaper className="mr-2 h-4 w-4" /> Lihat Semua Berita
                </Link>
              </Button>
            </div>
          </section>

          {/* Kalender Acara */}
          <section id="acara" className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">Kalender Acara</h2>
              <p className="text-muted-foreground mt-2">Jangan lewatkan kegiatan dan acara menarik di desa kami.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-6">
                    {eventCalendar.map((event, index) => (
                      <li key={index} className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="flex items-center gap-4">
                            <div className="text-center bg-primary text-primary-foreground rounded-lg px-4 py-2 w-28 shrink-0">
                                <span className="block text-2xl font-bold">{new Date(event.date).getDate()}</span>
                                <span className="block text-sm uppercase">{new Date(event.date).toLocaleString('id-ID', { month: 'short' })}</span>
                            </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <p className="text-muted-foreground text-sm">{event.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Layanan Publik & UMKM */}
           <section id="layanan-umkm" className="mt-20 md:mt-28">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-headline font-semibold">Layanan Publik</h2>
                  <p className="text-muted-foreground mt-2">Akses mudah untuk segala kebutuhan administrasi Anda.</p>
                </div>
                <div className="space-y-4">
                  {publicServices.map((service) => (
                    <Card key={service.title} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6 flex items-center gap-6">
                        {getIcon(service.icon)}
                        <div>
                           <h3 className="font-semibold">{service.title}</h3>
                           <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                 <div className="text-center md:text-left mt-8">
                  <Button asChild>
                    <Link href="/layanan">
                       Lihat Semua Layanan
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-headline font-semibold">UMKM Unggulan</h2>
                  <p className="text-muted-foreground mt-2">Dukung dan nikmati produk lokal dari usaha warga desa.</p>
                </div>
                <div className="space-y-6">
                    {umkmList.slice(0, 1).map((umkm, index) => (
                        <Card key={index} className="overflow-hidden group">
                           <div className="relative h-64 w-full">
                                <Image
                                    src={umkm.image.imageUrl}
                                    alt={umkm.image.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={umkm.image.imageHint}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline">{umkm.name}</CardTitle>
                                <CardDescription>{umkm.category}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{umkm.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center md:text-left mt-8">
                  <Button asChild variant="outline">
                    <Link href="/umkm">
                      <Briefcase className="mr-2 h-4 w-4" /> Jelajahi Direktori UMKM
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
           </section>

        </div>
      </main>
    </div>
  );
}
