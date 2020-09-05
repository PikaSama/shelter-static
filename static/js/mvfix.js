/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Fix comment system's view-index in theme Inside.
 */
setTimeout(function (){
    // 评论区位置
    const mvfix = $("[class='φbz φy']");
    // 设置显示层级
    mvfix.attr("style","z-index:0;");
},1000);