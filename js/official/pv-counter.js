(async()=>{
    await delay(600);
    const path = window.location.pathname.substr(0,6);
    if (path != "/posts"){
        $("body").append('<script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>');
    }
})();