
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { publicComplaints as initialComplaints } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { MessageSquareQuote } from 'lucide-react';

type Complaint = {
    name: string;
    date: string;
    message: string;
};

export default function PengaduanMasyarakatPage() {
    const { toast } = useToast();
    const [allComplaints, setAllComplaints] = useState<Complaint[]>([]);
    const [formData, setFormData] = useState({
        nama: '',
        nik: '',
        alamat: '',
        telepon: '',
        pesan: '',
    });

     useEffect(() => {
        // Load complaints from localStorage when the component mounts
        try {
            const storedComplaints = JSON.parse(localStorage.getItem('publicComplaints') || '[]');
            if (storedComplaints.length > 0) {
                setAllComplaints(storedComplaints);
            } else {
                // If localStorage is empty, seed it with initial data
                localStorage.setItem('publicComplaints', JSON.stringify(initialComplaints));
                setAllComplaints(initialComplaints);
            }
        } catch (error) {
            console.error("Failed to access localStorage:", error);
            // Fallback to initial data if localStorage is not available or fails
            setAllComplaints(initialComplaints);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newComplaint: Complaint = {
            name: formData.nama,
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
            message: formData.pesan,
        };

        try {
            const updatedComplaints = [newComplaint, ...allComplaints];
            localStorage.setItem('publicComplaints', JSON.stringify(updatedComplaints));
            setAllComplaints(updatedComplaints);

            toast({
                title: "Pengaduan Terkirim",
                description: "Terima kasih! Aspirasi Anda telah dicatat dan akan tampil di halaman ini.",
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

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Form Section */}
        <div className="lg:col-span-1">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle>Formulir Pengaduan</CardTitle>
                    <CardDescription>Silakan isi data diri dan sampaikan masukan Anda pada kolom yang tersedia.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                            <Textarea id="pesan" value={formData.pesan} onChange={handleChange} required rows={4} placeholder="Tuliskan pesan Anda di sini..." />
                        </div>
                        <Button type="submit" className="w-full">
                            Kirim Pengaduan
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>

        {/* Complaints List Section */}
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-headline font-semibold mb-6">Daftar Aspirasi Warga</h2>
            <div className="space-y-6">
                {allComplaints.length > 0 ? (
                    allComplaints.map((complaint, index) => (
                         <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                <div className="bg-muted rounded-full p-3">
                                    <MessageSquareQuote className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <CardTitle className="text-lg">{complaint.name}</CardTitle>
                                    <CardDescription>{new Date(complaint.date + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</CardDescription>
                                </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground italic">"{complaint.message}"</p>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-muted-foreground text-center py-10">Belum ada aspirasi yang tercatat.</p>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
