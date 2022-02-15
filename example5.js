function printUnorderedPairs(arrayA, arrayB){
  for(let i = 0; i < arrayA.length; i++){  // O(n)
    for(let j = 0; j < arrayB.length; j++){ // O(k)
      for(let k = 0; k < 100000; k++){  // O(100000)
        console.log(`${arrayA[i]}, ${arrayB[j]}`); // O(100000)
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?

//la complejidad es de // O(200000 + nk) -> // O(n ^ 2)
