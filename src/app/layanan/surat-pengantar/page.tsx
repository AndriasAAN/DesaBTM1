"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Printer } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SuratPengantarPage() {
    const [formData, setFormData] = useState({
        nama: '',
        nik: '',
        tempatLahir: '',
        tanggalLahir: '',
        jenisKelamin: 'Laki-laki',
        agama: '',
        statusPerkawinan: 'Belum Kawin',
        pekerjaan: '',
        alamat: '',
        keperluan: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleRadioChange = (id: string, value: string) => {
        setFormData(prev => ({...prev, [id]: value}))
    }

    const handlePrint = () => {
        window.print();
    };
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Layanan Surat Pengantar</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Isi formulir di bawah ini untuk membuat surat pengantar secara mandiri. Setelah selesai, Anda dapat mencetak atau menyimpan surat sebagai PDF.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 print:hidden">
        <Card>
            <CardHeader>
                <CardTitle>Formulir Data Diri</CardTitle>
                <CardDescription>Pastikan data yang Anda masukkan sudah benar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="nama">Nama Lengkap</Label>
                    <Input id="nama" value={formData.nama} onChange={handleChange} placeholder="Contoh: Budi Santoso" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="nik">NIK</Label>
                    <Input id="nik" value={formData.nik} onChange={handleChange} placeholder="320xxxxxxxxxxxxx" />
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="tempatLahir">Tempat Lahir</Label>
                        <Input id="tempatLahir" value={formData.tempatLahir} onChange={handleChange} placeholder="Contoh: Jakarta" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tanggalLahir">Tanggal Lahir</Label>
                        <Input id="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} type="date" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Jenis Kelamin</Label>
                    <RadioGroup defaultValue={formData.jenisKelamin} onValueChange={(value) => handleRadioChange('jenisKelamin', value)} className="flex gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Laki-laki" id="laki-laki" />
                            <Label htmlFor="laki-laki">Laki-laki</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Perempuan" id="perempuan" />
                            <Label htmlFor="perempuan">Perempuan</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="agama">Agama</Label>
                    <Input id="agama" value={formData.agama} onChange={handleChange} placeholder="Contoh: Islam" />
                </div>
                <div className="space-y-2">
                    <Label>Status Perkawinan</Label>
                    <RadioGroup defaultValue={formData.statusPerkawinan} onValueChange={(value) => handleRadioChange('statusPerkawinan', value)} className="flex gap-4">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Belum Kawin" id="belum-kawin" />
                            <Label htmlFor="belum-kawin">Belum Kawin</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Kawin" id="kawin" />
                            <Label htmlFor="kawin">Kawin</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Cerai" id="cerai" />
                            <Label htmlFor="cerai">Cerai</Label>
                        </div>
                    </RadioGroup>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="pekerjaan">Pekerjaan</Label>
                    <Input id="pekerjaan" value={formData.pekerjaan} onChange={handleChange} placeholder="Contoh: Petani" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="alamat">Alamat Lengkap</Label>
                    <Textarea id="alamat" value={formData.alamat} onChange={handleChange} placeholder="Contoh: Jl. Merdeka No. 10, RT.01/RW.02, Desa Batumarta 1" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="keperluan">Keperluan Surat</Label>
                    <Textarea id="keperluan" value={formData.keperluan} onChange={handleChange} placeholder="Contoh: Untuk mengurus SKCK di kepolisian." />
                </div>
            </CardContent>
        </Card>

        <div className="print-area">
             <Card className="sticky top-24">
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle>Pratinjau Surat</CardTitle>
                        <CardDescription>Surat akan diperbarui secara otomatis.</CardDescription>
                    </div>
                    <Button onClick={handlePrint} size="icon" variant="outline">
                        <Printer className="h-5 w-5"/>
                        <span className="sr-only">Cetak Surat</span>
                    </Button>
                </CardHeader>
                <CardContent id="surat-content" className="prose prose-sm max-w-none text-foreground/90">
                    <div className="text-center font-serif">
                        <h3 className="font-bold underline">SURAT PENGANTAR</h3>
                        <p>Nomor: ... / ... / ... / ....</p>
                    </div>
                    <div className="mt-8 font-serif text-base">
                        <p>Yang bertanda tangan di bawah ini Kepala Desa Batumarta 1, Kecamatan Lubuk Raja, Kabupaten Ogan Komering Ulu, menerangkan bahwa:</p>
                        <table className="my-4">
                            <tbody>
                                <tr><td className="w-48">Nama</td><td>: {formData.nama || '...'}</td></tr>
                                <tr><td>NIK</td><td>: {formData.nik || '...'}</td></tr>
                                <tr><td>Tempat/Tgl Lahir</td><td>: {formData.tempatLahir || '...'}, {formData.tanggalLahir ? new Date(formData.tanggalLahir + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '...'}</td></tr>
                                <tr><td>Jenis Kelamin</td><td>: {formData.jenisKelamin || '...'}</td></tr>
                                <tr><td>Agama</td><td>: {formData.agama || '...'}</td></tr>
                                <tr><td>Status Perkawinan</td><td>: {formData.statusPerkawinan || '...'}</td></tr>
                                <tr><td>Pekerjaan</td><td>: {formData.pekerjaan || '...'}</td></tr>
                                <tr><td>Alamat</td><td>: {formData.alamat || '...'}</td></tr>
                            </tbody>
                        </table>
                        <p>Berdasarkan keterangan yang ada pada kami, nama tersebut di atas adalah benar penduduk Desa Batumarta 1 dan berkelakuan baik.</p>
                        <p>Surat pengantar ini dibuat untuk keperluan: <strong>{formData.keperluan || '...'}</strong></p>
                        <p>Demikian surat pengantar ini kami buat untuk dapat dipergunakan sebagaimana mestinya.</p>

                        <div className="flex justify-end mt-16">
                            <div className="text-center">
                                <p>Batumarta 1, {formattedDate}</p>
                                <p>Kepala Desa Batumarta 1</p>
                                <br/><br/><br/>
                                <p className="font-bold underline">(.........................................)</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
       <style jsx global>{`
            @media print {
                body * {
                    visibility: hidden;
                }
                .print-area, .print-area * {
                    visibility: visible;
                }
                .print-area {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                }
                .print-area .prose {
                    font-size: 12pt;
                }
            }
        `}</style>
    </div>
  );
}
