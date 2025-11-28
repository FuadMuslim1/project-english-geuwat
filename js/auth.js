// js/auth.js

// Mengimpor fungsi dari router.js
import { goBack, logout } from './router.js'; 

// Fungsi logout global yang akan dipanggil dari tombol di HTML
window.logout = function() {
    localStorage.clear();
    // PERBAIKAN PENTING: Menggunakan Absolute Path ke root repositori /Git/
    // Ini memastikan tombol logout bekerja dari SEMUA sub-folder.
    window.location.href = "/Git/login.html"; 
};

/**
 * Handles the login process.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Promise<boolean>} - True if login is successful.
 */
export async function handleLogin(email, password) {
    try {
        // Ambil data dari users.json
        const response = await fetch('./data/users.json');
        const users = await response.json();

        // Cari pengguna dengan email dan password yang cocok
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Login Berhasil: Simpan status login & Redirect
            localStorage.setItem('isLoggedIn', 'true');
            // Path ini relatif terhadap login.html (yang ada di root)
            window.location.href = 'index.html'; 
            return true;
        } else {
            // Login Gagal
            localStorage.setItem('isLoggedIn', 'false');
            return false;
        }
    } catch (error) {
        console.error('Error fetching users data:', error);
        return false;
    }
}