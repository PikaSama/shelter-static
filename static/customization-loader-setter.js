var place;
var itv;
var lc;
var ck = docCookies.hasItem("newbie");
var custom = docCookies.hasItem("custom");
var autoNight = "0";
setInterval(function (){
    lc = window.location.pathname;
    if(lc == "settings" && itv != 0) {
        setter();
        itv = 0;
    }
    if(lc != "settings") {
        itv = 1;
    }
},1000);
function setter (){
    place = $(".φbi φy φg");
    place.append('<p id="loading">读取用户配置文件中...</p>');
    //var defaultTheme = "0";
    //var defaultThemeWidget = "999";
    //var wordcountMode = "0";
    if(ck == false) {
        setTimeout(function (){
            $("p#loading").remove();
            place.append('<p>读取用户配置文件失败：未满足读取条件，需查看<a href="/help">使用教程</a></p>')
        },1000);
    }
    else if(custom == false && ck == true) {
        setTimeout(function (){
            $("p#loading").remove();
            place.append('<p>用户配置文件为空，已自动创建新配置文件</p>');
            place.append('<p>目前正处于编辑模式，点击保存按钮即可生效配置文件</p>');
            docCookies.setItem("custom", "1", Infinity, "/", "shelter.beaa.cn", true);
            docCookies.setItem("auto_night", autoNight, Infinity, "/", "shelter.beaa.cn", true);
            //docCookies.setItem("default_theme", defaultTheme, Infinity, "/", "shelter.beaa.cn", true);
            //docCookies.setItem("default_theme_widget", defaultThemeWidget, Infinity, "/", "shelter.beaa.cn", true);
            //docCookies.setItem("wordcount_mode", wordcountMode, Infinity, "/", "shelter.beaa.cn", true);
            place.append('<h3>黑夜模式</h3><p>是否自动切换黑暗模式</p><p>黑暗模式时间段：19:00~6:00</p><input id="autonight_yes"type="radio"name="options"/><label for="autonight_yes"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label><input id="autonight_no"type="radio"name="options"/><label for="autonight_no"><span>否</span></label>');
        },1000);
    }
    else if(custom == true && ck == true) {
        setTimeout(function (){
            $("p#loading").remove();
            place.append('<p>成功读取配置文件</p>');
            place.append('<p>目前正处于编辑模式，点击保存按钮即可生效配置文件</p>');
            place.append('<h3>黑夜模式</h3><p>是否自动切换黑暗模式</p><p>黑暗模式时间段：19:00~6:00</p><input id="autonight_yes"type="radio"name="options"/><label for="autonight_yes"><span>是&nbsp;&nbsp;&nbsp;&nbsp;</span></label><input id="autonight_no"type="radio"name="options"/><label for="autonight_no"><span>否</span></label><input id="saveconfig"type="radio"name="options"/><label for="saveconfig"><span>&nbsp;&nbsp;&nbsp;&nbsp;保存</span></label>');
            autoNight = docCookies.getItem("auto_night");
            if (autoNight == "0") {
                $("input#autonight_no").attr("checked");
            }
            else {
                $("input#autonight_yes").attr("checked");
            }
        },1000);
    }
    $("input#autonight_yes").click(function (){
        autoNight = "1";
    });
    $("input#autonight_no").click(function (){
        autoNight = "0";
    });
}