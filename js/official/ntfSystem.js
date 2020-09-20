/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Notification system, including notification for newbie and annoucement features.
 */
(async () => {
    await delay(1000);
    // 新人标识
    const newv = localStorage.getItem("newbie");
    // 页面路径
    const lc = window.location.pathname;
    // 已读公告日期
    const ad = localStorage.getItem("announcement_date");
    // 最新公告日期
    const ld = "2020.8.3";
    // 静态资源版本
    const ver = "1.3.12";
    // 插入css的地方
    const cssPlace = $("head");
    // --- 函数区 ---
    // 新人通知
    const newbientf = async () => {
        cssPlace.append('<link id="thumbslider" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-other.css" rel="stylesheet">');
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
        // 修改通知长度
        await delay(600);
        $(".ns-box.ns-other.ns-effect-thumbslider.ns-type-error .ns-box-inner").attr("style","width:340px;");
    }
    // 检查是否满足显示公告的条件
    const checkAnnounce = () => {
        // 无已读公告日期或与最新公告日期不符，且不是新人，显示公告
        if ((ad == null || ad != ld) && newv != null) {
            announce(cssPlace,ver,lc,ld);
        }
    }
    // -----------
    // --- 代码区 ---
    // 非help页面，如果是新人，显示新人通知
    if (lc != "/help" && newv == null) {
        await newbientf();
    }
    // 非help页面，如果不是新人，调用函数
    else if (lc != "/help" && newv != null) {
        checkAnnounce();
    }
    // -------------
})();