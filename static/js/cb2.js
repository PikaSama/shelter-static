/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: 移植于主题Ayer
 */
window.onload = async () => {
    await sleep(500);
    // 静态资源版本
    const ver = "1.3.12";
    // is-a元素位置，整个页面
    const canvasplace = $("[class='φbm φv']");
    // 插入canvas
    canvasplace.prepend('<canvas width="1777"height="841"style="position: fixed; left: 0px; top: 0px; z-index: 99999; pointer-events: none;"></canvas>');
    await sleep(500);
    // 引入js
    canvasplace.append('<script src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/clickBoom2.js"></script>');
}