<template>
  <div id="app">
    <headerbox></headerbox>
    <loading v-if="$store.state.loading"></loading>
    <router-view/>
  </div>
</template>

<script>
import headerbox from "@/components/header"
import loading from "@/components/loading"
export default {
  components:{
    headerbox,
    loading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align:center;
}
body{
  background: #dedede;
}
</style>
