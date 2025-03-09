// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // 初始化时强制隐藏移动端菜单
    const checkViewport = () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    };
    checkViewport();

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        hamburger.style.transform = navLinks.classList.contains('active') 
            ? 'rotate(90deg)' 
            : 'rotate(0deg)';
    });

    window.addEventListener('resize', () => {
        checkViewport();
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburger.style.transform = 'rotate(0deg)';
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            hamburger.style.transform = 'rotate(0deg)';
        }
    });
});