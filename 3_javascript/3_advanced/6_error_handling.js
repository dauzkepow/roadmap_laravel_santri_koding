//Fungsi = Menangkap error agar program tidak berhenti
//try...catch

//Contoh Kode
try {
    let x = 10 / 0;
    console.log("Hasil:", x);
    throw new Error("Contoh Error Manual");
} catch (error) {
    console.log("Terjadi error:", error.message);
} finally {
    console.log("Bagian ini selalu jalan");
}
//Penjelasan per Baris Kode
//Latihan