/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Personal functions.
 */
function delay(ms,func) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (typeof func == "function"){
                func();
            }
            resolve();
        },ms);
    });
}
function customNtf(options) {
    let myntf = new NotificationFx({
        wrapper: document.body,
        message: options.text,
        layout: options.layout,
        effect: options.effect,
        type: 'error',
        ttl: options.ttl,
        onClose : () => false,
        onOpen : () => false
    });
    myntf.show();
}
// 公告通知
async function announce(css,ver,lc,ld) {
    css.append('<link id="jelly" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-growl.css" rel="stylesheet">');
    await delay(1000);
    customNtf({
        text: '<p>🔔【公告】——2020.8.3<br />叮咚！博客有文章更新啦~<br />更新列表：<br /><a href="/posts/inside-configuration">[持续更新]Inside主题进阶配置</a><br /><br />快去看看吧~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="confirm" href="' + lc + '#cofirmed">确认公告</a></p>',
        layout: 'growl',
        effect: 'jelly',
        ttl: 10000
    });
    confirmAnnounce(ld);
}
// 确认公告按钮
function confirmAnnounce(ld) {
    // 监听按钮点击事件
    $("a#confirm").click(() => {
        // 关闭公告通知
        $(".ns-box.ns-growl.ns-effect-jelly.ns-type-error.ns-show .ns-close").click();
        // 写入已读日期
        localStorage.setItem("announcement_date", ld);
    });
}
async function checkedNotification(css,ver) {
    css.append('<link id="jelly" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/ns-style-growl.css" rel="stylesheet">');
    await delay(1600);
    customNtf({
        text: '<p>🔔【消息】<br />恭喜～你已经正式进入了避难所(Shelter)～<br />页面将在5秒后跳转至首页，请耐心等待～<br />无法跳转？试试&nbsp;&nbsp;<a href="/">手动跳转</a></p>',
        layout: 'growl',
        effect: 'jelly',
        ttl: 5500
    });
    await delay(5000);
    window.location.href="/";
}