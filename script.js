// For smooth scrolling
const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
};

// Add smooth scrolling to all links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', scrollToSection);
});
