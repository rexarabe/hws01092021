let n1 = prompt('Enter the first number');
let n2 = prompt( 'enter the second numbers');

if (typeof n1 !== 'number'){
    throw new TypeError('this is not a number');
}

