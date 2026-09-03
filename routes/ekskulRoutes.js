const express = require('express');
const router = express.Router();
const { getAllEkskul, createEkskul, updateEkskul, deleteEkskul } = require('../controllers/ekskulController');

// Halaman utama — daftar ekskul
router.get('/', getAllEkskul);

// Tambah ekskul baru
router.post('/add', createEkskul);

// Update ekskul berdasarkan ID
router.post('/api/ekskul/update', updateEkskul);

// Hapus ekskul berdasarkan ID
router.post('/api/ekskul/delete/:id', deleteEkskul);

module.exports = router;
