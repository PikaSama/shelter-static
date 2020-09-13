(async()=>{
    // 延迟执行函数
    const delay = (ms,func) => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (typeof func == "function"){
                    func();
                }
                resolve();
            },ms);
        });
    }
    await delay(600);
    const path = window.location.pathname.substr(0,6);
    if (path != "/posts"){
        $("body").append('<script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>');
    }
})();