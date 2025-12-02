import Image from "next/image";
import { profileData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Profil Desa - Website Desa Batumarta 1",
  description: "Informasi lengkap mengenai sejarah, demografi, dan potensi Desa Batumarta 1.",
};

export default function ProfilPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Profil Desa Batumarta 1</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Mengenal lebih dekat Desa Batumarta 1, dari sejarah hingga potensi masa depan.
          </p>
        </div>

        {/* History Section */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">{profileData.history.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {profileData.history.content}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={profileData.history.image.imageUrl}
              alt={profileData.history.image.description}
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover aspect-[4/3]"
              data-ai-hint={profileData.history.image.imageHint}
            />
          </div>
        </section>

        {/* Demography Section */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          <div>
            <Image
              src={profileData.demography.image.imageUrl}
              alt={profileData.demography.image.description}
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover aspect-[4/3]"
              data-ai-hint={profileData.demography.image.imageHint}
            />
          </div>
          <div>
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">{profileData.demography.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {profileData.demography.content}
            </p>
          </div>
        </section>

        {/* Potential Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold">{profileData.potential.title}</h2>
            <p className="text-muted-foreground mt-2">Berbagai potensi yang menjadi motor penggerak kemajuan desa.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.potential.items.map((item) => (
              <Card key={item.name} className="text-center">
                <CardHeader>
                  <CardTitle className="font-headline">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
