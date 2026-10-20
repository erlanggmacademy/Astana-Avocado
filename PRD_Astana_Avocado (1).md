# Product Requirements Document (PRD)
## Astana Avocado  Website Penjualan Bibit Alpukat

**Versi:** 1.0  
**Tanggal penyusunan:** 20 Oktober 2026  
**Status:** Draft untuk validasi pemilik bisnis  
**Platform:** Website responsif berbasis HTML5, CSS3, dan Bootstrap 5  
**Bahasa utama:** Bahasa Indonesia  
**Tujuan utama:** Membangun website elegan dan kalem untuk memperkenalkan Astana Avocado, menampilkan variasi bibit alpukat, membangun kepercayaan, dan menghasilkan prospek penjualan melalui WhatsApp.

> **Catatan validasi:** Informasi harga, stok, ukuran bibit, umur bibit, garansi, metode pengiriman, lokasi kebun, sertifikasi, dan klaim kualitas belum diberikan. Jangan menerbitkan klaim tersebut sebagai fakta sebelum dikonfirmasi pemilik Astana Avocado.

---

## 1. Ringkasan Produk

Astana Avocado adalah website pemasaran dan penjualan bibit alpukat. Website berfungsi sebagai katalog digital yang memungkinkan calon pembeli mengenal usaha, melihat pilihan varietas, membaca informasi budidaya, melihat galeri, dan menghubungi penjual untuk menanyakan stok serta melakukan pemesanan melalui WhatsApp.

Tampilan mengacu pada pendekatan desain situs template bisnis premium seperti BootstrapMade: struktur yang rapi, hero section yang kuat, navigasi jelas, kartu konten modern, ruang putih yang cukup, ikon sederhana, dan animasi yang tidak berlebihan. Website tidak menyalin aset, kode, atau desain spesifik milik pihak lain.

### 1.1 Visi pengalaman pengguna

Pengunjung sebaiknya dapat menjawab pertanyaan berikut dalam beberapa detik:
- Apa yang dijual Astana Avocado?
- Varietas bibit apa yang tersedia?
- Bagaimana cara menanyakan harga dan stok?
- Bagaimana cara menghubungi penjual?
- Mengapa informasi dari penjual ini layak dipercaya?

### 1.2 Tujuan bisnis

1. Meningkatkan pertanyaan pembelian melalui WhatsApp.
2. Menampilkan varietas bibit alpukat dengan informasi yang mudah dipahami.
3. Memperkuat identitas merek Astana Avocado.
4. Menyediakan konten yang membantu calon pembeli memilih bibit dan merawatnya.
5. Menyiapkan fondasi SEO lokal, SEO teknis, AEO, dan GEO.

### 1.3 Indikator keberhasilan

- Klik tombol WhatsApp dan jumlah percakapan masuk.
- Klik CTA dari halaman beranda, katalog/paket, artikel, dan galeri.
- Kunjungan organik dari mesin pencari.
- Jumlah halaman yang terindeks dengan benar.
- Interaksi dengan kartu varietas dan artikel.
- Rasio pengunjung yang menghubungi penjual.
- Kecepatan halaman, stabilitas layout, dan skor aksesibilitas.

Target numerik ditetapkan setelah baseline dan data analitik tersedia.

---

## 2. Target Pengguna

### Persona A  Pekebun rumahan
Mencari bibit untuk pekarangan, ingin tahu varietas, kebutuhan ruang, dan cara perawatan dasar.

### Persona B  Petani atau pemilik kebun
Mencari beberapa bibit, membandingkan varietas, dan membutuhkan informasi stok, jumlah, pengiriman, serta penanganan sebelum membeli.

### Persona C  Pembeli pemula
Belum yakin memilih varietas. Membutuhkan penjelasan yang sederhana dan kesempatan berkonsultasi sebelum memesan.

### Kebutuhan inti pengguna
- Informasi varietas yang mudah dibandingkan.
- Foto bibit dan tanaman yang relevan serta autentik.
- Informasi harga dan ketersediaan yang jelas, atau jalur mudah untuk menanyakannya.
- Tombol WhatsApp yang konsisten.
- Website nyaman digunakan melalui ponsel.
- Informasi usaha dan kebijakan transaksi yang transparan.

---

## 3. Ruang Lingkup

### Termasuk dalam MVP
- Website responsif.
- Header dan navigasi utama.
- Beranda.
- Tentang Kami.
- Paket Layanan / penawaran pembelian.
- Blog / artikel.
- Galeri.
- Kartu katalog varietas bibit.
- CTA WhatsApp dengan nomor `6281235305934`.
- SEO on-page dan teknis dasar.
- Metadata Open Graph.
- Schema.org JSON-LD yang sesuai dengan informasi faktual.
- Sitemap XML dan robots.txt.
- Integrasi Google Search Console dan analitik setelah akun tersedia.
- Aksesibilitas dasar dan optimasi performa.

