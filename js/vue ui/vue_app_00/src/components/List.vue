<template>
    <div id="app">
        <h3>数据列表</h3>
        <ul>
            <!-- <li v-for="item in list">
                {{item.id}}:{{item.name}}:{{item.age}}
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
        list:[
            {id:1,name:"tom",age:19},
            {id:2,name:"zx",age:22},
            {id:3,name:"yqy",age:25},
        ]
    };
  }
};
</script>
<style>
.app {
  color: red;
  font-size: 16px;
}
</style>


