//Fungsi = pola solusi umum dalam pemrograman

//Contoh Kode
/*
//Singleton = hanya boleh satu instance dari class
class Database {
    constructor() {
        if (Database.instance) return Database.instance 
            Database.instance = this;
    }
}
let db1 = new Database();
let db2 = new Database();
console.log(db1 === db2); //true
*/

/*
//Observer (pub-sub) = Objek bisa subscribe ke event.
class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    }
    emit(event,data) {
        (this.events[event] || []).forEach(fn => fn(data));
    }
}

let bus = new EventEmitter();
bus.on("pesan", (msg) => console.log("Diterima:",msg));
bus.emit("pesan", "Halo Dunia!");
*/

//Factory = Membuat object sesuai kebutuhan tanpa new berulang.
function buatUser(role) {
    if(role === "admin") return {hak: "Full"};
    if(role === "guest") return {hak: "Read-Only"};
}
console.log(buatUser("guest")); //{hak: "Read-Only"}

//Penjelasan per Baris Kode
//Latihan