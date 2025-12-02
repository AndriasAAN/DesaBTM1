import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-headline font-semibold text-primary">Batumarta Satu Digital</h3>
            <p className="mt-2 text-sm">
              Website Resmi Pemerintah Desa Batumarta 1.
            </p>
            <p className="mt-1 text-sm">
              Menuju desa digital yang informatif dan transparan.
            </p>
          </div>
          <div className="md:col-span-2 md:justify-self-end">
            <h4 className="font-semibold tracking-wide">Kontak Admin Website</h4>
            <div className="mt-4 space-y-2 text-sm">
                <p>Andrias AAN Setiawan</p>
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+628974597885" className="hover:text-primary transition-colors">+62 897 4597 885</a>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:rahmawan3114@gmail.com" className="hover:text-primary transition-colors">rahmawan3114@gmail.com</a>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-muted pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Desa Batumarta 1. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
