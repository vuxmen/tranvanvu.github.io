// Có 4 kiểu dữ liệu nguyên thuỷ trong JS là: string, number, boolean, null và undefined
let string = 'abc';
let numb = 2;
let smth = null;
let anyth = undefined;
let check = true;

// Các biến này được tạo ra và có values trong bộ nhớ. Khi gán biến cho 1 biến khác, value được copy sang biến đó
 let copystring = string;
 console.log(copystring);
 let copycheck = check;
 console.log(copycheck);

 // Khi thay đổi values thì các biến thay đổi độc lập, không liên quan tới nhau
 copystring = 'def';
 console.log(string);

 // Các kiểu dữ liệu còn lại của JS (array, function, object) là Reference
 // Các Reference không thực sự có Value, là địa chỉ ô nhớ trong bộ nhớ
 let arr =[]; // Tạo 1 mảng trong bộ nhớ, mảng đó là 1 Object nằm đâu đó trong bộ nhớ, còn arr là Reference hay địa chỉ ô nhớ
 let obj = {
 	value: 1,
 	name: 'Nguyen Van A'
 }

 //	Khi thay đổi giá trị của mảng, vị trí, values ô nhớ hay biến arr không đổi, chỉ có mảng (hay Object) là thay đổi
 arr.push(1);
 console.log(arr); 
 obj.name = 'Vu';
 console.log(obj);
 // Khi gám một biến với 1 reference, giá trị đó mới thực sự được copy(đúng hơn là được copy bởi reference)
 let obj2 = obj;
 console.log(obj2);
 //Khi gán lại 1 reference Obj, reference mới sẽ thay thế reference cũ, reference cũ của arr sẽ bị delete theo cơ chế Garbage Collection
 obj = {
 	name: 'tran van vu'
 }
 console.log(obj);















