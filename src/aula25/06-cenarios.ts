

const cenarios = [
  { nome: "Login válido", automatizar: true },
  { nome: "Cadastro com e-mail duplicado", automatizar: true },
  { nome: "Avaliação subjetiva da experiência", automatizar: false },
  { nome: "Cálculo do total da compra", automatizar: true },
];

let quantidadeAutomatizavel: number = 0;

for (const cenario of cenarios) {
  if (cenario.automatizar) {
    quantidadeAutomatizavel++;
    console.log(`${cenario.nome}: AUTOMATIZAR`);
  } else {
    console.log(`${cenario.nome}: NÃO AUTOMATIZAR`);
  }
}

console.log(`Total automatizável: ${quantidadeAutomatizavel}`);
