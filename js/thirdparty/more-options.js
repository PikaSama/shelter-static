/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: A lightweight more-options button.
 */
setTimeout(() => {
    const more = ".φeo.φc.φw.φbd.φl.φr";
    let mode = 0;
    $('<a class="φeo φc φw φbd φl φr">📥 More</a>').insertAfter(more + ":eq(3)");
    $('<a class="φeo φc φw φbd φl φr" style="display:none;" href="/abyss">🖤 Abyss</a>').insertAfter(more + ":eq(4)");
    $('<a class="φeo φc φw φbd φl φr" style="display:none;" href="/todo">📃 Todo</a>').insertAfter(more + ":eq(5)");
    $('<a class="φeo φc φw φbd φl φr" style="display:none;" href="/search">🔎 Search</a>').insertAfter(more + ":eq(6)");
    $(more + ":eq(4)").click(function (){
        if (mode == 0) {
            $(more + ":eq(5)").removeAttr("style");
            $(more + ":eq(6)").removeAttr("style");
            $(more + ":eq(7)").removeAttr("style");
            mode = 1;
        }
        else {
            $(more + ":eq(5)").attr("style","display:none;");
            $(more + ":eq(6)").attr("style","display:none;");
            $(more + ":eq(7)").attr("style","display:none;");
            mode = 0;
        }
    });
},800);