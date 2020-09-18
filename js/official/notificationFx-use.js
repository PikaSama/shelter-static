/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: A pure notification system, just including base features.
 */
(async () => {
    await delay(500);
    // 静态资源版本
    const ver = "1.3.12";
    // 插入css
    $("head").append('<link id="thumbslider" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-other.css" rel="stylesheet">');
    await delay(1000);
    let notification = new NotificationFx({
        wrapper : document.body,
        message : '<div class="ns-thumb"><img height="72px" width="72px" src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@1.3.4/images/icon.png"/></div><div style="width:280px;" class="ns-content"><p>第一次访问博客？来看看<a style="color:#1eb4f0;" href="https://shelter.beaa.cn/help">使用教程</a>&nbsp;叭~<br />移动端请点击右下角的圆点打开侧边栏“<span class="φbg icon-sidebar"></span>”<br />(浏览后即可永久关闭此通知)</p></div>',
        layout : 'other',
        effect : 'thumbslider',
        type : 'error',
        ttl : 10000,
        onClose : function() { return false; },
        onOpen : function() { return false; }
    });
    notification.show();
    await delay(600);
    $(".ns-box.ns-other.ns-effect-thumbslider.ns-type-error .ns-box-inner").attr("style","width:340px;");
})();