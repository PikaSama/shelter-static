/*
Author: Zorin
Github: https://github.com/PikaSama
License: GPL-3.0 License
Description: 代码参考于：https://wardzhou.art
 */
(async()=>{
    await delay(500);
    const path = window.location.pathname.substr(0, 6);
    if (path != "/posts") {
        $("body").append('<script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>');
    }
})();