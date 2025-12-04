
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { newsArticles, publicServices, umkmList, eventCalendar, publicComplaints as initialComplaints } from "@/lib/data";
import { ArrowRight, Calendar, Newspaper, Briefcase, MessageSquareQuote, CheckSquare, BarChart3, Info } from "lucide-react";
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
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";


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
  'Januari': 'January', 'Februari': 'February', 'Maret': 'March', 'April': 'April',
  'Mei': 'May', 'Juni': 'June', 'Juli': 'July', 'Agustus': 'August',
  'September': 'September', 'Oktober': 'October', 'November': 'November', 'Desember': 'December'
};

const parseDate = (dateStr: string) => {
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
  return new Date(dateStr); 
};

// Polling Component
const Poll = () => {
    const { toast } = useToast();
    const pollId = "desa_maju_poll_1";
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [voted, setVoted] = useState(false);
    const [results, setResults] = useState<{ [key: string]: number }>({
        infrastruktur: 35,
        ekonomi: 28,
        layanan: 22,
        lingkungan: 15
    });

    useEffect(() => {
        const hasVoted = localStorage.getItem(pollId);
        if (hasVoted) {
            setVoted(true);
            const storedResults = localStorage.getItem(`${pollId}_results`);
            if (storedResults) {
                setResults(JSON.parse(storedResults));
            }
        }
    }, []);

    const handleVote = () => {
        if (!selectedOption) {
            toast({
                variant: "destructive",
                title: "Gagal",
                description: "Silakan pilih salah satu opsi terlebih dahulu.",
            });
            return;
        }

        const newResults = { ...results, [selectedOption]: results[selectedOption] + 1 };
        setResults(newResults);
        setVoted(true);
        localStorage.setItem(pollId, "true");
        localStorage.setItem(`${pollId}_results`, JSON.stringify(newResults));
        toast({
            title: "Terima Kasih!",
            description: "Suara Anda telah berhasil direkam.",
        });
    };

    const totalVotes = Object.values(results).reduce((acc, count) => acc + count, 0);

    const pollOptions = [
        { id: "infrastruktur", label: "Peningkatan Infrastruktur (Jalan, Jembatan)" },
        { id: "ekonomi", label: "Pemberdayaan Ekonomi & UMKM" },
        { id: "layanan", label: "Peningkatan Layanan Publik Digital" },
        { id: "lingkungan", label: "Program Kebersihan & Keindahan Lingkungan" }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-xl">
                    <BarChart3 className="text-primary" />
                    Jajak Pendapat Warga
                </CardTitle>
                <CardDescription>Menurut Anda, apa prioritas utama pembangunan desa saat ini?</CardDescription>
            </CardHeader>
            <CardContent>
                {voted ? (
                    <div className="space-y-4">
                        <p className="text-sm font-medium text-center text-muted-foreground">Terima kasih telah berpartisipasi! Berikut adalah hasilnya:</p>
                        {pollOptions.map(option => (
                            <div key={option.id}>
                                <div className="flex justify-between mb-1 text-sm">
                                    <span className="font-medium">{option.label}</span>
                                    <span className="text-primary font-semibold">{((results[option.id] / totalVotes) * 100).toFixed(1)}%</span>
                                </div>
                                <Progress value={(results[option.id] / totalVotes) * 100} className="h-2" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <form onSubmit={(e) => { e.preventDefault(); handleVote(); }} className="space-y-6">
                        <RadioGroup onValueChange={setSelectedOption} className="space-y-3">
                            {pollOptions.map(option => (
                                <div key={option.id} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option.id} id={option.id} />
                                    <Label htmlFor={option.id}>{option.label}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                        <Button type="submit" className="w-full">
                             <CheckSquare className="mr-2 h-4 w-4" />
                            Kirim Pilihan
                        </Button>
                    </form>
                )}
            </CardContent>
        </Card>
    );
};


export default function Home() {
    const [publicComplaints, setPublicComplaints] = useState(initialComplaints);

    useEffect(() => {
        try {
            const storedComplaints = JSON.parse(localStorage.getItem('publicComplaints') || '[]');
            if (storedComplaints.length > 0) {
                setPublicComplaints(storedComplaints);
            } else {
                localStorage.setItem('publicComplaints', JSON.stringify(initialComplaints));
            }
        } catch (error) {
            console.error("Failed to parse complaints from localStorage:", error);
            setPublicComplaints(initialComplaints);
        }
    }, []);

    const mainArticle = newsArticles[0];
    const sideArticles = newsArticles.slice(1, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center bg-secondary py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground tracking-tight">
                    Selamat Datang di Website Desa Batumarta 1
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground font-body max-w-4xl mx-auto">
                    Kecamatan Lubuk Raja, Kabupaten Ogan Komering Ulu (OKU), Provinsi Sumatera Selatan
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/profil">
                        <span>
                            Jelajahi Profil Desa <ArrowRight className="inline-block ml-2 h-5 w-5" />
                        </span>
                    </Link>
                </Button>
            </div>
        </section>

        <section className="relative w-full">
            <Carousel
                opts={{ loop: true }}
                className="w-full"
                >
                <CarouselContent className="-ml-0">
                    {heroImages.map((image) => (
                         <CarouselItem key={image.id} className="pl-0">
                             <div className="relative h-[50vh] md:h-[60vh] w-full">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover"
                                    priority={heroImages.indexOf(image) === 0}
                                    data-ai-hint={image.imageHint}
                                />
                                <div className="absolute inset-0 bg-black/30" />
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
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary border-b-4 border-primary pb-2 inline-block">Berita Utama</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Main Article */}
                    <Card className="overflow-hidden flex flex-col group border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 lg:col-span-1">
                        <Link href={`/berita/${mainArticle.id}`} className="block">
                            <div className="relative h-96 w-full">
                                <Image
                                    src={mainArticle.image.imageUrl}
                                    alt={mainArticle.image.description}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={mainArticle.image.imageHint}
                                />
                            </div>
                        </Link>
                        <CardHeader>
                            <Link href={`/berita/${mainArticle.id}`} className="hover:text-primary">
                                <CardTitle className="font-headline text-2xl leading-tight">{mainArticle.title}</CardTitle>
                            </Link>
                            <CardDescription className="flex items-center text-sm pt-2">
                                <Calendar className="h-4 w-4 mr-2" />
                                {mainArticle.date}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground line-clamp-3">{mainArticle.excerpt}</p>
                        </CardContent>
                    </Card>

                    {/* Side Articles */}
                    <div className="space-y-6">
                        {sideArticles.map((article) => (
                           <Card key={article.id} className="overflow-hidden group border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                               <Link href={`/berita/${article.id}`} className="block">
                                   <div className="flex flex-col sm:flex-row">
                                       <div className="relative h-48 sm:h-auto sm:w-1/3 flex-shrink-0">
                                           <Image
                                               src={article.image.imageUrl}
                                               alt={article.image.description}
                                               fill
                                               className="object-cover"
                                               data-ai-hint={article.image.imageHint}
                                           />
                                       </div>
                                       <div className="p-4">
                                           <h3 className="font-headline text-lg font-semibold leading-tight group-hover:text-primary">{article.title}</h3>
                                           <p className="text-xs text-muted-foreground mt-1">{article.date}</p>
                                           <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
                                       </div>
                                   </div>
                               </Link>
                           </Card>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/berita">
                           <span><Newspaper className="mr-2 h-4 w-4" /> Lihat Semua Berita</span>
                        </Link>
                    </Button>
                </div>
            </section>

          {/* Aspirasi & Polling Section */}
            <section id="interaktif" className="mt-20 md:mt-28">
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <div className="mb-8">
                            <h2 className="text-3xl font-headline font-semibold text-primary">Aspirasi Warga</h2>
                            <p className="text-muted-foreground mt-1">Suara warga untuk desa yang lebih baik.</p>
                        </div>
                        <div className="space-y-6">
                            {publicComplaints.slice(0, 3).map((complaint, index) => (
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
                        <div className="mt-8">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="/layanan/pengaduan-masyarakat">
                                    <span>Lihat Semua Aspirasi <ArrowRight className="ml-2 h-4 w-4" /></span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <Poll />
                    </div>
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
                      <span><Briefcase className="mr-2 h-4 w-4" /> Jelajahi Direktori UMKM</span>
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

    

    