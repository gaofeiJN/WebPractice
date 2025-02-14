console.log('---我是worker----------');

self.onmessage = (event) => {
    console.log(event.data);

    // 为工作者线程加载脚本
    // 1.当用{ type:"module" }的方式创建工作者线程时，不可以在工作者线程中导入脚本
    //   Uncaught TypeError: Failed to execute 'importScripts' on 'WorkerGlobalScope':
    //   Module scripts don't support importScripts().
    // 2.要导入的脚本不可以是module模式
    //  Uncaught SyntaxError: Failed to execute 'importScripts' on 'WorkerGlobalScope':
    //  Unexpected token 'export' (at import.js:3:1)
    if (event.data === "import a script") {
        console.log("---加载脚本import： before----------");
        self.importScripts("import.js");
        console.log("---加载脚本import： after----------");
        console.log(name);
        console.log(age);
        console.log(city);
    }
}