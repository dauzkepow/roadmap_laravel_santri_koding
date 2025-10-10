//permudah query ke database panggil method-method yang sudah  disediakan
//agar tidak perlu menulis kode secara berulang-ulang maka jadikan helper

const { PrismaClient } = require('@prisma/client'); //import prisma client

const prisma = new PrismaClient(); //inisialisasi prisma

module.exports = prisma; //agar bisa digunakan di file lain