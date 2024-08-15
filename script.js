// Get modal element
const modal = document.getElementById('loginModal');
// Get open modal button
const openModalBtn = document.getElementById('openModalBtn');
// Get close button
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks outside of the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

let lastScrollTop = 0;
const scrollText = document.getElementById('scrollText');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        scrollText.style.opacity = '1';
    } else {
        // Scrolling up
        scrollText.style.opacity = '0';
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});