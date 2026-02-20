// Navbar links
const skillsLink = document.getElementById('skills-link');
const projectsLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');

function revealSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = "block";
    section.scrollIntoView({ behavior: 'smooth' });
    const container = section.querySelector('.section-container');
    if (!container.classList.contains('visible-section')) {
        container.classList.add('visible-section');
        container.classList.add('visible');
    }
}

// Skills animation & bars
skillsLink.addEventListener('click', e => {
    e.preventDefault();
    revealSection('skills');
    document.querySelectorAll('.skill-fill').forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
    });
});

// Projects & Contact
projectsLink.addEventListener('click', e => { e.preventDefault(); revealSection('projects'); });
contactLink.addEventListener('click', e => { e.preventDefault(); revealSection('contact'); });

// Resume popup
const resumeBtn = document.getElementById('resume-btn');
const resumePopup = document.getElementById('resume-popup');
resumeBtn.addEventListener('click', e => {
    e.preventDefault();
    resumePopup.style.display = resumePopup.style.display === "block" ? "none" : "block";
});
window.addEventListener('click', e => { if(!resumePopup.contains(e.target) && e.target!==resumeBtn){resumePopup.style.display='none';}});

// Accordion functionality
document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.classList.toggle('active');
    });
});