/*Movendo o fundo quando o mouse passa sobre ele*/
const fundo = document.getElementById('fundo');

fundo.addEventListener('mouseenter', () => {
  fundo.style.transform = 'translateX(0)'; // posição final
  fundo.style.transition = 'transform 0.5s ease'; // animação suave
});
