$(()=>{
   function loadFiles(){
      $("body").append('<script src="https://zorin.beaa.cn/test/type.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/pv-counter.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/more-options.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/notificationFx-cookie.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/customization-loader.min.js"></script>');
   }
   $.getScript("https://zorin.beaa.cn/test/customFuncs.js",()=>{loadFiles()});
});
