const prime_nums = (num) => {
  prime = true; //1

  const square = Math.floor(Math.sqrt(num));

  for (let i = 2; i < square; i++) {
    //n
    if (num % i === 0) {
      //n
      prime = false; //n
    }
  }

  prime === true ? console.log('es primo') : console.log('no es primo');
  //1

  console.log('Complejidad del algortimo O(3n) --> O(n)'); //1
};

prime_nums(12);
