import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
    state:{
        loading:false,
        token:''
    },
    mutations:{
        loading_show(state){
            state.loading=true;
        },
        loading_hide(state){
            state.loading=false;
        },
        update_token(state,a){
            state.token=a;
            localStorage.token=a;
        }
    }
})