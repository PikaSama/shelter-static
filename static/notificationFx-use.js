setTimeout(function (){
    // 静态资源版本
    var ver = "1.3.12";
    // 插入css
    $("head").append('<link id="thumbslider" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-other.css" rel="stylesheet">');
    // create the notification
    var notification = new NotificationFx({
    // element to which the notification will be appended
    // defaults to the document.body
    wrapper : document.body,
    // the message
    message : '<div class="ns-thumb"><img height="72px" width="72px" src="https://cdn.jsdelivr.net/gh/PikaSama/shelter-images@1.3.4/images/icon.png"/></div><div style="width:280px;" class="ns-content"><p>第一次访问博客？来看看<a style="color:#1eb4f0;" href="https://shelter.beaa.cn/help">使用教程</a>&nbsp;叭~<br />移动端请点击右下角的圆点打开侧边栏“<span class="φbk icon-sidebar"></span>”<br />(浏览后即可永久关闭此通知)</p></div>',
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
    setTimeout(function (){
        // 修改通知长度
        $(".ns-box.ns-other.ns-effect-thumbslider.ns-type-error .ns-box-inner").attr("style","width:340px;");
    },1000);
},2000);