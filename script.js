// ===== Elements =====
const resumeBtn = document.getElementById('resume-btn');
const resumePopup = document.getElementById('resume-popup');
const resumeClose = document.getElementById('resume-close');

const settingsBtn = document.getElementById('settings-btn');
const settingsPopup = document.getElementById('settings-popup');
const settingsClose = document.getElementById('settings-close');

const themeToggle = document.getElementById('theme-toggle');
const animToggle = document.getElementById('anim-toggle');
const fontSmall = document.getElementById('font-small');
const fontMedium = document.getElementById('font-medium');
const fontLarge = document.getElementById('font-large');

const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
const sections = document.querySelectorAll('.section');
const skillFills = document.querySelectorAll('.skill-fill');

// ===== Resume Popup =====
resumeBtn.addEventListener('click', () => {
  resumePopup.classList.toggle('show');
  settingsPopup.classList.remove('show');
});
resumeClose.addEventListener('click', () => resumePopup.classList.remove('show'));

// ===== Settings Popup =====
settingsBtn.addEventListener('click', () => {
  settingsPopup.classList.toggle('show');
  resumePopup.classList.remove('show');
});
settingsClose.addEventListener('click', () => settingsPopup.classList.remove('show'));

// ===== Theme Toggle =====
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// ===== Animations Toggle =====
animToggle.addEventListener('click', () => {
  document.body.classList.toggle('no-anim');
});

// ===== Font Size =====
fontSmall.addEventListener('click', () => document.body.style.fontSize = '14px');
fontMedium.addEventListener('click', () => document.body.style.fontSize = '16px');
fontLarge.addEventListener('click', () => document.body.style.fontSize = '18px');

// ===== Navbar Section Switching =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    sections.forEach(sec => {
      if(sec.id === targetId){
        sec.classList.add('visible-section');
        sec.classList.remove('hidden-section');
      } else {
        sec.classList.remove('visible-section');
        sec.classList.add('hidden-section');
      }
    });

    // Close popups when navigating
    settingsPopup.classList.remove('show');
    resumePopup.classList.remove('show');

    // Animate skills only when Skills section is active
    if(targetId === 'skills'){
      skillFills.forEach(fill => fill.style.width = fill.getAttribute('data-percent'));
    } else {
      skillFills.forEach(fill => fill.style.width = '0');
    }
  });
});

// ===== Projects Accordion =====
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    btn.classList.toggle('active');
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
resumeBtn.addEventListener('click', (e) => {
  e.preventDefault(); // THIS LINE IS REQUIRED
  resumePopup.classList.toggle('show');
  settingsPopup.classList.remove('show');
});

settingsBtn.addEventListener('click', (e) => {
  e.preventDefault(); // THIS LINE IS REQUIRED
  settingsPopup.classList.toggle('show');
  resumePopup.classList.remove('show');
});
animToggle.addEventListener('click', () => {
  document.body.classList.toggle('no-anim');
  
  // Update button text dynamically
  if(document.body.classList.contains('no-anim')){
    animToggle.textContent = "Animations OFF";
  } else {
    animToggle.textContent = "Animations ON";
  }
});
