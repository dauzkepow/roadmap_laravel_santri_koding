//Fungsi = kode lebih terstruktur dengan konsep class (cetek biru)
//dan object (instance nyata)

//Contoh Kode
//membuat class
class User {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    //method
    sayHello() {
        console.log(`Halo, nama saya ${this.nama}, umur ${this.umur}`);
    }
}

//object dari class
let u1 = new User("Dauz", 31);

//panggil method
u1.sayHello(); //Halo, nama saya Dauz, umur 31

//Penjelasan per Baris Kode

//Latihan = buat class Mobil dengan properti merk, tahun, dan 
//method infoMobil()

console.log('============================');
class Mobil {
    constructor(merk, tahun) {
        this.merk = merk;
        this.tahun = tahun;
    }

    infoMobil() {
        console.log(`Mobil merk: ${this.merk}, tahun ${this.tahun}`);
    }
}


let m = new Mobil("Lancer", 1992);
m.infoMobil(); //Mobil merk: Lancer, tahun 1992