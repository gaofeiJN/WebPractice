let arr1=[1,3,5,7,"5"];

// find<S>(     predicate: (value: T, index: number, obj: T[]) => boolean,     thisArg?: any, ): S | undefined
// findIndex
console.log(arr1.find((elem, index, array) => {
    return elem == 5;
}));
console.log(arr1.findIndex((elem, index, array) => {
    return elem == 5;
}));
console.log(arr1.findLast((elem, index, array) => {
    return elem == 5;
}));
console.log(arr1.findLastIndex((elem, index, array) => {
    return elem == 5;
}));
