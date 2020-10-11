/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: A lightweight more-options button.
 */
(async ()=>{
    await delay(800);
    const more = ".φeo.φbd.φj.φc.φu.φo";
    const path = window.location.pathname.slice(0,6);
    let mode = 0;
    if (path != "/posts") {
        $("body").append('<script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>');
    }
    $('<a class="φeo φbd φj φc φu φo">📥 More</a>').insertAfter(more + ":eq(3)");
    $('<a class="φeo φbd φj φc φu φo" style="display:none;" href="/abyss">🖤 Abyss</a>').insertAfter(more + ":eq(4)");
    $('<a class="φeo φbd φj φc φu φo" style="display:none;" href="/todo">📃 Todo</a>').insertAfter(more + ":eq(5)");
    $('<a class="φeo φbd φj φc φu φo" style="display:none;" href="/search">🔎 Search</a>').insertAfter(more + ":eq(6)");
    $(more + ":eq(4)").click(async ()=>{
        if (mode == 0) {
            mode = 1;
            $(more + ":eq(5)").attr("style","opacity:0;");
            $(more + ":eq(6)").attr("style","opacity:0;");
            $(more + ":eq(7)").attr("style","opacity:0;");
            await delay(200);
            $(more + ":eq(5)").attr("style","opacity:1;transition:all 0.5s");
            $(more + ":eq(6)").attr("style","opacity:1;transition:all 0.5s");
            $(more + ":eq(7)").attr("style","opacity:1;transition:all 0.5s");
        }
        else {
            mode = 0;
            $(more + ":eq(5)").attr("style","opacity:0;transition:all 0.5s");
            $(more + ":eq(6)").attr("style","opacity:0;transition:all 0.5s");
            $(more + ":eq(7)").attr("style","opacity:0;transition:all 0.5s");
            await delay(600);
            $(more + ":eq(5)").attr("style","display:none;");
            $(more + ":eq(6)").attr("style","display:none;");
            $(more + ":eq(7)").attr("style","display:none;");
        }
    });
})();