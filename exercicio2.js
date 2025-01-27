// Questão 2
function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num || num === 0;
}

const numero = 21; // Teste com o número desejado
console.log(`Questão 2: O número ${numero} ${isFibonacci(numero) ? 'PERTENCE' : 'NÃO PERTENCE'} à sequência de Fibonacci.`);