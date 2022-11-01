function compareNumbers(a, b) {
    return a - b;
}

/* Сортування слів */ 
let lettersort = ['Hell', 'Death', 'Help', 'Hello', 'World', 'Anyone', 'Carrot']
lettersort.sort()
console.log(lettersort);
/*-----------------*/



/* Сортування від меншого до більшого */
let NumberSortMinToMax = [16 , 34, 46, 5, 83, 2, 17, 1234, 3, 47 ]
NumberSortMinToMax.sort(compareNumbers)
console.log(NumberSortMinToMax);
/*------------------------------------*/



/* Сортування від більшого до меншого */
let NumberSortMaxToMin = [1, 3, 46, 86, 2, 87, 12, 1234]
NumberSortMaxToMin.reverse(NumberSortMaxToMin.sort(compareNumbers))
console.log(NumberSortMaxToMin);
/*------------------------------------*/
