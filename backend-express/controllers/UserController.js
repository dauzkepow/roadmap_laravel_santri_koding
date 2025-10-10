//operasi CRUD User

const express = require("express"); //import express
const prisma = require("../prisma/client"); //import prisma client

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

module.exports = { findUsers };