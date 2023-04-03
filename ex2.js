

function verificaFibonacci(numeroVerificado) {
  // Inicializando a sequência de Fibonacci com os valores iniciais
  let fibonacci = [0, 1];

  // Calculando a sequência de Fibonacci até que o último valor seja maior ou igual ao número verificado
  while (fibonacci[fibonacci.length - 1] < numeroVerificado) {
    const ultimoValor = fibonacci[fibonacci.length - 1];
    const penultimoValor = fibonacci[fibonacci.length - 2];
    const novoValor = ultimoValor + penultimoValor;
    fibonacci.push(novoValor);
  }
  
  var campo = document.getElementById("mostrarResultado");

  // Verificando se o número informado pertence à sequência de Fibonacci
  if (fibonacci.includes(numeroVerificado)) {
    campo.innerText = "pertence a sequencia de Fibonacci.";
  } else {
    campo.innerText = "Nao pertence a sequencia de Fibonacci.";
  }

}