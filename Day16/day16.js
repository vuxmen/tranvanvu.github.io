console.log('--------------------DEFAULT PARAMETER------------------');
function sum (a,b) {
	return a + b;
}
function sum2 (a) {
	return a + b;
}
console.log(sum(10, 5))
// console.log(sum2(10));// error notdefined

function repeatStr(string) {
	return string.repeat(5);
}
console.log(repeatStr('heart'));
console.log(typeof repeatStr);

console.log('----------------------REST PARAMETER-------------------');


console.log('-----------------------SPREAD OPERATOR--------------------------');
let max = Math.max(2, 7, 9, -2, 10);
console.log(max);
let maxX = Math.max([2, 7, 8, -2, 10]);
console.log(maxX); //NaN: argument is not array
let maxA = Math.max(...[2, 3, 6, -4, 0]);
// console.log(typeof ...[2,3]); Cant typeof ...
console.log([...[3, 3]]);
console.log(typeof []);
let arr1 = [1, 2, 3];
let arr2 = [0, 2, 4];
let arr = [...arr1, 'im', 788, ...arr2];
console.log(arr);
console.log(typeof arr);
let user = {
	name: 'Vu',
	age: 29
}
let userCopy = {...user};
userCopy.age = 30;

console.log(user);
console.log(userCopy);
console.log('If keys are the same, the last ...object will be overwrite to another');
user2 = {...userCopy, ...user};
console.log(user2);

console.log('------------------------REST PARAMETER-----------------------------');
console.log('... will merge element into array. NOTE: PARAMETER MUST BE IN FINAL OF ARRAY');
function newSum(a, b, c, ...array) {
	let sum = 0;
	array.forEach(each => sum += each);
	return sum;
}
console.log(newSum(1, -2, 3, 4, 5, 7));

console.log('-------------------------MODULe----------------------------------');
console.log('--------------------------IMPORT---------------------------------');





