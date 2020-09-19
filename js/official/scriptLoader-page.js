(()=>{
    let i = setInterval(()=>{
        if(typeof delay != "undefined"){
            clearInterval(i);
            loadFiles();
        }
    },300);
    function loadFiles(){
        $("body").append('<script src="https://zorin.beaa.cn/test/customization-minivaline.min.js"></script>');
        $("body").append('<script src="https://zorin.beaa.cn/test/customization-setter.min.js"></script>');
        $("body").append('<script src="https://zorin.beaa.cn/test/notificationFx-cookie-page.min.js"></script>');
    }
})();