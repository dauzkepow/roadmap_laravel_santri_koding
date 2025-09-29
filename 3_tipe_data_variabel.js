/*
1. Deklarasi variabel di TYpescript
let nama: string = "Daus Kepow";
let umur: number = 25;
let aktif: boolean = true;
let usia: number = "dua puluh"; //error

2. Tipe Data Dasar :
String - let nama: string = "daus kepow";
Number - let tinggi:number = 175.2;
Boolean - let sudahMenikah: boolean = true;
Any - let: any = "bisa string"; //sebaiknya dihindari
Array - let angka: number[] = [1,2,3,4,5];
Tuple = Array dengan jumlah elemen dan tipe yang sudah ditentukan 
let mahasiswa: [string, number] = ["Daus", 31];

Enum = kumpulan nilai tetap dan bisa dipilih 
enum Role {
    Admin,
    User,
    Guest,
}

let peran: Role = Role.Admin;

Void = function tidak mengembalikan nilai
function hello(nama: string): void {
  console.log(`Halo, ${nama}!`);
}

hello("Fika"); // Output: Halo, Fika!

Null dan Undefined = representasikan ketiadaan nilai
let kosong: null = null;
let tidakTerdefinisi: undefined = undefined;

Never = function yang tidak akan pernah mengembalikan nilai, selalu error
function errorMessage(message: string): never {
  throw new Error(message);
}

Object = variabel yang menyimpan nilai dalam bentuk object
let user: object = { nama: "Fika", umur: 25 };


3. Type Inference (Inferensi tipe data)
let kota = "Jakarta"; // TypeScript akan menganggap ini sebagai string

4. Konstanta - Nilai tetap tidak akan berubah
const API_URL: string = "https://api.santrikoding.com";





*/