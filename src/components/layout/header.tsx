import Link from "next/link";
import { Mountain } from "lucide-react";
import { navItems } from "@/lib/data";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base font-headline text-primary"
          >
            <Mountain className="h-6 w-6" />
            <span className="whitespace-nowrap">Batumarta Satu Digital</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground text-muted-foreground",
                item.href === "/" && "hidden" // Hide home from main nav
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <MobileNav />
            <div className="md:hidden flex-1">
                 <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold font-headline text-primary"
                >
                    <Mountain className="h-6 w-6" />
                    <span>Batumarta Satu</span>
                </Link>
            </div>
        </div>
      </div>
    </header>
  );
}
