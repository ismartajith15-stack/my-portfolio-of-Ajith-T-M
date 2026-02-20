// ===== Navbar links scroll =====
const navLinks = document.querySelectorAll('.navbar a:not(.settings-btn)');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Resume Popup =====
const resumeBtn = document.getElementById('resume-btn');
const resumePopup = document.getElementById('resume-popup');
const resumeCloseBtn = document.getElementById('resume-close');

resumeBtn.addEventListener('click', () => {
  resumePopup.classList.toggle('show');
});

resumeCloseBtn.addEventListener('click', () => {
  resumePopup.classList.remove('show');
});

// ===== Settings Panel =====
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.toggle('show');
});

// Settings options
const toggleThemeBtn = document.getElementById('toggle-theme');
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const toggleAnimationsBtn = document.getElementById('toggle-animations');

toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

increaseFontBtn.addEventListener('click', () => {
  const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (currentSize + 1) + 'px';
});

decreaseFontBtn.addEventListener('click', () => {
  const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (currentSize - 1) + 'px';
});

// ===== Scroll Animations =====
let animationsEnabled = true;

function handleScrollAnimation() {
  if (!animationsEnabled) return;
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible-section');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Toggle animations
toggleAnimationsBtn.addEventListener('click', () => {
  animationsEnabled = !animationsEnabled;
  const sections = document.querySelectorAll('section');

  if (!animationsEnabled) {
    sections.forEach(sec => sec.classList.add('visible-section'));
    toggleAnimationsBtn.textContent = 'Animations Off';
  } else {
    sections.forEach(sec => sec.classList.remove('visible-section'));
    toggleAnimationsBtn.textContent = 'Animations On';
    handleScrollAnimation();
  }
});

// ===== Skills animation =====
const skillFills = document.querySelectorAll('.skill-fill');
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection.getBoundingClientRect().top < window.innerHeight - 50) {
    skillFills.forEach(fill => {
      fill.style.width = fill.getAttribute('data-percent');
    });
  }
});
