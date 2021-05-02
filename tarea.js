const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question("Ingresa un numero: ", numero => {
    console.log("F("+numero+") = "+fibonacci(numero))
    readline.close()
  })

function fibonacci(numero)
    {
        var numeros=[0,1];
        for (var i = 2; i < numero; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }

        return (numeros[numero-1]+numeros[numero-2]);
    }