### Di luar ruang lingkup MVP
- Keranjang belanja dan checkout online.
- Pembayaran otomatis.
- Login pelanggan.
- Manajemen stok real-time.
- Panel admin/CMS khusus.
- Pelacakan pengiriman otomatis.
- Sistem ulasan pelanggan terverifikasi.
- Integrasi marketplace.

Fitur di luar MVP dapat ditambahkan setelah alur penjualan dan kebutuhan operasional dikonfirmasi.

---

## 4. Teknologi dan Standar Implementasi

- **HTML5:** struktur semantik menggunakan `header`, `nav`, `main`, `section`, `article`, dan `footer`.
- **CSS3:** warna, tipografi, spacing, layout, hover state, dan responsive refinement.
- **Bootstrap 5:** grid, container, navbar, cards, buttons, accordion, modal bila diperlukan, serta utility classes.
- **JavaScript vanilla:** interaksi ringan, menu mobile, filter galeri sederhana bila dibutuhkan, dan tombol kembali ke atas.
- **Ikon:** Bootstrap Icons atau ikon SVG yang memiliki lisensi sesuai.
- **Font:** font web yang mudah dibaca; gunakan maksimal dua keluarga font dan sediakan fallback.
- **Hosting:** HTTPS wajib; hosting dan domain ditentukan pemilik.
- **Konten:** HTML harus tetap menyajikan isi utama tanpa bergantung pada interaksi JavaScript untuk menampilkan teks penting.

Hindari plugin berat yang tidak dibutuhkan. Gunakan versi dependensi yang stabil, catat versinya, dan perbarui secara berkala.

---

## 5. Identitas Visual dan Design System

### 5.1 Arah desain
**Kata kunci:** elegan, kalem, alami, terpercaya, bersih, premium, dan ramah.

### 5.2 Palet warna yang diusulkan

| Token | Warna | Penggunaan |
|---|---|---|
| Primary Green | `#315B3A` | Tombol utama, link aktif, elemen brand |
| Deep Green | `#203D2A` | Footer, heading aksen, hover |
| Soft Sage | `#DDE8D8` | Latar section alternatif |
| Pale Green | `#F2F6EF` | Latar kartu dan area informasi |
| White | `#FFFFFF` | Latar utama dan kartu |
| Warm Neutral | `#F7F6F0` | Latar lembut agar tidak terasa dingin |
| Text | `#27312A` | Teks utama |
| Muted Text | `#667168` | Deskripsi sekunder |
| Border | `#E2E8E0` | Garis pemisah dan border kartu |

Pastikan kontras teks dan tombol memenuhi WCAG AA sedapat mungkin. Jangan mengandalkan warna saja untuk menandai status.

### 5.3 Tipografi
- Heading: serif elegan atau sans-serif display yang tetap terbaca.
- Body: sans-serif yang nyaman dibaca, misalnya sistem font atau keluarga font web yang teroptimasi.
- Body text desktop: sekitar 16–18 px.
- Line-height body: sekitar 1.6–1.8.
- Gunakan hirarki heading yang konsisten; jangan melompati level heading tanpa alasan.

### 5.4 Foto dan aset
Prioritaskan foto asli:
- Bibit alpukat dari kebun/penjual.
- Detail daun, batang, media tanam, dan ukuran bibit.
- Aktivitas pembibitan atau pengemasan bila benar-benar dilakukan.
- Dokumentasi kebun dan proses pengiriman bila tersedia.

Setiap foto memiliki alt text deskriptif, ukuran yang sesuai, format modern seperti WebP/AVIF bila didukung, dan dimensi yang ditetapkan untuk mengurangi layout shift. Jangan menggunakan foto stok seolah-olah merupakan stok asli Astana Avocado.

### 5.5 Komponen UI
- Navbar putih dengan logo/wordmark.
- Tombol utama hijau tua.
- Tombol sekunder outline hijau.
- Kartu dengan border halus dan bayangan sangat ringan.
- Radius kartu sekitar 12–18 px.
- Animasi singkat dan subtil; hormati `prefers-reduced-motion`.
- Tombol WhatsApp mengambang boleh digunakan, tetapi jangan sampai menutupi konten atau kontrol penting di layar kecil.

---

## 6. Arsitektur Informasi dan Navigasi

Menu header utama, sesuai permintaan:
1. **Beranda**
2. **Tentang Kami**
3. **Paket Layanan**
4. **Blog**
5. **Galeri**

CTA utama di header: **Konsultasi WhatsApp**.

### Rekomendasi struktur URL
- `/`  Beranda
- `/tentang-kami/`  Tentang Kami
- `/paket-layanan/`  Paket Layanan / pilihan pembelian
- `/blog/`  Daftar artikel
- `/blog/judul-blog/`  Detail artikel
- `/galeri/`  Galeri
- `/kebijakan-privasi/`  Kebijakan privasi jika analitik/form mengumpulkan data
- `/kontak/`  Opsional jika informasi kontak perlu halaman tersendiri

Jika semua konten awal dibuat dalam satu halaman, gunakan anchor navigation yang jelas. Namun, halaman terpisah lebih baik untuk artikel, variasi produk, dan kebutuhan SEO jangka panjang.

