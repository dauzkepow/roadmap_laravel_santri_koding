//Fungsi = Teknik memecah fungsi banyak argumen jadi fungsi berantai
//satu argumen

//Contoh Kode
function kali(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(kali(2)(3)(4)); //24

/**
 * kali(a) → menerima parameter a, lalu return fungsi lain.
 * function(b) → menerima b.
 * function(c) → menerima c.
 * kali(2)(3)(4) → total perkalian.
 */

//Penjelasan per Baris Kode