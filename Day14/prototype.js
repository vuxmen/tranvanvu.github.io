// Viết Function constructor Customer, có các thông tin:
// - Name
// - Year
// - IsStatus

// Viết method tính tuổi của Customer sử dụng prototype (Tuổi tính từ Year => 2020)

// Khởi tạo 5 object từ Function constructor Customer
// - Sắp xếp user theo Name
// - Lấy customer có isStatus = true và tuổi > 25

function Customer(_name, _year, _isStatus) {
	this.name = _name;
	this.year = _year;
	this.isStatus = _isStatus;
}

Customer.prototype.findAge = function() {
	let age = 2020 - this.year;
	return age;
}

let obj1 = new Customer('vuxmen', 1991, true);
let obj2 = new Customer('superman', 100, false);
let obj3 = new Customer('diablo', 2000, true);
let obj4 = new Customer('doom', 200, true);
let obj5 = new Customer('axe', 1992, true);

console.log(obj1);

let arr = [obj1, obj2, obj3, obj4, obj5];
let arr2 = Object.assign([], arr);
arr2.sort((a,b) => a.name.localeCompare(b.name));
console.log(arr2);
let newarr = [];
arr.forEach(element => {
	if (element.isStatus === true && element.findAge() > 25) {
		newarr.push(element);
	}
}); 
console.log(newarr);

Customer.prototype.type;

obj1.type = 1;
obj2.type = 2;
obj3.type = 3;
obj4.type = 2;
obj5.type = 1;

console.log(obj2.type);
console.log(obj2);

Customer.prototype.salary = function() {
	let hs;
	if (this.type == 1) {
		hs = 10;
	} else if (this.type == 2) {
		hs = 8;
	} else if (this.type == 3) {
		hs = 6;
	}
	return hs * 12000000;
}

console.log(obj2.salary());















