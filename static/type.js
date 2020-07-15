//脚本来源: https://wardzhou.art
//window.onload = function ()  
setTimeout(function (){
    var $typeContent = $("[class='φee']");
    $typeContent.append('<span id="typedtext"></span>');
    $typeContent.attr("style","height:3rem; display:block; font-size: 110%;");
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