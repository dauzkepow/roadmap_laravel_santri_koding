//Fungsi
//Prototype → cara lama untuk berbagi method antar object.
//Inheritance → pewarisan, class anak bisa mewarisi class induk (extend)

//Contoh Kode
//Prototype
function Hewan(nama) {
    this.nama = nama;
}
Hewan.prototype.suara = function() {
    console.log(`${this.nama} bersuara`);
}

let kucing = new Hewan("Kucing");
kucing.suara(); //Kucing bersuara

//Inheritance dengan class (extends)
class Kendaraan {
    constructor(merk) {
        this.merk = merk;
    }
    jalan() {
        console.log(`${this.merk} berjalan`);
    }
}

class Mobil extends Kendaraan {
    constructor(merk, warna) {
        super(merk); //panggil contstructor induk
        this.warna = warna;
    }
}

let avanza = new Mobil("Toyota", "Hitam");
avanza.jalan(); //Toyota berjalan


//Penjelasan per Baris Kode

//Latihan == buat class Pegawai lalu buat class Manager yang
//mewarisi Pegawai
console.log("=============================");
class Pegawai {
    constructor(nama, jabatan) {
        this.nama = nama;
        this.jabatan = jabatan;
    }
    penjelasan() {
            console.log('${nama}, ${jabatan}');
    }

}

class Manager extends Pegawai {
    constructor(nama,tunjangan) {
        super(nama);
        this.tunjangan = tunjangan;
    }

    penjelasanManager() {
        console.log(`Nama: ${this.nama}, tunjangan ${this.tunjangan}`);
    }
}


let e = new Manager("Bizma", 2000000);
e.penjelasanManager();
