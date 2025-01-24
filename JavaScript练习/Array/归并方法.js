let arr1 = [1, 2, 3, 4, 5];

// reduce(     callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, start?:number): T
// reduceRight
let sum = arr1.reduce(double, 0);
console.log(sum);

function sumFun(prev, curr, currIndex, array) {
    return prev + curr;
}

function double(prev, curr, currIndex, array) {
    return prev + curr * 2;
}

