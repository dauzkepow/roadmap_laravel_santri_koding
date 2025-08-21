//Fungsi = Mengatur alur program

//Contoh Kode
let nilai = 85;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 75) {
  console.log("B"); //B
} else {
  console.log("C");
}

let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari kerja"); //Hari Kerja
    break;
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari biasa");
}


//Penjelasan per Baris Kode

//Latihan = Buat program cek hari apakah Weekend atau Weekday.
console.log("==============");
//1-5 = weekday
//6,7 = weekend

let a = 8;

if (a >= 1 && a <= 5) {
    console.log("Weekday");
} else if (a >= 6 && a <= 7) {
    console.log("Weekend");
} else {
    console.log("Tidak Terdefinisi");
}