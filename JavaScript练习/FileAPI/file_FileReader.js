const input = document.getElementById("file");
const progress=document.getElementById("progress");
const output = document.getElementById("output");


input.addEventListener("change", (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    let time=new Date(file.lastModified);
    console.log(time.toLocaleString());

    // FileReader
    const reader = new FileReader();
    console.log(reader);
    reader.onloadstart = () => {
        console.log('开始读取文件!');
    }
    reader.onprogress = (e) => {
        if (e.lengthComputable) {
            progress.innerHTML = `进度 ： ${Math.round((e.loaded / e.total) * 100)} %`;
        }
    }
    reader.onerror = (e) => {
        output.innerHTML = `读取文件失败，errcode ： ${e.target.error}`;
    }
    reader.onload = (e) => {
        // 图片
        if (/image/.test(file.type)) {
            output.innerHTML = `<image src="${e.target.result}">`;
        }

        // 文本
        if (/text/.test(file.type)) {
            console.log(e.target.result);
            // 将换行符转为标签<br>
            let text=e.target.result.replace(/\u000d\u000a/g, '<br>');
            console.log(text);
            output.innerHTML = `${text}`;
        }
    }
    reader.onloadend = () => {
        console.log('文件读取结束!');
    }

    // 图片
    if (/image/.test(file.type)) {
        reader.readAsDataURL(file);
    }

    // 文本
    if (/text/.test(file.type)) {
        reader.readAsText(file);
    }
});