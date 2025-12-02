import imageData from './placeholder-images.json';
const placeholderImages = imageData.placeholderImages;

const findImage = (id: string) => {
    const img = placeholderImages.find(img => img.id === id);
    return img || { id: '', imageUrl: 'https://placehold.co/600x400', imageHint: 'placeholder', description: 'Image not found' };
};

export const navItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Berita', href: '/berita' },
  { name: 'Profil Desa', href: '/profil' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'UMKM', href: '/umkm' },
];

export const newsArticles = [
  {
    id: '7',
    title: 'Pencanangan Desa Cinta Statistik (Desa CANTIK) di Batumarta 1',
    date: '30 Juni 2021',
    excerpt: 'BPS OKU mencanangkan Desa Batumarta 1 sebagai Desa Cinta Statistik (CANTIK) untuk meningkatkan literasi dan pengelolaan data di tingkat desa guna mendukung pembangunan.',
    image: findImage('news-7'),
  },
  {
    id: '6',
    title: 'Laga Allstar Persipra FC Lawan Panser FC Berlangsung Seru',
    date: '1 Agustus 2023',
    excerpt: 'Laga persahabatan antara Persipra FC Allstar dan Panser FC berlangsung meriah di lapangan sepak bola Blok D. Pertandingan ini menjadi ajang silaturahmi dan hiburan bagi masyarakat.',
    image: findImage('news-6'),
  },
  {
    id: '5',
    title: 'Masyarakat Desa Batumarta I Antusias Ikuti Program Vaksinasi',
    date: '28 Oktober 2021',
    excerpt: 'Tingginya kesadaran masyarakat Desa Batumarta 1 untuk mengikuti vaksinasi Covid-19 terlihat dari antusiasme warga yang datang ke lokasi vaksinasi di balai desa. Program ini merupakan upaya bersama untuk mencapai kekebalan komunal.',
    image: findImage('news-5'),
  },
  {
    id: '1',
    title: 'Gotong Royong Membersihkan Saluran Irigasi Desa',
    date: '15 Juli 2024',
    excerpt: 'Warga Desa Batumarta 1 dengan semangat kebersamaan melaksanakan kegiatan gotong royong untuk membersihkan saluran irigasi yang mengairi sawah-sawah di desa.',
    image: findImage('news-1'),
  },
  {
    id: '2',
    title: 'Musim Panen Padi Tiba, Petani Bersemangat',
    date: '10 Juli 2024',
    excerpt: 'Musim panen padi tahun ini disambut dengan suka cita oleh para petani di Batumarta 1. Hasil panen yang melimpah diharapkan dapat meningkatkan kesejahteraan.',
    image: findImage('news-2'),
  },
  {
    id: '3',
    title: 'Rapat Koordinasi Perangkat Desa dan Tokoh Masyarakat',
    date: '5 Juli 2024',
    excerpt: 'Pemerintah desa mengadakan rapat koordinasi bersama tokoh masyarakat untuk membahas program pembangunan dan rencana kegiatan desa ke depan.',
    image: findImage('news-3'),
  },
  {
    id: '4',
    title: 'Pembinaan Karang Taruna untuk Generasi Muda Kreatif',
    date: '1 Juli 2024',
    excerpt: 'Karang Taruna Desa Batumarta 1 mendapatkan pembinaan untuk mengembangkan potensi dan kreativitas generasi muda dalam berbagai bidang.',
    image: findImage('news-4'),
  },
];

export const galleryImages = [
    findImage('gallery-1'),
    findImage('gallery-2'),
    findImage('gallery-3'),
    findImage('gallery-4'),
    findImage('gallery-5'),
    findImage('gallery-6'),
    findImage('gallery-7'),
    findImage('gallery-8'),
    findImage('gallery-9'),
];

export const publicServices = [
    {
        title: "Surat Pengantar",
        description: "Layanan pembuatan surat pengantar untuk berbagai keperluan administrasi (KTP, KK, SKCK).",
        icon: "FileText"
    },
    {
        title: "Izin Usaha Mikro",
        description: "Prosedur dan persyaratan untuk mendapatkan izin usaha mikro dan kecil (IUMK).",
        icon: "Store"
    },
    {
        title: "Layanan Kependudukan",
        description: "Informasi terkait pengurusan akta kelahiran, kematian, dan pindah domisili.",
        icon: "Users"
    },
    {
        title: "Pengaduan Masyarakat",
        description: "Saluran untuk menyampaikan aspirasi, keluhan, dan pengaduan terkait pelayanan desa.",
        icon: "Megaphone"
    },
];

