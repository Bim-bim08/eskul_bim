const mysql = require('mysql2/promise');
require('dotenv').config();

// Konfigurasi MySQL Connection Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'eskulbim',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Fungsi helper untuk menguji koneksi database
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ [Database] Berhasil terhubung ke database MySQL (' + (process.env.DB_NAME || 'eskulbim') + ')');
        connection.release();
        return true;
    } catch (error) {
        console.warn('⚠️  [Database] Peringatan: Tidak dapat terhubung ke MySQL (' + error.message + ').');
        console.warn('💡 Pastikan MySQL server sedang aktif dan konfigurasi pada file .env sudah sesuai.');
        return false;
    }
};

module.exports = pool;
module.exports.testConnection = testConnection;
