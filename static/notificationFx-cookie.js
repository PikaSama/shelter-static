//1秒后加载
setTimeout(function (){
    //获取当前页面路径
    var lc = window.location.pathname;
    //如果是帮助页面(链接直连)，直接赋予“已读”状态至cookie
    if(lc == "/help") {
        docCookies.setItem("newbie", "1", Infinity, "/", "shelter.beaa.cn", true);
    }
    //如果是其他页面，则显示通知
    var ck = docCookies.hasItem("newbie");
    if (ck == false) {
        //4秒后加载
        setTimeout(function (){
            // create the notification
            var notification = new NotificationFx({
            // element to which the notification will be appended
            // defaults to the document.body
            wrapper : document.body,
            // the message
            message : '<div class="ns-thumb"><img height="64px" width="64px" src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@1.3.4/images/icon.png"/></div><div class="ns-content"><p>第一次访问博客？来看看博客的&nbsp;<a style="color:#1eb4f0;" href="https://shelter.beaa.cn/help">使用教程</a>&nbsp;叭~&nbsp;移动端点击右下角的功能菜单可以切换到侧边栏&nbsp;(浏览后即可永久关闭此通知)</p></div>',
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
            ttl : 10000,
            // callbacks
            onClose : function() { return false; },
            onOpen : function() { return false; }
            });
            notification.show();
        },4000);
        //每2秒检测一次页面路径，如果是帮助页面则赋予“已读”状态至cookie
        setInterval(function (){
            lc = window.location.pathname;
            if (lc == "/help") {
                docCookies.setItem("newbie", "1", Infinity, "/", "shelter.beaa.cn", true);
                //清除计时器
                clearInterval(3);
            }
        },2000);
    }
},1000);