---

## 7. Persyaratan Halaman

### 7.1 Beranda

**Tujuan:** memperkenalkan merek, menunjukkan ragam bibit, dan mengarahkan pengunjung ke WhatsApp.

Urutan section yang direkomendasikan:

1. **Header**
   - Logo/teks merek Astana Avocado.
   - Menu utama.
   - CTA WhatsApp.
   - Navbar mobile dengan tombol menu yang dapat diakses keyboard.

2. **Hero**
   - Foto utama bibit alpukat atau kebun yang autentik.
   - Eyebrow: “Astana Avocado”.
   - H1 yang jelas, misalnya: **“Bibit Alpukat untuk Memulai Kebun Anda”**.
   - Deskripsi singkat tentang pilihan varietas dan konsultasi sebelum membeli. Hindari klaim kualitas yang belum diverifikasi.
   - CTA utama: “Tanya Stok & Harga”.
   - CTA sekunder: “Lihat Varietas”.

3. **Ringkasan keunggulan**
   - Gunakan 3–4 poin yang dapat dibuktikan, misalnya “Pilihan varietas”, “Konsultasi sebelum membeli”, “Informasi perawatan”.
   - Jangan menampilkan angka pengalaman, jumlah pelanggan, sertifikasi, atau garansi sebelum ada bukti.

4. **Pilihan varietas**
   - Kartu varietas unggulan.
   - Foto, nama, deskripsi faktual singkat, dan CTA WhatsApp.
   - Tautan “Lihat semua pilihan”.

5. **Tentang Astana Avocado**
   - Deskripsi singkat usaha.
   - Foto asli bila tersedia.
   - CTA menuju halaman Tentang Kami.

6. **Paket atau cara pemesanan**
   - Jelaskan alur: pilih varietas, tanyakan stok/harga, konfirmasi jumlah dan pengiriman, lalu ikuti instruksi transaksi penjual.
   - Jangan menyebut “paket hemat” atau diskon jika belum tersedia.

7. **Panduan budidaya / artikel terbaru**
   - Tampilkan 3 artikel yang relevan.
   - Judul harus informatif dan tidak clickbait.

8. **Galeri**
   - 4–6 foto pilihan dan tautan ke galeri lengkap.

9. **FAQ singkat**
   - Contoh pertanyaan tentang cara memesan, cara memilih varietas, pengiriman, dan perawatan.
   - Jawaban hanya diisi setelah diverifikasi oleh pemilik.

10. **CTA penutup**
    - “Masih bingung memilih varietas?”
    - Tombol “Konsultasi via WhatsApp”.

11. **Footer**
    - Ringkasan merek.
    - Navigasi.
    - Nomor WhatsApp.
    - Alamat Astana Avocado: **Jl. Arjuna, Dsn. Nglerep, Ds. Trayang, Nganjuk 64395, Jawa Timur**.
    - Tautan Facebook, Instagram, YouTube, dan TikTok resmi.
    - Tautan kebijakan privasi bila relevan.

### 7.2 Tentang Kami

Konten:
- Cerita Astana Avocado.
- Fokus usaha dan jenis bibit yang ditawarkan.
- Cara memilih atau menangani bibit, berdasarkan praktik nyata.
- Foto kebun, tim, atau proses kerja jika tersedia.
- Alamat usaha: Jl. Arjuna, Dsn. Nglerep, Ds. Trayang, Nganjuk 64395, Jawa Timur. Jam operasional ditampilkan setelah dikonfirmasi.
- CTA WhatsApp.

Hindari cerita pendiri, tahun berdiri, sertifikasi, atau klaim “terbaik/nomor satu” yang tidak memiliki dasar.

### 7.3 Paket Layanan

Nama menu “Paket Layanan” dipertahankan sesuai permintaan. Secara konten, halaman ini dapat menjelaskan pilihan pembelian dan alur konsultasi.

Konten yang disarankan:
- Pilihan varietas.
- Pilihan jumlah bibit, jika pemilik memang menetapkan paket jumlah.
- Informasi harga atau penjelasan bahwa harga dikonfirmasi melalui WhatsApp.
- Informasi stok dan ukuran bibit jika tersedia.
- Pengiriman dan penanganan bibit.
- Cara pemesanan langkah demi langkah.
- FAQ pembelian.
- CTA untuk menanyakan penawaran.

Jangan membuat harga, jumlah minimal, garansi hidup, ongkos kirim, atau janji pengiriman tanpa persetujuan pemilik.

### 7.4 Blog

Fitur:
- Daftar artikel berbentuk kartu.
- Kategori/tag yang sederhana.
- Halaman detail artikel.
- Penulis atau peninjau konten jika identitasnya benar.
- Tanggal terbit dan tanggal pembaruan yang akurat.
- Daftar isi untuk artikel panjang bila membantu.
- Artikel terkait.
- CTA yang relevan dan tidak mengganggu pembacaan.

