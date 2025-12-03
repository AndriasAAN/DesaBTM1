import { umkmList } from "@/lib/data";
import { MapPin } from "lucide-react";

export const metadata = {
    title: "Peta Digital Desa - Website Desa Batumarta 1",
    description: "Peta digital interaktif Desa Batumarta 1 yang menunjukkan lokasi penting dan direktori UMKM.",
};

// Dummy coordinates for demonstration. Replace with real coordinates.
const locations = [
    { id: "balai_desa", name: "Balai Desa Batumarta 1", lat: -4.098, lng: 104.180, type: "pemerintahan" },
    { id: "masjid_nurul_huda", name: "Masjid Nurul Huda", lat: -4.100, lng: 104.182, type: "ibadah" },
    { id: "stadion_mini", name: "Stadion Mini Batumarta 1", lat: -4.095, lng: 104.178, type: "fasilitas" },
    ...umkmList.map((umkm, index) => ({
        id: `umkm_${index}`,
        name: umkm.name,
        lat: -4.097 + (Math.random() - 0.5) * 0.01, // Randomize for display
        lng: 104.181 + (Math.random() - 0.5) * 0.01, // Randomize for display
        type: 'umkm'
    }))
];

export default function PetaPage() {
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.132895696184!2d104.17084534127074!3d-4.098905892557403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e395460505f0a6d%3A0x464c23c52a4009a6!2sBatumarta%20I%2C%20Kec.%20Lubuk%20Raja%2C%20Kabupaten%20Ogan%20Komering%20Ulu%2C%20Sumatera%20Selatan!5e0!3m2!1sid!2sid!4v1731600000000"
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
                     {locations.map(loc => (
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
