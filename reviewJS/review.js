// Bai 1: Cho 1 mảng các object chứa thông tin sinh viên dạng
// { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm tính ra số tuổi
// trung bình của toàn bộ sinh viên.

let students = [
  {
    name: 'Huy',
    gender: 'Male',
    age: 20
  },
  {
    name: 'Huong',
    gender: 'Female',
    age: 18
  },
  {
    name: 'Vu',
    gender: 'Male',
    age: 29
  },
  {
    name: 'HUYNH',
    gender: 'Male',
    age: 20
  },
  {
    name: 'hoang',
    gender: 'Male',
    age: 29
  },
];

function copyStudents() {
  return [...students];
}

console.log(averageAge());

function averageAge() {
  let sum = 0;
  students.forEach(item => sum += item.age);
  return `Tuoi trung binh la: ${sum / students.length}`;
}

// //Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng
//  { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm sắp xếp lại mảng trên
//  theo tuổi học viên từ cao đến thấp.

console.log(sortAge());

function sortAge() {
  let mirror = copyStudents();
  mirror.sort(function(a,b) {
    return (b.age-a.age)
  });
  return mirror;
}

// //Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng
// { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm sắp xếp lại mảng trên
// theo tên học viên (không phân biệt hoa thường).

console.log(sortName());

function sortName() {
  let mirror = copyStudents();
   mirror.sort(function(a,b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() == b.name.toLowerCase()) return 0;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  });
  return mirror;
}

// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng
// { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm lọc ra những sinh viên
// nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.

console.log(beginString());

function beginString() {
  let newStudents = students.filter(item => item.name[0] == 'h' || item.name[0] == 'H');
  return newStudents;
}
