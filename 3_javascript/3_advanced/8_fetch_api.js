//Mengambil data dari server API
async function getUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();
        console.log(users[0].name);
    } catch (error) {
        console.log("Error:", error);
    }
    
}

getUsers(); //Nama user pertama.