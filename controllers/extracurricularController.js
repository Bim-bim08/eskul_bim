const db = require('../config/db');

// Controller untuk Ekstrakurikuler
const extracurricularController = {
    // Menampilkan halaman dashboard / daftar ekstrakurikuler
    getIndex: async (req, res) => {
        let extracurriculars = [];
        let dbStatus = { connected: false, message: '' };

        try {
            // Coba ambil data dari tabel extracurriculars
            const [rows] = await db.query('SELECT * FROM extracurriculars ORDER BY id DESC');
            extracurriculars = rows;
            dbStatus = { connected: true, message: 'Terhubung ke Database MySQL' };
        } catch (error) {
            // Fallback jika MySQL belum aktif atau tabel belum diimpor
            dbStatus = {
                connected: false,
                message: `Belum terhubung ke database (${error.code || error.message}). Menampilkan data pratinjau.`
            };

            // Data pratinjau agar UI tetap terlihat bagus
            extracurriculars = [
                {
                    id: 1,
                    name: 'Pramuka',
                    category: 'Organisasi',
                    logo_url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=150',
                    description: 'Gerakan Pramuka melatih kedisiplinan, kepemimpinan, dan kemandirian.',
                    created_at: new Date()
                },
                {
                    id: 2,
                    name: 'Futsal Club',
                    category: 'Olahraga',
                    logo_url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=150',
                    description: 'Pengembangan bakat olahraga futsal dan sportivitas tim.',
                    created_at: new Date()
                },
                {
                    id: 3,
                    name: 'Klub Robotik & Coding',
                    category: 'Akademik',
                    logo_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150',
                    description: 'Mempelajari dasar elektronika, coding mikrokontroler, dan sains.',
                    created_at: new Date()
                },
                {
                    id: 4,
                    name: 'Paduan Suara',
                    category: 'Seni',
                    logo_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150',
                    description: 'Wadah olah vokal, paduan suara harmoni, dan seni musik.',
                    created_at: new Date()
                }
            ];
        }

        res.render('index', {
            title: 'EskulBim - Dashboard Admin Sekolah',
            page: 'dashboard',
            extracurriculars,
            dbStatus
        });
    }
};

module.exports = extracurricularController;
