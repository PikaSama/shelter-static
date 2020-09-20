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
    // 最新公告日期
    const ld = "2020.8.3";
    // 插入css的地方
    const cssPlace = $("head");
    // 静态资源文件版本
    const ver = "1.3.12";
    // --- 函数区 ---
    // 检查是否满足显示公告的条件
    const checkAnnounce = async () => {
        // 已读公告日期
        const ad = localStorage.getItem("announcement_date");
        // 新人通知
        const thumbslider = ".ns-box.ns-other.ns-effect-thumbslider.ns-type-error";
        // 无已读公告或已读公告日期与最新公告日期不符，且不是新人
        if ((ad == null || ad != ld) && neo != null) {
            // 判断新人通知是否显示过
            if (document.querySelector(thumbslider) == null) {
                // 没有，直接显示公告
                await announce(cssPlace,ver,locate,ld);
            }
            // 如果新人通知还在显示
            else if (document.querySelector(thumbslider + ".ns-show") != null) {
                // 加上打断属性，使其淡出
                $(thumbslider).attr("id","canceled");
                // 一段时间后删除元素和css
                await delay(500);
                $(thumbslider).remove();
                $("link#thumbslider").remove();
                await announce(cssPlace,ver,locate,ld);
            }
            // 认定新人通知已隐藏
            else {
                // 删掉元素和css
                $(thumbslider).remove();
                $("link#thumbslider").remove();
                await announce(cssPlace,ver,locate,ld);
            }
        }
    }
    // -----------
    // --- 代码区 ---
    // 在help页面，是新人
    if (neo == null && locate == "/help") {
        // 写入新人标识
        localStorage.setItem("newbie", "0");
        // 更新新人标识
        neo = localStorage.getItem("newbie");
        await checkAnnounce();
    }
    // 在help页面，不是新人
    else if (neo != null && locate == "/help") {
        await checkAnnounce();
    }
    // ------------
})();
