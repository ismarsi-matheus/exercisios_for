function contarVogais() {
    palavra = prompt("Digite uma palavra: ");
    contador = 0;
  
    for (i = 0; i < palavra.length; i++) {
      if (palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u' ||
          palavra[i] == 'A' || palavra[i] == 'E' || palavra[i] == 'I' || palavra[i] == 'O' || palavra[i] == 'U') {
        contador++;
      }
    }
  
    alert("A palavra '" + palavra + "' tem " + contador + " vogais.");
  }
  
  contarVogais();
  /*
  palavra.length é usado para determinar o número de iterações no loop for. Por exemplo, se palavra é "hello", o loop for irá iterar 5 vezes, pois palavra.length é 5.
  for=é usado para iterar sobre cada caractere da palavra digitada pelo usuário.
  contador=é inicializada com 0, que será usada para contar as vogais.
  if= é usado para verificar se o caractere atual é uma vogal (ou seja, se é igual a 'a', 'e', 'i', 'o', 'u' ou suas versões maiúsculas).
  Se o caractere for uma vogal, o contador é incrementado em 1.
  */