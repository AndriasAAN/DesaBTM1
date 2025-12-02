"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { publicComplaints as initialComplaints } from '@/lib/data';

export default function PengaduanMasyarakatPage() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        nama: '',
        nik: '',
        alamat: '',
        telepon: '',
        pesan: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newComplaint = {
            name: formData.nama,
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
            message: formData.pesan,
        };

        try {
            // Get existing complaints from localStorage
            const storedComplaints = JSON.parse(localStorage.getItem('publicComplaints') || '[]');
            
            // On first submission, if localStorage is empty, seed it with initial data
            if (storedComplaints.length === 0) {
                 const complaintsToStore = [...initialComplaints, newComplaint];
                 localStorage.setItem('publicComplaints', JSON.stringify(complaintsToStore));
            } else {
                 const updatedComplaints = [newComplaint, ...storedComplaints];
                 localStorage.setItem('publicComplaints', JSON.stringify(updatedComplaints));
            }


            toast({
                title: "Pengaduan Terkirim",
                description: "Terima kasih! Aspirasi Anda telah dicatat dan akan tampil di halaman depan.",
            });

            // Reset form
            setFormData({
                nama: '',
                nik: '',
                alamat: '',
                telepon: '',
                pesan: '',
            });

        } catch (error) {
            console.error("Failed to save complaint to localStorage:", error);
            toast({
                variant: "destructive",
                title: "Gagal Menyimpan",
                description: "Terjadi kesalahan saat menyimpan aspirasi Anda. Silakan coba lagi.",
            });
        }
    };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Pengaduan Masyarakat</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Sampaikan aspirasi, kritik, atau saran Anda untuk kemajuan Desa Batumarta 1. Identitas Anda akan kami jaga kerahasiaannya.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Formulir Pengaduan</CardTitle>
                <CardDescription>Silakan isi data diri dan sampaikan masukan Anda pada kolom yang tersedia.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="nama">Nama Lengkap</Label>
                        <Input id="nama" value={formData.nama} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="nik">NIK (Nomor Induk Kependudukan)</Label>
                        <Input id="nik" value={formData.nik} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="alamat">Alamat Lengkap</Label>
                        <Textarea id="alamat" value={formData.alamat} onChange={handleChange} required />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="telepon">Nomor Telepon/HP (WhatsApp)</Label>
                        <Input id="telepon" type="tel" value={formData.telepon} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="pesan">Isi Aspirasi, Kritik, atau Saran</Label>
                        <Textarea id="pesan" value={formData.pesan} onChange={handleChange} required rows={6} placeholder="Tuliskan pesan Anda di sini..." />
                    </div>
                    <Button type="submit" className="w-full">
                        Kirim Pengaduan
                    </Button>
                </form>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
