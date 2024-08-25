function somaImpares() {
    num = prompt("Digite um número: ");
    soma = 0;
    i = 1;
  
            while (i <= num) {
              if (i % 2 != 0) {
                soma += i;
              }
              i++;
                      }
  
              alert("A soma dos números ímpares até " + num + " é: " + soma);
            }
  
  somaImpares();
  
  /*
  soma=é inicializada com 0, que será usada para armazenar a soma dos números ímpares.
  i=é inicializada com 1, que será usada como contador.
  while=é usado para iterar de 1 até o número digitado pelo usuário
  if= é usado para verificar se o número atual é ímpar (ou seja, se o resto da divisão por 2 é diferente de 0)
  Se o número for ímpar, ele é adicionado à soma.
  */