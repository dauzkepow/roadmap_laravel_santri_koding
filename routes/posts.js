const express = require('express');
const router = express.Router();

//import database.js
const connection = require('../config/database');

//import express validator
const { body, validationResult } = require('express-validator');



/**
 * INDEX POSTS
 */
router.get('/', function (req, res) {
    //query
    connection.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Posts',
                data: rows // <-- data posts
            })
        }
    });
});

/**
 * STORE POST
 * route store, method post
 */

router.post('/store', [

    //validation
    body('title').notEmpty(),
    body('content').notEmpty()

    //buat request
], (req, res) => {

    const errors = validationResult(req);

    //jika request tidak terpenuhi maka tampilkan error
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //jika request terpenuhi buat variabel formData jenis array
    let formData = {
        title: req.body.title,
        content: req.body.content
    }

    // insert query
    connection.query('INSERT INTO posts SET ?', formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(201).json({
                status: true,
                message: 'Insert Data Successfully',
                data: rows[0]
            })
        }
    })

});

/**
 * SHOW POST by ID
 */

//buat route detail data berdasarkan parameter ID
router.get('/:id', function (req, res) {

    //buat variabel id dan isinya ambil dari parameter id
    let id = req.params.id;

    //lakukan query
    connection.query(`SELECT * FROM posts WHERE id = ${id}`, function (err, rows) {

        //jika ada kesalahan
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        }

        // if post not found
        if (rows.length <= 0) {
            return res.status(404).json({
                status: false,
                message: 'Data Post Not Found!',
            })
        }

        // if post found
        else {
            return res.status(200).json({
                status: true,
                message: 'Detail Data Post',
                data: rows[0] // <-- detail data
            })
        }
    })
})

/**
 * UPDATE POST
 */

//route untuk update berdasarkan ID dengan method patch()
router.patch('/update/:id', [

    //validation pastikan data tidak kosong
    body('title').notEmpty(),
    body('content').notEmpty()

], (req, res) => {

    const errors = validationResult(req);

    //jika validasi tidak terpenuhi
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //jika validasi terpenuhi buat variabel id isinya ambil parameter id
    let id = req.params.id;

    //buat variabel formData ambil data dari request yang dikirimkan
    let formData = {
        title: req.body.title,
        content: req.body.content
    }

    // update query berdasarkan id
    connection.query(`UPDATE posts SET ? WHERE id = ${id}`, formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Update Data Successfully!'
            })
        }
    })

});

/**
 * DELETE POST
 */

//route untuk delete data berdasarkan id dengan method delete()
router.delete('/delete/:id', function(req, res) {

    //buat variabel id isinya mengambil dari request parameter bernama id
    let id = req.params.id;
     
    //query delete berdasarkan id
    connection.query(`DELETE FROM posts WHERE id = ${id}`, function(err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } 
        
        else {
            return res.status(200).json({
                status: true,
                message: 'Delete Data Successfully!',
            })
        }
    })
});

module.exports = router;