Ide artikel awal:
1. “Cara Memilih Bibit Alpukat untuk Pekarangan”
2. “Hal yang Perlu Diperiksa Sebelum Membeli Bibit Alpukat”
3. “Panduan Awal Menanam Bibit Alpukat di Rumah”
4. “Mengenal Variasi Alpukat Miki, Aligator, Hawai, Hass, dan Wina”
5. “Cara Menyiapkan Media Tanam untuk Bibit Alpukat”
6. “Kesalahan Umum Saat Merawat Bibit Alpukat”
7. “Pertanyaan yang Perlu Diajukan Sebelum Membeli Bibit Alpukat”

Artikel harus ditulis atau ditinjau berdasarkan pengetahuan nyata, pengalaman, sumber tepercaya, dan kondisi setempat. Jangan membuat artikel massal yang hanya mengulang kata kunci.

### 7.5 Galeri

Fitur:
- Grid foto responsif.
- Kategori opsional: bibit, daun/batang, kebun, proses kerja, pengemasan.
- Lightbox opsional dengan kontrol keyboard dan label aksesibel.
- Alt text deskriptif.
- CTA WhatsApp setelah grid.

Gunakan foto yang benar-benar menggambarkan produk atau aktivitas Astana Avocado. Jika foto belum tersedia, siapkan placeholder yang jelas sebagai placeholder, bukan sebagai bukti produk.

### 7.6 Katalog varietas

Daftar variasi yang diberikan:
- Miki
- Aligator
- Hawai
- Hass
- Wina
- Wurtz
- Cuba
- Booth-7
- Buccaner
- Varietas lain (“dan lainnya”) setelah dikonfirmasi

Setiap kartu varietas sebaiknya berisi:
- Nama varietas yang sudah diverifikasi ejaannya.
- Foto aktual atau foto ilustrasi yang diberi label dengan benar.
- Deskripsi varietas yang akurat dan ditinjau.
- Ketersediaan stok dan harga bila datanya tersedia.
- Informasi ukuran/umur bibit bila tersedia.
- Tombol “Tanya varietas ini”.

Jangan mengasumsikan semua varietas selalu tersedia. Ketersediaan perlu diberi tanggal pembaruan atau dikonfirmasi melalui WhatsApp.

---

## 8. WhatsApp dan CTA

**Nomor tujuan:** `6281235305934`  
Gunakan format internasional tanpa tanda `+` pada nomor di URL WhatsApp.

### URL dasar
`https://wa.me/6281235305934`

### Template pesan umum
`https://wa.me/6281235305934?text=Halo%20Astana%20Avocado%2C%20saya%20ingin%20bertanya%20tentang%20bibit%20alpukat.`

### Template pesan varietas
Contoh untuk kartu varietas:
`https://wa.me/6281235305934?text=Halo%20Astana%20Avocado%2C%20saya%20ingin%20bertanya%20tentang%20bibit%20alpukat%20varietas%20Miki.`

Implementasi dapat membangun pesan berdasarkan nama varietas melalui `encodeURIComponent()` di JavaScript. Pastikan nomor penerima selalu sama.

### Persyaratan CTA
- Semua CTA penjualan/konsultasi mengarah ke nomor tersebut.
- Gunakan label yang spesifik: “Tanya Stok & Harga”, “Konsultasi Varietas”, atau “Pesan via WhatsApp”.
- Tautan eksternal dibuka dengan perilaku yang aman; jika menggunakan `target="_blank"`, gunakan `rel="noopener noreferrer"`.
- Tombol harus memiliki nama aksesibel.
- Uji seluruh CTA di desktop dan ponsel.
- CTA navigasi internal (misalnya “Tentang Kami”) tetap menuju halaman/section internal, bukan WhatsApp.

---

## 9. Persyaratan Fungsional

| ID | Persyaratan | Prioritas | Kriteria penerimaan |
|---|---|---|---|
| FR-01 | Navbar desktop dan mobile | Must | Menu menuju halaman/section yang tepat; menu mobile bisa dibuka dan ditutup dengan keyboard serta sentuhan. |
| FR-02 | Hero dengan CTA | Must | CTA utama membuka WhatsApp ke nomor yang ditentukan. |
| FR-03 | Kartu varietas | Must | Setiap kartu menampilkan nama varietas dan CTA dengan pesan yang sesuai. |
| FR-04 | Tentang Kami | Must | Informasi usaha tersedia dan dapat dibaca di perangkat mobile. |
| FR-05 | Paket Layanan | Must | Cara pemesanan dan informasi penawaran ditampilkan tanpa klaim yang belum diverifikasi. |
| FR-06 | Blog | Must | Daftar artikel dan halaman detail dapat dibuka melalui tautan yang dapat dirayapi. |
| FR-07 | Galeri | Must | Foto tampil responsif dengan alt text. |
| FR-08 | CTA WhatsApp global | Must | Semua CTA konsultasi/pembelian menggunakan nomor `6281235305934`. |
| FR-09 | SEO metadata | Must | Setiap halaman memiliki title, description, canonical, dan heading yang sesuai. |
| FR-10 | Sitemap dan robots.txt | Must | Sitemap berisi URL kanonis yang ingin diindeks; robots.txt tidak memblokir aset atau halaman penting. |
| FR-11 | Structured data | Should | JSON-LD sesuai jenis halaman dan data faktual yang terlihat di halaman. |
| FR-12 | Optimasi gambar | Must | Gambar dikompresi, memiliki dimensi, dan menggunakan lazy loading untuk gambar di luar viewport awal. |
| FR-13 | Aksesibilitas | Must | Navigasi keyboard, focus state, kontras, label, dan alt text dasar tersedia. |
| FR-14 | Analitik | Should | Klik CTA dan sumber kunjungan dapat diukur setelah analitik dikonfigurasi dengan benar. |
| FR-15 | Filter galeri | Could | Pengunjung dapat memfilter kategori foto jika koleksi foto cukup besar. |

