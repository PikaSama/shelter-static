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
            if (func != undefined){
                func();
            }
            resolve();
        },ms);
    });
}
async function a(){
	await sleep(5000);
	console.log(3);
}
(async () => {
	await a();
	console.log(2);
})();
