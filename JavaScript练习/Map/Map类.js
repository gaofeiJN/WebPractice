// 构造函数，原型，实例
let map = new Map();
map.set('gao fei', 37);

console.log(Map);
console.log(Map.prototype);
console.log(map);

// 构造函数的参数
// no parms | entries?:[k,v][] | iterable?:<[k,v]>
let arr1 = [['gaofei', 37], ['wangjinfei', 36], ['taotao', 0.4]];
let map1 = new Map(arr1);
console.log(map1);      // Map(3) {'gaofei' => 37, 'wangjinfei' => 36, 'taotao' => 0.4}
let arr2 = [1, 2, 3, 4, 5, 6];
let map2 = new Map(arr2.entries());
console.log(map2);      // Map(6) {0 => 1, 1 => 2, 2 => 3, 3 => 4, 4 => 5, …}

// 添加键值对 | 更改键值对中的值
console.log('---添加键值对 | 更改键值对中的值---------------');
map.set('wang jinfei',36);
map.set('city','jinan');
console.log(map);
map.set('city','beijing');
console.log(map);

// size,has()
console.log('---size | has() ---------------');
console.log(map.size);
console.log(map.has('city'));

// 删除键值对
console.log('---删除键值对---------------');
map.delete('city');
console.log(map);
map.clear();
console.log(map);

// set()方法可以链式调用
map.set('city','beijing').set('job','se').set('hello','hello world');
console.log(map);

// 迭代方法 keys(),values(),entries()
//        forEach()
console.log('---迭代---------------');
for (let [key,value] of map.entries()) {
    console.log('entry : ' + key + ' | ' + value + ';');
}

map.forEach((value,key,map) => {
    console.log(`${key}: ${value}`);
})