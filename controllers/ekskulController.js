const db = require('../config/db');

// Controller untuk Ekstrakurikuler (EskulBim)
const getAllEkskul = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM extracurriculars ORDER BY created_at DESC');
        res.render('index', {
            title: 'Dashboard EskulBim',
            extracurriculars: rows,
            error: null
        });
    } catch (error) {
        console.error('Error saat mengambil data ekskul:', error.message);
        res.render('index', {
            title: 'Dashboard EskulBim',
            extracurriculars: [],
            error: 'Gagal mengambil data dari database: ' + error.message
        });
    }
};

const createEkskul = async (req, res) => {
    try {
        const { name, category, logo_url, description } = req.body;

        // Validasi input sederhana
        if (!name || name.trim() === '') {
            return res.status(400).send('Nama ekstrakurikuler wajib diisi!');
        }

        const cleanCategory = category || 'Lainnya';
        const cleanLogoUrl = logo_url && logo_url.trim() !== '' ? logo_url.trim() : null;
        const cleanDescription = description && description.trim() !== '' ? description.trim() : null;

        const query = `
            INSERT INTO extracurriculars (name, category, logo_url, description)
            VALUES (?, ?, ?, ?)
        `;

        await db.query(query, [name.trim(), cleanCategory, cleanLogoUrl, cleanDescription]);

        console.log(`✅ Berhasil menambahkan ekskul baru: "${name.trim()}"`);
        res.redirect('/');
    } catch (error) {
        console.error('Error saat menyimpan ekskul baru:', error.message);
        res.status(500).send('Terjadi kesalahan pada server saat menyimpan data: ' + error.message);
    }
};

const updateEkskul = async (req, res) => {
    try {
        const { id, name, category, logo_url, description } = req.body;
        const targetId = id || req.body.id_ekskul;

        if (!targetId) {
            return res.status(400).send('ID ekstrakurikuler wajib disertakan!');
        }

        if (!name || name.trim() === '') {
            return res.status(400).send('Nama ekstrakurikuler wajib diisi!');
        }

        const cleanCategory = category || 'Lainnya';
        const cleanLogoUrl = logo_url && logo_url.trim() !== '' ? logo_url.trim() : null;
        const cleanDescription = description && description.trim() !== '' ? description.trim() : null;

        const query = `
            UPDATE extracurriculars
            SET name = ?, category = ?, logo_url = ?, description = ?
            WHERE id = ?
        `;

        await db.query(query, [name.trim(), cleanCategory, cleanLogoUrl, cleanDescription, targetId]);

        console.log(`✅ Berhasil memperbarui data ekskul ID: ${targetId} ("${name.trim()}")`);
        res.redirect('/');
    } catch (error) {
        console.error('Error saat memperbarui ekskul:', error.message);
        res.status(500).send('Terjadi kesalahan pada server saat memperbarui data: ' + error.message);
    }
};

const deleteEkskul = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send('ID ekstrakurikuler wajib disertakan!');
        }

        const query = 'DELETE FROM extracurriculars WHERE id = ?';
        const [result] = await db.query(query, [id]);

        if (result.affectedRows === 0) {
            console.warn(`⚠️ Data ekskul dengan ID ${id} tidak ditemukan.`);
        } else {
            console.log(`🗑️ Berhasil menghapus data ekskul ID: ${id}`);
        }

        res.redirect('/');
    } catch (error) {
        console.error('Error saat menghapus data ekskul:', error.message);
        res.status(500).send('Terjadi kesalahan pada server saat menghapus data: ' + error.message);
    }
};

module.exports = {
    getAllEkskul,
    createEkskul,
    updateEkskul,
    deleteEkskul
};


