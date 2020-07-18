//脚本来源: https://wardzhou.art
//1秒后加载
setTimeout(function (){
    //将含有class=φee的元素赋值到typeplace
    var typeplace = $("[class='φee']");
    //插入元素
    typeplace.append('<span id="typedtext"></span>');
    //加入属性至元素中
    typeplace.attr("style","height:3rem; display:block; font-size: 110%;");
    //typed.js配置
    var options = {
        strings: ["人生是逆流，^200也是随波逐流", "神机妙算皆徒劳，^200千般执念终成空","七月初七，^100淮水竹亭，^100鞘笛相偎，^100无怨无悔"],
        startDelay: 0,
        backDelay: 1000,
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
        showCursor: true,
        contentType: 'html',
        smartBackspace: true
    };
    var typed = new Typed("#typedtext", options);
},1000);