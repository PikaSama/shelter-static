// 根据主题Ayer修改
setTimeout(function (){
    // is-a元素位置，整个页面
    var canvasplace = $("[class='φbm φv']");
    // 插入canvas
    canvasplace.prepend('<canvas class="fireworks"></canvas><style>.fireworks{position:fixed;left:0;top:0;z-index:99999;pointer-events:none}</style>');
    // 引入js
    setTimeout(function (){
        canvasplace.append('<script src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@latest/static/clickBoom1.js"></script>');
    },500);
},500);