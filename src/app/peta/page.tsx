import { mapLocations } from "@/lib/data";
import { MapPin } from "lucide-react";

export const metadata = {
    title: "Peta Digital Desa - Website Desa Batumarta 1",
    description: "Peta digital interaktif Desa Batumarta 1 yang menunjukkan lokasi penting dan direktori UMKM.",
};

export default function PetaPage() {
    const balaiDesaLocation = mapLocations.find(loc => loc.id === 'balai_desa');
    const mapCenterLat = balaiDesaLocation?.lat ?? -4.0543125;
    const mapCenterLng = balaiDesaLocation?.lng ?? 104.2740625;

    const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15939.52923594199!2d${mapCenterLng}!3d${mapCenterLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e38e24a35555555%3A0xb694af1819d67543!2sKantor%20Kepala%20Desa%20Batumarta%20I!5e0!3m2!1sid!2sid!4v1620000000000&q=Q7WF%2B7M4`;

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
                         <div key={loc.id} className="flex items-center gap-3 bg-secondary p-3 rounded-lg">
                            <MapPin className="h-5 w-5 text-primary shrink-0" />
                            <span className="font-medium">{loc.name}</span>
                         </div>
                     ))}
                 </div>
            </div>

        </div>
    );
}
