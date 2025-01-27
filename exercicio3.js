// Questão 3
let faturamento = [
    { valor: 67836.43, estado: "SP" },
    { valor: 36678.66, estado: "RJ" },
    { valor: 29229.88, estado: "MG" },
    { valor: 27165.48, estado: "ES" },
    { valor: 19849.53, estado: "Outros" }
];
  
  let totalFaturamento = faturamento.reduce((total, item) => total + item.valor, 0);
  let mediaFaturamento = totalFaturamento / faturamento.length;
  
  let menorFaturamento = Math.min(...faturamento.map(item => item.valor));
  let maiorFaturamento = Math.max(...faturamento.map(item => item.valor));
  
  let diasAcimaMedia = faturamento.filter(item => item.valor > mediaFaturamento).length;
  
  console.log("Menor Faturamento:", menorFaturamento);
  console.log("Maior Faturamento:", maiorFaturamento);
  console.log("Dias com faturamento superior à média:", diasAcimaMedia);
