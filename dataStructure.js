// remove even number;
let arr = [1, 3, 4, 6, 7, 8];

let arr1 = arr.filter(i => i%2 ? true : false)
console.log(arr1);


//replace all the vowels;

let str = 'Elie';
upper(str);

function upper(str) {
    let newStr = '';
    for( let i = 0; i < str.length; i++ ) {
        let char = str.charAt(i);
        if( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            newStr = newStr + str.charAt(i).toUpperCase();
        } else {
            newStr = newStr + char
        }
    } 
    console.log(newStr);
}



//find max in arr1
let arr2 = [1, 3, 4, 6, 7, 8, 2, 5]
let max = arr2[0];
// let max = 0
for( let i = 0; i < arr2.length; i++) {
    if(arr2[i] > max) {
        max = arr2[i];
    }
}
console.log(max);