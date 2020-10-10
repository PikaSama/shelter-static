/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: An extension of ntfSystem.js.
 */
(async () => {
    await delay(1000);
    // 新人标识
    let neo = localStorage.getItem("newbie");
    // 页面路径
    const locate = window.location.pathname;
    // 插入css的地方
    const cssPlace = $("head");
    const thumbslider = ".ns-box.ns-other.ns-effect-thumbslider.ns-type-error";
    // 静态资源文件版本
    const ver = "1.3.12";
    // 初始配置参数
    let autoNight = "0";
    let defaultTheme = "0";
    let defaultWidget = "0";
    let sidebarBackground = "0";
    let clickEffect = "0";
    let live2d = "1";
    let wordcountMode = "0";
    let bqb = "https://cdn.jsdelivr.net/npm/alus@latest\nhttps://cdn.jsdelivr.net/gh/MiniValine/Bilibilis@latest\nhttps://cdn.jsdelivr.net/gh/MiniValine/twemoji@latest\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/bilibiliHotKey\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-Daily\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-NEWYEAR-2019\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-AIChan\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/Coolapk";
    let dynamicText = "0";
    async function checkedNtf() {
        // 判断新人通知显示状态
        if (document.querySelector(thumbslider + ".ns-show") != null) {
            $(thumbslider).attr("id","canceled");
            await delay(500);
            $(thumbslider).remove();
            $("link#thumbslider").remove();
            await checkedNotification(cssPlace,ver);
        }
        else {
            $(thumbslider).remove();
            $("link#thumbslider").remove();
            await checkedNotification(cssPlace,ver);
        }
    }
    // 在help页面，是新人
    if (neo == null && locate == "/help") {
        $('<div class="button-save"><span>已阅<i class="ri-checkbox-circle-line"></i></span></div>').insertAfter(".φbk.φh.φz p:last");
        $(".button-save").click(async ()=>{
            $(".button-save").attr("class","button-save-disabled");
            localStorage.setItem("newbie","0");
            localStorage.setItem("auto_night",autoNight);
            localStorage.setItem("default_theme",defaultTheme);
            localStorage.setItem("default_theme_widget",defaultWidget);
            localStorage.setItem("sidebar_widget_background",sidebarBackground);
            localStorage.setItem("click_effect",clickEffect);
            localStorage.setItem("live2d",live2d);
            localStorage.setItem("wordcount_mode",wordcountMode);
            localStorage.setItem("bqb_url",bqb);
            localStorage.setItem("dynamic_text",dynamicText);
            await delay(600,checkedNtf);
        });
    }
})();
