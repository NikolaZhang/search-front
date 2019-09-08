// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import storage from 'good-storage'
import store from './state/index'

Vue.prototype.$http = axios;

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


//请求拦截
axios.interceptors.request.use(req => {
  if (JSON.parse(localStorage.getItem("isLogin"))) {
    req.headers.token = localStorage.getItem("token");
  }
  console.log("请求拦截", req);
  return req;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});


//响应拦截
axios.interceptors.response.use(res => {
  console.log("响应拦截：", res);
  localStorage.setItem("token", res.headers.token);
  return res;
}, error => {
  localStorage.removeItem("token");
  // Do something with response error
  if (error.response.status === 401) {
    store.commit('updateUserInformation');
    //退出，通知各个组件，传一个false
    router.push("/login");
  }
  return Promise.reject(error);
});
