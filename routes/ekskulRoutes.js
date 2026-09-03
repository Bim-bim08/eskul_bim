const express = require('express');
const router = express.Router();
const { getAllEkskul, createEkskul, updateEkskul, deleteEkskul } = require('../controllers/ekskulController');

// Route untuk menampilkan semua data ekstrakurikuler
router.get('/', getAllEkskul);

// Route untuk menambahkan ekstrakurikuler baru
router.post('/add', createEkskul);

// Route untuk memperbarui data ekstrakurikuler
router.post('/api/ekskul/update', updateEkskul);

// Route untuk menghapus data ekstrakurikuler
router.post('/api/ekskul/delete/:id', deleteEkskul);

module.exports = router;
