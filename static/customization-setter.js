setTimeout(function (){
    // 正文内h2,h3标题
    var h2title = $(".φbi.φy.φg h2");
    var h3title = $(".φbi.φy.φg h3");
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
    // 如果是设置页面，调用函数
    if (lct == "/settings") {
        setter();
    }
    // 搞不懂为什么jquery选择器加[x]用append()整出来的是纯文本
    // 适配主题的标题跳转，使用insertAfter()方法
    function setter (){
        $('<p id="loading">读取用户配置文件中...</p>').insertAfter(h2title[0]);
        // 如果是新人则不显示
        if(newbie == false) {
            setTimeout(function (){
                $("p#loading").remove();
                $('<p>读取用户配置文件失败：未满足读取条件，需查看<a href="/help">使用教程</a></p>').insertAfter(h2title[0]);
            },1000);
        }
        // 如果不是新人但没有配置文件
        else if(custom == false && newbie == true) {
            setTimeout(function (){
                $("p#loading").remove();
                $('<p>用户配置文件为空，已自动创建新配置文件</p><p>如果要修改配置文件，点击保存按钮即可生效</p>').insertAfter(h2title[0]);
                // 写入初始配置文件参数，自定义配置文件标识
                docCookies.setItem("custom", "1", Infinity, "/", "shelter.beaa.cn", true);
                docCookies.setItem("auto_night", autoNight, Infinity, "/", "shelter.beaa.cn", true);
                docCookies.setItem("default_theme", defaultTheme, Infinity, "/", "shelter.beaa.cn", true);
                docCookies.setItem("default_theme_widget", defaultWidget, Infinity, "/", "shelter.beaa.cn", true);
                docCookies.setItem("sidebar_widget_background", sidebarBackground, Infinity, "/", "shelter.beaa.cn", true);
                docCookies.setItem("click_effect", clickEffect, Infinity, "/", "shelter.beaa.cn", true);
                docCookies.setItem("live2d", live2d, Infinity, "/", "shelter.beaa.cn", true);
                docCookies.setItem("wordcount_mode", wordcountMode, Infinity, "/", "shelter.beaa.cn", true);
                // 插入文字和选项
                $('<p>是否自动切换黑暗模式</p><p>注意：若开启此选项，在黑暗模式的工作时间内将会覆盖默认主题，设置为黑暗主题</p><p>黑暗模式时间段：19:00~6:00</p><div class="input-radio"><input id="autonight_1"type="radio"name="autonight"/><label for="autonight_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="autonight_0"type="radio"name="autonight" checked/><label for="autonight_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title[0]);
                $('<p>默认的主题样式</p><div class="input-radio"><input id="theme_0"type="radio"name="theme" checked/><label for="theme_0"><span>默认&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_1"type="radio"name="theme"/><label for="theme_1"><span>黑暗&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_2"type="radio"name="theme"/><label for="theme_2"><span>樱花&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_3"type="radio"name="theme"/><label for="theme_3"><span>雨滴&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_4"type="radio"name="theme"/><label for="theme_4"><span>陈年旧书&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title[1]);
                $('<p>默认的强调色主题，修改行内代码块，小圆点部件，按钮激活色，滚动条颜色等，可与上面的主题进行搭配</p><p>注意：背景指侧边栏背景，仅适用于移动端，无特别标注的强调色的背景为纯色背景</p><div class="input-radio"><input id="widget_0"type="radio"name="widget" checked/><label for="widget_0"><span>不设置(使用默认主题设置)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_1"type="radio"name="widget"/><label for="widget_1"><span>活力橙(黑眼镜橙色底背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_2"type="radio"name="widget"/><label for="widget_2"><span>DDの桃(粉色渐变背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_3"type="radio"name="widget"/><label for="widget_3"><span>夜の海(黑色海洋背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_4"type="radio"name="widget"/><label for="widget_4"><span>基佬紫&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_5"type="radio"name="widget"/><label for="widget_5"><span>夜空蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_6"type="radio"name="widget"/><label for="widget_6"><span>天依蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_7"type="radio"name="widget"/><label for="widget_7"><span>奥托绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_8"type="radio"name="widget"/><label for="widget_8"><span>清新绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_9"type="radio"name="widget"/><label for="widget_9"><span>清新橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_10"type="radio"name="widget"/><label for="widget_10"><span>普通橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_11"type="radio"name="widget"/><label for="widget_11"><span>马鞍棕&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_12"type="radio"name="widget"/><label for="widget_12"><span>酷炫黑&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title[2]);
                $('<p>使用强调色时是否更改侧边栏的背景为强调色自带的背景</p><p>注意：此选项仅针对移动端，PC端设置此选项无效</p><div class="input-radio"><input id="sidebar_1" type="radio" name="sidebar" /><label for="sidebar_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="sidebar_0" type="radio" name="sidebar" checked/><label for="sidebar_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title[3]);
                $('<p>默认的点击特效，共三种可选</p><div class="input-radio"><input id="effect_0" type="radio" name="clickeffect" checked/><label for="effect_0"><span>爱心&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_1" type="radio" name="clickeffect" /><label for="effect_1"><span>粒子波动&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_2" type="radio" name="clickeffect" /><label for="effect_2"><span>粒子爆炸&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title[2]);
                $('<p>是否启用Live2d看板娘</p><p>呐呐，这么Kawaii的看板娘，你不会关掉的，对吧对吧?</p><div class="input-radio"><input id="live2d_1" type="radio" name="live2d" checked/><label for="live2d_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="live2d_0" type="radio" name="live2d" /><label for="live2d_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title[3]);
                $('<p>字数统计的显示样式</p><div class="input-radio"><input id="wordcount_0" type="radio" name="wordcount" checked/><label for="wordcount_0"><span>正文字数和代码字符数独立&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="wordcount_1" type="radio" name="wordcount" /><label for="wordcount_1"><span>正文字数包含代码字符数(会像这样注明包含多少字符数)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title[4]);
                darkStyle();
            },1000);
        }
        // 如果不是新人且有配置文件
        else if(custom == true && newbie == true) {
            setTimeout(function (){
                $("p#loading").remove();
                $('<p>成功读取配置文件</p><p>如果要修改配置文件，点击保存按钮即可生效</p>').insertAfter(h2title[0]);
                darkmode();
            },1000);
        }
    }
    // 黑暗模式
    function darkmode (){
        // 读取配置
        autoNight = docCookies.getItem("auto_night");
        // 插入文字和选项
        $('<p>是否自动切换黑暗模式</p><p>注意：若开启此选项，在黑暗模式的工作时间内将会覆盖默认主题，设置为黑暗主题</p><p>黑暗模式时间段：19:00~6:00</p><div class="input-radio"><input id="autonight_1"type="radio"name="autonight"/><label for="autonight_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="autonight_0"type="radio"name="autonight"/><label for="autonight_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title[0]);
        // 按照配置为按钮添加已选属性
        $("input#autonight_" + autoNight).attr("checked","");
        defaultheme();
    }
    // 默认主题
    function defaultheme (){
        defaultTheme = docCookies.getItem("default_theme");
        $('<p>默认的主题样式，共3种可选</p><div class="input-radio"><input id="theme_0"type="radio"name="theme"/><label for="theme_0"><span>默认&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_1"type="radio"name="theme"/><label for="theme_1"><span>黑暗&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_2"type="radio"name="theme"/><label for="theme_2"><span>樱花&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_3"type="radio"name="theme"/><label for="theme_3"><span>雨滴&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_4"type="radio"name="theme"/><label for="theme_4"><span>陈年旧书&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title[1]);
        $("input#theme_" + defaultTheme).attr("checked","");
        defaultwidget();
    }
    // 默认强调色
    function defaultwidget (){
        defaultWidget = docCookies.getItem("default_theme_widget");
        $('<p>默认的强调色主题，修改行内代码块，小圆点部件，按钮激活色，滚动条颜色等，可与上面的主题进行搭配，共有12种选择</p><p>注意：背景指侧边栏背景，仅适用于移动端，无特别标注的强调色的背景为纯色背景</p><div class="input-radio"><input id="widget_0"type="radio"name="widget"/><label for="widget_0"><span>不设置(使用默认主题设置)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_1"type="radio"name="widget"/><label for="widget_1"><span>活力橙(黑眼镜橙色底背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_2"type="radio"name="widget"/><label for="widget_2"><span>DDの桃(粉色渐变背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_3"type="radio"name="widget"/><label for="widget_3"><span>夜の海(黑色海洋背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_4"type="radio"name="widget"/><label for="widget_4"><span>基佬紫&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_5"type="radio"name="widget"/><label for="widget_5"><span>夜空蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_6"type="radio"name="widget"/><label for="widget_6"><span>天依蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_7"type="radio"name="widget"/><label for="widget_7"><span>奥托绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_8"type="radio"name="widget"/><label for="widget_8"><span>清新绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_9"type="radio"name="widget"/><label for="widget_9"><span>清新橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_10"type="radio"name="widget"/><label for="widget_10"><span>普通橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_11"type="radio"name="widget"/><label for="widget_11"><span>马鞍棕&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_12"type="radio"name="widget"/><label for="widget_12"><span>酷炫黑&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title[2]);
        $("input#widget_" + defaultWidget).attr("checked","");
        sidebarBG();
    }
    // 侧边栏背景
    function sidebarBG (){
        sidebarBackground = docCookies.getItem("sidebar_widget_background");
        $('<p>使用强调色时是否更改侧边栏的背景为强调色自带的背景</p><p>注意：此选项仅针对移动端，PC端设置此选项无效</p><div class="input-radio"><input id="sidebar_1" type="radio" name="sidebar" /><label for="sidebar_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="sidebar_0" type="radio" name="sidebar" /><label for="sidebar_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title[3]);
        $("input#sidebar_" + sidebarBackground).attr("checked","");
        clickeffect();
        
    }
    // 点击特效
    function clickeffect (){
        clickEffect = docCookies.getItem("click_effect");
        $('<p>默认的点击特效，共三种可选</p><div class="input-radio"><input id="effect_0" type="radio" name="clickeffect" /><label for="effect_0"><span>爱心&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_1" type="radio" name="clickeffect" /><label for="effect_1"><span>粒子波动&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_2" type="radio" name="clickeffect" /><label for="effect_2"><span>粒子爆炸&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title[2]);
        $("input#effect_" + clickEffect).attr("checked","");
        live2dGirl();
    }
    // Live2d看板娘
    function live2dGirl (){
        live2d = docCookies.getItem("live2d");
        $('<p>是否启用Live2d看板娘</p><p>呐呐，这么Kawaii的看板娘，你不会关掉的，对吧对吧?</p><div class="input-radio"><input id="live2d_1" type="radio" name="live2d" /><label for="live2d_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="live2d_0" type="radio" name="live2d" /><label for="live2d_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title[3]);
        $("input#live2d_" + live2d).attr("checked","");
        wordCount();
    }
    // 字数统计
    function wordCount (){
        wordcountMode = docCookies.getItem("wordcount_mode");
        $('<p>字数统计的显示样式</p><div class="input-radio"><input id="wordcount_0" type="radio" name="wordcount" /><label for="wordcount_0"><span>正文字数和代码字符数独立&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="wordcount_1" type="radio" name="wordcount" /><label for="wordcount_1"><span>正文字数包含代码字符数(会像这样注明包含多少字符数)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title[4]);
        $("input#wordcount_" + wordcountMode).attr("checked","");
        darkStyle();
    }
    // 按钮黑暗样式
    function darkStyle (){
        // 检测页面主题是否为黑暗
        var night = docCookies.getItem("night");
        // 如果是则更改选项样式
        if (night == "1") {
            $(".input-radio").attr("class","input-radio-night");
        }
        save();
    }
    // 保存按钮
    function save (){
        $(".φbi.φy.φg").append('<div class="button-save"><span>保存<i class="ri-save-3-line"></i></span></div>');
        clickSet();
    }
    // 监听选项，保存按钮的点击事件
    function clickSet (){
        // 选项的监听
        // 点击，赋值，一气呵成
        // ctrl+c，ctrl+v，太尝龟了
        $("input#autonight_1").click(function (){
            autoNight = "1";
        });
        $("input#autonight_0").click(function (){
            autoNight = "0";
        });
        $("input#theme_0").click(function (){
            defaultTheme = "0";
        });
        $("input#theme_1").click(function (){
            defaultTheme = "1";
        });
        $("input#theme_2").click(function (){
            defaultTheme = "2";
        });
        $("input#theme_3").click(function (){
            defaultTheme = "3";
        });
        $("input#theme_4").click(function (){
            defaultTheme = "4";
        });
        $("input#widget_0").click(function (){
            defaultWidget = "0";
        });
        $("input#widget_1").click(function (){
            defaultWidget = "1";
        });
        $("input#widget_2").click(function (){
            defaultWidget = "2";
        });
        $("input#widget_3").click(function (){
            defaultWidget = "3";
        });
        $("input#widget_4").click(function (){
            defaultWidget = "4";
        });
        $("input#widget_5").click(function (){
            defaultWidget = "5";
        });
        $("input#widget_6").click(function (){
            defaultWidget = "6";
        });
        $("input#widget_7").click(function (){
            defaultWidget = "7";
        });
        $("input#widget_8").click(function (){
            defaultWidget = "8";
        });
        $("input#widget_9").click(function (){
            defaultWidget = "9";
        });
        $("input#widget_10").click(function (){
            defaultWidget = "10";
        });
        $("input#widget_11").click(function (){
            defaultWidget = "11";
        });
        $("input#widget_12").click(function (){
            defaultWidget = "12";
        });
        $("input#sidebar_0").click(function (){
            sidebarBackground = "0";
        });
        $("input#sidebar_1").click(function (){
            sidebarBackground = "1";
        });
        $("input#effect_0").click(function (){
            clickEffect = "0";
        });
        $("input#effect_1").click(function (){
            clickEffect = "1";
        });
        $("input#effect_2").click(function (){
            clickEffect = "2";
        });
        $("input#live2d_0").click(function (){
            live2d = "0";
        });
        $("input#live2d_1").click(function (){
            live2d = "1";
        });
        $("input#wordcount_0").click(function (){
            wordcountMode = "0";
        });
        $("input#wordcount_1").click(function (){
            wordcountMode = "1";
        });
        // 保存按钮的监听
        $(".button-save").click(function (){
            // 写入配置文件
            docCookies.setItem("auto_night", autoNight, Infinity, "/", "shelter.beaa.cn", true);
            docCookies.setItem("default_theme", defaultTheme, Infinity, "/", "shelter.beaa.cn", true);
            docCookies.setItem("default_theme_widget", defaultWidget, Infinity, "/", "shelter.beaa.cn", true);
            docCookies.setItem("sidebar_widget_background", sidebarBackground, Infinity, "/", "shelter.beaa.cn", true);
            docCookies.setItem("click_effect", clickEffect, Infinity, "/", "shelter.beaa.cn", true);
            docCookies.setItem("live2d", live2d, Infinity, "/", "shelter.beaa.cn", true);
            docCookies.setItem("wordcount_mode", wordcountMode, Infinity, "/", "shelter.beaa.cn", true);
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
            // create the notification
            var savednotification = new NotificationFx({
                // element to which the notification will be appended
                // defaults to the document.body
                wrapper : document.body,
                // the message
                message : '<p>🔔【消息】<br />你的配置文件保存成功啦~<br />博客将会在几秒后刷新页面，请耐心等待~<br />无法刷新？试试&nbsp;&nbsp;<a href="https://shelter.beaa.cn/settings">手动刷新</a></p>',
                // layout type: growl|attached|bar|other
                layout : 'growl',
                // effects for the specified layout:
                // for growl layout: scale|slide|genie|jelly
                // for attached layout: flip|bouncyflip
                // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
                // ...
                effect : 'jelly',
                // notice, warning, error, success
                // will add class ns-type-warning, ns-type-error or ns-type-success
                type : 'error',
                // if the user doesn´t close the notification then we remove it 
                // after the following time
                ttl : 4000,
                // callbacks
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