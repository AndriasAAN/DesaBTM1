import { mapLocations } from "@/lib/data";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Peta Digital Desa - Website Desa Batumarta 1",
    description: "Peta digital interaktif Desa Batumarta 1 yang menunjukkan lokasi penting dan direktori UMKM.",
};

export default function PetaPage() {
    const balaiDesaLocation = mapLocations.find(loc => loc.id === 'balai_desa');
    const mapCenterLat = balaiDesaLocation?.lat ?? -4.2043579;
    const mapCenterLng = balaiDesaLocation?.lng ?? 104.2741977;

    const mapEmbedUrl = `https://maps.google.com/maps?q=${mapCenterLat},${mapCenterLng}&z=17&output=embed&t=k`;

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Peta Digital Desa</h1>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                    Temukan lokasi penting, fasilitas umum, dan UMKM unggulan di Desa Batumarta 1.
                </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg border">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Desa Batumarta 1"
                ></iframe>
            </div>

            <div className="mt-12">
                 <h2 className="text-2xl font-headline font-semibold mb-6">Lokasi Penting</h2>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {mapLocations.map(loc => (
                         <a 
                            key={loc.id} 
                            href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-secondary p-3 rounded-lg hover:bg-primary/10 hover:shadow-md transition-all duration-300"
                         >
                            <MapPin className="h-5 w-5 text-primary shrink-0" />
                            <span className="font-medium">{loc.name}</span>
                         </a>
                     ))}
                 </div>
            </div>

        </div>
    );
}
