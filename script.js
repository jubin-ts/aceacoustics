// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }

  // ===== Navbar scroll effect =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ===== Product Tabs =====
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab');

      // Remove active from all buttons and panels
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });

      // Activate clicked tab
      this.classList.add('active');
      const panel = document.getElementById('tab-' + targetTab);
      if (panel) {
        panel.classList.add('active');
      }
    });
  });

  // ===== Contact Form Handler =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameVal = document.getElementById('name').value.trim();
      const emailVal = document.getElementById('email').value.trim();
      const messageVal = document.getElementById('message').value.trim();

      if (!nameVal || !emailVal || !messageVal) {
        alert('Please fill in all required fields.');
        return;
      }

      // Build mailto link as a simple fallback (no backend)
      const subjectVal = document.getElementById('subject').value.trim() || 'Website Enquiry';
      const body = 'Name: ' + nameVal + '\nEmail: ' + emailVal + '\n\n' + messageVal;
      const mailtoLink = 'mailto:info@aceacoustics.com?subject=' +
        encodeURIComponent(subjectVal) + '&body=' + encodeURIComponent(body);

      window.location.href = mailtoLink;
    });
  }

  // ===== Intersection Observer for fade-in animations =====
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(function (section) {
      section.classList.add('fade-section');
      observer.observe(section);
    });
  }
});
