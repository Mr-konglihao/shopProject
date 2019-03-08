<template>
    <div>
        <p v-if="!$store.state.token">您还没有登录，<router-link to="/login">请登录</router-link></p>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
    
</style>