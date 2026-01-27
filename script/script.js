document.addEventListener('DOMContentLoaded', () => {
  const fundo = document.querySelector('.fundo');

  if (!fundo) return;

  fundo.addEventListener('mouseenter', () => {
    fundo.style.transform = 'translateX(0)';
  });

  fundo.addEventListener('mouseleave', () => {
    fundo.style.transform = 'translateX(30%)';
  });
});
