//operasi CRUD User

const express = require("express"); //import express
const prisma = require("../prisma/client"); //import prisma client
const { validationResult } = require("express-validator"); //import validation
const bcrypt = require("bcryptjs"); //import bcrypt simpan data password


//function findUsers
const findUsers = async (req, res) => {
    try {
        //get all user from database
        //buat variabel users berisi prisma untuk get data
        //mengambil semua data pengguna dari tabel users dalam database
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
            },
            orderBy: {
                id: "desc", //diurutkan berdasarkan id secara descending
            },
        });

        //send response, lakukan return dalam format JSON berisi informasi list data users
        res.status(200).send({
            success: true,
            message: "Get all users successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

//function createUser
const createUser = async (req, res) => {
    //periksa hasil validasi
    const errors = validationResult(req); //request user

    if (!errors.isEmpty()) {
        //jika ada error, kembalikan error ke user
        return res.status(422).json({
            success: false,
            message: "Validation Error",
            errors: errors.array(),
        });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(req.body.password,10);

    try {
        //insert data
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            },
        });

        //jika berhasil input data
        res.status(201).send({
            success: true,
            message: "User create successfully",
            data: user,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

//Function findUserById
const findUserById = async (req, res) => {
    //destruc get id from params
    const { id } = req.params;

    try {
        //get user by id
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        //send return response JSON, informasi detail user by ID
        res.status(200).send({
            success: true,
            message: `Get User By ID: ${id}`,
            data: user,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error!",
        });
    }
};

//function updateUser
const updateUser = async (req, res) => {
    //destruct Get ID from params, untuk mengetahui id per user
    const { id } = req.params;

    //periksa hasil validasi request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //jika ada error, kembalikan error ke user
        return res.status(422).json({
            success: false,
            message: "Validation Error!",
            errors: errors.array(),
        });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try {
        //update user sesuai id dengan prisma
        const user = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
            },
        });

        //send response
        res.status(200).send({
            success: true,
            message: "User Update Successfully",
            data: user,
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error!",
        });
    }

};

//function delete user
const deleteUser = async (req, res) => {
    //destruct get id from params user
    const { id } = req.params;

    try {
        //delete user menggunakan prisma berdasarkan id
        await prisma.user.delete({
            where: {
                id: Number(id),
            },
        });

        //send response
        res.status(200).send({
            success: true,
            message: "User delete successfully",
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error!",
        });
    }
};

//agar bisa digunakan di file lain
module.exports = { findUsers, createUser, findUserById, updateUser, deleteUser }; 