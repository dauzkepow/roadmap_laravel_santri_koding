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