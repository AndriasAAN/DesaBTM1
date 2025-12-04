
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

        </div>
    );
}

    