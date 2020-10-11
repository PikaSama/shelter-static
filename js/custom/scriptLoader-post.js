/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Personal scripts loader. (for posts)
 */
(()=>{
    let i = setInterval(()=>{
        if(typeof delay != "undefined"){
            clearInterval(i);
            loadFiles();
        }
    },200);
    function loadFiles(){
        $("body").append('<script src="https://zorin.beaa.cn/test/cfg-Counter.min.js"></script>');
    }
})();