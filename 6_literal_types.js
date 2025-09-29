/*
Literal Types = menetapkan nilai spesifik ke suatu variabel
berguna untuk membatasi pilihan nilai agar lebih aman dan mengurangi kesalahan

1. String Literal Types = batasi variabel hanya bisa berisi nilai tertentu
let arah: "kiri" | "kanan" | "atas" | "bawah";

arah = "kiri"; // ✅ Benar
arah = "kanan"; // ✅ Benar
// arah = "maju"; // ❌ Error: "maju" bukan bagian dari tipe yang diizinkan

2. Number Literal Types = batasi variabel hanya pada angka tertentu = http
let kodeStatus: 200 | 400 | 500;

kodeStatus = 200; // ✅ Benar
// kodeStatus = 300; // ❌ Error: 300 tidak diizinkan

3. Boolean Literal Types
let isActive: true;

isActive = true; // ✅ Benar
// isActive = false; // ❌ Error: hanya "true" yang diperbolehkan

4. Literal Types dengan union types = daftar yang valid
type Role = "admin" | "user" | "guest";

function akses(role: Role) {
  if (role === "admin") {
    console.log("Akses penuh diberikan.");
  } else if (role === "user") {
    console.log("Akses terbatas.");
  } else {
    console.log("Tidak ada akses.");
  }
}

akses("admin"); // ✅ Output: Akses penuh diberikan
akses("guest"); // ✅ Output: Tidak ada akses
// akses("moderator"); // ❌ Error: "moderator" tidak diizinkan

5. Literal Types dalam function parameter
function setMode(mode: "light" | "dark") {
  console.log(`Mode diatur ke ${mode}`);
}

setMode("light"); // ✅ Output: Mode diatur ke light
// setMode("blue"); // ❌ Error: "blue" bukan nilai yang diperbolehkan



*/