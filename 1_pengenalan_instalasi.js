/*
#Typescript
=> superset dari javascript buatan microsoft
menabahkan fitur static typing, interface dan fitur OOP

Kenapa menggunakan typescript :
- static typing, menentukan tipe data dan variabel sejak awal, function, 
dan object mencegah error sebelum kode dijalankan
- lebih mudah dipahami dengan tipe data
- meningkatkan produktivitas ada autocompletion dan suggestion
- dukungan fitur modern
- mudah maintenance, dengan adanya interface dan tupe annotation, kode kita
menjadi lebih mudah dimaintenance tanpa takut merusak bagian lain dari aplikasi

Cara kerja typescript :
- menulis kode typescript (file .ts) seperti static typing
- typescript di-compile ke dalam javascript menggunakan perintah tsc
- hasil compile file .js berupa javascript biasa yang bisa dijalankan di nodejs

Instalasi Typescript :
npm install -g typescript
tsc -v

buat file hello.ts :
let message: string = "Hello World!";
console.log(message);

compile dengan tsc :
tsc hello.ts
jika berhasil muncul file baru hello.js

jalankan file js :
node hello.js

*/