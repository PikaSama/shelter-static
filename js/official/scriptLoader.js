$(()=>{
   function loadFiles(){
      $("body").append('<script src="https://zorin.beaa.cn/test/sidebar.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/ntfSystem.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/cfg-Loader.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/more-options.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/clipboard-use.js"></script>');
   }
   $.getScript("https://zorin.beaa.cn/test/customFuncs.js",()=>{loadFiles()});
});
