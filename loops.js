
const fib = (n) => {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    let sum = arr[0] + arr[1];
    // let first = 0 , second = 1, sum = 0;
    // if(n <= 0) return 0;
    

    for(let i = 2; i < n; i ++) {
        arr[i] = arr[i - 1] + arr[i - 2];

        sum = sum + arr[i];
    }

    return sum

}
console.log(fib(5));
