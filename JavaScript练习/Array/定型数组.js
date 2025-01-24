// ArrayBuffer
let buf = new ArrayBuffer(1024);
console.log(buf);
console.log(buf.byteLength);

// DataView
console.log('---DataView--------------');
let dv=new DataView(buf,0,64);
console.log(dv.buffer);
console.log(dv.byteOffset);
console.log(dv.byteLength);
console.log(dv);

// ElementType
dv.setUint8(0,255);
dv.setInt8(1,126);
dv.setInt32(2,123456);
dv.setFloat64(6,125.3214);

console.log(dv.getInt8(0));
console.log(dv.getUint8(1));
console.log(dv.getUint32(2));
console.log(dv.getFloat64(6));

// 定型数组
console.log('---Int32Array--------------');
let arr32 = new Int32Array(buf,64,64);
console.log(arr32.buffer);
console.log(arr32.byteOffset);
console.log(arr32.byteLength);

let values=[1,2,3,4,5];
arr32.set(values,0);
arr32.set([10123],5);
for (let value of arr32.values()){
    console.log(value.toString());
}
