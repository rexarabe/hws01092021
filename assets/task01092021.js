/*
* дан массив. проверит: если в нем элемент со значением Z
 */

let arr = [1, 'b', 5, 5, 9, 'c', 4, 'f'];
let flag = false;
let z = 'c';
for (let i = 0; i < arr.length; i++){
    if (arr[i] === z){
        flag = true;
        break;
        //index = i
    }
}
if (flag == true){
    console.log('yes');
} else {
    console.log('no');
}

// создать функцию

function hasElem(arr, elem){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == elem){
            return true;
        }
    }
    return false;
}

console.log(arr, 'c');

// дано число 31. Нам проверить не делиться ли оно ни на одно другое число кроме себя и единицы.
// нам нужно проверить что 31 не делиться на все числа от 2 от 30
// если число не делиться - вывести false a если делиться - true ввести.

let num = 31;
flag=false;
for (let i = 2; i < num; i++){
    if(num % i === 0){
        flag=true;
    }
}

if (flag == true){
    console.log('yes');
}else {
    console.log('no');
}

//дан массив с числами . проверить если в нем два одинакових числа подряд.
// если да - вывести да, если нет - вывести - нет .

flag = false;

//массив arr
//текущий элемент arr[i]
//предыдущий элемент arr[i-1]
//следующий элемент arr[i+1]

/*
* for(let i = 0; i  < arr.length -1; i++){
*   if (arr[i] === arr[i+1]){
* flag = true;
* break;
* }
* }
*
* */

// матрицы
 let matrix = [
     [1,2,3,4],
     [5,6,7,8],
     [1,2,3,4],
     [5,6,7,8]
 ];

 for (let i = 0; i < matrix.length; i++){
     for(let j = 0; j <= i ; j++){
         matrix[i][j] = 0;
     }
 }