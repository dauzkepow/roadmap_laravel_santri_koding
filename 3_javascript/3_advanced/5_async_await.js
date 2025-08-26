//Async/Await
console.log("3_Async Await");
async function ambilData() {
    return "Data dari async";
}

async function main() {
    let data = await ambilData();
    console.log(data);
}
main();
//Data dari async.