// js/pronunciation.js

// Navigasi yang berfungsi untuk Pronunciation Menu (pronunciation.html)
document.addEventListener('DOMContentLoaded', () => {
    const vowelBtn = document.getElementById('btn-vowel');
    const diphthongBtn = document.getElementById('btn-diphthong');
    const consonantBtn = document.getElementById('btn-consonant');
    const exerciseBtn = document.getElementById('btn-exercise');

    if (vowelBtn) {
        vowelBtn.addEventListener('click', () => {
            // PERUBAHAN DI SINI: Mengarah ke file kategori yang baru
            window.location.href = './materials/vowel_categories.html'; 
        });
    }
    if (diphthongBtn) {
        diphthongBtn.addEventListener('click', () => {
            window.location.href = './materials/diphthong.html';
        });
    }
    if (consonantBtn) {
        consonantBtn.addEventListener('click', () => {
            window.location.href = './materials/consonant.html';
        });
    }
    if (exerciseBtn) {
        exerciseBtn.addEventListener('click', () => {
            // Kita akan mengubah ini nanti agar exercise.html bisa membaca kategori Vowel
            window.location.href = './exercise/exercise-vowel.html'; 
        });
    }
});