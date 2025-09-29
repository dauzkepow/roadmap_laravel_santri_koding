/*
Generic fitur yang memungkinkan kita membuat kode yang fleksible dan dapat
digunakan kembali (reusable) dengan berbagai tipe data tanpa kehilangan 
keamanan tipe

biasanya digunakan dalam function, class, dan interface

1. Generic dalam Function = tipe data fleksible
- function tanpa generic
function getFirst(arr: any[]): any {
  return arr[0];
}

console.log(getFirst(["Apple", "Banana"])); // Output: Apple
console.log(getFirst([10, 20, 30])); // Output: 10

- function mengembalikan any sehingga kehilangan keamanan tipe data

- function dengan generic
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst<string>(["Apple", "Banana"])); // Output: Apple
console.log(getFirst<number>([10, 20, 30])); // Output: 10

- function tetap fleksible bisa menerima array string atau number
- typescript akan cek tipe data saat runtime untuk menghindari kesalahan

2. Generic dalam interface = membuat struktur data yang reusable
interface Pair<T, U> {
  first: T;
  second: U;
}

const angka: Pair<number, string> = { first: 1, second: "Satu" };
const koordinat: Pair<number, number> = { first: 10, second: 20 };

console.log(angka); // Output: { first: 1, second: 'Satu' }
console.log(koordinat); // Output: { first: 10, second: 20 }

- interface Pair<T, U> bisa digunakan dengan kombinasi tipe data yang berbeda

3. Generic dalam Class = menangani berbagai tipe data
class Storage<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const textStorage = new Storage<string>();
textStorage.add("Hello");
textStorage.add("World");
console.log(textStorage.getAll()); // Output: [ 'Hello', 'World' ]

const numberStorage = new Storage<number>();
numberStorage.add(100);
numberStorage.add(200);
console.log(numberStorage.getAll()); // Output: [ 100, 200 ]

- class Storage<T> bisa menyimpan string atau number tanpa kehilangan
keamanan tipe data


4. Constraint dalam Generics = batasi tipe data yang bisa digunakan dalam Generics
bisa dilakukan dengan extends

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("TypeScript")); // Output: 10
console.log(getLength([1, 2, 3, 4])); // Output: 4
// console.log(getLength(100)); // ❌ Error: number tidak punya property length

T extends { length: number } memastikan bahwa hanya tipe data yang memiliki
.length yang bisa digunakan (seperti string dan array)




*/