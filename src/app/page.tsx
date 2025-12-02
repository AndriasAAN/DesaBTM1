import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { newsArticles, publicServices, umkmList, eventCalendar, publicComplaints } from "@/lib/data";
import { ArrowRight, Calendar, Newspaper, Briefcase, MessageSquareQuote } from "lucide-react";
import * as Lucide from "lucide-react";
import { placeholderImages } from "@/lib/placeholder-images.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge";

const heroImages = [
    placeholderImages.find(img => img.id === 'hero-1'),
    placeholderImages.find(img => img.id === 'gallery-1'),
    placeholderImages.find(img => img.id === 'gallery-6')
].filter(Boolean) as (typeof placeholderImages[0])[];


const getIcon = (iconName: string) => {
  const Icon = Lucide[iconName as keyof typeof Lucide] as Lucide.LucideIcon;
  return Icon ? <Icon className="h-8 w-8 text-primary" /> : null;
};

// Helper to parse Indonesian month names
const monthMap: { [key: string]: string } = {
  'Januari': 'January',
  'Februari': 'February',
  'Maret': 'March',
  'April': 'April',
  'Mei': 'May',
  'Juni': 'June',
  'Juli': 'July',
  'Agustus': 'August',
  'September': 'September',
  'Oktober': 'October',
  'November': 'November',
  'Desember': 'December'
};

const parseDate = (dateStr: string) => {
  // Handles YYYY-MM-DD format by ensuring it's treated as UTC
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return new Date(`${dateStr}T00:00:00`);
  }
  const parts = dateStr.split(' ');
  if (parts.length === 3) {
    const day = parts[0];
    const month = monthMap[parts[1]];
    const year = parts[2];
    if (day && month && year) {
      return new Date(`${month} ${day}, ${year}`);
    }
  }
  return new Date(dateStr); // Fallback for other formats
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full">
            <Carousel
                opts={{ loop: true }}
                className="w-full"
                >
                <CarouselContent className="-ml-0">
                    {heroImages.map((image) => (
                         <CarouselItem key={image.id} className="pl-0">
                             <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover"
                                    priority={heroImages.indexOf(image) === 0}
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-black/50" />
                                <div className="relative z-10 p-4 max-w-4xl mx-auto">
                                    <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg tracking-tight">
                                    Selamat Datang di Website Desa Batumarta 1
                                    </h1>
                                    <p className="mt-4 text-lg md:text-xl drop-shadow-sm font-body">
                                    Kecamatan Lubuk Raja, Kabupaten Ogan Komering Ulu (OKU), Provinsi Sumatera Selatan
                                    </p>
                                    <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                                    <Link href="/profil">
                                        Jelajahi Profil Desa <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                    </Button>
                                </div>
                            </div>
                         </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 border-none" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 border-none" />
            </Carousel>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          
          {/* Berita Terbaru */}
          <section id="berita">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary">Berita Terbaru</h2>
              <p className="text-muted-foreground mt-2">Ikuti perkembangan dan informasi terkini dari desa kami.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.slice(0, 3).map((article) => (
                <Card key={article.id} className="overflow-hidden flex flex-col group border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link href={`/berita/${article.id}`} className="block">
                    <div className="relative h-56 w-full">
                      <Image
                        src={article.image.imageUrl}
                        alt={article.image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={article.image.imageHint}
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <Link href={`/berita/${article.id}`} className="hover:text-primary">
                      <CardTitle className="font-headline text-xl leading-tight h-14">{article.title}</CardTitle>
                    </Link>
                    <CardDescription className="flex items-center text-sm pt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/berita">
                  <Newspaper className="mr-2 h-4 w-4" /> Lihat Semua Berita
                </Link>
              </Button>
            </div>
          </section>

          {/* Aspirasi Warga Section */}
          <section id="aspirasi" className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary">Aspirasi Warga</h2>
              <p className="text-muted-foreground mt-2">Suara warga untuk desa yang lebih baik.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publicComplaints.map((complaint, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-muted rounded-full p-3">
                          <MessageSquareQuote className="h-6 w-6 text-primary"/>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{complaint.name}</CardTitle>
                        <CardDescription>{new Date(complaint.date + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground italic">"{complaint.message}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild>
                <Link href="/layanan/pengaduan-masyarakat">
                  Sampaikan Aspirasi Anda <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Kalender Acara */}
          <section id="acara" className="mt-20 md:mt-28 bg-secondary py-20 rounded-lg">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary">Kalender Acara</h2>
                <p className="text-muted-foreground mt-2">Jangan lewatkan kegiatan dan acara menarik di desa kami.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Card>
                        <CardContent className="p-6">
                        <ul className="space-y-6">
                            {eventCalendar.map((event, index) => {
                            const eventDate = parseDate(event.date);
                            return (
                            <li key={index} className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="text-center bg-primary text-primary-foreground rounded-lg px-4 py-2 w-28 shrink-0">
                                        <span className="block text-2xl font-bold">{eventDate.getDate()}</span>
                                        <span className="block text-sm uppercase">{eventDate.toLocaleString('id-ID', { month: 'short' })}</span>
                                    </div>
                                </div>
                                <div>
                                <h3 className="font-semibold text-lg">{event.title}</h3>
                                <p className="text-muted-foreground text-sm">{event.description}</p>
                                </div>
                            </li>
                            )})}
                        </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </section>

          {/* Layanan Publik & UMKM */}
           <section id="layanan-umkm" className="mt-20 md:mt-28">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary">Layanan Publik</h2>
                  <p className="text-muted-foreground mt-2">Akses mudah untuk segala kebutuhan administrasi Anda.</p>
                </div>
                <div className="space-y-4">
                  {publicServices.map((service) => (
                    <Card key={service.title} className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6 flex items-center gap-6">
                        {getIcon(service.icon)}
                        <div>
                           <h3 className="font-semibold text-lg">{service.title}</h3>
                           <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                 <div className="text-center md:text-left mt-8">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/layanan">
                       Lihat Semua Layanan
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary">UMKM Unggulan</h2>
                  <p className="text-muted-foreground mt-2">Dukung dan nikmati produk lokal dari usaha warga desa.</p>
                </div>
                <div className="space-y-6">
                    {umkmList.slice(0, 1).map((umkm, index) => (
                        <Card key={index} className="overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300">
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
                  <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
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
