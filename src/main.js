// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './route/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import common from './common/common.js'

Vue.prototype.$http = axios;
Vue.use(VueI18n); 
Vue.use(ElementUI);
Vue.prototype.$common = common;


const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale 
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en')    // 英文语言包
  }
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//请求拦截
axios.interceptors.request.use(req => {
  req.headers.lang = i18n.locale;
  if (localStorage.getItem("isLogin")) {
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
    // 退出，通知各个组件，传一个false
    // router.push("/login");
  }
  return Promise.reject(error);
});


new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
