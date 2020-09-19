(()=>{
    let i = setInterval(()=>{
        if(typeof delay != "undefined"){
            clearInterval(i);
            loadFiles();
        }
    },500);
    function loadFiles(){
        $("body").append('<script src="//zorin.beaa.cn/test/clipboard-use.js"></script>');
        $("body").append('<script src="//zorin.beaa.cn/test/pv-counter-post.js"></script>');
        $("body").append('<script src="//zorin.beaa.cn/test/customization-wordcount.min.js"></script>');
        $("body").append('<script src="//zorin.beaa.cn/test/customization-minivaline.min.js"></script>');
    }
})();