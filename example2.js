function printPairs(array){
  for(let i = 0; i < array.length; i++){   // O(n)
    for(let j = 0; j < array.length; j++){  // O(n)
      console.log(`${array[i]}, ${array[j]}`)  // O(n)
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//la complejidad es de // O(n + n ^ 2) -> // O(n ^ 2)
