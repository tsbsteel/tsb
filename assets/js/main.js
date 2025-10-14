// Bungkus semua kode yang berinteraksi dengan DOM di dalam DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Inisialisasi Lucide Icons
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

    // Fungsi tambahan untuk menutup menu saat link diklik
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

    // --- SCRIPT UNTUK DARK MODE TOGGLE DIHAPUS SEPENUHNYA ---

});
