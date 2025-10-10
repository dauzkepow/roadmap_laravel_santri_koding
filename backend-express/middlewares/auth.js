//verifikasi TOKEN JWT

const express = require('express'); //import express
const jwt = require('jsonwebtoken'); //import jwt

const verifyToken = (req, res, next) => {
    //Get Token Tab headers key=Authorization
    const token = req.headers['authorization'];

    //jika tidak ada token
    if (!token) return res.status(401).json({message: 'Unauthenticated!'});

    //Verify Token, jika salah token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid Token!'});
        req.userId = decoded.id;
        next();
    });

};

module.exports = verifyToken;
