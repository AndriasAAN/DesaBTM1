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
  { name: 'Layanan', href: '/layanan' },
  { name: 'UMKM', href: '/umkm' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Peta Desa', href: '/peta' },
];

export const newsArticles = [
  {
    id: '13',
    title: 'Desa Batumarta 1 Gelar BIMTEK Pengelolaan Aset Desa',
    date: '15 Oktober 2024',
    excerpt: 'Pemerintah Desa Batumarta 1 menyelenggarakan Bimbingan Teknis (BIMTEK) tentang pengelolaan aset desa. Acara ini menghadirkan pembicara dari kecamatan dan kabupaten untuk meningkatkan kapasitas perangkat desa dalam mengelola aset secara transparan dan akuntabel.',
    image: findImage('news-bimtek-aset'),
    fullContent: `Pemerintah Desa Batumarta 1 mengambil langkah proaktif dalam meningkatkan tata kelola pemerintahan dengan menyelenggarakan Bimbingan Teknis (BIMTEK) Pengelolaan Aset Desa. Acara yang digelar di balai desa ini bertujuan untuk meningkatkan pengetahuan dan keterampilan perangkat desa dalam menginventarisasi, mengelola, dan memanfaatkan aset desa secara efisien, transparan, dan akuntabel.\n\nKegiatan ini dihadiri oleh seluruh perangkat desa, anggota Badan Permusyawaratan Desa (BPD), serta perwakilan lembaga kemasyarakatan desa. Menghadirkan narasumber ahli dari Inspektorat Kabupaten Ogan Komering Ulu (OKU) dan didampingi oleh perwakilan dari Kecamatan Lubuk Raja, para peserta mendapatkan materi mendalam mengenai regulasi terbaru terkait aset desa, prosedur pencatatan, penilaian, hingga penghapusan aset.\n\nKepala Desa Batumarta 1, dalam sambutannya, menekankan pentingnya pengelolaan aset yang baik sebagai salah satu pilar utama pemerintahan yang bersih. "Aset desa adalah kekayaan kita bersama yang harus dikelola dengan benar untuk sebesar-besarnya kemakmuran masyarakat. Melalui BIMTEK ini, kami berharap tidak ada lagi kesalahan administrasi dan semua aset desa dapat terdata dengan baik serta dimanfaatkan secara optimal untuk pembangunan," ujarnya.\n\nNarasumber dari Inspektorat Kabupaten OKU memaparkan bahwa pengelolaan aset yang tertib akan berdampak positif pada penilaian laporan keuangan pemerintah desa dan dapat mencegah potensi penyalahgunaan. Sesi interaktif dan studi kasus menjadi bagian menarik dari acara ini, di mana para peserta dapat langsung berkonsultasi mengenai kendala yang dihadapi di lapangan.`
  },
  {
    id: '12',
    title: 'Perangkat Desa Adakan Musyawarah Rutin Bahas Kemajuan Desa',
    date: '10 Oktober 2024',
    excerpt: 'Seluruh jajaran perangkat Desa Batumarta 1 menggelar musyawarah rutin untuk mengevaluasi program kerja yang telah berjalan dan merencanakan strategi pembangunan selanjutnya demi kemajuan bersama.',
    image: findImage('gallery-musyawarah'),
    fullContent: `Dalam rangka menjaga sinergi dan akselerasi pembangunan, jajaran perangkat Desa Batumarta 1 beserta Badan Permusyawaratan Desa (BPD) mengadakan musyawarah rutin di kantor desa. Pertemuan ini menjadi agenda penting untuk mengevaluasi program-program yang telah terlaksana sepanjang triwulan ketiga tahun ini, serta merumuskan langkah-langkah strategis untuk periode selanjutnya.\n\nDipimpin oleh Kepala Desa, musyawarah membahas berbagai topik krusial, mulai dari realisasi anggaran, kemajuan proyek infrastruktur seperti perbaikan jalan dusun, hingga optimalisasi layanan administrasi kependudukan. Setiap kepala urusan memberikan laporan dan pandangannya, menciptakan diskusi yang konstruktif untuk mengidentifikasi tantangan dan mencari solusi bersama.\n\n"Musyawarah rutin seperti ini adalah jantung dari pemerintahan desa. Di sinilah kita menyatukan visi, mengevaluasi kinerja, dan memastikan bahwa setiap program yang kita jalankan benar-benar menjawab kebutuhan masyarakat," ungkap Kepala Desa. "Transparansi dan kolaborasi adalah kunci. Kami ingin setiap keputusan yang lahir dari forum ini membawa manfaat nyata bagi seluruh warga Batumarta 1."\n\nSalah satu fokus utama dalam pembahasan adalah persiapan menghadapi musim hujan, termasuk rencana normalisasi beberapa saluran irigasi dan program kebersihan lingkungan. Ketua BPD juga menyampaikan aspirasi dari masyarakat yang telah dihimpun, memastikan bahwa suara warga didengar dan menjadi pertimbangan dalam perencanaan desa.`
  },
  {
    id: '8',
    title: 'MUI OKU Safari Sholat Subuh Berjemaah di Masjid Nurul Huda Batumarta 1',
    date: '14 Januari 2024',
    excerpt: 'MUI Kabupaten OKU mengadakan safari sholat subuh berjemaah di Masjid Nurul Huda, Desa Batumarta 1. Kegiatan ini bertujuan untuk mempererat silaturahmi dan meningkatkan keimanan masyarakat.',
    image: findImage('news-8'),
    fullContent: `Dalam upaya mempererat ukhuwah Islamiyah dan meningkatkan syiar agama, Majelis Ulama Indonesia (MUI) Kabupaten Ogan Komering Ulu (OKU) menggelar program Safari Subuh di Masjid Nurul Huda, Desa Batumarta 1. Ratusan warga dari berbagai kalangan tumpah ruah memenuhi masjid untuk melaksanakan sholat Subuh berjemaah bersama para ulama dan tokoh masyarakat.\n\nKegiatan yang diinisiasi oleh MUI OKU ini tidak hanya bertujuan untuk memakmurkan masjid, tetapi juga menjadi sarana silaturahmi antara ulama, umara (pemerintah), dan umat. Usai sholat, acara dilanjutkan dengan tausiyah yang menyejukkan hati, membahas pentingnya menjaga persatuan dan meningkatkan kualitas iman di tengah tantangan zaman.\n\nKetua MUI OKU dalam ceramahnya menyampaikan apresiasi atas antusiasme warga Batumarta 1. "Semangat sholat Subuh berjemaah seperti ini adalah cerminan dari masyarakat yang religius dan peduli. Ini adalah modal sosial yang sangat kuat untuk membangun desa yang tidak hanya maju secara fisik, tetapi juga kokoh secara spiritual," tuturnya.\n\nPemerintah Desa Batumarta 1 menyambut baik kegiatan ini dan berharap dapat menjadi agenda rutin. Kepala Desa menyatakan, "Kami sangat berterima kasih atas kunjungan dari MUI OKU. Momen seperti ini sangat berarti untuk memperkuat kebersamaan dan memberikan pencerahan rohani bagi warga kami."`
  },
    {
    id: '6',
    title: 'Laga Allstar Persipra FC Lawan Panser FC Berlangsung Seru',
    date: '1 Agustus 2023',
    excerpt: 'Laga persahabatan antara Persipra FC Allstar dan Panser FC berlangsung meriah di lapangan sepak bola Blok D. Pertandingan ini menjadi ajang silaturahmi dan hiburan bagi masyarakat.',
    image: findImage('news-6'),
    fullContent: `Sore yang cerah di Lapangan Sepak Bola Blok D, Desa Batumarta 1, menjadi saksi bisu keseruan laga persahabatan antara tim legendaris lokal, Persipra FC Allstar, melawan Panser FC. Ratusan penonton dari berbagai usia memadati tribun dan pinggir lapangan, memberikan dukungan penuh kepada kedua tim.\n\nPertandingan ini bukan sekadar adu strategi di atas lapangan hijau, melainkan sebuah ajang reuni dan silaturahmi antar generasi pemain sepak bola di desa. Para pemain Allstar, yang pernah menjadi idola di masanya, menunjukkan bahwa skill mereka belum luntur, sementara para pemain Panser FC yang lebih muda memberikan perlawanan sengit dengan kecepatan dan stamina mereka.\n\nJual beli serangan terjadi sepanjang pertandingan. Sorak sorai penonton membahana setiap kali peluang emas tercipta atau saat kiper melakukan penyelamatan gemilang. Meskipun bertajuk laga persahabatan, semangat kompetisi tetap terasa kental, namun tetap dalam balutan sportivitas yang tinggi.\n\n"Kami sangat senang bisa mengadakan acara seperti ini. Ini bukan tentang siapa yang menang atau kalah, tapi tentang merayakan kebersamaan melalui olahraga. Melihat para senior kembali bermain dan berinteraksi dengan para junior adalah pemandangan yang luar biasa," ujar salah satu panitia dari Karang Taruna. Laga ini diharapkan dapat memotivasi generasi muda untuk terus aktif berolahraga dan menjaga semangat persatuan di desa.`
  },
  {
    id: '9',
    title: 'Pengukuhan Pengurus Paguyuban PUJASUMA di Desa Batumarta 1',
    date: '12 Maret 2023',
    excerpt: 'Kegiatan pengukuhan pengurus Paguyuban Keluarga Jawa Sumatera (PUJASUMA) Wali Daerah Kabupaten OKU periode 2023-2028 berlangsung dengan aman dan lancar di Desa Batumarta 1.',
    image: findImage('news-pujasuma-2'),
    fullContent: `Suasana khidmat dan penuh kebersamaan menyelimuti Desa Batumarta 1 saat menjadi tuan rumah acara pengukuhan pengurus Paguyuban Keluarga Besar Putra Jawa Sumatera (PUJASUMA) Wali Daerah Kabupaten Ogan Komering Ulu (OKU) untuk masa bakti 2023-2028. Acara ini dihadiri oleh ratusan anggota paguyuban dari berbagai kecamatan di OKU, serta tokoh masyarakat dan perwakilan pemerintah setempat.\n\nPengukuhan ini menandai lahirnya kepemimpinan baru yang siap membawa PUJASUMA sebagai organisasi sosial yang lebih solid dan berkontribusi aktif bagi pembangunan daerah. Prosesi pelantikan berjalan lancar, diiringi dengan pembacaan sumpah janji pengurus untuk mengabdi kepada organisasi dan masyarakat luas dengan berpegang pada nilai-nilai budaya dan persatuan.\n\nKetua terpilih dalam pidatonya menegaskan komitmen PUJASUMA untuk menjadi perekat kebhinekaan. "PUJASUMA bukan hanya wadah bagi warga keturunan Jawa, tetapi rumah bagi siapa saja yang mencintai budaya dan ingin bersama-sama membangun OKU. Kami siap bersinergi dengan pemerintah dan semua elemen masyarakat untuk kemajuan bersama," tegasnya.\n\nAcara ini juga dimeriahkan dengan berbagai pertunjukan seni budaya Jawa yang memukau, menunjukkan kekayaan tradisi yang terus dilestarikan. Pemerintah Desa Batumarta 1 merasa terhormat telah dipercaya menjadi lokasi penyelenggaraan acara penting ini, yang sekaligus menjadi bukti kerukunan dan keharmonisan masyarakatnya.`
  },
  {
    id: '1',
    title: 'PKK Desa Batumarta I Bentuk Class Balita',
    date: '13 Juli 2022',
    excerpt: 'Tim Penggerak PKK Desa Batumarta I membentuk Class Balita sebagai wadah edukasi dini yang mencakup aspek agama, motorik, dan sensorik. Program ini disambut positif oleh masyarakat setempat.',
    image: findImage('news-1'),
    fullContent: `Sebagai wujud kepedulian terhadap tumbuh kembang generasi penerus, Tim Penggerak PKK Desa Batumarta 1 meluncurkan program inovatif bernama "Class Balita". Program ini dirancang sebagai sarana bermain sambil belajar bagi anak-anak usia dini, dengan fokus pada pengembangan aspek agama, motorik, dan sensorik.\n\nKegiatan yang diadakan setiap akhir pekan ini disambut dengan antusiasme tinggi oleh para ibu di desa. Bertempat di balai desa, anak-anak diajak untuk mengikuti berbagai aktivitas menyenangkan yang edukatif, seperti belajar doa-doa harian, bernyanyi, mewarnai, serta permainan yang merangsang perkembangan sensorik dan motorik halus mereka. Semua kegiatan dipandu oleh para kader PKK yang telah mendapatkan pelatihan khusus.\n\nKetua TP PKK Desa Batumarta 1 menjelaskan, "Masa balita adalah periode emas yang sangat krusial. Melalui Class Balita ini, kami ingin memberikan stimulasi yang tepat sejak dini, sekaligus menciptakan ruang interaksi sosial bagi anak-anak dan para ibu. Ini adalah investasi kita untuk masa depan desa."\n\nPara orang tua mengaku sangat terbantu dengan adanya program ini. "Anak saya jadi lebih ceria dan banyak belajar hal baru. Di sini mereka bisa bermain dengan teman-temannya sambil diajarkan hal-hal positif," ujar salah seorang ibu peserta. Inisiatif ini diharapkan dapat menjadi model bagi program pemberdayaan masyarakat lainnya di tingkat desa.`
  },
  {
    id: '10',
    title: 'Zona Hijau Percantik Stadion Mini Batumarta I',
    date: '25 Januari 2022',
    excerpt: 'Karang Taruna Desa Batumarta I berinisiatif membuat zona hijau di sekitar stadion mini untuk memperindah fasilitas olahraga dan menciptakan area yang nyaman bagi masyarakat.',
    image: findImage('news-stadion'),
    fullContent: `Wajah Stadion Mini Batumarta 1 kini semakin asri dan sejuk berkat inisiatif Karang Taruna desa yang menggalakkan program pembuatan "Zona Hijau". Puluhan pemuda-pemudi desa bahu-membahu menanam berbagai jenis pohon peneduh dan tanaman hias di sekeliling area stadion.\n\nKegiatan yang dilakukan secara swadaya ini bertujuan untuk mempercantik salah satu ikon fasilitas publik di desa, sekaligus menciptakan ruang terbuka hijau yang lebih nyaman bagi warga untuk berolahraga maupun sekadar bersantai. Selain menanam pohon, mereka juga membangun beberapa bangku taman sederhana dari bahan daur ulang.\n\nKetua Karang Taruna menyatakan bahwa ide ini muncul dari keprihatinan melihat area sekitar stadion yang terkesan gersang. "Kami ingin stadion ini tidak hanya menjadi tempat berolahraga, tetapi juga menjadi tempat rekreasi keluarga yang teduh dan indah. Zona hijau ini adalah langkah awal kami," katanya.\n\nInisiatif ini mendapat pujian dari pemerintah desa yang melihatnya sebagai contoh nyata partisipasi pemuda dalam pembangunan. "Kami sangat bangga dengan kreativitas dan semangat para pemuda Karang Taruna. Pemerintah desa akan mendukung penuh upaya-upaya positif seperti ini, termasuk dalam hal perawatan zona hijau ke depannya," ujar Kepala Desa. Kehadiran zona hijau ini diharapkan dapat meningkatkan minat warga untuk memanfaatkan fasilitas olahraga desa.`
  },
  {
    id: '5',
    title: 'Masyarakat Desa Batumarta I Antusias Ikuti Program Vaksinasi',
    date: '28 Oktober 2021',
    excerpt: 'Tingginya kesadaran masyarakat Desa Batumarta 1 untuk mengikuti vaksinasi Covid-19 terlihat dari antusiasme warga yang datang ke lokasi vaksinasi di balai desa. Program ini merupakan upaya bersama untuk mencapai kekebalan komunal.',
    image: findImage('news-5'),
    fullContent: `Kesadaran akan pentingnya kesehatan kolektif ditunjukkan oleh ratusan warga Desa Batumarta 1 yang dengan antusias mengikuti program vaksinasi COVID-19 yang diselenggarakan oleh pemerintah daerah bekerja sama dengan puskesmas setempat. Sejak pagi, warga dari berbagai usia telah memadati area balai desa untuk mendapatkan dosis vaksin.\n\nAntrian yang panjang namun tertib menjadi pemandangan yang membanggakan, menunjukkan partisipasi aktif masyarakat dalam upaya memutus mata rantai penyebaran virus. Petugas kesehatan dibantu oleh perangkat desa dan relawan Karang Taruna bekerja tanpa lelah untuk memastikan proses vaksinasi berjalan lancar, mulai dari pendaftaran, skrining kesehatan, hingga observasi pasca-vaksinasi.\n\nSeorang warga lansia yang ikut dalam antrian mengungkapkan, "Saya ikut vaksin agar sehat dan bisa kembali beraktivitas dengan tenang. Ini adalah tanggung jawab kita bersama, bukan hanya untuk diri sendiri tapi juga untuk keluarga dan tetangga."\n\nKepala Desa Batumarta 1 memberikan apresiasi setinggi-tingginya kepada warganya. "Antusiasme ini adalah bukti bahwa warga Batumarta 1 cerdas dan peduli. Terima kasih kepada semua pihak yang terlibat, terutama tenaga kesehatan. Dengan bersama-sama, kita berupaya mencapai kekebalan komunal dan segera keluar dari pandemi," tandasnya. Program ini menjadi simbol gotong royong warga dalam menghadapi krisis kesehatan.`
  },
  {
    id: '7',
    title: 'Pencanangan Desa Cinta Statistik (Desa CANTIK) di Batumarta 1',
    date: '30 Juni 2021',
    excerpt: 'BPS OKU mencanangkan Desa Batumarta 1 sebagai Desa Cinta Statistik (CANTIK) untuk meningkatkan literasi dan pengelolaan data di tingkat desa guna mendukung pembangunan.',
    image: findImage('news-7'),
    fullContent: `Desa Batumarta 1 menorehkan prestasi membanggakan setelah secara resmi dicanangkan sebagai "Desa Cinta Statistik" (Desa CANTIK) oleh Badan Pusat Statistik (BPS) Kabupaten Ogan Komering Ulu (OKU). Program nasional ini bertujuan untuk membina dan meningkatkan kompetensi aparatur desa dalam mengelola dan memanfaatkan data statistik untuk perencanaan pembangunan yang lebih tepat sasaran.\n\nPencanangan yang berlangsung di kantor desa ini dihadiri oleh Kepala BPS OKU, Camat Lubuk Raja, serta seluruh perangkat Desa Batumarta 1. Dengan status ini, Desa Batumarta 1 akan mendapatkan pendampingan intensif dari BPS dalam hal pengumpulan, pengolahan, analisis, dan penyajian data sektoral di tingkat desa.\n\nKepala BPS OKU menjelaskan, "Pembangunan yang berhasil dimulai dari perencanaan yang berbasis data akurat. Program Desa CANTIK adalah upaya kami untuk mendekatkan statistik kepada masyarakat dan memberdayakan desa agar mampu 'berbicara dengan data'. Kami melihat Batumarta 1 memiliki komitmen dan potensi besar untuk menjadi percontohan."\n\nKepala Desa Batumarta 1 menyambut program ini sebagai sebuah lompatan besar bagi kemajuan desa. "Selama ini, data seringkali menjadi kendala kami dalam menyusun program. Dengan menjadi Desa CANTIK, kami optimis perencanaan pembangunan desa ke depan akan lebih terukur, efektif, dan mampu menjawab persoalan riil di masyarakat," ujarnya penuh semangat.`
  },
  {
    id: '11',
    title: 'Kunjungan Kerja Gubernur Sumsel ke Batumarta I',
    date: '22 Agustus 2020',
    excerpt: 'Gubernur Sumatera Selatan, H. Herman Deru, melakukan kunjungan kerja ke Desa Batumarta I untuk meninjau infrastruktur jalan dan menyerahkan berbagai bantuan kepada masyarakat.',
    image: findImage('news-gubernur'),
    fullContent: `Gubernur Sumatera Selatan, H. Herman Deru, beserta jajaran pemerintah provinsi melakukan kunjungan kerja ke Desa Batumarta 1, Kecamatan Lubuk Raja. Kunjungan ini merupakan bagian dari agenda gubernur untuk meninjau langsung kondisi infrastruktur dan menyerap aspirasi masyarakat di berbagai daerah.\n\nSetibanya di lokasi, Gubernur Herman Deru disambut hangat oleh ratusan warga dan langsung meninjau kondisi jalan utama yang menjadi akses vital bagi perekonomian desa. Dalam dialognya dengan masyarakat, ia menegaskan komitmen pemerintah provinsi untuk terus mempercepat pembangunan infrastruktur yang merata, terutama di kawasan pedesaan.\n\n"Pemerintah tidak bisa bekerja sendiri. Kami hadir di sini untuk melihat langsung dan memastikan bahwa program pembangunan berjalan sesuai harapan. Jalan yang baik akan melancarkan distribusi hasil bumi dan meningkatkan kesejahteraan petani," ujar Gubernur di hadapan warga.\n\nSelain meninjau infrastruktur, dalam kesempatan tersebut Gubernur juga menyerahkan sejumlah bantuan secara simbolis, antara lain bantuan untuk rumah ibadah, alat pertanian, serta program bedah rumah bagi warga kurang mampu. Kunjungan ini ditutup dengan sesi ramah tamah bersama tokoh masyarakat dan perangkat desa, di mana Gubernur mendengarkan berbagai masukan untuk pembangunan Sumatera Selatan yang lebih maju.`
  },
];

