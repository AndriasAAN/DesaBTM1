import { publicServices } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import * as Lucide from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Layanan Publik - Website Desa Batumarta 1",
  description: "Informasi dan akses untuk layanan publik yang tersedia di Desa Batumarta 1.",
};

const getIcon = (iconName: string) => {
  const Icon = Lucide[iconName as keyof typeof Lucide] as Lucide.LucideIcon;
  return Icon ? <Icon className="h-10 w-10 text-primary mb-4" /> : null;
};

export default function LayananPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Layanan Publik Desa</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan untuk mempermudah urusan administrasi dan kebutuhan warga Desa Batumarta 1.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {publicServices.map((service) => (
          <Card key={service.title} className="flex flex-col text-center items-center hover:shadow-accent/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center">
              {getIcon(service.icon)}
              <CardTitle className="font-headline">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter className="w-full">
              <Button asChild variant="outline" className="w-full bg-accent/10 border-accent/20 text-accent-foreground hover:bg-accent/20">
                <Link href="#">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
