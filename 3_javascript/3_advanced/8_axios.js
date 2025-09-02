import axios from "axios";

async function getPosts() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data[0].title);
}

getPosts();

/*
pastikan axios sudah terinstall
npm init -y
npm install axios

opsi-2
gunakan kode asli
aktifkan ES Module
Tambahkan "type": "module" di package.json

{
  "name": "3_advanced",
  "version": "1.0.0",
  "type": "module"
}
*/