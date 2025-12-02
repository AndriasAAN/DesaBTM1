
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Printer } from "lucide-react";

export default function LayananKependudukanPage() {

    const handlePrint = () => {
        // A more specific print logic would be needed here
        window.print();
    };

    const KTPForm = () => (
        <Card>
            <CardHeader>
                <CardTitle>Formulir Permohonan KTP</CardTitle>
                <CardDescription>Isi data untuk permohonan Kartu Tanda Penduduk.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="ktp_nama">Nama Lengkap</Label>
                    <Input id="ktp_nama" placeholder="Sesuai Akte Kelahiran" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="ktp_nik">NIK</Label>
                    <Input id="ktp_nik" placeholder="Nomor Induk Kependudukan" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="ktp_kk">Nomor Kartu Keluarga</Label>
                    <Input id="ktp_kk" placeholder="Nomor KK" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="ktp_alamat">Alamat Lengkap</Label>
                    <Textarea id="ktp_alamat" placeholder="Alamat saat ini" />
                </div>
                <Button onClick={handlePrint} className="w-full">
                    <Printer className="mr-2 h-4 w-4" />
                    Cetak Formulir
                </Button>
            </CardContent>
        </Card>
    );

    const AkteLahirForm = () => (
        <Card>
            <CardHeader>
                <CardTitle>Formulir Akte Kelahiran</CardTitle>
                <CardDescription>Isi data untuk pengajuan Akte Kelahiran.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="lahir_nama">Nama Anak</Label>
                    <Input id="lahir_nama" placeholder="Nama lengkap anak" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="lahir_tempat">Tempat Lahir</Label>
                        <Input id="lahir_tempat" placeholder="Contoh: Jakarta" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lahir_tanggal">Tanggal Lahir</Label>
                        <Input id="lahir_tanggal" type="date" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lahir_nama_ayah">Nama Ayah</Label>
                    <Input id="lahir_nama_ayah" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="lahir_nama_ibu">Nama Ibu</Label>
                    <Input id="lahir_nama_ibu" />
                </div>
                <Button onClick={handlePrint} className="w-full">
                    <Printer className="mr-2 h-4 w-4" />
                    Cetak Formulir
                </Button>
            </CardContent>
        </Card>
    );
    
    const AkteMatiForm = () => (
         <Card>
            <CardHeader>
                <CardTitle>Formulir Akte Kematian</CardTitle>
                <CardDescription>Isi data untuk pengajuan Akte Kematian.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="mati_nama">Nama Almarhum/Almarhumah</Label>
                    <Input id="mati_nama" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="mati_nik">NIK</Label>
                    <Input id="mati_nik" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="mati_tempat">Tempat Wafat</Label>
                        <Input id="mati_tempat" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="mati_tanggal">Tanggal Wafat</Label>
                        <Input id="mati_tanggal" type="date" />
                    </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="mati_pelapor">Nama Pelapor</Label>
                    <Input id="mati_pelapor" />
                </div>
                <Button onClick={handlePrint} className="w-full">
                    <Printer className="mr-2 h-4 w-4" />
                    Cetak Formulir
                </Button>
            </CardContent>
        </Card>
    );

    const KKForm = () => (
         <Card>
            <CardHeader>
                <CardTitle>Formulir Kartu Keluarga</CardTitle>
                <CardDescription>Isi data untuk permohonan Kartu Keluarga baru atau perubahan.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="kk_kepala">Nama Kepala Keluarga</Label>
                    <Input id="kk_kepala" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="kk_alamat">Alamat</Label>
                    <Textarea id="kk_alamat" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="kk_anggota">Data Anggota Keluarga</Label>
                    <Textarea id="kk_anggota" placeholder="Tuliskan nama, NIK, dan hubungan setiap anggota keluarga..." />
                </div>
                <Button onClick={handlePrint} className="w-full">
                    <Printer className="mr-2 h-4 w-4" />
                    Cetak Formulir
                </Button>
            </CardContent>
        </Card>
    );

    const PindahForm = () => (
        <Card>
            <CardHeader>
                <CardTitle>Formulir Surat Pindah</CardTitle>
                <CardDescription>Isi data untuk pengajuan Surat Keterangan Pindah.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="pindah_nama">Nama Pemohon</Label>
                    <Input id="pindah_nama" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pindah_nik">NIK Pemohon</Label>
                    <Input id="pindah_nik" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="pindah_alamat_asal">Alamat Asal</Label>
                    <Textarea id="pindah_alamat_asal" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pindah_alamat_tujuan">Alamat Tujuan</Label>
                    <Textarea id="pindah_alamat_tujuan" />
                </div>
                <Button onClick={handlePrint} className="w-full">
                    <Printer className="mr-2 h-4 w-4" />
                    Cetak Formulir
                </Button>
            </CardContent>
        </Card>
    );


  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Layanan Administrasi Kependudukan</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Pilih jenis layanan yang Anda butuhkan dan isi formulir yang sesuai.
        </p>
      </div>

      <Tabs defaultValue="ktp" className="max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
          <TabsTrigger value="ktp">KTP</TabsTrigger>
          <TabsTrigger value="akte_kelahiran">Akte Kelahiran</TabsTrigger>
          <TabsTrigger value="akte_kematian">Akte Kematian</TabsTrigger>
          <TabsTrigger value="kk">Kartu Keluarga</TabsTrigger>
          <TabsTrigger value="surat_pindah">Surat Pindah</TabsTrigger>
        </TabsList>
        <TabsContent value="ktp" className="mt-6">
            <KTPForm />
        </TabsContent>
        <TabsContent value="akte_kelahiran" className="mt-6">
            <AkteLahirForm />
        </TabsContent>
         <TabsContent value="akte_kematian" className="mt-6">
            <AkteMatiForm />
        </TabsContent>
        <TabsContent value="kk" className="mt-6">
            <KKForm />
        </TabsContent>
        <TabsContent value="surat_pindah" className="mt-6">
            <PindahForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
