var posts=["2024/04/25/it-tools工具箱开发人员在线工具集合/","2024/04/13/lskypro/","2024/04/23/wordpress添加观影和书单插件-wp-douban/","2024/04/14/安卓ssh软件-管理员之手/","2024/04/16/wordpress文章自动采集插件autopost-pro/","2024/04/14/安卓本地部署alist-软件版/","2024/05/09/彩虹工具箱/","2024/04/22/服务器文件备份阿里云盘/","2024/04/13/海底捞小积木/","2024/04/13/每日60s早报-读懂世界/","2024/04/14/邮箱留言反馈源码/","2024/04/13/🐸牛蛙锅☺/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };