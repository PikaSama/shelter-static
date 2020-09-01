/*
 Author: Zorin
 Github: https://github.com/PikaSama
 License: GPL-3.0 License
 Description: Custom settings for MiniValine.
 */
(async () => {
  // 新人标识
  const iscommon = docCookies.hasItem("newbie");
  // 自定义配置标识
  const custom = docCookies.hasItem("custom");
  // 插入js的位置
  const jsPlace = $(".φbz.φy .φbl");
  // 评论重载状态
  const isreload = docCookies.getItem("mvreload");
  // 页面路径
  const lct = window.location.pathname;
  await sleep(500);
  // 插入元素
  jsPlace.append('<div id="mvcomments"></div>');
  // 重载按钮函数
  const reloadBtn = async () => {
    // 延长加载时间
    if (lct == "/settings") {
        await sleep(1200);
    }
    else {
        await sleep(500);
    }
    // 添加重载按钮
    $("div.veditor-area").append('<i class="ri-restart-line"></i>');
    // 添加按钮监听事件
    await sleep(500);
    $("div.veditor-area i.ri-restart-line").click(() => {
      window.location.reload();
      // 写入状态至cookie
      docCookies.setItem("mvreload", "1" , Infinity, "/", "shelter.beaa.cn", true);
    });
    // 如果重载状态为真
    if (isreload == "1") {
      // 平滑移动至评论页面
      document.querySelector("div#mvcomments").scrollIntoView({behavior:"smooth"});
      // 写入状态至cookie
      docCookies.setItem("mvreload", "0" , Infinity, "/", "shelter.beaa.cn", true);
    }
  }
  // 是否有配置文件，且不是新人
  if (custom == true && iscommon == true) {
    // 表情包列表
    const bqburl = docCookies.getItem("bqb_url").split("\n");
    new MiniValine({
      el: '#mvcomments',
      appId: 'ttYI150SFqRvNaPjk4EVRxiK-MdYXbMMI',
      appKey: 'Fzp4k911NNwypCfF38SNBwu8',
      placeholder: '给我的文章加点评论吧~',
      adminEmailMd5: '48abadfa9a1039f1d9576ec102a055bc',
      enableQQ: true,
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
      enableQQ: true,
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
})();