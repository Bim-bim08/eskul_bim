const express = require('express');
const path = require('path');
require('dotenv').config();

const { testConnection } = require('./config/db');
const ekskulRoutes = require('./routes/ekskulRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// 1. Middleware Parser
// ==========================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==========================================
// 2. Static Assets Hosting
// ==========================================
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// 3. View Engine Configuration (EJS)
// ==========================================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ==========================================
// 4. Routes
// ==========================================
app.use('/', ekskulRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).render('index', {
        title: '404 - Halaman Tidak Ditemukan',
        extracurriculars: [],
        error: 'Halaman yang Anda cari tidak ditemukan.'
    });
});

// ==========================================
// 5. Server Listener & DB Health Check
// ==========================================
app.listen(PORT, async () => {
    console.log(`🚀 [Server] EskulBim berjalan di http://localhost:${PORT}`);
    // Uji koneksi database di background
    await testConnection();
});
