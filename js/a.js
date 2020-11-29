var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
    full_page[0].style.background = "transparent";
}
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ヽ(●-`Д´-)ノ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '欢迎回来！';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
// var xiaokang = new xkTool();
// xiaokang.cheatTitle([leaveTitle, backTitle, leaveIcon, backIcon]);
// var xiaokang = new xkTool();
// xiaokang.magicCirle([radius, densety, color, clearOffset]);
// var xiaokang = new xkTool();
// xiaokang.footFish();