const db = require('../config/db');

// GET / — tampilkan semua ekskul
const getAllEkskul = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM extracurriculars ORDER BY created_at DESC');
        res.render('index', { ekskulList: rows });
    } catch (err) {
        console.error('getAllEkskul error:', err);
        res.status(500).send('Terjadi kesalahan saat mengambil data.');
    }
};

// POST /add — tambah ekskul baru
const createEkskul = async (req, res) => {
    try {
        const { name, category, logo_url, description } = req.body;
        await db.query(
            'INSERT INTO extracurriculars (name, category, logo_url, description) VALUES (?, ?, ?, ?)',
            [name, category, logo_url || null, description || null]
        );
        res.redirect('/');
    } catch (err) {
        console.error('createEkskul error:', err);
        res.status(500).send('Terjadi kesalahan saat menambahkan data.');
    }
};

// POST /api/ekskul/update — update ekskul berdasarkan ID
const updateEkskul = async (req, res) => {
    try {
        const { id, name, category, logo_url, description } = req.body;
        await db.query(
            'UPDATE extracurriculars SET name = ?, category = ?, logo_url = ?, description = ? WHERE id = ?',
            [name, category, logo_url || null, description || null, id]
        );
        res.redirect('/');
    } catch (err) {
        console.error('updateEkskul error:', err);
        res.status(500).send('Terjadi kesalahan saat memperbarui data.');
    }
};

// POST /api/ekskul/delete/:id — hapus ekskul berdasarkan ID
const deleteEkskul = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM extracurriculars WHERE id = ?', [id]);
        res.redirect('/');
    } catch (err) {
        console.error('deleteEkskul error:', err);
        res.status(500).send('Terjadi kesalahan saat menghapus data.');
    }
};

module.exports = { getAllEkskul, createEkskul, updateEkskul, deleteEkskul };
