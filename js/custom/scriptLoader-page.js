/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Personal scripts loader. (for pages)
 */
(()=>{
    let i = setInterval(()=>{
        if(typeof delay != "undefined"){
            clearInterval(i);
            loadFiles();
        }
    },200);
    function loadFiles(){
        $("body").append('<script src="https://zorin.beaa.cn/test/cfg-Setter.min.js"></script>');
        $("body").append('<script src="https://zorin.beaa.cn/test/ntfSystem-page.min.js"></script>');
    }
})();