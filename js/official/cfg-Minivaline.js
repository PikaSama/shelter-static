/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Custom settings for MiniValine.
 */
(() => {
  let i = setInterval(()=>{
    if(typeof delay != "undefined"){
      clearInterval(i);
      main();
    }
  },500);
  async function main(){
    await delay(500);
    // 新人标识
    const iscommon = localStorage.getItem("newbie");
    // 自定义配置标识
    const custom = localStorage.getItem("custom");
    // 插入js的位置
    const jsPlace = $(".φbz.φh .φbh");
    // 评论区位置
    const mvfix = $(".φbz.φh");
    // 评论重载状态
    const isreload = localStorage.getItem("mvreload");
    // 页面路径
    const lct = window.location.pathname;
    // 插入元素
    jsPlace.append('<div id="mvcomments"></div>');
    // --- 函数区 ---
    // 重载按钮函数
    const reloadBtn = async () => {
      // 延长加载时间
      if (lct == "/settings") {
        await delay(1200);
      }
      else {
        await delay(500);
      }
      // 添加重载按钮
      $("div.veditor-area").append('<i class="ri-restart-line"></i>');
      // 设置显示层级
      mvfix.attr("style","z-index:0;");
      // 添加按钮监听事件
      await delay(500);
      $("div.veditor-area i.ri-restart-line").click(() => {
        window.location.reload();
        // 写入状态至cookie
        localStorage.setItem("mvreload", "1");
      });
      // 如果重载状态为真
      if (isreload == "1") {
        // 平滑移动至评论页面
        document.querySelector("div#mvcomments").scrollIntoView({behavior:"smooth"});
        // 写入状态至cookie
        localStorage.setItem("mvreload", "0");
      }
    }
    // ------------
    // --- 代码区 ---
    // 是否有配置文件，且不是新人
    if (custom != null && iscommon != null) {
      // 表情包列表
      const bqburl = localStorage.getItem("bqb_url").split("\n");
      new MiniValine({
        el: '#mvcomments',
        appId: 'ttYI150SFqRvNaPjk4EVRxiK-MdYXbMMI',
        appKey: 'Fzp4k911NNwypCfF38SNBwu8',
        placeholder: '给我的文章加点评论吧~',
        adminEmailMd5: '48abadfa9a1039f1d9576ec102a055bc',
        emoticonUrl: bqburl
      });
      await reloadBtn();
    }
    else {
      new MiniValine({
        el: '#mvcomments',
        appId: 'ttYI150SFqRvNaPjk4EVRxiK-MdYXbMMI',
        appKey: 'Fzp4k911NNwypCfF38SNBwu8',
        placeholder: '给我的文章加点评论吧~',
        adminEmailMd5: '48abadfa9a1039f1d9576ec102a055bc',
        emoticonUrl: [
          'https://cdn.jsdelivr.net/npm/alus@latest',
          'https://cdn.jsdelivr.net/gh/MiniValine/Bilibilis@latest',
          'https://cdn.jsdelivr.net/gh/MiniValine/twemoji@latest',
          'https://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/bilibiliHotKey',
          'https://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-Daily',
          'https://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-NEWYEAR-2019',
          'https://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/HONKAI3-AIChan',
          'https://cdn.jsdelivr.net/gh/PikaSama/blog-emoticons@1.1.2/Coolapk'
        ]
      });
      await reloadBtn();
    }
  }
})();