export const galleryImages = [
    findImage('gallery-kades-cup'),
    findImage('gallery-bimtek-narkoba'),
    findImage('gallery-pembangunan-jalan'),
    findImage('gallery-bantuan-hamil'),
    findImage('gallery-linmas'),
    findImage('gallery-musyawarah'),
    findImage('gallery-bimtek'),
    findImage('gallery-posyandu'),
];

export const publicServices = [
    {
        title: "Surat Pengantar",
        description: "Layanan pembuatan surat pengantar untuk berbagai keperluan administrasi (KTP, KK, SKCK).",
        icon: "FileText"
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
    {
        title: "Peta Digital Desa",
        description: "Peta digital untuk melihat lokasi penting dan direktori UMKM di Desa Batumarta 1.",
        icon: "Map"
    }
];

export const umkmList = [
    {
        name: "Kedai Al Fazza",
        category: "Cafe & Eatery",
        description: "Cafe dan tempat makan yang menyediakan berbagai minuman dan makanan ringan. Tempat yang nyaman untuk bersantai.",
        contact: "+62 812 7314 9574",
        image: findImage('umkm-4')
    },
    {
        name: "Ketahanan Pangan Desa Batumarta 1",
        category: "Peternakan",
        description: "Program ketahanan pangan di bidang Peternakan Kambing untuk meningkatkan kemandirian dan perekonomian warga.",
        contact: "-",
        image: findImage('umkm-kambing')
    }
];

export const eventCalendar = [
    {
        date: "2024-11-01",
        title: "Penyuluhan Pertanian Organik",
        description: "Dinas Pertanian akan mengadakan penyuluhan mengenai teknik pertanian organik untuk meningkatkan hasil panen."
    },
    {
        date: "2024-10-28",
        title: "Peringatan Hari Sumpah Pemuda",
        description: "Karang Taruna mengadakan berbagai lomba dan pentas seni untuk memperingati Hari Sumpah Pemuda."
    },
    {
        date: "2024-08-17",
        title: "Upacara dan Lomba Kemerdekaan RI",
        description: "Perayaan HUT RI ke-79 di lapangan desa, dimeriahkan dengan berbagai lomba untuk anak-anak dan dewasa."
    },
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
};

export const publicComplaints = [
    {
        name: "Warga RT 01",
        date: "2024-07-20",
        message: "Mohon perbaikan lampu jalan di pertigaan utama, sudah beberapa minggu mati dan rawan kecelakaan."
    },
    {
        name: "Warga RT 03",
        date: "2024-07-18",
        message: "Saran agar diadakan kembali kerja bakti rutin setiap hari Minggu untuk menjaga kebersihan lingkungan desa."
    },
    {
        name: "Warga RT 02",
        date: "2024-07-15",
        message: "Apresiasi untuk pemerintah desa atas cepatnya perbaikan jalan yang rusak akibat hujan deras minggu lalu. Terima kasih!"
    }
];

export const mapLocations = [
    { id: "balai_desa", name: "Balai Desa Batumarta 1", lat: -4.0543125, lng: 104.2740625, type: "pemerintahan" },
    { id: "masjid_nurul_huda", name: "Masjid Nurul Huda", lat: -4.100, lng: 104.182, type: "ibadah" },
    { id: "stadion_mini", name: "Stadion Mini Batumarta 1", lat: -4.095, lng: 104.178, type: "fasilitas" },
    ...umkmList.map((umkm, index) => ({
        id: `umkm_${index}`,
        name: umkm.name,
        lat: -4.054 + (Math.random() - 0.5) * 0.01, // Randomize around office
        lng: 104.274 + (Math.random() - 0.5) * 0.01, // Randomize around office
        type: 'umkm'
    }))
];
    
    

    
    
    

    

    
    

    
    
