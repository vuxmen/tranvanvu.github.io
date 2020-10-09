
//Khac nhau giua let va var
console.log('------------------TRUONG HOP LET-----------------');

for (let index = 0; index < 3; index ++) {
	console.log(index);
}
console.log(index);

console.log('-----------------TRUONG HOP VAR------------------');

for (var index = 0; index < 3; index ++) {
	console.log(index);
}
console.log(index);

console.log('----------------------const----------------------');

const num = 12;
//num = 14; =>. error
const arr = [1 ,2 , 3];
arr[0] = 4; 
arr[1] = 5;
arr[2] = 6;
console.log(arr);
console.log('Lưu ý: các biến dạng Reference kiểu như array, object, function thì không thể thay đổi trực tiếp giá trị nhưng có thể thay đổi các giá trị tham chiếu');

console.log('----------------------template string--------------');
function sum(a, b) {
	return a + b;
}
let name = 'nguyen van a';
let sayHello = `Xin chào, tôi tên là: ${name}, tôi có ${sum(12000, 18000)} tiền
còn đây là dấu ngắt dòng`;
console.log(sayHello);
console.log(`Dấu \`\` giúp giữ nguyên định dạng text, cả dấu ngắt dòng`);

console.log('----------Destructoring: hay gán nhanh. Dùng cho array và object-------------');
let array = ['Da Nang', 'Hai Phong', 'Sai Gon'];
let city1 = array[0];
let city2 = array[1];
let city3 = array[2];
console.log(city1);
console.log(city2);
console.log(city3);
let [city4, city5, city6] = array;
console.log(city4);
console.log(city5);
console.log(city6);
array[0] = 'Ha Noi';
console.log(city4);
let [city7, ...city9] = array; //Lấy các phần tử còn lại từ city4, và chỉ đặt ở phần tử cuối, ko đặt đc ở giữa
console.log(city9); //show kết quả

console.log('---------------------------------Swap gía trị------------------------------');
//Array
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);
//Object
let user = {
	name1: 'Nguyen Van B',
	age: 24
}
let sname = user.name;
let age = user.age;
console.log(sname);
console.log(age);
let {name1, age: age1} = user;
console.log(name1);
console.log(age1);

console.log('-----------------------------------Arrow Function-------------------------------');
function hello(xname) {
	return `Xin chào ${xname}`;
}

let hello1 = xname => `Xin chào ${xname}`; //Cu phap viet 1 dong, ket qua khong can return
let hello2 = (name1, name2) => {
	return `${name1} 28 tuoi, ${name2} 29 tuoi`; //Cu phap viet 2 dong tro len, ket qua tra ve phai co return
}
console.log(hello1('Vu'));
console.log(hello2('A', 'B'));

console.log('---------------------------------Chua bai tap-----------------------------------');
console.log('-------------------------Bai tap array chua duoi dang ES6-----------------------');
//Bai 1
 let check = (string1, string2) => string1.includes(string2);
 console.log(check('Nguyen Van C', 'C')); 
//Bai 2
let cutString = string => string.slice(0,8);
console.log(`${cutString('today is Friday')}...`);
//Bai 3
let cappitalize = string => {
	let newarr = string.toLowerCase().split(' ');
	for (let i = 0; i < newarr.length; i ++) {
		newarr[i] = newarr[i].charAt(0).toUpperCase() + newarr[i].slice(1);
	}
	return newarr.join(' ');
}
console.log(cappitalize('chÀo MừNg đến vƠí Reactjs'));
//Bai 4
let multiple = string => {
	let chuoi = '';
	for (var i = 0; i < 10; i ++) {
		chuoi += string;
	}
	return chuoi;
}
console.log(multiple('abc'));
//Bai 5
let multiple2 = string => {
	let chuoi = '';
	for (var i = 0; i < 10; i ++) {
		chuoi += `${string}-`;
	}
	return chuoi.substr(0, chuoi.length - 1);
}
console.log(multiple2('abc'));








