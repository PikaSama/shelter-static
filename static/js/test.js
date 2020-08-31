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
	console.log(2);
	console.log(2);
	console.log(2);
	console.log(2);
	console.log(2);
	a();
})();
