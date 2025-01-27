// Questão 4
let faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  let totalFaturamentoMensal = Object.values(faturamentoMensal).reduce((acc, val) => acc + val, 0);
  
  for (let estado in faturamentoMensal) {
    let percentual = (faturamentoMensal[estado] / totalFaturamentoMensal) * 100;
    console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
}