---

## 10. Persyaratan Nonfungsional

### Performa
- Hindari library dan animasi yang tidak diperlukan.
- Prioritaskan gambar hero dengan ukuran dan format tepat.
- Gunakan lazy loading untuk gambar di bawah fold, tetapi jangan lazy-load gambar LCP utama.
- Target Core Web Vitals pada data lapangan, jika tersedia: LCP ≤ 2,5 detik, INP ≤ 200 ms, CLS ≤ 0,1 pada persentil ke-75.
- Uji dengan PageSpeed Insights dan data lapangan ketika trafik cukup.

### Responsivitas
- Mendukung lebar layar mulai dari ponsel kecil hingga desktop lebar.
- Tidak ada scroll horizontal yang tidak disengaja.
- CTA tetap mudah dijangkau tanpa menutupi konten.

### Keamanan
- Gunakan HTTPS.
- Perbarui Bootstrap dan dependensi.
- Hindari menaruh secret/API key di kode frontend.
- Validasi dan sanitasi data bila kelak ditambahkan formulir.
- Terapkan header keamanan yang sesuai melalui hosting/server bila memungkinkan.
- Minimalkan pengumpulan data pribadi.

### Aksesibilitas
- HTML semantik dan urutan heading logis.
- Semua kontrol dapat digunakan dengan keyboard.
- Focus indicator terlihat.
- Kontras teks memadai.
- Alt text menjelaskan gambar informatif; gambar dekoratif menggunakan alt kosong.
- Animasi menghormati preferensi reduced motion.
- Jangan menyampaikan informasi hanya melalui warna.

### Pemeliharaan
- Struktur folder konsisten.
- Komponen berulang dibuat reusable sejauh sesuai dengan implementasi HTML/CSS.
- Simpan sumber gambar, lisensi, dan atribusi bila diperlukan.
- Sediakan dokumentasi cara memperbarui konten dan link WhatsApp.

---

## 11. SEO  Rencana Implementasi per Oktober 2026

SEO tetap menjadi fondasi utama untuk ditemukan di mesin pencari dan juga membantu konten dipahami dalam pengalaman pencarian berbasis AI. Tidak ada teknik yang dapat menjamin ranking, rich result, atau kutipan oleh sistem AI.

### 11.1 Riset kata kunci

Gunakan kombinasi kata kunci transaksional, informasional, dan lokal. Validasi volume serta maksud pencarian melalui Google Search Console, Keyword Planner, dan data performa setelah situs berjalan.

Contoh awal:
- jual bibit alpukat
- bibit alpukat berbagai varietas
- bibit alpukat Miki
- bibit alpukat Aligator
- bibit alpukat Hass
- cara memilih bibit alpukat
- cara menanam bibit alpukat
- penjual bibit alpukat [kota/kabupaten yang benar]
- toko bibit alpukat [wilayah layanan yang benar]

Jangan memasukkan nama kota yang tidak benar-benar dilayani. Hindari pengulangan kata kunci secara berlebihan.

### 11.2 SEO on-page
- Setiap halaman memiliki `<title>` unik dan deskriptif.
- Meta description merangkum isi halaman dan mengundang klik secara wajar.
- Satu H1 utama per halaman sebagai praktik struktur yang jelas.
- Gunakan H2/H3 untuk membagi konten secara logis.
- URL singkat, deskriptif, konsisten, dan menggunakan huruf kecil.
- Tautan internal menghubungkan beranda, varietas, artikel, galeri, dan kontak.
- Gunakan anchor text yang menjelaskan tujuan.
- Tambahkan breadcrumb bila struktur halaman mendukungnya.
- Gambar memiliki nama file deskriptif dan alt text yang alami.
- Hindari halaman tipis atau duplikat untuk setiap variasi kata kunci.

