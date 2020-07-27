//根据主题Ayer修改
//0.1秒后加载
setTimeout(function(){
    //将class=φbm φv的元素赋值到canvasplace
    var canvasplace = $("[class='φbm φv']");
    //插入canvas元素在前
    canvasplace.prepend('<canvas class="fireworks"></canvas><style>.fireworks{position:fixed;left:0;top:0;z-index:99999;pointer-events:none}</style>');
    //引入js在后
    canvasplace.append('<script src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@1.2.9/static/clickBoom1.js"></script>');
},100);