// JavaScript for Python Kingdom Saga Website

// Dropdown Menu Logic
document.querySelectorAll('.dropdown').forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', () => {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      menu.style.display = 'block';
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      menu.style.display = 'none';
    }
  });
});

// Responsive Toggle for Navigation (if needed for mobile)
const navLinks = document.querySelector('.nav-links');
const toggleMenu = document.createElement('button');
toggleMenu.textContent = '☰ Menu';
toggleMenu.style.display = 'none';
toggleMenu.classList.add('toggle-menu');
document.querySelector('header').appendChild(toggleMenu);

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    toggleMenu.style.display = 'none';
  } else {
    toggleMenu.style.display = 'block';
  }
});

// Smooth Scroll for Blog Section Links
document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
