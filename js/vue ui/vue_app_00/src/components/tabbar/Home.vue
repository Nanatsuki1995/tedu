<template>  
    <div class="app-home">
        <!--顶部导航条-->
        <mt-header fixed title="学子商城">

        </mt-header>
        <!--轮播图-->
        <mt-swipe>
          <mt-swipe-item v-for="item in list" :key="item.id">
            <img :src="item.img_url">
          </mt-swipe-item>
        </mt-swipe>
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href=" ">
              <img src="../../img/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../img/menu2.png" alt="">
            <div class="mui-media-body">商品</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
            <img src="../../img/menu3.png" alt="">
            <div class="mui-media-body">Chat</div>
          </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../img/menu4.png" alt="">
              <div class="mui-media-body">location</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../img/menu5.png" alt="">
              <div class="mui-media-body">Search</div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
              <img src="../../img/menu6.png" alt="">
              <div class="mui-media-body">Phone</div>
            </a>
          </li>
     </ul> 
        <!--tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href=" ">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                  <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { id: 1, img_url: "img/banner1.png" },
        { id: 2, img_url: "img/banner2.png" },
        { id: 3, img_url: "img/banner3.png" }
      ]
    };
  },

  methods: {
    handleImage() {
      // 1发送ajax请求服务器
      var url = "http://127.0.0.1:3000/imageList";
      this.axios.get(url).then(result => {
        console.log(result);
        this.list = result.data;
      });
      // 2接收服务器返回结果
      // 3将结果保存list
    }
  }
};
</script>
<style>
/*轮播图*/
.app-home .mint-swipe {
  height: 200px;
}
.app-home .mint-swipe img {
  width: 100%;
}
/*九宫格-图片宽度*/
.app-home .mui-grid-9 img {
  width: 60px;
  height: 60px;
}
/*九宫格 背景修改为白色*/
.app-home .mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
</style>

