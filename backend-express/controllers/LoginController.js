//controller untuk login

const express = require('express');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require("../prisma/client");

//function login
const login = async (req, res) => {
    //periksa hasil validasi
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //jika ada error, kembalikan error ke user
        return res.status(422).json({
            success: false,
            message: "Validation error",
            errors: errors.array(),
        });
    }

    try {
        //cari user berdasarkan email
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.email,
            },
            select: {
                id: true,
                name: true,
                email:true,
                password: true,
            },
        });

        //user tidak ditemukan
        if (!user)
            return res.status(404).json({
                success: false,
                message: "User Not Found",
            });

        //ketika user ditemukan lakukan compare password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        //ketika password salah 
        if (!validPassword)
            return res.status(401).json({
                success: false,
                message: "Invalid Password",
            });
        
        //jika password benar = generate token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        //Destructure password agar tidak ditampilkan pada response JSON
        const { password, ...userWithoutPassword } = user;

        //return response dengan format JSON berisi informasi login berhasil
        res.status(200).send({
            success: true,
            message: "Login successfully",
            data: {
                user: userWithoutPassword,
                token: token,
            },
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { login };