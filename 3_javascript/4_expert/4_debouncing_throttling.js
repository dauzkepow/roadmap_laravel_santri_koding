//Fungsi = optimasi event yang sering dipicu (input ketikan, scroll)
//debounce = tunggu beberapa ms sebelum jalan (user berhenti mengetik)
//throttle = batasi agar hanya jalan sekali per interval waktu

//Contoh Kode
function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout); //reset timer tiap kali user ketik.
        //setTimeout(() => fn(...), delay) → hanya eksekusi terakhir.
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

const search = debounce((q) => {
    console.log("Mencari:",q);
}, 500);

search("a");
search("ab");
search("abc"); //hanya ini yang dieksekusi

//Penjelasan per Baris Kode
//Latihan