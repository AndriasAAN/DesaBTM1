"use client";

import { useState, useMemo } from 'react';
import Image from "next/image";
import { umkmList } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Search } from 'lucide-react';

export default function UmkmPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUmkm = useMemo(() => {
    if (!searchTerm) return umkmList;
    return umkmList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Direktori UMKM</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Temukan dan dukung usaha mikro, kecil, dan menengah yang ada di Desa Batumarta 1.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Cari UMKM berdasarkan nama, kategori, atau produk..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {filteredUmkm.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUmkm.map((umkm, index) => (
            <Card key={index} className="overflow-hidden group flex flex-col">
              <div className="relative h-56 w-full">
                <Image
                    src={umkm.image.imageUrl}
                    alt={umkm.image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={umkm.image.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{umkm.name}</CardTitle>
                <CardDescription className="text-accent font-semibold">{umkm.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{umkm.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                 <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Phone className="h-4 w-4" />
                    <span>{umkm.contact}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">Tidak ada UMKM yang cocok dengan pencarian Anda.</p>
        </div>
      )}
    </div>
  );
}
