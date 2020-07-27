//根据主题Ayer修改
//0.5秒后加载
setTimeout(function(){
    //将class=φbm φv的元素赋值到canvasplace
    var canvasplace = $("[class='φbm φv']");
    //插入canvas元素在前
    canvasplace.prepend('<canvas width="1777"height="841"style="position: fixed; left: 0px; top: 0px; z-index: 99999; pointer-events: none;"></canvas>');
    //引入js在后
    canvasplace.append('<script src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@1.2.9/static/clickBoom2.js"></script>');
},500);