### 11.3 SEO teknis
- HTTPS dan satu versi domain kanonis (www atau non-www).
- Canonical yang benar pada setiap halaman.
- Sitemap XML hanya berisi URL kanonis yang dapat diindeks.
- Robots.txt tidak memblokir CSS, JavaScript, atau konten penting.
- Halaman penting dapat diakses melalui tautan HTML biasa.
- Tangani halaman 404, redirect, dan URL duplikat.
- Pastikan halaman dapat dirayapi dan tidak memiliki `noindex` yang tidak disengaja.
- Gunakan Google Search Console untuk memeriksa indeks, sitemap, dan masalah pengalaman halaman.
- Buat desain mobile-first dan uji performa.

### 11.4 SEO gambar dan video
- Gunakan gambar produk yang relevan, autentik, dan berkualitas.
- Kompres gambar tanpa mengorbankan detail penting.
- Gunakan format modern jika didukung.
- Tentukan `width` dan `height` untuk mengurangi CLS.
- Tambahkan caption ketika memberi konteks.
- Jika video digunakan, sediakan judul, deskripsi, thumbnail, dan transkrip bila relevan.

### 11.5 SEO lokal
- Alamat usaha yang diberikan: **Jl. Arjuna, Dsn. Nglerep, Ds. Trayang, Nganjuk 64395, Jawa Timur**.
- Gunakan Nganjuk dan Jawa Timur dalam konteks yang alami pada halaman kontak, footer, dan konten lokal yang relevan; jangan menjejalkan nama lokasi ke setiap paragraf.
- Samakan nama usaha, nomor WhatsApp, alamat, dan jam operasional di website serta profil bisnis resmi.
- Lengkapi Google Business Profile jika usaha memenuhi syarat; pastikan pin peta, kategori, jam operasional, dan informasi kontak benar.
- Jangan menebak koordinat atau mengklaim wilayah pengiriman yang belum dikonfirmasi.
- Kumpulkan ulasan asli tanpa membeli ulasan atau memanipulasi rating.
- Buat halaman lokasi tambahan hanya jika benar-benar melayani lokasi tersebut dan setiap halaman memiliki informasi unik.
- Tautkan media sosial resmi dari footer dan pertahankan konsistensi nama merek serta kontak di setiap profil.

### 11.6 Structured data
Gunakan JSON-LD hanya untuk entitas dan informasi yang benar-benar ada di halaman:
- `Organization` atau `LocalBusiness` jika sesuai dengan identitas dan data usaha.
- `WebSite` untuk identitas situs.
- `BreadcrumbList` untuk navigasi breadcrumb.
- `Article` atau `BlogPosting` untuk artikel.
- `Product` hanya jika halaman benar-benar mendeskripsikan produk tertentu dengan data akurat. Harga, availability, SKU, rating, dan review tidak boleh dikarang.
- `ImageObject` bila sesuai dan datanya benar.

Structured data membantu mesin memahami konten, tetapi tidak menjamin rich result. Pastikan markup cocok dengan konten yang terlihat dan validasi menggunakan Rich Results Test serta Schema Markup Validator. Jangan menambahkan rating palsu atau markup tersembunyi.

### 11.7 Contoh metadata halaman beranda

