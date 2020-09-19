$(()=>{
   function loadFiles(){
      $("body").append('<script src="https://zorin.beaa.cn/test/sidebar.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/notificationFx-cookie.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/customization-loader.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/more-options.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/clipboard-use.js"></script>');
   }
   $.getScript("https://zorin.beaa.cn/test/customFuncs.js",()=>{loadFiles()});
});
