(()=>{
    let i = setInterval(()=>{
        if(typeof delay != "undefined"){
            clearInterval(i);
            loadFiles();
        }
    },300);
    function loadFiles(){
        $("body").append('<script src="https://zorin.beaa.cn/test/customization-counter.min.js"></script>');
        $("body").append('<script src="https://zorin.beaa.cn/test/customization-minivaline.min.js"></script>');
    }
})();