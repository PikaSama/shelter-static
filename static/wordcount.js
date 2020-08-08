// 脚本来源： https://wardzhou.art
// 根据hexo-wordcount修改
setTimeout(function (){
    // 加载提示
    // 文章信息位置
    var loading = $("[class='φgj φo']");
    // 插入span
    loading.append('<span class="load_wordcount">Loading...</span>');
    setTimeout(function (){
        // 获取正文字数
        var words = document.querySelector(".φbi.φy.φg").innerText.length;
        // debug
        // console.log(document.querySelector("article").innerText);
        // console.log(words);
        // ---
        // 获取正文内图片的数量
        var imgs = $(".φbi.φy.φg img").length;
        // debug
        // console.log(imgs);
        // ---
        // 获取所有<meting-js>元素
        var metings = document.querySelectorAll("meting-js");
        var meting = 0;
        var i;
        // 是否有该元素，有则将每个元素的文本长度相加
        if (metings.length > 0) {
            for (i = 0; i < metings.length; i++) {
                meting = meting + metings[i].innerText.length;
                // debug
                // console.log(metings[i].innerText);
                // console.log(metings[i].innerText.length);
            }
        }
        // debug
        // console.log(meting);
        // ---
        // 获取所有<figure>元素
        var codes = document.querySelectorAll("figure");
        var code = 0;
        var j;
        // 是否含有该元素，有则将每个元素的文本长度相加
        if (codes.length > 0) {
            for (j = 0; j < codes.length; j++) {
                code = code + codes[j].innerText.length;
                // debug
                // console.log(codes[j].innerText);
                // console.log(codes[j].innerText.length);
            }
        }
        // debug
        // console.log(code);
        // ---
        // 校正字数，正文字数 - 音乐插件字数 - 代码字符数
        words = words - meting - code;
        // debug
        // console.log(words);
        // ---
        // 估算阅读时间，范围：全文
        // 设每分钟阅读文字600字 / 代码800字符 / 图片10张
        // 结果保留一位小数
        var readtime = (Math.round(words / 60 + code / 80) + imgs) / 10;
        // 如果字数不到1000，显示原字数
        if (words < 1000) {
            words = '= ' + words + ' words';
        }
        // 如果字数≥1000，四舍五入字数，单位改为k，结果保留一位小数
        else {
            words = '≈ ' + Math.round(words / 100) / 10 + 'k' + ' words';
        }
        // 如果阅读时间超过1分钟，加复数单位
        if (readtime > 1) {
            readtime = '≈ ' + readtime + ' mins';
        }
        // 如果阅读时间≤1分钟，加单数单位
        else {
            readtime = '≈ 1 min';
        }
        // 是否含有代码
        if (codes.length > 0) {
            // 是
            // 如果代码字符数不到1000，显示原字符数
            if (code < 1000) {
                code = '= ' + code + ' chars'; 
            }
            // 如果代码字符数≥1000，四舍五入字符数，单位改为k，结果保留一位小数
            else {
                code = '≈ ' + Math.round(code / 100) / 10 + 'k' + ' chars';
            }
        }
        // 删除加载提示
        $("[class='load_wordcount']").remove();
        // 文章信息位置
        var countplace = $("[class='φgj φo']");
        // 插入字数统计
        countplace.append('<span class="words"><i class="ri-quill-pen-line"></i>' + words + '</span>');
        // 是否有代码
        if (codes.length > 0) {
            // 是，插入代码统计
            countplace.append('<span class="codes">&nbsp;&nbsp;<i class="ri-code-box-line"></i>' + code + '</span>');
        }
        // 插入阅读时间
        countplace.append('<span class="readtime">&nbsp;&nbsp;<i class="ri-book-open-line"></i>' + readtime + '</span>');
    },1000);
},100);