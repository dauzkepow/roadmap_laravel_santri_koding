//Fungsi = memberi nilai default jika parameter kosong

//Contoh Kode
function sapa(nama = "Tamu") {
    console.log(`Halo, ${nama}`);
}
sapa(); //Halo, Tamu
sapa("Dauz"); //Halo, Dauz

//Penjelasan per Baris Kode

//Latihan = buat fungsi diskon(harga, persen=10) hitung potongan harga
function diskon(harga, persen = 10) {
    //hitung potongan harga
    const potongan = (persen / 100) * harga;
    return potongan;
}
console.log(`Harga: ${diskon(10000)}`);