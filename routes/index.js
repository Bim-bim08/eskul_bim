const express = require('express');
const router = express.Router();
const extracurricularController = require('../controllers/extracurricularController');

// Route halaman utama (Dashboard Admin)
router.get('/', extracurricularController.getIndex);

// Route endpoint cek status API / Server
router.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        app: 'EskulBim',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

module.exports = router;
