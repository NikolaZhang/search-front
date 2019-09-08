import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {   //this.$store.state.num 拿到数据
    isLogin: localStorage.getItem('isLogin') || false,
    userInformation: JSON.parse(localStorage.getItem('userInformation')) || [],
  },
  mutations: {  //this.$store.commit('updateUserInformation', info) 调用函数
    //修改登录状态和登录信息
    updateUserInformation(state, data) {
      //data 存在，说明用户已经登录了
      if (data) {
        state.userInformation = data;
        state.isLogin = true;
        localStorage.setItem('isLogin', true);
        localStorage.setItem('userInformation', JSON.stringify(data));
      } else {
        state.userInformation = data;
        state.isLogin = false;
        localStorage.removeItem('userInformation');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('data');
      }
    },
  },
  actions: {  //this.$store.dispatch('changeNumber') 调用函数
    changeNumber(context) {
      context.commit('addNum');

    }
  },
  getters: {  //this.$store.getters.getCount
    getCount(state) {
      return state.num > 10 ? state.num : 0;
    }
  },
})
