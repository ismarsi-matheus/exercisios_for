numero = parseInt(prompt("Digite um número: "));

a = 0;
b = 1;
sequencia = [a, b];

while (b <= numero) {
  temp = a + b;
  a = b;
  b = temp;
  sequencia.push(b);
}

alert("A sequência de Fibonacci até " + numero + " é: " + sequencia.join(", "));