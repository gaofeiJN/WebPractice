let req;
let db;
let os;
let trans;
let idx1;
let idx2;

// IDBFactory: open() 方法发送一个链接指定DB的请求，参数为DBname和DBversion
// 如果DB不存在，则会新建DB；新DB的版本号为1，并触发upgradeneeded事件
// 如果DB已存在，则会打开DB；如果DB当前版本小于DBversion，则触发upgradeneeded事件；如果DB当前版本大于DBversion？？
// 立即返回一个IDBOpenDBRequest对象；
// 打开操作在异步完成，success事件，error事件，upgradeneeded事件,onblocked事件；
console.log(indexedDB);
req = indexedDB.open("person");

// 事件处理程序
// 新建数据库的场合，在执行完upgradeneeded事件处理程序后触发success事件
req.onsuccess = function (event) {
    console.log("---打开DB成功: ----------");
    console.log(event.target.result);
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

    // 新建DB时的操作
    // 取得新建的DB
    db = event.target.result;

    // 为新建DB创建ObjectStorage
    // The IDBDatabase.createObjectStore() method creates and returns a new IDBObjectStore
    // createObjectStore(name, options)
    if (!db.objectStoreNames.contains("person")) {
        // os = db.createObjectStore("person", { keyPath: "id" });
        os = db.createObjectStore("person", { autoIncrement: true });
        console.log(os);
    }

    // 为新建的ObjectStore创建索引
    // IDBObjectStore.createIndex(name: string, keyPath: string | Iterable<string>, options?: IDBIndexParameters): IDBIndex
    // 主键会默认创建索引；
    // 可以创建主键以外的索引
    idx1 = os.createIndex("name", "name", { unique: false });
    idx2 = os.createIndex("email", "email", { unique: true });
    console.log(idx1);

    // 为新建的ObjectStorage插入数据
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)

    // upgradeneeded事件处理程序本身就在【version change transaction】中，不需要创建新的transaction
    // 创建objectStorage时，会将它的transaction属性赋值为当前的transaction
    // Uncaught DOMException: Failed to execute 'transaction' on 'IDBDatabase': A version change transaction is running.
    // let transaction = db.transaction(["person"], "readwrite");
    // let os2 = transaction.objectStore("person");

    add("张三", 24, "zhangsan@163.com");    // 数据：{ 张三, 24, zhangsan@163.com }
    add("李四", 21, "lisi@163.com");        // 数据：{ 李四, 21, lisi@163.com }
    add("王五", 22, "wangwu@163.com");      // 数据：{ 王五, 22, wangwu@163.com }
    add("高菲", 38, "gaofei@163.com");      // 数据：{ 高菲, 38, gaofei@163.com }

}

// 插入数据
function add(name, age, email) {
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)
    // transaction = db.transaction("person", "readwrite");
    // os = transaction.objectStore("person");

    // let obj = { name, age, email };
    req = os.add({ "name": name, "age": age, "email": email });

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
    transaction = db.transaction("person", "readwrite");
    console.log(transaction);
    os = transaction.objectStore("person");

    req = os.get(key);

    // 如果要读取的key值不存在，也会触发success事件，此时event.target.result的值为undefined！！
    req.onsuccess = (event) => {
        console.log("---数据读取成功----------");
        console.log(`数据：{ ${event.target.result.name},${event.target.result.age},${event.target.result.email} }`);
    }

    req.onerror = (event) => {
        console.log("---数据读取失败----------");
    }
}

// 遍历数据
// 通过游标遍历数据
// The IDBObjectStore.openCursor() method returns an IDBRequest object, and, in a separate thread, returns a new IDBCursorWithValue object. 
// Used for iterating through an object store with a cursor.
// openCursor([query][, direction])
function iterate() {
    // 需要通过事务完成
    // The IDBDatabase.transaction() method immediately returns a IDBTransaction object containing the IDBTransaction.objectStore method, 
    // which you can use to access your object store.
    // transaction(storeNames[, mode][, options])
    // objectStore(name)
    transaction = db.transaction("person", "readwrite");
    os = transaction.objectStore("person");

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
    transaction = db.transaction("person", "readwrite");
    os = transaction.objectStore("person");

    req = os.put({ name, age, email }, key);

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
    transaction = db.transaction("person", "readwrite");
    os = transaction.objectStore("person");

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
    transaction = db.transaction("person", "readwrite");
    os = transaction.objectStore("person");

    let index = os.index("name");
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
    // upgradeneeded事件处理程序本身就在【version change transaction】中，不需要创建新的transaction
    // Uncaught DOMException: Failed to execute 'transaction' on 'IDBDatabase': A version change transaction is running.
    let transaction = db.transaction(["person"], "readwrite");
    os = transaction.objectStore("person");

    add("王金飞", 18, "wangjinfei@163.com");    // 数据：{ 张三, 24, zhangsan@163.com }
    add("高钰城", 0.5, "taotao@163.com");        // 数据：{ 李四, 21, lisi@163.com }
}

btnget.onclick = function () {
    // get(0);      // undefined : autoIncrement的key是从1开始的
    get(1);         // 数据：{ 张三,24,zhangsan@163.com }
    get(2);         // 数据：{ 李四, 21, lisi@163.com }
    get(3);         // 数据：{ 王五, 22, wangwu@163.com }
    get(4);         // 数据：{ 高菲, 38, gaofei@163.com }
    get(5);         // 数据：{ 王五, 22, wangwu@163.com }
    get(6);         // 数据：{ 高菲, 38, gaofei@163.com }
}

btnput.onclick = function () {
    put("高菲", 40, "pashanhua@163.com", 4);
}

btndel.onclick = function () {
    deletev(1);
}

btnidx.onclick = function () {
    getByIndex("张三");
    getByIndex("李四");
    getByIndex("王五");
    getByIndex("高菲");
}

btncur.onclick = function () {
    iterate();
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