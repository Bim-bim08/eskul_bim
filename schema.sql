-- ==========================================================
-- Database Schema: EskulBim (Dashboard Admin Sekolah)
-- Tabel: extracurriculars
-- ==========================================================

CREATE DATABASE IF NOT EXISTS eskulbim;
USE eskulbim;

-- Drop table jika sudah ada sebelumnya
DROP TABLE IF EXISTS extracurriculars;

-- Buat tabel extracurriculars
CREATE TABLE extracurriculars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category ENUM('Olahraga', 'Seni', 'Akademik', 'Organisasi', 'Lainnya') DEFAULT 'Lainnya',
    logo_url VARCHAR(255) NULL,
    description TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ==========================================================
-- Data Awal (Dummy / Seed Data Opsional)
-- ==========================================================
INSERT INTO extracurriculars (name, category, logo_url, description) VALUES
('Pramuka', 'Organisasi', 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=150', 'Gerakan Pramuka melatih kedisiplinan, kepemimpinan, dan kemandirian siswa.'),
('Paskibra', 'Organisasi', 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?w=150', 'Pasukan Pengibar Bendera Pusaka untuk membina karakter dan rasa nasionalisme.'),
('Futsal Club', 'Olahraga', 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=150', 'Pengembangan bakat olahraga futsal, taktik bermain, dan sportivitas.'),
('Klub Robotik & Coding', 'Akademik', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150', 'Mempelajari dasar elektronika, pemrograman mikrokontroler, dan kompetisi sains.'),
('Paduan Suara & Musik', 'Seni', 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150', 'Wadah olah vokal dan apresiasi seni musik modern maupun tradisional.');
