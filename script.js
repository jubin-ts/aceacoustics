// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    var links = navLinks.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
      });
    }
  }

  // ===== Navbar scroll effect =====
  var navbar = document.getElementById('navbar');
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
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  for (var j = 0; j < tabBtns.length; j++) {
    tabBtns[j].addEventListener('click', function () {
      var targetTab = this.getAttribute('data-tab');

      // Remove active from all buttons and panels
      for (var k = 0; k < tabBtns.length; k++) {
        tabBtns[k].classList.remove('active');
      }
      for (var m = 0; m < tabPanels.length; m++) {
        tabPanels[m].classList.remove('active');
      }

      // Activate clicked tab
      this.classList.add('active');
      var panel = document.getElementById('tab-' + targetTab);
      if (panel) {
        panel.classList.add('active');
      }
    });
  }

  // ===== Contact Form Handler =====
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameVal = document.getElementById('name').value.trim();
      var emailVal = document.getElementById('email').value.trim();
      var messageVal = document.getElementById('message').value.trim();

      if (!nameVal || !emailVal || !messageVal) {
        alert('Please fill in all required fields.');
        return;
      }

      // Build mailto link as a simple fallback (no backend)
      var subjectVal = document.getElementById('subject').value.trim() || 'Website Enquiry';
      var body = 'Name: ' + nameVal + '\nEmail: ' + emailVal + '\n\n' + messageVal;
      var mailtoLink = 'mailto:info@aceacoustics.com?subject=' +
        encodeURIComponent(subjectVal) + '&body=' + encodeURIComponent(body);

      window.location.href = mailtoLink;
    });
  }

  // ===== Intersection Observer for fade-in animations =====
  if ('IntersectionObserver' in window) {
    var sections = document.querySelectorAll('.section');

    var observer = new IntersectionObserver(function (entries) {
      for (var n = 0; n < entries.length; n++) {
        if (entries[n].isIntersecting) {
          entries[n].target.classList.add('visible');
        }
      }
    }, { threshold: 0.1 });

    for (var p = 0; p < sections.length; p++) {
      sections[p].classList.add('fade-section');
      observer.observe(sections[p]);
    }
  }
});
