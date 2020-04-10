import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

  Vue.use(Vuex)
 
  var state = {
      data:'',
      uid:'',
      AWord:'一言加载中...',
      format:'json',
  }
  
  const actions = {
        getWeather(context){
            axios({
                method: "get",
                url: "https://bird.ioliu.cn/weather",
                params: {
                   city:state.uid
                }
              })
                .then(response => {
                  context.commit('changeData',response.data)
                })
                .catch(function(error) {
                  console.log(error);
                });
        },
        getAWord(context){
          axios({
              method: "get",
              url: "https://api.fczbl.vip/hitokoto/",
              params: {
                  encode:state.format
              }
            })
              .then(response => {
                context.commit('changeAWord',response.data.hitokoto)
              })
              .catch(function(error) {
                console.log(error);
              });
      },
  }

  const mutations = {
    changeData (state,obj){
        state.data = obj
    },
    changeAWord(state,obj){
      state.AWord = obj
  },
  }

  const store = new Vuex.Store({
      state,
      actions,
      mutations
  })

  export default store;