export const umkmList = [
    {
        name: "Warung Makan Bu Tum",
        category: "Kuliner",
        description: "Menyediakan masakan rumahan khas desa dengan harga terjangkau. Menu andalan: sayur lodeh dan ikan bakar.",
        contact: "081234567890",
        image: findImage('umkm-1')
    },
    {
        name: "Kerajinan Bambu Pakde",
        category: "Kerajinan",
        description: "Produk kerajinan tangan dari bambu seperti kursi, meja, dan hiasan dinding yang unik dan artistik.",
        contact: "082345678901",
        image: findImage('umkm-2')
    },
    {
        name: "Kedai Kopi 'Sawah Luhur'",
        category: "Kuliner",
        description: "Menikmati kopi robusta asli dari petani lokal dengan pemandangan sawah yang menenangkan.",
        contact: "083456789012",
        image: findImage('umkm-3')
    },
];

export const eventCalendar = [
    {
        date: "2024-08-17",
        title: "Upacara dan Lomba Kemerdekaan RI",
        description: "Perayaan HUT RI ke-79 di lapangan desa, dimeriahkan dengan berbagai lomba untuk anak-anak dan dewasa."
    },
    {
        date: "2024-08-25",
        title: "Rapat Desa Bulanan",
        description: "Rapat rutin bulanan pemerintah desa bersama BPD dan LPMD di balai desa."
    },
    {
        date: "2024-09-10",
        title: "Festival Panen Raya",
        description: "Syukuran atas hasil panen yang melimpah, diisi dengan pertunjukan seni dan bazar produk pertanian."
    }
];

export const profileData = {
    history: {
        title: "Sejarah Desa Batumarta 1",
        content: "Desa Batumarta 1 didirikan pada tahun 1970-an sebagai bagian dari program transmigrasi pemerintah. Para pendatang dari berbagai daerah di Jawa dan Bali bersatu padu, membuka lahan, dan membangun komunitas baru yang harmonis. Nama 'Batumarta' sendiri memiliki filosofi mendalam, melambangkan kekuatan (Batu) dan kehidupan (Marta), dengan harapan desa ini akan menjadi penyokong kehidupan yang kokoh bagi warganya. Sejak awal, pertanian, khususnya padi dan karet, menjadi tulang punggung perekonomian desa.",
        image: findImage('profile-history')
    },
    demography: {
        title: "Demografi dan Kependudukan",
        content: "Saat ini, Desa Batumarta 1 dihuni oleh sekitar 5.000 jiwa yang tersebar di beberapa dusun. Mayoritas penduduk bekerja sebagai petani dan pekebun, sementara sebagian lainnya berprofesi sebagai pedagang, pengrajin, dan pegawai. Kehidupan sosial masyarakat sangat erat, diwarnai dengan semangat gotong royong dan toleransi antarumat beragama yang tinggi. Generasi muda desa juga aktif dalam berbagai kegiatan melalui karang taruna dan organisasi kepemudaan lainnya.",
        image: findImage('profile-demography')
    },
    potential: {
        title: "Potensi Desa",
        items: [
            {
                name: "Pertanian",
                description: "Lahan sawah yang subur menjadikan desa ini sebagai salah satu lumbung padi di kecamatan. Selain itu, perkebunan karet dan kelapa sawit juga menjadi komoditas unggulan."
            },
            {
                name: "Peternakan",
                description: "Banyak warga yang mengembangkan usaha peternakan sapi, kambing, dan ayam untuk memenuhi kebutuhan lokal dan regional."
            },
            {
                name: "UMKM",
                description: "Usaha mikro, kecil, dan menengah berkembang pesat, mulai dari kuliner, kerajinan tangan, hingga jasa, yang turut menggerakkan roda perekonomian desa."
            },
            {
                name: "Pariwisata Alam",
                description: "Keindahan alam pedesaan, area persawahan yang hijau, dan beberapa sungai kecil memiliki potensi untuk dikembangkan menjadi agrowisata dan ekowisata."
            }
        ]
    }
}

    