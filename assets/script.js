// mobile nav
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger) burger.addEventListener('click', () => menu.classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a =>
  a.addEventListener('click', () => menu.classList.remove('open')));

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  io.observe(el);
});

// lightbox
const lb = document.createElement('div');
lb.className = 'lb';
lb.innerHTML = '<span class="lb__close">&times;</span><img alt="">';
document.body.appendChild(lb);
const lbImg = lb.querySelector('img');
document.querySelectorAll('[data-lb]').forEach(img => {
  img.addEventListener('click', () => { lbImg.src = img.src; lb.classList.add('open'); });
});
const close = () => lb.classList.remove('open');
lb.addEventListener('click', e => { if (e.target !== lbImg) close(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
