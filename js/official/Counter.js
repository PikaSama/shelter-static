/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: A simple counting script. (Style A)
 */
(async () => {
    // 文章信息位置
    const info = $(".φgj.φr");
    // 插入加载提示
    info.append('<span class="load_wordcount">Loading...</span>');
    await delay(500);
    // 获取正文字数
    let words = document.querySelector(".φbk.φh.φz").innerText.length;
    // debug
    // console.log(document.querySelector("article").innerText);
    // console.log(words);
    // ---
    // 获取正文内图片的数量
    let imgs = $(".φbk.φh.φz img").length;
    // debug
    // console.log(imgs);
    // ---
    // 获取所有<meting-js>元素
    let metinglist = document.querySelectorAll("meting-js");
    let meting = 0;
    // 是否有该元素，有则将每个元素的文本长度相加
    if (metinglist.length > 0) {
        for (let i = 0; i < metinglist.length; i++) {
            meting = meting + metinglist[i].innerText.length;
            // debug
            // console.log(metinglist[i].innerText);
            // console.log(metinglist[i].innerText.length);
        }
    }
    // debug
    // console.log(meting);
    // ---
    // 获取所有<figure>元素
    let codelist = document.querySelectorAll("figure");
    let code = 0;
    // 是否含有该元素，有则将每个元素的文本长度相加
    if (codelist.length > 0) {
        for (let j = 0; j < codelist.length; j++) {
            code = code + codelist[j].innerText.length;
            // debug
            // console.log(codelist[j].innerText);
            // console.log(codelist[j].innerText.length);
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
    let readtime = (Math.round(words / 60 + code / 80) + imgs) / 10;
    // 如果字数不到1000，显示原字数
    if (words < 1000) {
        words = '&nbsp;' + words + '&nbsp;words';
    }
    // 如果字数≥1000，四舍五入字数，单位改为k，结果保留一位小数
    else {
        words = '&nbsp;' + Math.round(words / 100) / 10 + 'k' + '&nbsp;words';
    }
    // 如果阅读时间超过1分钟，加复数单位
    if (readtime > 1) {
        readtime = '&nbsp;' + readtime + '&nbsp;mins';
    }
    // 如果阅读时间≤1分钟，加单数单位
    else {
        readtime = '&nbsp;1 min';
    }
    // 是否含有代码
    if (codelist.length > 0) {
        // 是
        // 如果代码字符数不到1000，显示原字符数
        if (code < 1000) {
            code = '&nbsp;' + code + '&nbsp;chars';
        }
        // 如果代码字符数≥1000，四舍五入字符数，单位改为k，结果保留一位小数
        else {
            code = '&nbsp;' + Math.round(code / 100) / 10 + 'k' + '&nbsp;chars';
        }
    }
    // 删除加载提示
    $("[class='load_wordcount']").remove();
    // 插入字数统计
    info.append('<span class="words"><i class="ri-quill-pen-line"></i>' + words + '</span>');
    // 是否有代码
    if (codelist.length > 0) {
        // 是，插入代码统计
        info.append('<span class="codes">&nbsp;&nbsp;<i class="ri-code-box-line"></i>' + code + '</span>');
    }
    // 插入阅读时间
    info.append('<span class="readtime">&nbsp;&nbsp;<i class="ri-time-line"></i>' + readtime + '</span>');
    // 插入访问统计
    $("[src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js']").remove();
    $(".φgj.φr").append('&nbsp;&nbsp;<span id="busuanzi_container_page_pv"><i class="ri-eye-line"></i>&nbsp;<span id="busuanzi_value_page_pv"></span>&nbsp;views</span>');
    await delay(200);
    $("body").append('<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>');
})();