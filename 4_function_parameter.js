/*
1. Function dengan parameter dan return type
function tambah(a: number, b: number): number {
  return a + b;
}

console.log(tambah(5, 3)); // Output: 8

- a: number dan b: number, parameter wajib berupa angka
- :  number setelah tanda kurung: function ini harus mengembalikan number

2. Function dengan return type void
function sapa(nama: string): void {
  console.log(`Halo, ${nama}!`);
}

sapa("Andi"); // Output: Halo, Andi!

- function hanya mencetak teks ke console dan tidak mengembalikan nilai

3. Default Parameter
function sapaUser(nama: string = "User"): void {
  console.log(`Halo, ${nama}!`);
}

sapaUser(); // Output: Halo, User!
sapaUser("Budi"); // Output: Halo, Budi!

- jika parameter nama tidak diisi, maka otomatis bernilai "User"

4. Optional Parameter
function perkenalan(nama: string, umur?: number): void {
  if (umur) {
    console.log(`Halo, nama saya ${nama} dan saya berusia ${umur} tahun.`);
  } else {
    console.log(`Halo, nama saya ${nama}.`);
  }
}

perkenalan("Fika", 22); // Output: Halo, nama saya Fika dan saya berusia 22 tahun.
perkenalan("Fika"); // Output: Halo, nama saya Fika.

- jika umur tidak diisi, function tetap berjalan tanpa error

5. Rest Parameter - argumen array
function jumlahkan(...angka: number[]): number {
  return angka.reduce((total, num) => total + num, 0);
}

console.log(jumlahkan(1, 2, 3, 4, 5)); // Output: 15
console.log(jumlahkan(10, 20)); // Output: 30

- semua angka yang dikirim akan dikumpulkan dalam array angka




*/