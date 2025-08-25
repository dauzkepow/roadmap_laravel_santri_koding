//Fungsi = memberi nilai default jika parameter kosong

//Contoh Kode
function sapa(nama = "Tamu") {
    console.log(`Halo, ${nama}`);
}
sapa(); //Halo, Tamu
sapa("Dauz"); //Halo, Dauz

//Penjelasan per Baris Kode

//Latihan = buat fungsi diskon(harga, persen=10) hitung potongan harga

//harga = harga asli barang
//persen = besar diskon (default 10%)

// Fungsi diskon
function diskon(harga, persen = 10) {
  //Validasi harga harus angka dan lebih dari 0
  if (typeof harga !== "number" || harga <= 0) {
    return "Error: harga harus berupa angka lebih dari 0";
  }

  //validasi persen juga angka dan minimal 0
  if (typeof persen !== "number" || persen < 0) {
    return "Error: persen diskon harus berupa angka minila 0";
  }

  // Hitung jumlah potongan
  let potongan = (harga * persen) / 100;

  // Hitung harga setelah diskon
  let hargaAkhir = harga - potongan;

  // Kembalikan hasil dalam bentuk object agar rapi
  return {
    hargaAsli: harga,
    persenDiskon: persen,
    potongan: potongan,
    hargaAkhir: hargaAkhir
  };
}

// Contoh pemakaian
console.log(diskon(100000));       // default 10%
console.log(diskon(250000, 20));   // diskon 20%


