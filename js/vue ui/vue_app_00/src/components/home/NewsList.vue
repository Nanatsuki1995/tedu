<template>
  <div class="app-newslist">
    <h3>新闻列表</h3>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
              <span>{{item.ctime}}</span>
              <span>点击{{item.point}}次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>   
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    getnewsList() {
      var url = "http://127.0.0.1:3000/newslist";
      this.axios.get(url).then(result => {
        // console.log(result);
        this.list = result.data.data;
      });
    }
  },
  created() {
    this.getnewsList();
  }
};
</script>
<style>
.app-newslist li .mui-ellipsis {
  display: flex;
  font-size: 12px;
  color: #226aff;
  justify-content: space-between;
}
</style>
