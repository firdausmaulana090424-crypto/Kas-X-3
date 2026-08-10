// ==========================================
// FILE KONFIGURASI PENTING (DITHERA CONFIG)
// ==========================================
window.APP_CONFIG = {
    // Tautan backend Google Apps Script Khusus DITHERA
    scriptURL: 'https://script.google.com/macros/s/AKfycbwoHMBdQoRNxZf-DcZZ_F8x3b1isDfayJ6u92AXHe7QMEeZgJW2dr0KMEGeMU9JxH5f/exec',
    
    // Nominal Iuran Kas per bulan
    nominalIuran: 10000,

    // Tautan Penting DITHERA (3 Link Utama & Google Drive Materi)
    links: {
        zoom: "https://us06web.zoom.us/j/4634019789?pwd=A1Mh6ctFpz0abaJsbkDxxisjZoowVb.1",
        lms: "https://lms.maniclotim.sch.id/",
        cbt: "https://cbt.akademiksistem.my.id/",
        driveMateri: "https://drive.google.com/drive/folders/1Tedg5ev7RpyqdOO1u09PoH6wypxM58ld?usp=sharing"
    },

    // PIN Pengurus Default (Khusus Bendahara & Ketua/Wakil Kelas)
    defaultRoles: {
        "2222": { name: "Bendahara", access: ["uangKas"] },
        "4444": { name: "Ketua/Wakil Kelas", access: ["uangKas", "jadwal", "materi", "quickLinks", "adminPanel"] }
    }
};