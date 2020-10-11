/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Personal scripts loader.
 */
$(()=>{
   function loadFiles(){
      $("body").append('<script src="https://zorin.beaa.cn/test/ntfSystem.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/cfg-Loader.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/sidebar.min.js"></script>');
      $("body").append('<script src="https://zorin.beaa.cn/test/clipboard-use.js"></script>');
   }
   localStorage.setItem("cachedTheme","0");
   $.getScript("https://zorin.beaa.cn/test/customFuncs.js",()=>{loadFiles()});
});
