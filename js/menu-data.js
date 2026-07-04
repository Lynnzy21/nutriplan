// Data menu — wajib digunakan sesuai spesifikasi tugas.
// kategori menggunakan key internal: Pokok, LaukPauk, Sayur, Buah, Minuman

const MENU_DATA = [
  { id: 1, nama: "Nasi Putih", kategori: "Pokok", kalori: 180, harga: 5000, gambar: "assets/nasi-putih.jpg" },
  { id: 2, nama: "Nasi Goreng Spesial", kategori: "Pokok", kalori: 450, harga: 18000, gambar: "assets/nasi-goreng.jpg" },
  { id: 3, nama: "Mie Goreng Jawa", kategori: "Pokok", kalori: 380, harga: 16000, gambar: "assets/mie-goreng-jawa.jpg" },
  { id: 4, nama: "Spaghetti Aglio Olio", kategori: "Pokok", kalori: 420, harga: 28000, gambar: "assets/spageti.jpg" },
  { id: 5, nama: "Kentang Panggang", kategori: "Pokok", kalori: 220, harga: 15000, gambar: "assets/kentang-bakar.jpg" },
  { id: 6, nama: "Roti Gandum (2 lembar)", kategori: "Pokok", kalori: 160, harga: 8000, gambar: "assets/roti-gandum.jpg" },

  { id: 7, nama: "Ayam Goreng Tepung", kategori: "LaukPauk", kalori: 300, harga: 17000, gambar: "assets/ayam-tepung.jpg" },
  { id: 8, nama: "Ayam Bakar Madu", kategori: "LaukPauk", kalori: 280, harga: 20000, gambar: "assets/ayam-bakar.jpg" },
  { id: 9, nama: "Rendang Daging Sapi", kategori: "LaukPauk", kalori: 380, harga: 32000, gambar: "assets/rendang.jpg" },
  { id: 10, nama: "Tempe Orek", kategori: "LaukPauk", kalori: 150, harga: 8000, gambar: "assets/tempe-orek.jpg" },
  { id: 11, nama: "Tahu Goreng", kategori: "LaukPauk", kalori: 120, harga: 6000, gambar: "assets/tahu.jpg" },
  { id: 12, nama: "Ikan Nila Bakar", kategori: "LaukPauk", kalori: 250, harga: 22000, gambar: "assets/ikan-bakar.jpg" },
  { id: 13, nama: "Telur Dadar", kategori: "LaukPauk", kalori: 190, harga: 7000, gambar: "assets/telur-dadar.jpg" },
  { id: 14, nama: "Beef Steak Sirloin", kategori: "LaukPauk", kalori: 420, harga: 45000, gambar: "assets/stek-beef.jpg" },

  { id: 15, nama: "Tumis Kangkung", kategori: "Sayur", kalori: 90, harga: 9000, gambar: "assets/tumis-kangkung.jpg" },
  { id: 16, nama: "Sayur Asem", kategori: "Sayur", kalori: 70, harga: 8000, gambar: "assets/sayur-asem.jpg" },
  { id: 17, nama: "Capcay Kuah", kategori: "Sayur", kalori: 110, harga: 13000, gambar: "assets/capcay-basah.jpg" },
  { id: 18, nama: "Salad Sayur Segar", kategori: "Sayur", kalori: 80, harga: 14000, gambar: "assets/salad-kering.jpg" },
  { id: 19, nama: "Gado-Gado", kategori: "Sayur", kalori: 280, harga: 16000, gambar: "assets/gado-gado.jpg" },

  { id: 20, nama: "Pisang (1 buah)", kategori: "Buah", kalori: 105, harga: 5000, gambar: "assets/pisang.jpg" },
  { id: 21, nama: "Apel Fuji (1 buah)", kategori: "Buah", kalori: 95, harga: 7000, gambar: "assets/apel.jpg" },
  { id: 22, nama: "Semangka (1 potong)", kategori: "Buah", kalori: 60, harga: 6000, gambar: "assets/semangka.jpg" },
  { id: 23, nama: "Fruit Salad Cup", kategori: "Buah", kalori: 140, harga: 17000, gambar: "assets/fruit-cup.jpg" },

  { id: 24, nama: "Es Teh Manis", kategori: "Minuman", kalori: 90, harga: 5000, gambar: "assets/teh-manis.jpg" },
  { id: 25, nama: "Air Mineral 600ml", kategori: "Minuman", kalori: 0, harga: 4000, gambar: "assets/air-dingin.jpg" },
  { id: 26, nama: "Jus Alpukat", kategori: "Minuman", kalori: 230, harga: 18000, gambar: "assets/jus-alpukat.jpg" },
];

// Label tampilan & urutan 5 kategori wajib untuk checklist "Menu Seimbang"
const KATEGORI_LIST = [
  { key: "Pokok", label: "Makanan Pokok" },
  { key: "LaukPauk", label: "Lauk-Pauk" },
  { key: "Sayur", label: "Sayur" },
  { key: "Buah", label: "Buah" },
  { key: "Minuman", label: "Minuman" },
];