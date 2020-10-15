// Cho 2 chuỗi str1 và str2. Khi gặp một kí tự char của str1 thì sẽ thay thế hết tất cả những kí tự char đó trong str1 thành một kí tự mới(các vị trí sau khi thay thế xong sẽ xem như bỏ qua, không thay thế nữa). Cho biết khi thay thế xong sẽ tạo ra một chuỗi str2 thỏa mãn yêu cầu hay không. Khi thay thế thành một kí tự mới thì kí tự mới đó sẽ có thể được sử dụng để thay thế cho một kí tự cũ khác.
// 
// Ví dụ:
// 
//     Với str1 = "aba", str2 = "cdc". Đầu ra compareString(str1,str2) = true.
// 
//     Giải thích: - Thay thế tất cả kí tự a thành c
// 
//                     - Thay thế tất cả kí tự b thành d.

function compareString(str1, str2) {
            var str1s = str1.split("")
            var str2s = str2.split("")
            console.log(str1s);
            console.log(str2s);
            if (str1s.length != str2s.length) return false
            if (str1s.length <= 1) return true
            var arr1 = [];
            var arr2 = [];
            str1s.forEach((m, n) => {
                if (arr1.includes(m) == false) {
                    arr1.push(m);
                    arr2.push(str2s[n])
                }
            })
            console.log(arr1);
            console.log(arr2);
            var trans = [];
            str1s.forEach ((m,n) => {
              console.log(m);
              console.log(arr1.indexOf(m));
                trans.push(arr2[arr1.indexOf(m)])
            })
            console.log(trans);
            return trans.join("")==str2;
        }
console.log(compareString('aba', 'cdc'));