```html
<title>Astana Avocado | Bibit Alpukat Berbagai Varietas</title>
<meta
  name="description"
  content="Kenali pilihan bibit alpukat Astana Avocado. Tanyakan varietas, stok, dan harga melalui WhatsApp."
/>
<link rel="canonical" href="https://www.domain-anda.example/" />
<meta name="robots" content="index,follow" />

<meta property="og:type" content="website" />
<meta property="og:title" content="Astana Avocado | Bibit Alpukat Berbagai Varietas" />
<meta
  property="og:description"
  content="Lihat pilihan varietas bibit alpukat dan konsultasikan kebutuhan Anda dengan Astana Avocado."
/>
<meta property="og:url" content="https://www.domain-anda.example/" />
<meta property="og:image" content="https://www.domain-anda.example/assets/images/og-astana-avocado.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

Ganti domain contoh dan URL gambar dengan domain serta aset yang benar sebelum publikasi. Jangan menggunakan `.example` di situs produksi.

---

## 12. AEO  Answer Engine Optimization

AEO berfokus pada kemudahan pengguna dan sistem pencarian menemukan jawaban yang jelas. Terapkan prinsip berikut tanpa menganggap AEO sebagai jalan pintas terpisah dari SEO.

- Jawab pertanyaan inti secara langsung pada awal bagian.
- Gunakan heading berbentuk pertanyaan ketika cocok dengan kebutuhan pembaca.
- Buat FAQ berdasarkan pertanyaan pelanggan yang benar-benar diterima.
- Berikan definisi, langkah, perbandingan, dan batasan yang spesifik.
- Tampilkan informasi produk, stok, ukuran, harga, dan pengiriman hanya jika sudah dikonfirmasi.
- Cantumkan penulis/peninjau dan sumber pada artikel teknis bila relevan.
- Gunakan istilah varietas secara konsisten, termasuk variasi ejaan yang benar jika perlu dijelaskan.
- Pastikan teks penting dapat dibaca tanpa harus mengklik tombol atau menjalankan JavaScript.
- Perbarui jawaban ketika kebijakan atau praktik usaha berubah.
- Hindari FAQ generik yang dibuat hanya untuk menargetkan kata kunci.

Contoh FAQ yang dapat dikembangkan setelah dikonfirmasi:
- Bagaimana cara memesan bibit alpukat dari Astana Avocado?
- Varietas bibit alpukat apa saja yang tersedia?
- Bagaimana cara menanyakan stok dan harga terbaru?
- Informasi apa yang perlu disiapkan sebelum memesan?
- Apakah bibit dapat dikirim ke wilayah saya?
- Bagaimana cara memilih bibit alpukat untuk pekarangan?

**Catatan:** FAQ di situs tetap berguna bagi pengunjung. Jangan mengandalkan FAQ schema untuk memperoleh rich result; fitur FAQ rich result Google telah dihentikan pada 2026 menurut pembaruan dokumentasi Google.

---

## 13. GEO  Generative Engine Optimization

GEO di sini berarti meningkatkan peluang konten dipahami, ditemukan, dan dirujuk oleh pengalaman pencarian atau jawaban generatif. Tidak ada format khusus yang menjamin sistem AI akan mengutip situs.

- Publikasikan informasi unik yang benar-benar berasal dari pengalaman dan proses Astana Avocado.
- Jelaskan siapa pengelola/penerbit konten dan bagaimana informasi diperoleh bila relevan.
- Sajikan konten dengan struktur yang mudah dipahami manusia: judul jelas, heading, tabel perbandingan yang faktual, gambar relevan, dan tautan internal.
- Sertakan bukti visual asli, konteks lokal yang valid, serta sumber tepercaya untuk klaim agronomi.
- Pastikan halaman publik dapat dirayapi dan diindeks.
- Jaga konsistensi informasi merek, nomor kontak, lokasi, dan penawaran.
- Hindari membuat halaman dalam jumlah besar dengan isi hampir sama.
- Hindari kutipan, ulasan, atau penyebutan merek palsu.
- Periksa apakah konten tetap bermanfaat jika dibaca tanpa konteks AI.

Dokumentasi Google menyatakan bahwa praktik SEO yang mendasar tetap relevan untuk pengalaman AI di Search. Tidak diperlukan markup khusus atau file `llms.txt` untuk meningkatkan visibilitas Google Search; `llms.txt` dapat dibuat untuk kebutuhan sistem lain, tetapi jangan menganggapnya sebagai faktor ranking Google. Prioritaskan konten berguna, crawlability, pengalaman halaman, informasi bisnis yang benar, dan data produk yang akurat.

---

## 14. Strategi Konten dan E-E-A-T

Rencana konten harus menunjukkan pengalaman, keahlian, otoritas, dan kepercayaan secara alami:
- Tulis dari pengalaman nyata, bukan sekadar menyusun ulang artikel lain.
- Jika memberi panduan budidaya, minta peninjauan orang yang kompeten.
- Cantumkan sumber tepercaya untuk klaim yang memerlukan dukungan.
- Jelaskan kapan artikel diterbitkan dan diperbarui; jangan mengubah tanggal tanpa perubahan bermakna.
- Bedakan pengalaman pribadi, saran umum, dan fakta yang bersumber.
- Jangan menjanjikan hasil panen, kecepatan berbuah, ketahanan penyakit, atau kecocokan iklim tanpa bukti yang memadai.
- Jangan membuat testimonial atau foto pelanggan fiktif.

---

## 15. Analitik dan Pengukuran

Setelah persetujuan pemilik, pasang Google Search Console dan alat analitik yang sesuai. Patuhi ketentuan privasi yang berlaku dan jelaskan penggunaan data jika diperlukan.

Event yang direkomendasikan:
- `whatsapp_click_header`
- `whatsapp_click_hero`
- `whatsapp_click_variety` dengan parameter nama varietas
- `whatsapp_click_package`
- `whatsapp_click_blog`
- `gallery_open`
- `article_view`

Jangan mengirimkan data pribadi, nomor telepon pengunjung, atau isi percakapan ke event analitik.

---

## 16. Pengujian dan Definition of Done

Website dinyatakan siap diluncurkan jika:
- [ ] Semua menu utama berfungsi di desktop dan mobile.
- [ ] Semua CTA penjualan/konsultasi membuka WhatsApp ke `6281235305934`.
- [ ] Pesan WhatsApp dari kartu varietas menyebut varietas yang tepat.
- [ ] Konten harga, stok, pengiriman, dan klaim usaha telah diverifikasi.
- [ ] Tidak ada tautan rusak atau gambar yang gagal dimuat.
- [ ] Layout tidak pecah pada ukuran ponsel, tablet, dan desktop.
- [ ] Seluruh halaman memiliki title, description, canonical, dan heading yang relevan.
- [ ] Sitemap dan robots.txt tersedia serta sesuai.
- [ ] Structured data lolos validasi jika diterapkan.
- [ ] Halaman menggunakan HTTPS.
- [ ] Gambar memiliki alt text yang tepat.
- [ ] Navigasi keyboard dan focus state dapat digunakan.
- [ ] Performa diuji dengan PageSpeed Insights/Lighthouse.
- [ ] Google Search Console dikonfigurasi setelah domain siap.
- [ ] Tidak ada klaim, alamat, ulasan, harga, atau sertifikasi yang dikarang.

---

## 17. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Harga/stok tidak diperbarui | Pengunjung kehilangan kepercayaan | Tampilkan tanggal pembaruan atau arahkan untuk konfirmasi WhatsApp. |
| Klaim varietas tidak akurat | Salah ekspektasi pembeli | Tinjau deskripsi dengan pihak yang memahami bibit. |
| Foto bukan produk aktual | Menyesatkan calon pembeli | Gunakan foto asli atau beri label ilustrasi secara jelas. |
| CTA salah nomor | Prospek hilang | Simpan nomor dalam satu konfigurasi dan uji semua tautan. |
| Situs lambat | Pengunjung meninggalkan halaman | Kompres gambar, minimalkan JavaScript, dan ukur performa. |
| SEO berlebihan/isi duplikat | Kualitas konten turun | Utamakan kebutuhan pengguna dan informasi asli. |
| Lokasi usaha tidak jelas | SEO lokal kurang efektif | Konfirmasi area layanan dan data bisnis sebelum publikasi. |

---

## 18. Pertanyaan yang Harus Dikonfirmasi Sebelum Pengembangan

1. Domain dan hosting apa yang akan digunakan?
2. Wilayah pengiriman mana saja yang benar-benar dilayani?
3. Apakah harga ingin ditampilkan di website atau selalu dikonfirmasi via WhatsApp?
4. Apakah tersedia daftar stok, ukuran, umur, dan foto aktual tiap varietas?
5. Apakah ada paket jumlah tertentu, harga grosir, atau minimal pemesanan?
6. Metode pembayaran dan pengiriman apa yang benar-benar tersedia?
7. Apakah ada garansi, sertifikasi, atau kebijakan penggantian? Jika ada, apa ketentuannya?
8. Siapa yang akan menulis atau meninjau artikel budidaya?
9. Apakah website perlu dikelola melalui CMS di tahap berikutnya?
10. Apa jam operasional resmi, dan apakah lokasi usaha memiliki pin peta yang dapat diverifikasi?

---

## 19. Referensi dan Catatan Pembaruan SEO

Panduan ini disusun pada **20 Oktober 2026**. Karena praktik pencarian berubah, tinjau dokumentasi resmi secara berkala.

1. Google Search Central  [Optimizing your website for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)  
   Panduan resmi tentang konten bermanfaat, crawlability, pengalaman halaman, SEO lokal, serta penjelasan AEO/GEO.
2. Google Search Central  [Google Search Essentials](https://developers.google.com/search/docs/essentials)  
   Persyaratan teknis, kebijakan spam, dan praktik utama agar konten layak muncul di Google Search.
3. Google Search Central  [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)  
   Prinsip konten yang dibuat untuk membantu pengguna, dengan informasi yang dapat dipercaya.
4. Google Search Central  [Search documentation updates](https://developers.google.com/search/updates)  
   Catatan perubahan dokumentasi resmi, termasuk pembaruan terkait fitur pencarian AI dan FAQ rich results.

**Prinsip utama:** tidak ada jaminan posisi ranking atau kutipan AI. Prioritaskan situs yang cepat, mudah diakses, informatif, autentik, transparan, dan berguna bagi calon pembeli.

---

## 20. Ringkasan Keputusan Produk

- **Nama:** Astana Avocado
- **Jenis:** Website katalog dan pemasaran bibit alpukat
- **Teknologi:** HTML5, CSS3, Bootstrap 5, JavaScript vanilla
- **Gaya:** Elegan, kalem, natural, premium
- **Warna utama:** Putih dan hijau
- **Navigasi:** Beranda, Tentang Kami, Paket Layanan, Blog, Galeri
- **Varietas:** Miki, Aligator, Hawai, Hass, Wina, Wurtz, Cuba, Booth-7, Buccaner, dan lainnya yang dikonfirmasi
- **CTA penjualan:** WhatsApp `6281235305934`
- **Alamat:** Jl. Arjuna, Dsn. Nglerep, Ds. Trayang, Nganjuk 64395, Jawa Timur
- **Media sosial:** [Facebook](https://www.facebook.com/AstanaAvocadoIndonesia), [Instagram](https://www.instagram.com/astanaavocado/), [YouTube](https://www.youtube.com/@AstanaAvocado), [TikTok](https://www.tiktok.com/@astanavocado)
- **SEO:** SEO teknis, on-page, gambar, lokal, dan structured data yang valid
- **AEO/GEO:** Jawaban langsung, konten orisinal, informasi usaha konsisten, dan halaman yang dapat dirayapi
- **Status:** Siap dijadikan acuan desain dan implementasi setelah data usaha yang belum tersedia dikonfirmasi
