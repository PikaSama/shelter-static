setTimeout(function (){
    // 新人标识
    var neo = docCookies.hasItem("newbie");
    // 页面路径
    var locate = window.location.pathname;
    // 最新公告日期
    var ld = "2020.8.3";
    // 在help页面，是新人
    if (neo == false && locate == "/help") {
        // 写入新人标识
        docCookies.setItem("newbie", "0", Infinity, "/", "shelter.beaa.cn", true);
        // 更新新人标识
        neo = docCookies.hasItem("newbie");
        checkAnnounce();
    }
    // 在help页面，不是新人
    else if (neo == true && locate == "/help") {
        checkAnnounce();
    }
    // 检查是否满足显示公告的条件
    function checkAnnounce (){
        // 已读公告日期
        var ad = docCookies.getItem("announcement_date");
        // 新人通知
        var thumbslider = ".ns-box.ns-other.ns-effect-thumbslider.ns-type-error";
        // 无已读公告或已读公告日期与最新公告日期不符，且不是新人
        if ((ad == null || ad != ld) && neo == true) {
            // 如果新人通知还在显示
            if (document.querySelector(thumbslider + ".ns-show") != null) {
                // 加上打断属性，使其淡出
                $(thumbslider).attr("id","canceled");
                // 一段时间后删除元素和css
                setTimeout(function (){
                    $(thumbslider).remove();
                    $("link#thumbslider").remove();
                    announce();
                },500);
            }
            // 如果新人通知已经隐藏
            else if (document.querySelector(thumbslider + ".ns-hide") != null) {
                // 删掉元素和css
                $(thumbslider).remove();
                $("link#thumbslider").remove();
                announce();
            }
            // 如果新人通知不存在
            else if (document.querySelector(thumbslider) == null) {
                announce();
            }
        }
    }
    // 公告通知
    function announce (){
        // 插入css的地方
        var cssPlace = $("head");
        // 静态资源文件版本
        var ver = "1.3.12";
        cssPlace.append('<link id="jelly" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-growl.css" rel="stylesheet">');
        setTimeout(function (){
            var announcement = new NotificationFx({
                wrapper : document.body,
                message : '<p>🔔【公告】——2020.8.3<br />叮咚！博客有文章更新啦~<br />更新列表：<br /><a href="/posts/inside-configuration">[持续更新]Inside主题进阶配置</a><br /><br />快去看看吧~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="confirm" href="' + locate + '#cofirmed">确认公告</a></p>',
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