/*
1. Buat class dan object
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`Halo, nama saya ${this.name} dan saya berusia ${this.age} tahun.`);
  }
}

const person1 = new Person("Fika", 25);
person1.introduce(); // Output: Halo, nama saya Fika dan saya berusia 25 tahun.

2. Access Modifier: Public, Private, dan protected
menentukan apakah properti atau method bisa diakses dari luar class
- Public
class Animal {
  public name: string; //bisa diakses dari mana saja

  constructor(name: string) {
    this.name = name;
  }
}

const cat = new Animal("Kitty");
console.log(cat.name); // Output: Kitty

- Private
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount(1000);
// console.log(myAccount.balance); // ❌ Error: Property 'balance' is private
console.log(myAccount.getBalance()); // ✅ Output: 1000

- balance hanya bisa diakses melalui method getBalance() bukan langsung dari object

- Protected
class Vehicle {
  protected speed: number = 0;

  accelerate(amount: number): void {
    this.speed += amount;
    console.log(`Kecepatan sekarang: ${this.speed} km/h`);
  }
}

class Car extends Vehicle {
  boost(): void {
    this.accelerate(50);
  }
}

const myCar = new Car();
myCar.boost(); // ✅ Output: Kecepatan sekarang: 50 km/h

- speed tidak bisa diakses langsung dari object tetapi bisa digunakan dalam subclass

3. Inheritance (Pewarisan) - extends
class Employee {
  name: string;
  role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  work(): void {
    console.log(`${this.name} bekerja sebagai ${this.role}`);
  }
}

class Manager extends Employee {
  manage(): void {
    console.log(`${this.name} sedang mengelola tim.`);
  }
}

const emp1 = new Employee("Budi", "Developer");
emp1.work(); // ✅ Output: Budi bekerja sebagai Developer

const manager1 = new Manager("Siti", "Manager");
manager1.work(); // ✅ Output: Siti bekerja sebagai Manager
manager1.manage(); // ✅ Output: Siti sedang mengelola tim.

- Manager mewarisi Employee, sehingga bisa menggunakan method work() dan menambah
method manage()

4. Polymorphism - menimpa atau mengubah method parent class - override
class Animal {
  makeSound(): void {
    console.log("Hewan mengeluarkan suara...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Guk guk!");
  }
}

const animal = new Animal();
animal.makeSound(); // ✅ Output: Hewan mengeluarkan suara...

const dog = new Dog();
dog.makeSound(); // ✅ Output: Guk guk!

- Dog mengubah method makeSound() agar memliki perilaku yang berbeda dari Animal





*/