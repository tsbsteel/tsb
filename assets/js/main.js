// main.js

// Bungkus semua kode yang berinteraksi dengan DOM di dalam DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Inisialisasi Lucide Icons (PENTING: Harus dijalankan di awal)
    // Sekarang diletakkan di sini setelah DOM siap.
    lucide.createIcons();

    // --- SCRIPT UNTUK SLIDER GAMBAR ---
    const slider = document.getElementById("slider");
    if (slider) {
        let currentIndex = 0;
        const totalSlides = slider.children.length;
        const slideWidth = 100 / totalSlides; 

        if (totalSlides > 1) {
            const nextSlide = () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
            };
            // Ganti interval, karena JS di luar body tag
            setInterval(nextSlide, 5000); 
        }
    }

    // --- SCRIPT UNTUK BURGER MENU ---
    const burgerMenu = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    const toggleMenu = () => {
        burgerMenu.classList.toggle('active');
        const isActive = navMenu.classList.toggle('active');

        if (isActive) {
            navMenu.classList.remove('opacity-0', '-translate-y-5', 'pointer-events-none');
            navMenu.classList.add('opacity-100', 'translate-y-0');
        } else {
            navMenu.classList.remove('opacity-100', 'translate-y-0');
            navMenu.classList.add('opacity-0', '-translate-y-5', 'pointer-events-none');
        }
    };

    // Fungsi tambahan untuk menutup menu saat link diklik (agar lebih ramah mobile)
    const closeMenu = () => {
        if (burgerMenu.classList.contains('active')) {
            toggleMenu();
        }
    }

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', toggleMenu);
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // --- SCRIPT UNTUK DARK MODE TOGGLE ---
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');

    // Fungsi untuk memperbarui ikon
    const updateIcon = (isDark) => {
        if (isDark) {
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        } else {
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        }
    };
    
    // Inisialisasi ikon berdasarkan status class 'dark' saat ini
    const initialIsDark = document.documentElement.classList.contains('dark');
    updateIcon(initialIsDark);

    // Listener untuk tombol toggle
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        
        if (isDark) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        
        // Update ikon setelah toggle
        updateIcon(isDark);
    });

});