/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: 移植于主题Ayer
 */
(async () => {
    await sleep(500);
    // 静态资源版本
    const ver = "1.3.12";
    // is-a元素位置，整个页面
    const canvasplace = $("[class='φbm φv']");
    // 插入canvas
    canvasplace.prepend('<canvas class="fireworks"></canvas><style>.fireworks{position:fixed;left:0;top:0;z-index:99999;pointer-events:none}</style>');
    await sleep(500);
    // 引入js
    canvasplace.append('<script src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/clickBoom1.js"></script>');
})();