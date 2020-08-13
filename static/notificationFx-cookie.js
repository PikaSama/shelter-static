setTimeout(function (){
    // 新人标识
    var newv = docCookies.hasItem("newbie");
    // 页面路径
    var lc = window.location.pathname;
    // 已读公告日期
    var ad = docCookies.getItem("announcement_date");
    // 最新公告日期
    var ld = "2020.8.3";
    // 静态资源版本
    var ver = "1.3.12";
    // 插入css的地方
    var cssPlace = $("head");
    // 非help页面，如果是新人，显示新人通知
    if (lc != "/help" && newv == false) {
        newbientf();
    }
    // 非help页面，如果不是新人，调用函数
    else if (lc != "/help" && newv == true) {
        checkAnnounce();
    }
    // 新人通知
    function newbientf (){
        cssPlace.append('<link id="thumbslider" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-other.css" rel="stylesheet">');
        setTimeout(function (){
            var notification = new NotificationFx({
                wrapper : document.body,
                message : '<div class="ns-thumb"><img height="72px" width="72px" src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@1.3.4/images/icon.png"/></div><div style="width:280px;" class="ns-content"><p>第一次访问博客？来看看<a style="color:#1eb4f0;" href="https://shelter.beaa.cn/help">使用教程</a>&nbsp;叭~<br />移动端请点击右下角的圆点打开侧边栏“<span class="φbk icon-sidebar"></span>”<br />(浏览后即可永久关闭此通知)</p></div>',
                layout : 'other',
                effect : 'thumbslider',
                type : 'error',
                ttl : 10000,
                onClose : function() { return false; },
                onOpen : function() { return false; }
            });
            notification.show();
            // 修改通知长度
            setTimeout(function (){
                $(".ns-box.ns-other.ns-effect-thumbslider.ns-type-error .ns-box-inner").attr("style","width:340px;");
            },600);
        },2000);
    }
    // 检查是否满足显示公告的条件
    function checkAnnounce (){
        // 无已读公告日期或与最新公告日期不符，且不是新人，显示公告
        if ((ad == null || ad != ld) && newv == true) {
            announce();
        }
    }
    // 公告通知
    function announce (){
        cssPlace.append('<link id="jelly" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-growl.css" rel="stylesheet">');
        setTimeout(function (){
            var announcement = new NotificationFx({
                wrapper : document.body,
                message : '<p>🔔【公告】——2020.8.3<br />叮咚！博客有文章更新啦~<br />更新列表：<br /><a href="/posts/inside-configuration">[持续更新]Inside主题进阶配置</a><br /><br />快去看看吧~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="confirm" href="' + lc + '#cofirmed">确认公告</a></p>',
                layout : 'growl',
                effect : 'jelly',
                type : 'error',
                ttl : 10000,
                onClose : function() { return false; },
                onOpen : function() { return false; }
            });
            announcement.show();
            confirmAnnounce();
        },2000);
    }
    // 确认公告按钮
    function confirmAnnounce (){
        // 监听按钮点击事件
        $("a#confirm").click(function (){
            // 关闭公告通知
            $(".ns-box.ns-growl.ns-effect-jelly.ns-type-error.ns-show .ns-close").click();
            // 写入已读日期
            docCookies.setItem("announcement_date", ld, Infinity, "/", "shelter.beaa.cn", true);
        });
    }
},1000);