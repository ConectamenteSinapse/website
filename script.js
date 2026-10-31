// Carrega fotos/telas se existirem; caso contrário, mantém as iniciais/placeholder
document.querySelectorAll('[data-photo]').forEach((el) => {
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage = `url('${el.dataset.photo}')`;
    el.classList.add('has-photo');
  };
  img.src = el.dataset.photo;
  if (el.dataset.initials) el.textContent = el.dataset.initials;
});

// Navbar
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav__links a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  })
);

// Revelação suave ao rolar
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
