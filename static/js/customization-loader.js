/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Loader of custom config.
 */
window.onload = async () => {
    // 新人标识
    const newviewer = docCookies.hasItem("newbie");
    // 自定义配置文件标识
    const customStat = docCookies.hasItem("custom");
    // 插入css的地方
    const headInsert = $("head");
    // 插入js的地方
    const bodyInsert = $("body");
    // 调色盘位置
    const palette = document.querySelector("is-palette2");
    // 静态资源版本
    const ver = "1.3.12";
    // 默认设置
    let sidebar = "0";
    let theme = 0;
    let autoNight = "0";
    // 声明变量
    let rtheme;
    let ua;
    await sleep(500);
    // --- 函数区 ---
    // 侧边栏背景
    const sideBar = async () => {
        await sleep(50);
        if (sidebar == "0" && ua != "pc") {
            palette.shadowRoot.querySelectorAll("a")[rtheme].click();
        }
    }
    // 监听主题点击事件函数，代码简化效率中等
    const paletteListener = (eq,mode) => {
        if (mode == "day") {
            palette.shadowRoot.querySelectorAll("a")[eq].addEventListener("click", () => {
                docCookies.setItem("night", "0", Infinity, "/", "shelter.beaa.cn", true);
                $(".input-radio-night").attr("class","input-radio");
                $("textarea#mvsys-night").attr("id","mvsys");
                // 回调主题
                rtheme = eq;
            });
        }
        else if (mode == "night") {
            palette.shadowRoot.querySelectorAll("a")[eq].addEventListener("click", () => {
                docCookies.setItem("night", "1", Infinity, "/", "shelter.beaa.cn", true);
                $(".input-radio").attr("class","input-radio-night");
                $("textarea#mvsys").attr("id","mvsys-night");
                // 回调主题
                rtheme = eq;
            });
        }
        else if (mode == "accent") {
            palette.shadowRoot.querySelectorAll("a")[eq].addEventListener("click", () => {
                sideBar();
            });
        }
    }
    const checkUA = () => {
        // 移动端，加载移动端专用css
        if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
            // headInsert.append('<link href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/radio-mobile.css" rel="stylesheet" />');
            headInsert.append('<link href="//zorin.beaa.cn/test/radio-mobile.css" rel="stylesheet" />');
            ua = "non-pc";
        }
        // PC端，加载普通css
        else {
            // headInsert.append('<link href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/radio.css" rel="stylesheet" />');
            headInsert.append('<link href="//zorin.beaa.cn/test/radio.css" rel="stylesheet" />');
            ua = "pc";
        }
    }
    // 黑暗模式 & 默认主题
    const nightMode_And_Theme = () => {
        // 读取配置
        autoNight = docCookies.getItem("auto_night");
        theme = parseInt(docCookies.getItem("default_theme"));
        // 获取当前时间
        let time = new Date().getHours();
        // 如果启用黑暗模式且处于工作时间
        if (autoNight == "1" && (time >= 19 || time <= 5)) {
            // 是，切换黑暗主题
            palette.shadowRoot.querySelectorAll("a")[1].click();
        }
        // 否，切换设置的默认主题
        else {
            palette.shadowRoot.querySelectorAll("a")[theme].click();
        }
    }
    // 默认强调色
    const widget = () => {
        // 读取配置
        let widget = parseInt(docCookies.getItem("default_theme_widget"));
        // 判断是否设置了强调色
        if (widget == 0) {
            palette.shadowRoot.querySelectorAll("a")[10].click();
        }
        else if (widget > 0 && widget < 6) {
            // 是，切换强调色
            widget = widget + 4;
            palette.shadowRoot.querySelectorAll("a")[widget].click();
        }
        else if (widget >= 6) {
            widget = widget + 5;
            palette.shadowRoot.querySelectorAll("a")[widget].click();
        }
    }
    // 点击特效
    const cEffect = () => {
        // 读取配置
        let clickeffect = docCookies.getItem("click_effect");
        // 判断选项，加载指定文件
        if (clickeffect == "0") {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/clickLove.js"></script>');
        }
        else if (clickeffect == "1") {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/npm/animejs@latest/anime.min.js"></script>');
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/cb1.js"></script>');
        }
        // clickeffect == "2"
        else {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/cb2.js"></script>');
        }
    }
    // live2d看板娘
    const l2d = () => {
        // 读取配置
        let live2d = docCookies.getItem("live2d");
        // 如果启用，加载文件
        if (live2d == "1") {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/live2d-widget@latest/autoload.js"></script>');
        }
    }
    const loadRes = async () => {
        nightMode_And_Theme();
        widget();
        cEffect();
        l2d();
    }
    // 根据配置文件加载内容
    const loadconfig = () => {
        // 判断是否有配置文件且不是新人
        if (customStat == true && newviewer == true) {
            // 是，调用函数
            sidebar = docCookies.getItem("sidebar_widget_background");
            loadRes();
        }
        // 不是，插入默认的内容
        else {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/clickLove.js"></script>');
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/live2d-widget@latest/autoload.js"></script>');
        }
    }
    // ----------
    // --- 代码区 ---
    await sleep(500,loadconfig);
    // 监听调色盘主题和强调色的点击事件
    paletteListener(0,"day");
    paletteListener(2,"day");
    paletteListener(3,"day");
    paletteListener(4,"day");
    paletteListener(1,"night");
    paletteListener(5,"accent");
    paletteListener(6,"accent");
    paletteListener(7,"accent");
    paletteListener(8,"accent");
    paletteListener(9,"accent");
    paletteListener(10,"accent");
    paletteListener(11,"accent");
    paletteListener(12,"accent");
    paletteListener(13,"accent");
    paletteListener(14,"accent");
    paletteListener(15,"accent");
    paletteListener(16,"accent");
    paletteListener(17,"accent");
    // 检测ua
    checkUA();
    // --------------
}
