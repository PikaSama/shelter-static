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
(async () => {
    if (true){
        await sleep(5000,() => {
            console.log(1);
        })
    }
    console.log(2);
})();