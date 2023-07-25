const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((element) => observer.observe(element));

const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((skillCard) => {
  const text = skillCard.querySelector('.skill-text');
  skillCard.addEventListener('mouseenter', function () {
    console.log('enter');
    text.classList.remove('opacity-0');
  });

  skillCard.addEventListener('mouseleave', function () {
    console.log('leave');
    text.classList.add('opacity-0');
  });
});
