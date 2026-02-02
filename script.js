// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved user preference, if any, on load
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', function () {
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            htmlElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMobileMenu() {
    const isHidden = mobileMenu.classList.contains('translate-x-full');
    if (isHidden) {
        mobileMenu.classList.remove('translate-x-full');
        document.body.classList.add('noscroll');
    } else {
        mobileMenu.classList.add('translate-x-full');
        document.body.classList.remove('noscroll');
    }
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        document.body.classList.remove('noscroll');
    });
});

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

// Modal Logic
const modal = document.getElementById('experience-modal');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalRole = document.getElementById('modal-role');
const modalCompany = document.getElementById('modal-company');
const modalDate = document.getElementById('modal-date');
const modalList = document.getElementById('modal-list');

function openModal(item) {
    const role = item.getAttribute('data-role');
    const company = item.getAttribute('data-company');
    const date = item.getAttribute('data-date');
    const detailsHtml = item.querySelector('.details-content').innerHTML;

    modalRole.textContent = role;
    modalCompany.textContent = company;
    modalDate.textContent = date;
    modalList.innerHTML = detailsHtml;

    modal.classList.add('open');
    document.body.classList.add('noscroll');
}

function closeModal() {
    modal.classList.remove('open');
    document.body.classList.remove('noscroll');
}

// Event Listeners for Experience Items
document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('click', () => openModal(item));
});

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});
