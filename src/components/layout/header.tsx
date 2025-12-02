import Link from "next/link";
import { navItems } from "@/lib/data";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center px-4 md:px-6">
        <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold md:text-base font-headline text-primary"
          >
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Logo_OKU_baru.png/250px-Logo_OKU_baru.png" alt="Logo OKU" width={40} height={40} className="h-10 w-10" />
            <div className="flex flex-col">
                <span className="whitespace-nowrap text-xl font-bold leading-tight">Desa Batumarta 1</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Kabupaten Ogan Komering Ulu</span>
            </div>
        </Link>
        <nav className="ml-auto hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary font-medium",
                item.href === "/" && "hidden" // Hide home from main nav
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="ml-4 flex items-center justify-end gap-4 md:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  );
}
