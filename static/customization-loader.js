setTimeout(function (){
    // 新人标识
    var newviewer = docCookies.hasItem("newbie");
    // 自定义配置文件标识
    var customStat = docCookies.hasItem("custom");
    // 插入css的地方
    var headInsert = $("head");
    // 插入js的地方
    var bodyInsert = $("body");
    // 调色盘位置
    var palette = document.querySelector("is-palette2");
    // 静态资源版本
    var ver = "1.3.12";
    // 一些需要全局使用的变量，先声明
    var theme;
    var autoNight;
    var time;
    // 监听主题点击事件函数，代码简化效率中等
    function paletteListener (eq,mode){
        if (mode == "day") {
            palette.shadowRoot.querySelectorAll("a")[eq].addEventListener("click", function (){
                docCookies.setItem("night", "0", Infinity, "/", "shelter.beaa.cn", true);
                $(".input-radio-night").attr("class","input-radio");
            });
        }
        else {
            palette.shadowRoot.querySelectorAll("a")[eq].addEventListener("click", function (){
                docCookies.setItem("night", "1", Infinity, "/", "shelter.beaa.cn", true);
                $(".input-radio").attr("class","input-radio-night");
            });
        }
    }
    // 监听调色盘五个主题的点击事件
    paletteListener(0,"day");
    paletteListener(2,"day");
    paletteListener(3,"day");
    paletteListener(4,"day");
    paletteListener(1,"night");
    // 检测UA
    function checkUA (){
        // 移动端，加载移动端专用css
        if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
            // headInsert.append('<link href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/radio-mobile.css" rel="stylesheet" />');
            headInsert.append('<link href="//zorin.beaa.cn/test/radio-mobile.css" rel="stylesheet" />');
        }
        // PC端，加载普通css
        else {
            // headInsert.append('<link href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/radio.css" rel="stylesheet" />');
            headInsert.append('<link href="//zorin.beaa.cn/test/radio.css" rel="stylesheet" />');
        }
    }
    checkUA();
    // 根据配置文件加载内容
    function loadconfig (){
        // 判断是否有配置文件且不是新人
        if (customStat == true && newviewer == true) {
            // 是，调用函数
            nightAtheme();
        }
        // 不是，插入默认的内容
        else {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/clickLove.js"></script>');
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/live2d-widget@latest/autoload.js"></script>');
        }
    }
    loadconfig();
    // 黑暗模式 & 默认主题
    function nightAtheme () {
        // 读取配置
        autoNight = docCookies.getItem("auto_night");
        theme = parseInt(docCookies.getItem("default_theme"));
        // 获取当前时间
        time = new Date().getHours();
        // 如果启用黑暗模式且处于工作时间
        if (autoNight == "1" && (time >= 19 || time <= 5)) {
            // 是，切换黑暗主题
            palette.shadowRoot.querySelectorAll("a")[1].click();
        }
        // 否，切换设置的默认主题
        else {
            palette.shadowRoot.querySelectorAll("a")[theme].click();
        }
        widget();
    }
    // 默认强调色
    function widget (){
        // 读取配置
        var widget = parseInt(docCookies.getItem("default_theme_widget"));
        // 判断是否设置了强调色
        if (widget > 0) {
            // 是，切换强调色
            widget = widget + 4;
            palette.shadowRoot.querySelectorAll("a")[widget].click();
        }
        sideBar();
    }
    // 侧边栏背景
    function sideBar (){
        // 读取配置
        var sidebar = docCookies.getItem("sidebar_widget_background");
        // 如果设置为否
        if (sidebar == "0") {
            // 是，进一步判断是否启用黑暗模式且处于工作时间
            if (autoNight == "1" && (time >= 19 || time <= 5)) {
                // 是，切换黑暗主题
                palette.shadowRoot.querySelectorAll("a")[1].click();
            }
            // 否，再切换至默认主题，覆盖强调色背景
            else {
                palette.shadowRoot.querySelectorAll("a")[theme].click();
            }
        }
        cEffect();
    }
    // 点击特效
    function cEffect (){
        // 读取配置
        var clickeffect = docCookies.getItem("click_effect");
        // 判断选项，加载指定文件
        if (clickeffect == "0") {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/clickLove.js"></script>');
        }
        else if (clickeffect == "1") {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/npm/animejs@latest/anime.min.js"></script>');
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/cb1.js"></script>');
        }
        else if (clickeffect == "2") {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver +'/static/cb2.js"></script>');
        }
        l2d();
    }
    // live2d看板娘
    function l2d (){
        // 读取配置
        var live2d = docCookies.getItem("live2d");
        // 如果启用，加载文件
        if (live2d == "1") {
            bodyInsert.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/live2d-widget@latest/autoload.js"></script>');
        }
    }
},800);