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
            else {
                console.log("no");
            }
            resolve();
        },ms);
    });
}
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
/* Same
    a().then(console.log,console.error);
 */
//a().then(console.log).catch(console.error);

/*
let texts = "";
const yiyan = () => {
    fetch('https://v1.hitokoto.cn?c=i')
        .then(response => response.json())
        .then(data => {
            texts = texts + data.hitokoto.substr(0,data.hitokoto.length - 1) + "/";
            texts = texts.replace(/，/g,"，^200");
            texts = texts.replace(/。/g,"。^200");
            texts = texts.replace(/？/g,"？^200");
            console.log(texts);
        })
        .catch(console.error);
}
yiyan();
let f = async () => {
    for (let i = 0;i < 5;i++){
        yiyan();
    }
    await sleep(500);
    texts = texts.split("/");
    texts.length = 5;
    console.log(texts);
}
 */