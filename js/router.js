// js/router.js

/**
 * Global function to go back to the previous page in history.
 */
export function goBack() {
    window.history.back();
}

/**
 * Global function to handle user logout.
 * Clears localStorage and redirects to the login page.
 */
export function logout() {
    // Fungsi ini akan di-override di auth.js
    console.log("Logout function called from router (Placeholder).");
}
