// ==========================================================================
// EskulBim Client-Side Script
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle untuk tampilan mobile
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Tutup sidebar jika klik di luar pada mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 992 && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }

    // 2. Real-time Search Filter pada tabel ekstrakurikuler
    const tableSearch = document.getElementById('tableSearch');
    const eskulTable = document.getElementById('eskulTable');

    if (tableSearch && eskulTable) {
        tableSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            const rows = eskulTable.querySelectorAll('tbody tr');

            rows.forEach((row) => {
                const text = row.textContent.toLowerCase();
                if (text.includes(term)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    console.log('🚀 EskulBim Dashboard Client Script Loaded.');
});
