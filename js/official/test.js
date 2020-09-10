/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: WTFPL License
 Description: This is a test & demo file. You can do everything to it.
 As the license says: YOU JUST DO WHAT THE FUCK YOU WANT TO.
 */
const sleep = (ms,func) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (typeof func == "function"){
                console.log("yes");
                func();
            }
            resolve();
        },ms);
    });
}
/*
let b = 1;
const a = () => {
    return new Promise((resolve,reject) => {
        if (b == 1){
            resolve("success");
        }
        else {
            reject("failure");
        }
    })
}

async function c(){await sleep(3000,a);}
c();
 Same
    a().then(console.log,console.error);

    a().then(console.log).catch(console.error);
*/
/*
let texts = "";
const yiyan = () => {
    fetch('https://v1.hitokoto.cn?c=i')
        .then(response => response.json())
        .then(data => {
            data.hitokoto = data.hitokoto.substr(0,data.hitokoto.length - 1);
            data.hitokoto = data.hitokoto.replace(/，/g,"，^200");
            data.hitokoto = data.hitokoto.replace(/。/g,"。^200");
            data.hitokoto = data.hitokoto.replace(/？/g,"？^200");
            data.hitokoto = data.hitokoto.replace(/！/g,"！^200");
            data.hitokoto = data.hitokoto.replace(/；/g,"；^200");
            texts = texts + data.hitokoto + "/";
            console.log(texts);
        })
        .catch(console.error);
}
let xunhuan = async () => {
    for (let i = 0;i < 5;i++){
        yiyan();
    }
    await sleep(500);
    texts = texts.split("/").pop();
    console.log(texts);
}
xunhuan();
 */
const a = {
    log: () => {
        console.log("hello");
    },
    llog: () => {
        a.log();
        console.log("world!");
    }
}
a.llog();