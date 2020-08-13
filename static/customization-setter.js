setTimeout(function (){
    // 正文内h2,h3标题
    var h2title = ".φbi.φy.φg h2";
    var h3title = ".φbi.φy.φg h3";
    // 页面路径
    var lct = window.location.pathname;
    // 插入css的地方
    var insertCssPlace = $("head");
    // 静态资源版本
    var staticVer = "1.3.12";
    // 公告
    var jelly = ".ns-box.ns-growl.ns-effect-jelly.ns-type-error";
    // 新人标识
    var newbie = docCookies.hasItem("newbie");
    // 自定义配置文件的标识
    var custom = docCookies.hasItem("custom");
    // 初始配置文件参数
    var autoNight = "0";
    var defaultTheme = "0";
    var defaultWidget = "0";
    var sidebarBackground = "0";
    var clickEffect = "0";
    var live2d = "1";
    var wordcountMode = "0";
    // 检测页面主题是否为黑暗
    var night = docCookies.getItem("night");
    // 如果是设置页面，调用函数
    if (lct == "/settings") {
        setter();
    }
    // 搞不懂为什么jquery选择器加[x]用append()整出来的是纯文本
    // 查了一下，用:eq()选择列表
    // 但append()并不适合我的需求了
    // 适配主题的标题跳转，使用insertAfter()方法
    function setter (){
        $('<p id="loading">读取用户配置文件中...</p>').insertAfter(h2title + ":eq(0)");
        // 如果是新人则不显示
        if(newbie == false) {
            setTimeout(function (){
                $("p#loading").remove();
                $('<p>读取用户配置文件失败：未满足读取条件，需查看<a href="/help">使用教程</a></p>').insertAfter(h2title + ":eq(0)");
            },1000);
        }
        // 如果不是新人但没有配置文件
        else if(custom == false && newbie == true) {
            setTimeout(function (){
                $("p#loading").remove();
                $('<p>用户配置文件为空，已自动创建新配置文件</p><p>如果要修改配置文件，点击保存按钮即可生效</p>').insertAfter(h2title + ":eq(0)");
                // 写入初始配置文件参数，自定义配置文件标识
                cookie("custom","1");
                setCfg();
                // 插入文字和选项
                $('<p>是否自动切换黑暗模式</p><p>注意：若开启此选项，在黑暗模式的工作时间内将会覆盖默认主题，设置为黑暗主题</p><p>黑暗模式时间段：19:00~6:00</p><div class="input-radio"><input id="autonight_1"type="radio"name="autonight"/><label for="autonight_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="autonight_0"type="radio"name="autonight" checked/><label for="autonight_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title + ":eq(0)");
                $('<p>默认的主题样式</p><div class="input-radio"><input id="theme_0"type="radio"name="theme" checked/><label for="theme_0"><span>默认&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_1"type="radio"name="theme"/><label for="theme_1"><span>黑暗&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_2"type="radio"name="theme"/><label for="theme_2"><span>樱花&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_3"type="radio"name="theme"/><label for="theme_3"><span>雨滴&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_4"type="radio"name="theme"/><label for="theme_4"><span>陈年旧书&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title + ":eq(1)");
                $('<p>默认的强调色主题，修改行内代码块，小圆点部件，按钮激活色，滚动条颜色等，可与上面的主题进行搭配</p><p>注意：背景指侧边栏背景，仅适用于移动端，无特别标注的强调色的背景为纯色背景</p><div class="input-radio"><input id="widget_0"type="radio"name="widget" checked/><label for="widget_0"><span>不设置(使用默认主题设置)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_1"type="radio"name="widget"/><label for="widget_1"><span>活力橙(黑眼镜橙色底背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_2"type="radio"name="widget"/><label for="widget_2"><span>DDの桃(粉色渐变背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_3"type="radio"name="widget"/><label for="widget_3"><span>夜の海(黑色海洋背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_4"type="radio"name="widget"/><label for="widget_4"><span>基佬紫&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_5"type="radio"name="widget"/><label for="widget_5"><span>夜空蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_6"type="radio"name="widget"/><label for="widget_6"><span>天依蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_7"type="radio"name="widget"/><label for="widget_7"><span>奥托绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_8"type="radio"name="widget"/><label for="widget_8"><span>清新绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_9"type="radio"name="widget"/><label for="widget_9"><span>清新橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_10"type="radio"name="widget"/><label for="widget_10"><span>普通橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_11"type="radio"name="widget"/><label for="widget_11"><span>马鞍棕&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_12"type="radio"name="widget"/><label for="widget_12"><span>酷炫黑&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title + ":eq(2)");
                $('<p>使用强调色时是否更改侧边栏的背景为强调色自带的背景</p><p>注意：此选项仅针对移动端，PC端设置此选项无效</p><div class="input-radio"><input id="sidebar_1" type="radio" name="sidebar" /><label for="sidebar_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="sidebar_0" type="radio" name="sidebar" checked/><label for="sidebar_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title + ":eq(3)");
                $('<p>默认的点击特效，共三种可选</p><div class="input-radio"><input id="effect_0" type="radio" name="clickeffect" checked/><label for="effect_0"><span>爱心&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_1" type="radio" name="clickeffect" /><label for="effect_1"><span>粒子波动&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_2" type="radio" name="clickeffect" /><label for="effect_2"><span>粒子爆炸&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title + ":eq(2)");
                $('<p>是否启用Live2d看板娘</p><p>呐呐，这么Kawaii的看板娘，你不会关掉的，对吧对吧?</p><div class="input-radio"><input id="live2d_1" type="radio" name="live2d" checked/><label for="live2d_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="live2d_0" type="radio" name="live2d" /><label for="live2d_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title + ":eq(3)");
                $('<p>字数统计的显示样式</p><div class="input-radio"><input id="wordcount_0" type="radio" name="wordcount" checked/><label for="wordcount_0"><span>正文字数和代码字符数独立&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="wordcount_1" type="radio" name="wordcount" /><label for="wordcount_1"><span>正文字数包含代码字符数(会像这样注明包含多少字符数)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title + ":eq(4)");
                darkStyle();
            },1000);
        }
        // 如果不是新人且有配置文件
        else if(custom == true && newbie == true) {
            setTimeout(function (){
                $("p#loading").remove();
                $('<p>成功读取配置文件</p><p>如果要修改配置文件，点击保存按钮即可生效</p>').insertAfter(h2title + ":eq(0)");
                darkmode();
            },1000);
        }
    }
    // 写入cookie函数，代码简化效率高
    function cookie (name,vari){
        docCookies.setItem(name, vari, Infinity, "/", "shelter.beaa.cn", true);
    }
    // 插入文字和选项函数，代码简化效率中等
    function addText (id,vari,title,eq,text){
        // 插入文字和选项
        $(text).insertAfter(title + ":eq(" + eq +")");
        // 按照配置为按钮添加已选属性
        $("input#" + id + "_" + vari).attr("checked","");
    }
    // 选项点击事件监听，代码简化效率高
    function clickListener (id,vari,eq){
        $("input#" + id + "_" + eq).click(function (){
            eval(vari + "=" + eq);
        });
    }
    // 写入配置文件函数，代码简化效率高
    function setCfg (){
        cookie("auto_night",autoNight);
        cookie("default_theme",defaultTheme);
        cookie("default_theme_widget",defaultWidget);
        cookie("sidebar_widget_background",sidebarBackground);
        cookie("click_effect",clickEffect);
        cookie("live2d",live2d);
        cookie("wordcount_mode",wordcountMode);
    }
    // 黑暗模式
    function darkmode (){
        // 读取配置
        autoNight = docCookies.getItem("auto_night");
        var text = '<p>是否自动切换黑暗模式</p><p>注意：若开启此选项，在黑暗模式的工作时间内将会覆盖默认主题，设置为黑暗主题</p><p>黑暗模式时间段：19:00~6:00</p><div class="input-radio"><input id="autonight_1"type="radio"name="autonight"/><label for="autonight_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="autonight_0"type="radio"name="autonight"/><label for="autonight_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("autonight",autoNight,h3title,0,text);
        defaultheme();
    }
    // 默认主题
    function defaultheme (){
        defaultTheme = docCookies.getItem("default_theme");
        var text = '<p>默认的主题样式，共3种可选</p><div class="input-radio"><input id="theme_0"type="radio"name="theme"/><label for="theme_0"><span>默认&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_1"type="radio"name="theme"/><label for="theme_1"><span>黑暗&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_2"type="radio"name="theme"/><label for="theme_2"><span>樱花&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_3"type="radio"name="theme"/><label for="theme_3"><span>雨滴&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_4"type="radio"name="theme"/><label for="theme_4"><span>陈年旧书&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("theme",defaultTheme,h3title,1,text);
        defaultwidget();
    }
    // 默认强调色
    function defaultwidget (){
        defaultWidget = docCookies.getItem("default_theme_widget");
        var text = '<p>默认的强调色主题，修改行内代码块，小圆点部件，按钮激活色，滚动条颜色等，可与上面的主题进行搭配，共有12种选择</p><p>注意：背景指侧边栏背景，仅适用于移动端，无特别标注的强调色的背景为纯色背景</p><div class="input-radio"><input id="widget_0"type="radio"name="widget"/><label for="widget_0"><span>不设置(使用默认主题设置)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_1"type="radio"name="widget"/><label for="widget_1"><span>活力橙(黑眼镜橙色底背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_2"type="radio"name="widget"/><label for="widget_2"><span>DDの桃(粉色渐变背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_3"type="radio"name="widget"/><label for="widget_3"><span>夜の海(黑色海洋背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_4"type="radio"name="widget"/><label for="widget_4"><span>基佬紫&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_5"type="radio"name="widget"/><label for="widget_5"><span>夜空蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_6"type="radio"name="widget"/><label for="widget_6"><span>天依蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_7"type="radio"name="widget"/><label for="widget_7"><span>奥托绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_8"type="radio"name="widget"/><label for="widget_8"><span>清新绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_9"type="radio"name="widget"/><label for="widget_9"><span>清新橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_10"type="radio"name="widget"/><label for="widget_10"><span>普通橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_11"type="radio"name="widget"/><label for="widget_11"><span>马鞍棕&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_12"type="radio"name="widget"/><label for="widget_12"><span>酷炫黑&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("widget",defaultWidget,h3title,2,text);
        sidebarBG();
    }
    // 侧边栏背景
    function sidebarBG (){
        sidebarBackground = docCookies.getItem("sidebar_widget_background");
        var text = '<p>使用强调色时是否更改侧边栏的背景为强调色自带的背景</p><p>注意：此选项仅针对移动端，PC端设置此选项无效</p><div class="input-radio"><input id="sidebar_1" type="radio" name="sidebar" /><label for="sidebar_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="sidebar_0" type="radio" name="sidebar" /><label for="sidebar_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("sidebar",sidebarBackground,h3title,3,text);
        clickeffect();
        
    }
    // 点击特效
    function clickeffect (){
        clickEffect = docCookies.getItem("click_effect");
        var text = '<p>默认的点击特效，共三种可选</p><div class="input-radio"><input id="effect_0" type="radio" name="clickeffect" /><label for="effect_0"><span>爱心&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_1" type="radio" name="clickeffect" /><label for="effect_1"><span>粒子波动&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_2" type="radio" name="clickeffect" /><label for="effect_2"><span>粒子爆炸&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("effect",clickEffect,h2title,2,text);
        live2dGirl();
    }
    // Live2d看板娘
    function live2dGirl (){
        live2d = docCookies.getItem("live2d");
        var text = '<p>是否启用Live2d看板娘</p><p>呐呐，这么Kawaii的看板娘，你不会关掉的，对吧对吧?</p><div class="input-radio"><input id="live2d_1" type="radio" name="live2d" /><label for="live2d_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="live2d_0" type="radio" name="live2d" /><label for="live2d_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("live2d",live2d,h2title,3,text);
        wordCount();
    }
    // 字数统计
    function wordCount (){
        wordcountMode = docCookies.getItem("wordcount_mode");
        var text = '<p>字数统计的显示样式</p><div class="input-radio"><input id="wordcount_0" type="radio" name="wordcount" /><label for="wordcount_0"><span>正文字数和代码字符数独立&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="wordcount_1" type="radio" name="wordcount" /><label for="wordcount_1"><span>正文字数包含代码字符数(会像这样注明包含多少字符数)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("wordcount",wordcountMode,h2title,4,text);
        darkStyle();
    }
    // 按钮黑暗样式
    function darkStyle (){
        // 如果页面主题是黑暗则更改选项样式
        if (night == "1") {
            $(".input-radio").attr("class","input-radio-night");
        }
        save();
    }
    // 保存按钮
    function save (){
        if (night == "1") {
            $('<div class="button-save"><span>保存<i class="ri-save-3-line"></i></span></div>').insertAfter(".input-radio-night:eq(28)");
        }
        else {
            $('<div class="button-save"><span>保存<i class="ri-save-3-line"></i></span></div>').insertAfter(".input-radio:eq(28)");
        }
        clickSet();
    }
    // 监听选项，保存按钮的点击事件
    function clickSet (){
        // 选项的监听
        clickListener("autonight","autoNight",1);
        clickListener("autonight","autoNight",0);
        clickListener("theme","defaultTheme",0);
        clickListener("theme","defaultTheme",1);
        clickListener("theme","defaultTheme",2);
        clickListener("theme","defaultTheme",3);
        clickListener("theme","defaultTheme",4);
        clickListener("widget","defaultWidget",0);
        clickListener("widget","defaultWidget",1);
        clickListener("widget","defaultWidget",2);
        clickListener("widget","defaultWidget",3);
        clickListener("widget","defaultWidget",4);
        clickListener("widget","defaultWidget",5);
        clickListener("widget","defaultWidget",6);
        clickListener("widget","defaultWidget",7);
        clickListener("widget","defaultWidget",8);
        clickListener("widget","defaultWidget",9);
        clickListener("widget","defaultWidget",10);
        clickListener("widget","defaultWidget",11);
        clickListener("widget","defaultWidget",12);
        clickListener("sidebar","sidebarBackground",0);
        clickListener("sidebar","sidebarBackground",1);
        clickListener("effect","clickEffect",0);
        clickListener("effect","clickEffect",1);
        clickListener("effect","clickEffect",2);
        clickListener("live2d","live2d",0);
        clickListener("live2d","live2d",1);
        clickListener("wordcount","wordcountMode",0);
        clickListener("wordcount","wordcountMode",1);
        // 保存按钮的监听
        $(".button-save").click(function (){
            // 写入配置文件
            setCfg();
            // 将按钮设置为关闭状态
            $(".button-save").attr("class","button-save-disabled");
            savedNotification();
        });
    }
    // 显示保存通知前的判断
    function savedNotification (){
        // 判断公告通知是否在显示
        if (document.querySelector(jelly + ".ns-show") != null) {
            // 是，则添加属性，使其淡出
            $(jelly).attr("id","canceled");
            // 过段时间后删除元素
            setTimeout(function (){
                $(jelly).remove();
                savedntf();
            },500);
        }
        // 判断公告通知是否已隐藏
        else if(document.querySelector(jelly + ".ns-hide") != null) {
            // 是，则直接删除元素
            $(jelly).remove();
            savedntf();
        }
        // 判断公告通知是否存在
        else if(document.querySelector(jelly) == null) {
            // 不存在，则加css
            insertCssPlace.append('<link id="jelly" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + staticVer + '/static/ns-style-growl.css" rel="stylesheet">');
            savedntf();
        }
    }
    // 保存成功的通知
    function savedntf (){
        setTimeout(function(){
            var savednotification = new NotificationFx({
                wrapper : document.body,
                message : '<p>🔔【消息】<br />你的配置文件保存成功啦~<br />博客将会在几秒后刷新页面，请耐心等待~<br />无法刷新？试试&nbsp;&nbsp;<a href="https://shelter.beaa.cn/settings">手动刷新</a></p>',
                layout : 'growl',
                effect : 'jelly',
                type : 'error',
                ttl : 4000,
                onClose : function() { return false; },
                onOpen : function() { return false; }
            });
            savednotification.show();
            // 3秒后刷新页面
            setTimeout(function (){
                window.location.reload();
            },3000);
        },1000);
    }
},1000);