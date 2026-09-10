const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const nota4 = document.querySelector('#nota4');
const btn = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

const notas = [nota1, nota2, nota3, nota4];

btn.addEventListener('click', function () {
  const algumVazio = notas.some(function (campo) {
    return campo.value === '';
  });

  if (algumVazio) {
    resultado.textContent = 'Preencha as quatro notas.';
    resultado.className = '';
    return;
  }

  const soma = notas.reduce(function (total, campo) {
    return total + Number(campo.value);
  }, 0);

  const media = soma / notas.length;

  resultado.textContent = `Média: ${media}`;

  if (media >= 7) {
    resultado.className = 'aprovado';
  } else if (media >= 4) {
    resultado.textContent = `Média: ${media} — Recuperação`;
    resultado.className = 'recuperacao';
  } else {
    resultado.className = 'reprovado';
  }
});