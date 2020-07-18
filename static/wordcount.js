//脚本来源： https://wardzhou.art
//根据hexo-wordcount修改
//0.5秒后加载
setTimeout(function (){
    //将含有class=φgj φo的元素赋值到wordcount
    var wordcount = $("[class='φgj φo']");
    //获取第一个<article>元素并将其文本内容的长度赋值到words，即获取文章字数
    var words = document.querySelector("article").innerText.length;
    //获取<article>元素内<img>元素的数量并赋值到imgs，即获取图片数量
    var imgs = $("article img").length;
    //获取所有<meting-js>元素并将其文本内容的长度赋值到metinglist，用于获取更精确的字数
    var metinglist = document.querySelectorAll("meting-js");
    var meting = 0;
    var i;
    for (i = 0; i < metinglist.length; i++) {
        meting = meting + metinglist[i].innerText.length;
    }
    //获取第一个<is-f>元素并将其文本内容的长度赋值到copyright，用于获取更精确的字数
    var copyright = document.querySelector("is-f").innerText.length;
    //获取含有class=φdt的第一个元素并将其文本内容的长度赋值到reward，用于获取更精确的字数
    var reward = document.querySelector("is-k").innerText.length;
    //重新计算字数(正文内容)
    words = words - meting - copyright - reward;
    //估算阅读时间(假设每分钟阅读400字，阅读图片10张)，保留一位小数，字数范围为words，copyright和reward(整篇文章)
    var readtime = (Math.round((words + copyright + reward) / 40) + imgs) / 10 + '分';
    //字数超1000单位改为k，不显示具体字数，不超显示具体字数
    if (words < 1000) {
        return;
    }
    //文章字数，单位k，保留一位小数
    else {
        words = Math.round(words / 100) / 10 + 'k';
    }
    //插入元素
    wordcount.append('<span class="words"><i class="ri-quill-pen-line"></i>' + '字数统计：' + words + ' </span>');
    wordcount.append('<span class="readtime"> <i class="ri-book-open-line"></i>' + ' 阅读时间：' + readtime + '</span>');
},500);