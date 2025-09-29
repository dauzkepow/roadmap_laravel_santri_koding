/*
1. Interface = definisikan bentuk sebuah object termasuk properti dan tipe datanya
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user1: User = {
  name: "Fika",
  age: 25,
  isAdmin: true,
};

console.log(user1.name); // Output: Fika

- User adalah interface yang mendefinisikan bahawa object harus memiliki
name, age, dan isAdmin dengan tipe data tertentu. jika salah satu hilang
atau memiliki tipe yang salah, typescript akan memberikan error

- menambahkan optional property (?)
interface Product {
  name: string;
  price: number;
  description?: string; // Optional property
}

const product1: Product = {
  name: "Laptop",
  price: 15000000,
};

console.log(product1.description); // Output: undefined (karena tidak diisi)

- description bersifat optional, jadi object tetap valid meskipun tidak memilikinya

- interface dengan function :
interface Person {
  name: string;
  greet(): string;
}

const person1: Person = {
  name: "Fika",
  greet() {
    return `Halo, saya ${this.name}`;
  },
};

console.log(person1.greet()); // Output: Halo, saya Fika

- function greet harus ada di dalam object dan mengembalikan string


2. Type Alias = definisikan struktur data, mirip dengan interface namun fleksible
type Animal = {
  name: string;
  age: number;
};

const cat: Animal = {
  name: "Milo",
  age: 2,
};

- type alias dengan union type = gabungkan beberapa tipe data dengan union ( | )
type ID = string | number;

let userId: ID;
userId = 123; // ✅ Valid
userId = "abc123"; // ✅ Valid
// userId = true; // ❌ Error: boolean tidak sesuai dengan ID

- userId bisa berupa string atau number namun tidak bisa boolean

- type alias dengan function
type Add = (a: number, b: number) => number;

const add: Add = (x, y) => x + y;

console.log(add(10, 5)); // Output: 15

- Add type alias untuk function yang menerima dua angka dan mengembalikan


3. Perbedaan interface dan type alias
interface -
object = bisa
function = bisa
union type = tidak bisa
merging = bisa extend interface
fleksible = tidak

type alias -
object = bisa
function = bisa
union type =  bisa
merging = tidak bisa
fleksible = bisa


*/