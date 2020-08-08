// 根据主题Ayer修改
setTimeout(function (){
    // is-a元素位置，整个页面
    var canvasplace = $("[class='φbm φv']");
    // 插入canvas
    canvasplace.prepend('<canvas width="1777"height="841"style="position: fixed; left: 0px; top: 0px; z-index: 99999; pointer-events: none;"></canvas>');
    // 引入js
    setTimeout(function (){
        canvasplace.append('<script src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@latest/static/clickBoom2.js"></script>');
    },500);
},500);