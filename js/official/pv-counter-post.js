(async()=>{
    await delay(2300);
    $("[src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js']").remove();
    $(".φgj.φr").append('&nbsp;&nbsp;<span id="busuanzi_container_page_pv"><i class="ri-eye-line"></i>&nbsp;<span id="busuanzi_value_page_pv"></span>&nbsp;views</span>');
    await delay(200);
    $("body").append('<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>');
})();