// elements
const createDB = document.getElementById("create");
const cursorDB = document.getElementById("cursor");

const userNo = document.getElementById("in0");
const userName = document.getElementById("in1");
const userAge = document.getElementById("in2");
const userCity = document.getElementById("in3");

const addRecord = document.getElementById("add");
const delRecord = document.getElementById("del");
const putRecord = document.getElementById("put");
const getRecord = document.getElementById("get");
const idxRecord = document.getElementById("idx");

// global
let req;
let db;
let os;
let trans;
let idx;
let cur;

// 新建数据库 | 打开数据库
createDB.onclick = function () {
    //
    req = indexedDB.open("medb");

    req.onerror = function (event) {
        console.log("---数据库打开失败----------");
    }

    req.onsuccess = function (event) {
        console.log("---数据库打开成功----------");
        db = event.target.result;
    }

    req.onupgradeneeded = function (event) {
        console.log("---数据库新建成功，需要更新版本----------");
        db = event.target.result;

        // 在DB上新建ObjectStore
        os = db.createObjectStore("megang", {keyPath: "userNo"});

        // 在ObjectStorage上新建Index
        os.createIndex("userName", "userName", {unique: false});
    }
}

// 添加记录
addRecord.onclick = function () {
    // 准备数据
    let userObj = {
        userNo: userNo.value,
        userName: userName.value,
        userAge: userAge.value,
        userCity: userCity.value,
    }

    // 新建事务
    trans = db.transaction("megang", "readwrite");

    // 取得事务关联的ObjectStorage
    os = trans.objectStore("megang");

    // 添加记录
    req = os.add(userObj);
    req.onerror = function (event) {
        console.log("---添加数据失败----------");
    }
    req.onsuccess = function (event) {
        console.log("---添加数据成功----------");
        console.log(`数据：${userObj}`);
    }

    // reset
    userNo.value = "";
    userName.value = "";
    userAge.value = "";
    userCity.value = "";
}

// 删除记录
delRecord.onclick = function () {
    // 取得key
    let key = userNo.value;

    // 新建事务
    trans = db.transaction("megang", "readwrite");

    // 取得事务关联的ObjectStorage
    os = trans.objectStore("megang");

    // 删除记录
    req = os.delete(key);
    req.onerror = function (event) {
        console.log("---删除数据失败----------");
    }
    req.onsuccess = function (event) {
        console.log("---删除数据成功----------");
        console.log(`数据key：${key}`);
    }

    // reset
    userNo.value = "";
    userName.value = "";
    userAge.value = "";
    userCity.value = "";
}

// 更新记录
putRecord.onclick = function () {
    // 准备数据
    let userObj = {
        userNo: userNo.value,
        userName: userName.value,
        userAge: userAge.value,
        userCity: userCity.value,
    }

    // 新建事务
    trans = db.transaction("megang", "readwrite");

    // 取得事务关联的ObjectStorage
    os = trans.objectStore("megang");

    // 更新记录
    req = os.put(userObj);
    req.onerror = function (event) {
        console.log("---更新数据失败----------");
    }
    req.onsuccess = function (event) {
        console.log("---更新数据成功----------");
        console.log(`数据：${userObj}`);
    }

    // reset
    userNo.value = "";
    userName.value = "";
    userAge.value = "";
    userCity.value = "";
}

// 查询记录
getRecord.onclick = function () {
    // 取得key
    let key = userNo.value;
    console.log(key);

    // 新建事务
    trans = db.transaction("megang", "readwrite");

    // 取得事务关联的ObjectStorage
    os = trans.objectStore("megang");

    // 查询记录
    req = os.get(key);
    req.onerror = function (event) {
        console.log("---查询数据失败----------");
    }
    req.onsuccess = function (event) {
        console.log("---查询数据成功----------");

        // 判断返回的记录是否为null
        // if (event.target.value) {
        console.log(`数据：{ ${event.target.result.userNo}, ${event.target.result.userName}, ${event.target.result.userAge}, ${event.target.result.userCity}}`);
        // } else {
        //     console.log(`数据：${event.target.value}`);
        // }
    }

    // reset
    userNo.value = "";
    userName.value = "";
    userAge.value = "";
    userCity.value = "";
}

// 根据index查询
idxRecord.onclick = function () {
    // 取得index
    let name = userName.value;

    // 新建事务
    trans = db.transaction("megang", "readwrite");

    // 取得事务关联的ObjectStorage
    os = trans.objectStore("megang");

    // 取得ObjectStorage的index
    idx = os.index("userName");

    // 查询记录
    req = idx.get(name);
    req.onerror = function (event) {
        console.log("---index查询数据失败----------");
    }
    req.onsuccess = function (event) {
        console.log("---index查询数据成功----------");

        // 判断返回的记录是否为null
        if (event.target.result) {
            console.log(`数据：{ ${event.target.result.userNo}, ${event.target.result.userName}, ${event.target.result.userAge}, ${event.target.result.userCity}}`);
        } else {
            console.log(`数据：${event.target.result}`);
        }
    }

    // reset
    userNo.value = "";
    userName.value = "";
    userAge.value = "";
    userCity.value = "";
}

// 使用游标遍历ObjectStore
cursorDB.onclick = function () {
    // 新建事务
    trans = db.transaction("megang", "readonly");
    // ObjectStore
    os = trans.objectStore("megang");
    // 打开游标
    req = os.openCursor();
    req.onerror = function (event) {
        console.log("---打开游标失败----------");
    }
    req.onsuccess = function (event) {
        console.log("---打开游标成功----------");

        cur = event.target.result;
        if (cur) {
            console.log(`数据：{ ${cur.value.userNo}, ${cur.value.userName}, ${cur.value.userAge}, ${cur.value.userCity}}`);
            cur.continue();
        } else {
            console.log("---数据读取完毕----------");
        }
    }
}
IDBCursor