let req;
let db;
let os;
let trans;
let idx1;
let idx2;
let index;

// IDBFactory: open() 方法发送一个链接指定DB的请求，参数为DBname和DBversion
// 如果DB不存在，则会新建DB；新DB的版本号为1，并触发upgradeneeded事件
// 如果DB已存在，则会打开DB；如果DB当前版本小于DBversion，则触发upgradeneeded事件；如果DB当前版本大于DBversion？？
// 立即返回一个IDBOpenDBRequest对象；
// 打开操作在异步完成，success事件，error事件，upgradeneeded事件,onblocked事件；
req = indexedDB.open("person");

// 事件处理程序
// 新建数据库的场合，在执行完upgradeneeded事件处理程序后触发success事件
req.onsuccess = function (event) {
    console.log("---打开DB成功: ----------");
    console.log(event.target.result);

    db = event.target.result;
}

req.onerror = function (event) {
    console.log("---打开DB失败: ----------");
    console.log(event);
}

req.onblocked = function (event) {
    console.log("---打开DB onblocked: ----------");
    console.log(event);
}

req.onupgradeneeded = function (event) {
    console.log("---打开DB成功;需要更新版本----------");
    console.log(event);
    console.log(event.target.result);
}

// 插入数据
function add(name, age, email) {
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)
    trans = db.transaction("person", "readwrite");
    os = trans.objectStore("person");

    let req = os.add({"name": name, "age": age, "email": email});

    req.onsuccess = () => {
        console.log("---数据插入成功----------");
        console.log(`数据：{ ${name}, ${age}, ${email} }`);
    }

    req.onerror = () => {
        console.log("---数据插入失败----------");
        console.log(`数据：{ ${name}, ${age}, ${email} }`);
    }
}

// 读取数据
function get(key) {
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)
    trans = db.transaction("person", "readwrite");
    os = trans.objectStore("person");

    let request = os.get(key);

    // 如果要读取的key值不存在，也会触发success事件，此时event.target.result的值为undefined！！
    request.onsuccess = (event) => {
        console.log("---数据读取成功----------");
        if (event.target.result) {
            console.log(`数据：{ ${event.target.result.name},${event.target.result.age},${event.target.result.email} }`);
        } else {
            console.log(`数据：{ ${event.target.result} }`);
        }

    }

    request.onerror = (event) => {
        console.log("---数据读取失败----------");
    }
}

// 遍历数据
// 通过游标遍历数据
// The IDBObjectStore.openCursor() method returns an IDBRequest object, and, in a separate thread, returns a new IDBCursorWithValue object. 
// Used for iterating through an object store with a cursor.
// openCursor([query][, direction])
function iter() {
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)
    trans = db.transaction("person", "readwrite");
    os = trans.objectStore("person");

    req = os.openCursor();

    req.onerror = (event) => {
        console.log("打开游标失败");
        console.log(event);
    }

    req.onsuccess = (event) => {
        console.log("打开游标成功");
        console.log(event);

        function getAll() {
            let cursor = event.target.result;
            console.log(cursor);

            // 用游标遍历数据
            if (cursor) {
                console.log(cursor.value);
                // The IDBCursor.continue() method advances the cursor to the next position along its direction, 
                // to the item whose key matches the optional key parameter. 
                // If no key is specified, the cursor advances to the immediate next position, based on its direction.
                // ！！！ 调用该方法会执行一个循环 ！！！
                cursor.continue();
            } else {
                console.log("没有更多数据了！");
            }
        }

        getAll();
    }
}

// 更新数据
// The IDBObjectStore.put() method updates a given record in a database, or inserts a new record if the given item does not already exist.
// put(item[, key])
function put(name, age, email, key) {
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)
    trans = db.transaction("person", "readwrite");
    os = trans.objectStore("person");

    req = os.put({name, age, email}, key);

    req.onerror = (event) => {
        console.log("数据更新失败");
        console.log(event);
    }

    req.onsuccess = (event) => {
        console.log("数据更新成功");
        console.log(event);
    }
}


// 删除数据
// The IDBObjectStore.delete() method returns an IDBRequest object, and, in a separate thread, deletes the specified record or records.
// delete(key)
function deletev(key) {
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)
    trans = db.transaction("person", "readwrite");
    os = trans.objectStore("person");

    req = os.delete(key);

    req.onerror = () => {
        console.log("数据删除失败");
        console.log(event);
    }

    req.onsuccess = () => {
        console.log("数据删除成功");
        console.log(event);
    }
}

// 使用索引
// The IDBObjectStore.index() method opens a named index in the current object store, 
// after which it can be used to, for example, return a series of records sorted by that index using a cursor.
// index(name)
function getByIndex(idx) {
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)
    trans = db.transaction("person", "readwrite");
    os = trans.objectStore("person");

    index = os.index("name");
    req = index.get(idx);

    req.onerror = (event) => {
        console.log("索引读取失败");
        console.log(event);
    }

    // 如果要读取的索引值不存在，也会触发success事件，此时event.target.result的值为undefined！！
    req.onsuccess = (event) => {
        console.log("索引读取成功");
        console.log(event);
        console.log(event.target.result);
    }
}


// buttons
const btnadd = document.getElementById("add");
const btnget = document.getElementById("get");
const btnput = document.getElementById("put");
const btndel = document.getElementById("del");
const btnidx = document.getElementById("idx");
const btncur = document.getElementById("cursor");

// event listeners
btnadd.onclick = function () {
    add("孙行者", 501, "sunwukong@163.com");        // 数据：{ 张三, 24, zhangsan@163.com }
    add("猪八戒", 200, "zhubaojie@163.com");        // 数据：{ 李四, 21, lisi@163.com }
}

btnget.onclick = function () {
    get(5);         // 数据：{ 张三,24,zhangsan@163.com }
    get(6);         // 数据：{ 李四, 21, lisi@163.com }
}

btnput.onclick = function () {
    put("孙行者", 515, "bimawen@163.com", 5);
}

btndel.onclick = function () {
    deletev(5);
}

btnidx.onclick = function () {
    getByIndex("孙行者");
    getByIndex("猪八戒");
}

btncur.onclick = function () {
    iter();
    // 打开游标成功
    // Event {isTrusted: true, type: 'success', target: IDBRequest, currentTarget: IDBRequest, eventPhase: 2, …}
    // {name: '李四', age: 21, email: 'lisi@163.com'}
    // 打开游标成功
    // Event {isTrusted: true, type: 'success', target: IDBRequest, currentTarget: IDBRequest, eventPhase: 2, …}
    // {name: '王五', age: 22, email: 'wangwu@163.com'}
    // 打开游标成功
    // Event {isTrusted: true, type: 'success', target: IDBRequest, currentTarget: IDBRequest, eventPhase: 2, …}
    // {name: '高菲', age: 40, email: 'pashanhua@163.com'}
    // 打开游标成功
    // Event {isTrusted: true, type: 'success', target: IDBRequest, currentTarget: IDBRequest, eventPhase: 2, …}
    // {name: '王金飞', age: 18, email: 'wangjinfei@163.com'}
    // 打开游标成功
    // Event {isTrusted: true, type: 'success', target: IDBRequest, currentTarget: IDBRequest, eventPhase: 2, …}
    // {name: '高钰城', age: 0.5, email: 'taotao@163.com'}
    // 打开游标成功
    // {isTrusted: true, type: 'success', target: IDBRequest, currentTarget: IDBRequest, eventPhase: 2, …}
    // 没有更多数据了！
}