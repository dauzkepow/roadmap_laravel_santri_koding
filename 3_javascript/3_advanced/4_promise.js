//Promise = object yang mewakili hasil operasi asynchronous
//berhasil = resolve
//gagal = reject

//Promise memiliki 3 state :
//pending = masih berjalan
//fulfilled resolved = berhasil
//rejected = gagal

function ambilData() {
    return new Promise((resolve, reject) => {
        console.log("Mengambil data....");
        setTimeout(() => {
           let sukses = true; //inisialisasi variabel
           //jika data ada sukses, true = tampilkan data
           if (sukses) {
            resolve({
                nama: "Daus",
                umur: 31
            }); // sukses
           } else { //jika gagal tampilkan pesan error
            reject("Gagal mengambil data"); //gagal
           } 
        }, 2000);
    });
}

//pemanggilan data menggunakan .then() dan .catch()
ambilData() 
    .then((data) => {
        console.log("Data diterima:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


/*
    - new Promise((resolve, reject) => {...}) membuat promise.
    - lakukan operasi selama menunggu 2 detik
    - resolve(data) = jika berhasil
    - reject(error) = jika gagal
    - pemanggilan bisa menangani dengan .then() untuk sukses
      dan .catch() untuk error
    - if..else mewakili .then() dan .catch()
      if = .then()
      else = .catch()

      */