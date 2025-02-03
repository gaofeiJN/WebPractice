const input = document.getElementById("file");
const output = document.getElementById("output");

input.addEventListener("change", (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    let time = new Date(file.lastModified);
    console.log(time.toLocaleString());

    // 图片
    if (/image/.test(file.type)) {
        let url=URL.createObjectURL(file);
        console.log(url);
        output.innerHTML = `<img src="${url}">`;
    }

    // 文本
    if (/text/.test(file.type)) {
        let promise = file.text();
        promise.then((res) => {
            console.log(res);
            let text = res.replace(/\u000a/g, '<br>');
            console.log(text);
            output.innerHTML = `${text}`;
        });
    }
});