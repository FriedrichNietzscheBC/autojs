//等待无障碍
auto.waitFor();

launchApp("网易云音乐");
sleep(5000);

//menu icon  
desc("抽屉菜单").findOnce().click();

sleep(1000);

//云贝中心
click(500,750);