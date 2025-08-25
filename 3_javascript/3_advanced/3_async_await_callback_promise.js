//Fungsi = menangani proses asyncronous (Ambil data API, nunggu timer)
//Contoh Kode
//Callback = 
console.log("1_Callback");
function getData(callback) {
    setTimeout(() => {
       callback("Data berhasil diambil"); 
    }, 1000);
}

//panggil fungsi getData dengan parameter hasil
getData((hasil) => console.log(hasil));
//Setelah 1 detik → output Data berhasil diambil.

//Promise
console.log("2_Promise");
let fetchData = new Promise((resolve, reject) => {
    let sukses = true;
    if (sukses) resolve("Data OK");
    else reject("Gagal");
});

fetchData
.then(res => console.log(res))
.catch(err => console.log(err));
//DATA OK

//Async/Await
console.log("3_Async Await");
async function ambilData() {
    return "Data dari async";
}

async function main() {
    let data = await ambilData();
    console.log(data);
}
main();
//Data dari async.



//Penjelasan per Baris Kode

//Latihan = buat async function yang menunggu setTimeout 2 detik
//lalu tampilkan selesai
