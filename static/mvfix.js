//脚本参考于: https://wardzhou.art
//修复Minivaline显示层级
//2秒后加载
setTimeout(function (){
    //将含有class=φbz φy的元素赋值到mvfix
    var mvfix = $("[class='φbz φy']");
    //加入属性至元素中
    mvfix.attr("style","z-index:0;");
},2000);