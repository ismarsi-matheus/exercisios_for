soma = 0 

for(cont = 1; cont <= 100; cont++){ 
    resultado = soma += cont 
}
console.log ('o resultado da soma de 1 a 100 é:'+ resultado)


//variavel criada para guardar numero 
/*resultado = soma += cont: esta linha é executada em cada iteração do loop.
soma += cont: soma o valor atual de cont à variável soma. Por exemplo, na primeira iteração, soma é 0 e cont é 1, então soma se torna 1. Na segunda iteração, soma é 1 e cont é 2, então soma se torna 3, e assim por diante.
resultado = soma: atribui o valor atual de soma à variável resultado.*/

