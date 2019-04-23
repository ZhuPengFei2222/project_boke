import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{       
        count : 1       
    },
    mutations:{
       add : function(){
             count++
       },
       remove : function(){
             count--
       }
    }
})

export default store;