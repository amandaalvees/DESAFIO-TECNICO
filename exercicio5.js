// Questão 5
function inverterString(str) {
    let strInvertida = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
    
    return strInvertida;
  }
  
  // Teste com a string
  let string = "Exemplo de string";
  console.log("String original:", string);
  console.log("String invertida:", inverterString(string));
  
  