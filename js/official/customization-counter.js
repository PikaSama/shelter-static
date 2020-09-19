/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Custom settings for wordcount.
 */
setTimeout(() => {
    // 新人标识
    const mengxin = docCookies.hasItem("newbie");
    // 自定义配置文件标识
    const custom = docCookies.hasItem("custom");
    // 静态资源版本
    const ver = "1.3.17";
    // 插入js的地方
    const bodyPlace = $("body");
    // 读取配置
    const wordcount = docCookies.getItem("wordcount_mode");
    // 判断是否有配置文件以及不是新人，且选项为“1"
    if ((custom == true && mengxin == true) && wordcount == "1") {
        // 是，加载js
        // 为方便测试，默认加载debug版
        //bodyPlace.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/wordcount-code-debug.min.js"></script>');
        bodyPlace.append('<script src="//zorin.beaa.cn/test/debugCounter-b.min.js"></script>');
    }
    // 否，加载默认js
    // 为方便测试，默认加载debug版
    else {
        //bodyPlace.append('<script src="//cdn.jsdelivr.net/gh/PikaSama/shelter-images@' + ver + '/static/wordcount-debug.min.js"></script>');
        bodyPlace.append('<script src="//zorin.beaa.cn/test/debugCounter.min.js"></script>');
    }
},300);
