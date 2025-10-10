//rest api register, buat controller register

const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); //import bcryptjs
const prisma = require('../prisma/client');

//function register
const register = async (req, res) => {
    //periksa hasil validasi
    const errors = validationResult(req); //request dari user

    if (!errors.isEmpty()) {
        //jika ada error, kembalikan error ke pengguna
        return res.status(442).json({
            success:false,
            message: "Validation error",
            errors: errors.array(),
        });
    }

    //hash password dengan bcryptjs
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try {
        //insert data ke database dengan prisma
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            },
        });

        //return response json berhasil register
        res.status(201).send({
            success: true,
            message: "Register successfully",
            data: user,
        });
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { register };



