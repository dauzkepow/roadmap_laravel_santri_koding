/**
 * jalankan di browser
 * fungsi = menyimpan data di browser
 * localStorage → data tersimpan permanen (sampai dihapus).
 * sessionStorage → hanya berlaku selama tab terbuka.
 */

// Simpan data
localStorage.setItem("nama", "Dauz");
sessionStorage.setItem("umur", "25");

// Ambil data
console.log(localStorage.getItem("nama"));
console.log(sessionStorage.getItem("umur"));

// Hapus data
localStorage.removeItem("nama");
