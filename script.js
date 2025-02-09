document.addEventListener('DOMContentLoaded', function () {
  // Smooth Scroll
  const links = document.querySelectorAll('.navbar-nav .nav-link');

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Menutup navbar setelah diklik (untuk tampilan mobile)
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  // Form Submission
  document.querySelector('#contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    this.reset();
  });
});
