#!/bin/bash
# ==============================================================================
# Script Pembersih Backend Node.js (EskulBim Static Site Converter)
# ==============================================================================

echo "🧹 Sedang menghapus seluruh file dan folder backend Node.js..."

# Hapus file dan folder backend secara paksa (-rf)
rm -rf package.json \
       package-lock.json \
       vercel.json \
       server.js \
       app.js \
       index.js \
       node_modules \
       routes \
       views \
       controllers \
       config \
       .env \
       .env.example

echo "✅ Berhasil! Proyek EskulBim kini murni web statis (index.html)."
