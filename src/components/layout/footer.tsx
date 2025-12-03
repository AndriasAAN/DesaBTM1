import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
             <Link
                href="/"
                className="flex items-center gap-3 text-lg font-semibold md:text-base font-headline text-primary mb-4"
            >
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Logo_OKU_baru.png/250px-Logo_OKU_baru.png" alt="Logo OKU" width={40} height={40} className="h-10 w-10" />
                <div className="flex flex-col">
                    <span className="whitespace-nowrap text-xl font-bold leading-tight">Desa Batumarta 1</span>
                    <span className="text-xs text-muted-foreground">Kecamatan Lubuk Raja, Kab. OKU</span>
                </div>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Menuju desa digital yang informatif, transparan, dan melayani masyarakat dengan sepenuh hati.
            </p>
             <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>
          <div className="md:col-span-2">
             <h4 className="font-semibold tracking-wide text-primary">Navigasi</h4>
             <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/berita" className="hover:text-primary transition-colors">Berita</Link></li>
                <li><Link href="/profil" className="hover:text-primary transition-colors">Profil Desa</Link></li>
                <li><Link href="/layanan" className="hover:text-primary transition-colors">Layanan</Link></li>
                <li><Link href="/umkm" className="hover:text-primary transition-colors">UMKM</Link></li>
                <li><Link href="/galeri" className="hover:text-primary transition-colors">Galeri</Link></li>
                <li><Link href="/peta" className="hover:text-primary transition-colors">Peta Desa</Link></li>
             </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-semibold tracking-wide text-primary">Hubungi Kami</h4>
            <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-1 shrink-0" />
                    <span>Desa Batumarta 1, Kecamatan Lubuk Raja, Kabupaten Ogan Komering Ulu, Sumatera Selatan</span>
                </div>
                 <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0" />
                    <a href="mailto:rahmawan3114@gmail.com" className="hover:text-primary transition-colors">rahmawan3114@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0" />
                    <a href="tel:+628974597885" className="hover:text-primary transition-colors">+62 897 4597 885</a>
                </div>
            </div>
          </div>
           <div className="md:col-span-3">
            <h4 className="font-semibold tracking-wide text-primary">Admin Website</h4>
            <p className="mt-4 text-sm">Andrias AAN Setiawan</p>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Desa Batumarta 1. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
