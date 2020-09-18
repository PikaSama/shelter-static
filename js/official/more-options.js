/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: A lightweight more-options button.
 */
setTimeout(() => {
    const more = ".φeo.φbd.φj.φc.φu.φo";
    $('<a class="φeo φbd φj φc φu φo">📥 More</a>').insertAfter(more + ":eq(3)");
    $('<a class="φeo φbd φj φc φu φo" style="display:none;" href="/abyss">🖤 Abyss</a>').insertAfter(more + ":eq(4)");
    $('<a class="φeo φbd φj φc φu φo" style="display:none;" href="/todo">📃 Todo</a>').insertAfter(more + ":eq(5)");
    $('<a class="φeo φbd φj φc φu φo" style="display:none;" href="/search">🔎 Search</a>').insertAfter(more + ":eq(6)");
    $(more + ":eq(4)").click(()=>{
        $(more + ":eq(5)").toggle(300,"linear")
        $(more + ":eq(6)").toggle(300,"linear")
        $(more + ":eq(7)").toggle(300,"linear")
    });
},800);