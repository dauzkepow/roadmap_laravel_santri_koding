//10 Konsep Javascript wajib dikuasai sebelum masuk react
//Sandhika Galih

/*
//1.Hoisting = perilaku dimana deklarasi variabel dan fungsi 
//dipindahkan / diangkat ke bagian atas sebelum dieksekusi
halo();
console.log(x);

let x = 10;
function halo() {
    console.log("Halo Brot!");
}
*/

//2.Scope = fitur untuk menentukan aksesibilitas variabel dan fungsi
//dalam kode macam macam scope Global Scope, Function/Local Scope,
//Lexocal Scope, dan block scope
function a() {
    let b = 10;
    c(); //memiliki ketiga scope
    function c() {
        console.log(b);
    }
}

a(); //10

//3. Template String = interpolasi mempermudah string dengan backtick `
