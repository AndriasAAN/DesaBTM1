"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0 md:hidden text-primary">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold font-headline text-primary"
            onClick={() => setOpen(false)}
          >
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Logo_OKU_baru.png/250px-Logo_OKU_baru.png" alt="Logo OKU" width={24} height={24} className="h-6 w-6" />
            <span>Batumarta Satu</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
