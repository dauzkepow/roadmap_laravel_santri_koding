/*
Enum = definisikan sekumpulan nilai tetap yang mudah dibaca
Tuple = membuat array dengan panjang dan tipe elemen yang sudah ditentukan\

1. Enum
- nilai default 
enum Role {
  Admin, // 0
  User,  // 1
  Guest  // 2
}

let userRole: Role = Role.Admin;
console.log(userRole); // Output: 0

- nilai ditentukan
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

console.log(Status.Success); // Output: 200
console.log(Status["NotFound"]); // Output: 404

- string values
enum PaymentStatus {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED"
}

let statusTransaksi: PaymentStatus = PaymentStatus.Success;
console.log(statusTransaksi); // Output: SUCCESS


2. Tuple
- sederhana
let user: [string, number];

user = ["Fika", 25]; // ✅ Valid
// user = [25, "Fika"]; // ❌ Error: Tipe tidak sesuai

console.log(user[0]); // Output: Fika
console.log(user[1]); // Output: 25

- urutan tipe data harus sesuai

- label yang lebih jelas dengan destructuring
let person: [string, number] = ["Fika", 30];

let [nama, umur] = person;
console.log(nama); // Output: Fika
console.log(umur); // Output: 30

- optional element = bisa diisi bisa tidak
let mahasiswa: [string, number, string?];

mahasiswa = ["Budi", 21]; // ✅ Valid
mahasiswa = ["Budi", 21, "Teknik Informatika"]; // ✅ Valid
// mahasiswa = [21, "Budi"]; // ❌ Error

- dengan rest parameter
let colors: [number, ...string[]];

colors = [1, "red", "green", "blue"];
console.log(colors); // Output: [ 1, 'red', 'green', 'blue' ]

- elemen pertama harus number setelahnya bisa diisi beberapa string


*/