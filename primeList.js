function primeList(max) {
  //Variable para almacenar los números primos
  primes = [];

  //Ciclo para recorrer de 2 hasta el número solicitado
  for (let i = 2; i <= max; i++) {
    //Si el residuo del número dado y el la posicion recorrida es 0, continua el recorrido
    if (max % i === 0) continue;
    //Si el residuo es diferente de 0, es considerado primo y se agrega a la lista
    else primes.push(i);
  }

  //Retornamos la lista con números primos
  return primes;
}

console.log(primeList(8));
