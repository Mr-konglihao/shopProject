<template>
    <div class="view">
        <img :src="arr.imageUrl" alt="">
        <h2>{{arr.title}}</h2>
        <p>价格:￥{{arr.priceStr}}</p>
        <p>{{arr.salePoint}}</p>
        <p>收藏:{{arr.nice}}</p><br>
        <button>加入购物车</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                arr:{}
            }
        },
        created(){
            this.$store.commit("loading_show")
            this.$http.get('/api/detail',{params:{goodId:this.$route.query.goodId}}).then((res)=>{
                this.arr=res.data[0];
                this.$store.commit("loading_hide")
            })
        }
    }
</script>
<style scoped>
    .view{
        width:800px;
        height:530px;
        margin:50px auto;
        background: white;
        padding:5px;
    }
    .view img{
        width:790px;
        height:370px;
    }
    button{
        width:100px;
        height:30px;
        background: red;
        border:0px;
        outline: none;
        color:white;
        border-radius: 20px;
        cursor: pointer;
    }
    button:active{
        box-shadow: 5px 5px 10px rgb(247, 38, 38, 0.6);
    }
</style>