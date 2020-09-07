/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Setter of custom config page.
 */
(async () => {
    // 延迟执行函数
    const delay = (ms,func) => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (typeof func == "function"){
                    func();
                }
                resolve();
            },ms);
        });
    }
    await delay(1000);
    // 正文内h2,h3标题
    const h2title = ".φbi.φy.φg h2";
    const h3title = ".φbi.φy.φg h3";
    // 页面路径
    const lct = window.location.pathname;
    // 插入css的地方
    const insertCssPlace = $("head");
    // 静态资源版本
    const staticVer = "1.3.12";
    // 公告
    const jelly = ".ns-box.ns-growl.ns-effect-jelly.ns-type-error";
    // 新人标识
    const newbie = docCookies.hasItem("newbie");
    // 自定义配置文件的标识
    const custom = docCookies.hasItem("custom");
    // 检测页面主题是否为黑暗
    const night = docCookies.getItem("night");
    // 初始配置文件参数
    let autoNight = "0";
    let defaultTheme = "0";
    let defaultWidget = "0";
    let sidebarBackground = "0";
    let clickEffect = "0";
    let live2d = "1";
    let wordcountMode = "0";
    let bqb = "https://cdn.jsdelivr.net/npm/alus@latest\nhttps://cdn.jsdelivr.net/gh/MiniValine/Bilibilis@latest\nhttps://cdn.jsdelivr.net/gh/MiniValine/twemoji@latest\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/bilibiliHotKey\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-Daily\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-NEWYEAR-2019\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-AIChan\nhttps://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/Coolapk";
    // --- 函数区 ---
    // 写入cookie函数，代码简化效率高
    const cookie = (name,vari) => {
        docCookies.setItem(name, vari, Infinity, "/", "shelter.beaa.cn", true);
    }
    // 插入文字和选项函数，代码简化效率中等
    const addText = (id,vari,title,eq,text) => {
        // 插入文字和选项
        $(text).insertAfter(title + ":eq(" + eq +")");
        // 按照配置为按钮添加已选属性
        $("input#" + id + "_" + vari).attr("checked","");
    }
    // 选项点击事件监听，代码简化效率高
    const clickListener = {
        darkmode: eq => {
            $("input#autonight_" + eq).click(() => {
                autoNight = eq;
            });
        },
        theme: eq => {
            $("input#theme_" + eq).click(() => {
               defaultTheme = eq;
            });
        },
        widget: eq => {
            $("input#widget_" + eq).click(() => {
                defaultWidget = eq;
            });
        },
        sidebar: eq => {
            $("input#sidebar_" + eq).click(() => {
                sidebarBackground = eq;
            });
        },
        effect: eq => {
            $("input#effect_" + eq).click(() => {
                clickEffect = eq;
            });
        },
        l2d: eq => {
            $("input#live2d_" + eq).click(() => {
                live2d = eq;
            });
        }
        wordcount: eq => {
            $("input#wordcount_" + eq).click(() => {
                wordcountMode = eq;
            });
        }
    }
    // 写入配置文件函数，代码简化效率高
    const setCfg = () => {
        cookie("auto_night",autoNight);
        cookie("default_theme",defaultTheme);
        cookie("default_theme_widget",defaultWidget);
        cookie("sidebar_widget_background",sidebarBackground);
        cookie("click_effect",clickEffect);
        cookie("live2d",live2d);
        cookie("wordcount_mode",wordcountMode);
        cookie("bqb_url",bqb);
    }
    // 黑暗模式
    const darkmode = () => {
        // 读取配置
        autoNight = docCookies.getItem("auto_night");
        let text = '<p>是否自动切换黑暗模式</p><p>注意：若开启此选项，在黑暗模式的工作时间内将会覆盖默认主题，设置为黑暗主题</p><p>黑暗模式时间段：19:00~6:00</p><div class="input-radio"><input id="autonight_1"type="radio"name="autonight"/><label for="autonight_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="autonight_0"type="radio"name="autonight"/><label for="autonight_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("autonight",autoNight,h3title,0,text);
    }
    // 默认主题
    const defaultheme = () => {
        defaultTheme = docCookies.getItem("default_theme");
        let text = '<p>默认的主题样式，共3种可选</p><div class="input-radio"><input id="theme_0"type="radio"name="theme"/><label for="theme_0"><span>默认&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_1"type="radio"name="theme"/><label for="theme_1"><span>黑暗&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_2"type="radio"name="theme"/><label for="theme_2"><span>樱花&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_3"type="radio"name="theme"/><label for="theme_3"><span>雨滴&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_4"type="radio"name="theme"/><label for="theme_4"><span>陈年旧书&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("theme",defaultTheme,h3title,1,text);
    }
    // 默认强调色
    const defaultwidget = () => {
        defaultWidget = docCookies.getItem("default_theme_widget");
        let text = '<p>默认的强调色主题，修改行内代码块，小圆点部件，按钮激活色，滚动条颜色等，可与上面的主题进行搭配，共有12种选择</p><p>注意：背景指侧边栏背景，仅适用于移动端，无特别标注的强调色的背景为纯色背景</p><div class="input-radio"><input id="widget_0"type="radio"name="widget"/><label for="widget_0"><span>默认(清新蓝)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_1"type="radio"name="widget"/><label for="widget_1"><span>活力橙(黑眼镜橙色底背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_2"type="radio"name="widget"/><label for="widget_2"><span>DDの桃(粉色渐变背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_3"type="radio"name="widget"/><label for="widget_3"><span>夜の海(黑色海洋背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_4"type="radio"name="widget"/><label for="widget_4"><span>基佬紫&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_5"type="radio"name="widget"/><label for="widget_5"><span>夜空蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_6"type="radio"name="widget"/><label for="widget_6"><span>天依蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_7"type="radio"name="widget"/><label for="widget_7"><span>奥托绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_8"type="radio"name="widget"/><label for="widget_8"><span>清新绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_9"type="radio"name="widget"/><label for="widget_9"><span>清新橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_10"type="radio"name="widget"/><label for="widget_10"><span>普通橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_11"type="radio"name="widget"/><label for="widget_11"><span>马鞍棕&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_12"type="radio"name="widget"/><label for="widget_12"><span>酷炫黑&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("widget",defaultWidget,h3title,2,text);
    }
    // 侧边栏背景
    const sidebarBG = () => {
        sidebarBackground = docCookies.getItem("sidebar_widget_background");
        let text = '<p>使用强调色时是否更改侧边栏的背景为强调色自带的背景</p><p>注意：此选项仅针对移动端，PC端设置此选项无效</p><div class="input-radio"><input id="sidebar_1" type="radio" name="sidebar" /><label for="sidebar_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="sidebar_0" type="radio" name="sidebar" /><label for="sidebar_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("sidebar",sidebarBackground,h3title,3,text);
    }
    // 表情包
    const mvbqb = () => {
        bqb = docCookies.getItem("bqb_url");
        $('<p>你可以自定义评论系统加载的表情包，一行填一个链接，不需要其他符号，以免解析错误</p><center><textarea id="mvsys" rows="10" cols="70%" style="resize: none;"></textarea></center><p>目前博客自带的表情包有以下这些，如果要使用这些表情包，请填入“https://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@latest/” + 表情包名字 即可</p><ul><li><p>BilibiliHotKey：哔哩哔哩热词系列</p></li><li><p>HONKAI3-Crayon：崩坏3 蜡笔日常篇</p></li><li><p>HONKAI3-Daily：崩坏3 日常篇</p></li><li><p>HONKAI3-Durandal-Search： 崩坏3 目标！幽兰黛尔</p></li><li><p>HONKAI3-MEI：崩坏3 芽衣的剑道修行</p></li><li><p>HONKAI3-NEWYEAR-2019：崩坏3 2019新年</p></li><li><p>HONKAI3-Pure：崩坏3 纯色日常篇</p></li><li><p>HONKAI3-Stan：崩坏3 史丹</p></li><li><p>HONKAI3-Star：崩坏3 观星篇</p></li><li><p>HONKAI3-AIChan：崩坏3 爱酱</p></li><li><p>Mafumafu：Mafumafu Animation sticker (cat)</p></li><li><p>Menhera-chan：七濑胡桃系列表情包</p></li><li><p>Sweetie-Bunny：うさみみ少女</p></li><li><p>Coolapk：酷安</p></li><li><p>Arcaea：Arcaea表情包</p></li><li><p>Snow-Miku：Snow Miku雪初音表情包</p></li><li><p>Yurui-Neko：Yurui-Neko表情包</p></li><li><p>bilibilitv：哔哩哔哩小电视系列	</p></li><li><p>bilibili2233：哔哩哔哩2233娘系列</p></li><li><p>aodamiao：aodamiao嗷大喵</p></li></ul><p>如果你想加入自己的表情包，请见<a href="https://github.com/MiniValine/MiniValine/blob/master/.github/FAQ.md#how-to-customize-emoticons">此文档</a></p><p>推荐使用项目 <a href="https://github.com/PikaSama/blog-emoticons/">Blog Emoticons</a>一键生成表情包列表(再次硬广)</p>').insertAfter(h2title + ":eq(2)");
        $("textarea#mvsys").val(bqb);
    }
    // 点击特效
    const clickeffect = () => {
        clickEffect = docCookies.getItem("click_effect");
        let text = '<p>默认的点击特效，共三种可选</p><div class="input-radio"><input id="effect_0" type="radio" name="clickeffect" /><label for="effect_0"><span>爱心&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_1" type="radio" name="clickeffect" /><label for="effect_1"><span>粒子波动&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_2" type="radio" name="clickeffect" /><label for="effect_2"><span>粒子爆炸&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("effect",clickEffect,h2title,3,text);
    }
    // Live2d看板娘
    const live2dGirl = () => {
        live2d = docCookies.getItem("live2d");
        let text = '<p>是否启用Live2d看板娘</p><p>呐呐，这么Kawaii的看板娘，你不会关掉的，对吧对吧?</p><div class="input-radio"><input id="live2d_1" type="radio" name="live2d" /><label for="live2d_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="live2d_0" type="radio" name="live2d" /><label for="live2d_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("live2d",live2d,h2title,4,text);
    }
    // 字数统计
    const wordCount = () => {
        wordcountMode = docCookies.getItem("wordcount_mode");
        let text = '<p>字数统计的显示样式</p><div class="input-radio"><input id="wordcount_0" type="radio" name="wordcount" /><label for="wordcount_0"><span>正文字数和代码字符数独立&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="wordcount_1" type="radio" name="wordcount" /><label for="wordcount_1"><span>正文字数包含代码字符数(会像这样注明包含多少字符数)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>';
        addText("wordcount",wordcountMode,h2title,5,text);
    }
    // 按钮黑暗样式
    const darkStyle = () => {
        // 如果页面主题是黑暗则更改选项样式
        if (night == "1") {
            $(".input-radio").attr("class","input-radio-night");
            $("textarea#mvsys").attr("id","mvsys-night");
        }
    }
    // 保存按钮
    const save = () => {
        if (night == "1") {
            $('<div class="button-save"><span>保存<i class="ri-save-3-line"></i></span></div>').insertAfter(".input-radio-night:eq(28)");
        }
        else {
            $('<div class="button-save"><span>保存<i class="ri-save-3-line"></i></span></div>').insertAfter(".input-radio:eq(28)");
        }
    }
    // 显示保存通知前的判断
    const savedNotification = async () => {
        // 判断是否显示过公告通知
        if(document.querySelector(jelly) == null) {
            // 不存在，则加css
            insertCssPlace.append('<link id="jelly" href="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + staticVer + '/static/ns-style-growl.css" rel="stylesheet">');
        }
        // 判断公告通知是否在显示
        else if (document.querySelector(jelly + ".ns-show") != null) {
            // 是，则添加属性，使其淡出
            $(jelly).attr("id","canceled");
            // 过段时间后删除元素
            await delay(500);
            $(jelly).remove();
        }
        // 否，认定通知为隐藏状态，直接删除元素
        else {
            $(jelly).remove();
        }
    }
    // 保存成功的通知
    const savedntf = async () => {
        await delay(1000);
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
        await delay(3000);
        window.location.reload();
    }
    // 监听选项，保存按钮的点击事件
    const clickSet = () => {
        // 选项的监听
        clickListener.darkmode(0);
        clickListener.darkmode(1);
        clickListener.theme(0);
        clickListener.theme(1);
        clickListener.theme(2);
        clickListener.theme(3);
        clickListener.theme(4);
        clickListener.widget(0);
        clickListener.widget(1);
        clickListener.widget(2);
        clickListener.widget(3);
        clickListener.widget(4);
        clickListener.widget(5);
        clickListener.widget(6);
        clickListener.widget(7);
        clickListener.widget(8);
        clickListener.widget(9);
        clickListener.widget(10);
        clickListener.widget(11);
        clickListener.widget(12);
        clickListener.sidebar(0);
        clickListener.sidebar(1);
        clickListener.effect(0);
        clickListener.effect(1);
        clickListener.effect(2);
        clickListener.l2d(0);
        clickListener.l2d(1);
        clickListener.wordcount(0);
        clickListener.wordcount(1);
        // 保存按钮的监听
        $(".button-save").click(async () => {
            // 读取输入框内容
            if (document.querySelector("textarea#mvsys") != null) {
                bqb = $("textarea#mvsys").val();
            }
            else {
                bqb = $("textarea#mvsys-night").val();
            }
            // 写入配置文件
            setCfg();
            // 将按钮设置为关闭状态
            $(".button-save").attr("class","button-save-disabled");
            await savedNotification();
            await savedntf();
        });
    }
    // 加载列表A,针对无配置文件的非新人
    const setterA = async () => {
        darkStyle();
        save();
        clickSet();
    }
    // 加载列表B,针对有配置文件的非新人
    const setterB = async () => {
        darkmode();
        defaultheme();
        defaultwidget();
        sidebarBG();
        mvbqb();
        clickeffect();
        live2dGirl();
        wordCount();
        darkStyle();
        save();
        clickSet();
    }
    // 适配主题的标题跳转，使用insertAfter()方法
    const setter = async () => {
        $('<p id="loading">读取用户配置文件中...</p>').insertAfter(h2title + ":eq(0)");
        // 如果是新人则不显示
        if(newbie == false) {
            await delay(1000);
            $("p#loading").remove();
            $('<p>读取用户配置文件失败：未满足读取条件，需查看<a href="/help">使用教程</a></p>').insertAfter(h2title + ":eq(0)");
        }
        // 如果不是新人但没有配置文件
        else if(custom == false && newbie == true) {
            await delay(1000);
            $("p#loading").remove();
            $('<p>用户配置文件为空，已自动创建新配置文件</p><p>如果要修改配置文件，点击保存按钮即可生效</p>').insertAfter(h2title + ":eq(0)");
            // 写入初始配置文件参数，自定义配置文件标识
            cookie("custom","1");
            setCfg();
            // 插入文字和选项
            $('<p>是否自动切换黑暗模式</p><p>注意：若开启此选项，在黑暗模式的工作时间内将会覆盖默认主题，设置为黑暗主题</p><p>黑暗模式时间段：19:00~6:00</p><div class="input-radio"><input id="autonight_1"type="radio"name="autonight"/><label for="autonight_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="autonight_0"type="radio"name="autonight" checked/><label for="autonight_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title + ":eq(0)");
            $('<p>默认的主题样式</p><div class="input-radio"><input id="theme_0"type="radio"name="theme" checked/><label for="theme_0"><span>默认&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_1"type="radio"name="theme"/><label for="theme_1"><span>黑暗&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_2"type="radio"name="theme"/><label for="theme_2"><span>樱花&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_3"type="radio"name="theme"/><label for="theme_3"><span>雨滴&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="theme_4"type="radio"name="theme"/><label for="theme_4"><span>陈年旧书&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title + ":eq(1)");
            $('<p>默认的强调色主题，修改行内代码块，小圆点部件，按钮激活色，滚动条颜色等，可与上面的主题进行搭配，共有12种选择</p><p>注意：背景指侧边栏背景，仅适用于移动端，无特别标注的强调色的背景为纯色背景</p><div class="input-radio"><input id="widget_0"type="radio"name="widget" checked/><label for="widget_0"><span>默认(清新蓝)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_1"type="radio"name="widget"/><label for="widget_1"><span>活力橙(黑眼镜橙色底背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_2"type="radio"name="widget"/><label for="widget_2"><span>DDの桃(粉色渐变背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_3"type="radio"name="widget"/><label for="widget_3"><span>夜の海(黑色海洋背景)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_4"type="radio"name="widget"/><label for="widget_4"><span>基佬紫&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_5"type="radio"name="widget"/><label for="widget_5"><span>夜空蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_6"type="radio"name="widget"/><label for="widget_6"><span>天依蓝&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_7"type="radio"name="widget"/><label for="widget_7"><span>奥托绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_8"type="radio"name="widget"/><label for="widget_8"><span>清新绿&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_9"type="radio"name="widget"/><label for="widget_9"><span>清新橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_10"type="radio"name="widget"/><label for="widget_10"><span>普通橙&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_11"type="radio"name="widget"/><label for="widget_11"><span>马鞍棕&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="widget_12"type="radio"name="widget"/><label for="widget_12"><span>酷炫黑&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title + ":eq(2)");
            $('<p>使用强调色时是否更改侧边栏的背景为强调色自带的背景</p><p>注意：此选项仅针对移动端，PC端设置此选项无效</p><div class="input-radio"><input id="sidebar_1" type="radio" name="sidebar" /><label for="sidebar_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="sidebar_0" type="radio" name="sidebar" checked/><label for="sidebar_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h3title + ":eq(3)");
            $('<p>你可以自定义评论系统加载的表情包，一行填一个链接，不需要其他符号，以免解析错误</p><center><textarea id="mvsys" rows="10" cols="70%" style="resize: none;"></textarea></center><p>目前博客自带的表情包有以下这些，如果要使用这些表情包，请填入“https://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@latest/” + 表情包名字 即可</p><ul><li><p>BilibiliHotKey：哔哩哔哩热词系列</p></li><li><p>HONKAI3-Crayon：崩坏3 蜡笔日常篇</p></li><li><p>HONKAI3-Daily：崩坏3 日常篇</p></li><li><p>HONKAI3-Durandal-Search： 崩坏3 目标！幽兰黛尔</p></li><li><p>HONKAI3-MEI：崩坏3 芽衣的剑道修行</p></li><li><p>HONKAI3-NEWYEAR-2019：崩坏3 2019新年</p></li><li><p>HONKAI3-Pure：崩坏3 纯色日常篇</p></li><li><p>HONKAI3-Stan：崩坏3 史丹</p></li><li><p>HONKAI3-Star：崩坏3 观星篇</p></li><li><p>HONKAI3-AIChan：崩坏3 爱酱</p></li><li><p>Mafumafu：Mafumafu Animation sticker (cat)</p></li><li><p>Menhera-chan：七濑胡桃系列表情包</p></li><li><p>Sweetie-Bunny：うさみみ少女</p></li><li><p>Coolapk：酷安</p></li><li><p>Arcaea：Arcaea表情包</p></li><li><p>Snow-Miku：Snow Miku雪初音表情包</p></li><li><p>Yurui-Neko：Yurui-Neko表情包</p></li><li><p>bilibilitv：哔哩哔哩小电视系列	</p></li><li><p>bilibili2233：哔哩哔哩2233娘系列</p></li><li><p>aodamiao：aodamiao嗷大喵</p></li></ul><p>如果你想加入自己的表情包，请见<a href="https://github.com/MiniValine/MiniValine/blob/master/.github/FAQ.md#how-to-customize-emoticons">此文档</a></p><p>推荐使用项目 <a href="https://github.com/PikaSama/blog-emoticons/">Blog Emoticons</a>一键生成表情包列表(再次硬广)</p>').insertAfter(h2title + ":eq(2)");
            $('<p>默认的点击特效，共三种可选</p><div class="input-radio"><input id="effect_0" type="radio" name="clickeffect" checked/><label for="effect_0"><span>爱心&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_1" type="radio" name="clickeffect" /><label for="effect_1"><span>粒子波动&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="effect_2" type="radio" name="clickeffect" /><label for="effect_2"><span>粒子爆炸&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title + ":eq(3)");
            $('<p>是否启用Live2d看板娘</p><p>呐呐，这么Kawaii的看板娘，你不会关掉的，对吧对吧?</p><div class="input-radio"><input id="live2d_1" type="radio" name="live2d" checked/><label for="live2d_1"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="live2d_0" type="radio" name="live2d" /><label for="live2d_0"><span>否&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title + ":eq(4)");
            $('<p>字数统计的显示样式</p><div class="input-radio"><input id="wordcount_0" type="radio" name="wordcount" checked/><label for="wordcount_0"><span>正文字数和代码字符数独立&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div><div class="input-radio"><input id="wordcount_1" type="radio" name="wordcount" /><label for="wordcount_1"><span>正文字数包含代码字符数(会像这样注明包含多少字符数)&nbsp;&nbsp;&nbsp;&nbsp;</span></label></div>').insertAfter(h2title + ":eq(5)");
            $("textarea#mvsys").val(bqb);
            await setterA();
        }
        // 如果不是新人且有配置文件
        else if(custom == true && newbie == true) {
            await delay(1000);
            $("p#loading").remove();
            $('<p>成功读取配置文件</p><p>如果要修改配置文件，点击保存按钮即可生效</p>').insertAfter(h2title + ":eq(0)");
            await setterB();
        }
    }
    // ------------
    // --- 代码区 ---
    // 如果是设置页面，调用函数
    if (lct == "/settings") {
        await setter();
    }
    // ----------------
})();