//untuk keperluan validasi Auth register dan login

const { body } = require('express-validator'); //import express validator
const prisma = require('../../prisma/client'); //import prisma

//definisikan validasi untuk register
const validateRegister = [
    body('name').notEmpty().withMessage('Name is required'), //name, notEmpty, kolom wajib diisi
    body('email')
        .notEmpty().withMessage('Email is required') //email, notEmpty, kolom wajib diisi
        .isEmail().withMessage('Email is invalid') //wajib format email
        .custom(async (value) => { //periksa unique menggunakan prisma
            if (!value) {
                throw new Error('Email is required');
            }
            const user = await prisma.user.findUnique({ where: { email: value }});
            if (user) {
                throw new Error('Email already exists');
            }
            return true;
        }),
    //password minimal 6 karakter
    body('password').isLength({ min:6 }).withMessage('Password must be at lease 6 characters long'),
];

//definisikan validasi untuk login
const validateLogin = [
    body('email').notEmpty().withMessage('Email is required'), //email wajib diisi
    //minimal 6 karakter
    body('password').isLength({ min:6 }).withMessage('Password must be at least 6 characters long'), 
];

module.exports = { validateRegister, validateLogin };
