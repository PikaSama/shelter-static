//脚本来源： https://wardzhou.art
//根据hexo-wordcount修改
//加载提示
window.onload = function() {
    var loading = $("[class='φgj φo']");
    loading.append('<span class="load_wordcount">Loading...</span>');
    //1秒后加载
    setTimeout(function (){
        //获取第一个<article>元素并将其文本内容的长度赋值到words，即获取文章字数
        var words = document.querySelector("article").innerText.length;
        //获取<article>元素内<img>元素的数量并赋值到imgs，即获取图片数量
        var imgs = $("article img").length;
        //获取所有<meting-js>元素并赋值到metings，用于获取更精确的字数
        var metings = document.querySelectorAll("meting-js");
        var meting = 0;
        var i;
        //判断是否含有<meting-js>元素，没有则meting=0，有则将每一个<meting-js>元素的文本内容长度相加
        if (metings.length > 0) {
            for (i = 0; i < metings.length; i++) {
                meting = meting + metings[i].innerText.length;
                //debug
                //console.log(metings[i]);
            }
        }
        var copyright = 0;
        //判断<is-f>元素是否存在，不存在则copyright=0，存在则将其文本内容长度赋值到copyright
        if (document.querySelector("is-f") != null) {
            copyright = document.querySelector("is-f").innerText.length;
        }
        //判断<is-k>元素是否存在，不存在则reward=0，存在则将其文本内容长度赋值到copyright
        var reward = 0;
        if (document.querySelector("is-k") != null) {
            reward = document.querySelector("is-k").innerText.length;
        }
        //重新计算字数(正文内容)
        //debug
        //console.log(words);
        words = words - meting - copyright - reward;
        //估算阅读时间(假设每分钟阅读400字，阅读图片10张)，保留一位小数，字数范围为words，copyright和reward(整篇文章)
        var readtime = (Math.round((words + copyright + reward) / 40) + imgs) / 10;
        //字数超1000，显示估计字数，不超显示具体字数
        if (words < 1000) {
            words = '= ' + words + ' words';
        }
        //估计文章字数，单位k，保留一位小数
        else {
            words = '≈ ' + Math.round(words / 100) / 10 + 'k' + ' words';
        }
        //阅读时间大于1分钟，显示原阅读时间，小于1分钟，当做1分钟
        if (readtime > 1) {
            readtime = '≈ ' + readtime + ' mins';
        }
        else {
            readtime = '≈ 1 min';
        }
        //debug
        //console.log(words);
        console.log(meting);
        //console.log(reward);
        //console.log(copyright);
        //console.log(readtime);
        //删除元素
        $("[class='load_wordcount']").remove()
        //将含有class=φgj φo的元素赋值到countplace
        var countplace = $("[class='φgj φo']");
        //插入元素
        countplace.append('<span class="words"><i class="ri-quill-pen-line"></i>' + words + '</span>');
        countplace.append('<span class="readtime">&nbsp;&nbsp;<i class="ri-book-open-line"></i>' + readtime + '</span>');
    },1000);
}