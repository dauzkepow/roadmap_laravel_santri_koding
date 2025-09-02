/*
1. Gunakan nama variabel jelas
let umurPengguna = 25; // jelas
let x = 25; // tidak jelas

2. Pisahkan fungsi kecil
function hitungDiskon(harga, persen) {
  return harga * (persen / 100);
}
function totalHarga(harga, persen) {
  return harga - hitungDiskon(harga, persen);
}

3. Hindari magic number
const PAJAK = 0.1;
let total = harga * (1 + PAJAK);

4. Gunakan async/await daripada callback hell

5. Gunakan komentar seperlunya, nama variable harus self-explaining

6. Gunakan const dan let jangan var








*/