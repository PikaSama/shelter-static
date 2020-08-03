//1秒后加载
setTimeout(function (){
    //静态资源的版本
    var ver = "1.3.6";
    //插入css的地方
    var cssPlace = $("head");
    //声明页面路径变量
    var lc;
    //声明cookie变量
    var ck;
    //检测cookie(判断是否阅读最新公告)
    var ad = docCookies.getItem("announcement_date");
    //设置公告最新日期
    var ld = "2020.8.3";
    //定义检测帮助页面的函数
    function findHelp (){
        function recycleHelp (){
            lc = window.location.pathname;
            //如果是帮助页面(链接直连)，直接赋予“已读”状态至cookie
            if(lc == "/help") {
                docCookies.setItem("newbie", "0", Infinity, "/", "shelter.beaa.cn", true);
                //cookie更新，重新赋值
                ck = docCookies.hasItem("newbie");
                //间接访问帮助页面，清除计时器
                clearInterval(itv);
                //执行一次checkAnnounce函数，为转正的新人显示公告
                checkAnnounce();
            }
        }
        recycleHelp();
        if (lc != "/help") {
            ck = docCookies.hasItem("newbie");
            checkAnnounce();
        }
    }
    //执行一次findHelp函数，判断首次连接的页面是否为帮助页面，如果是则写入cookie
    findHelp();
    //定义检测是否阅读最新公告的函数
    //公告设置为非萌新可见
    function checkAnnounce (){
        if ((ad == null || ad != ld) && ck == true) {
            //卸载css，删除新人通知
            $(".ns-box.ns-other.ns-effect-thumbslider.ns-type-error").remove();
            $("link#thumbslider").remove();
            //装载css
            cssPlace.append('<link id="slide" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-growl.css" rel="stylesheet">');
            //2秒后加载，持续8秒
            setTimeout(function (){
                // create the notification
                var announcement = new NotificationFx({
                // element to which the notification will be appended
                // defaults to the document.body
                wrapper : document.body,
                // the message
                message : '<p>[公告]叮咚！博客有文章更新啦~<br /><a href="/posts/inside-configuration">[持续更新]Inside主题进阶配置</a><br />快去看看吧~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#cofirmedAnnouncement">确认公告</a></p>',
                // layout type: growl|attached|bar|other
                layout : 'growl',
                // effects for the specified layout:
                // for growl layout: scale|slide|genie|jelly
                // for attached layout: flip|bouncyflip
                // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
                // ...
                effect : 'genie',
                // notice, warning, error, success
                // will add class ns-type-warning, ns-type-error or ns-type-success
                type : 'error',
                // if the user doesn´t close the notification then we remove it 
                // after the following time
                ttl : 8000,
                // callbacks
                onClose : function() { return false; },
                onOpen : function() { return false; }
                });
                announcement.show();
            },2000);
            confirmAnnounce();
        }
    }
    //声明锚点变量
    var maodian;
    //定义锚点检测的函数
    function confirmAnnounce (){
        //每秒检测一次锚点变化
        var itv2 = setInterval(function (){
            maodian = window.location.hash;
            if (maodian == "#cofirmedAnnouncement") {
                //锚点变化，模拟点击事件，写入cookie
                $(".ns-box.ns-growl.ns-effect-slide.ns-type-error.ns-show .ns-close").click();
                docCookies.setItem("announcement_date", ld, Infinity, "/", "shelter.beaa.cn", true);
                //清除计时器
                clearInterval(itv2);
            }
        },1000);
        //10秒后清除计时器
        setTimeout(function (){
            clearInterval(itv2);
        },10000);
    }
    //如果是新人，显示通知
    if (ck == false) {
        cssPlace.append('<link id="thumbslider" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-other.css" rel="stylesheet">');
        //3秒后加载，持续8秒
        setTimeout(function (){
            // create the notification
            var notification = new NotificationFx({
            // element to which the notification will be appended
            // defaults to the document.body
            wrapper : document.body,
            // the message
            message : '<div class="ns-thumb"><img height="72px" width="72px" src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@1.3.4/images/icon.png"/></div><div style="width:300px;" class="ns-content"><p>第一次访问博客？来看看<a style="color:#1eb4f0;" href="https://shelter.beaa.cn/help">使用教程</a>&nbsp;叭~<br />移动端请点击右下角的圆点打开侧边栏“<span class="φbk icon-sidebar"></span>”<br />(浏览后即可永久关闭此通知)</p></div>',
            // layout type: growl|attached|bar|other
            layout : 'other',
            // effects for the specified layout:
            // for growl layout: scale|slide|genie|jelly
            // for attached layout: flip|bouncyflip
            // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
            // ...
            effect : 'thumbslider',
            // notice, warning, error, success
            // will add class ns-type-warning, ns-type-error or ns-type-success
            type : 'error',
            // if the user doesn´t close the notification then we remove it 
            // after the following time
            ttl : 8000,
            // callbacks
            onClose : function() { return false; },
            onOpen : function() { return false; }
            });
            notification.show();
        },3000);
        //每秒执行一次recycleHelp函数，检测一次页面路径，如果是帮助页面则赋予“已读”状态至cookie
        var itv = setInterval(function (){
            recycleHelp();
        },1000);
    }
},1000);