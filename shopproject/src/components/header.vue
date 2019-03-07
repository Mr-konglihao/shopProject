<template>
    <div class="box">
        <div class="view">
            <router-link to="/">首页</router-link>
            <router-link to="/shopcar">购物车</router-link>
            <router-link to="/login">登录</router-link>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
    .box{
        background: orange;
        text-align:center;
    }
    .view{
        width: 1300px;
        height:50px;
        line-height:50px;
        text-align:center;
        color:white;
        margin:0 auto;
    }
    a{
        padding:0 10px;
        margin:0 20px;
    }
</style>