<template>
  <div class="backgrd">
    <div class="position-center-left">
      <div>
        <el-row>
          <el-col :span="3">
            <h1>{{$t("lang.login.title")}}</h1>
          </el-col>
          <el-col :span="3" style="bottom:0px">
            <a href="#" @click="changeLangEvent">{{$t("lang.login.language")}}</a>
          </el-col>
        </el-row>
      </div>
      <br />
      <br />
      <!-- form表单区域 -->
      <el-form :model="loginForm" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item :label="$t('lang.login.usernameLabel')">
              <el-input
                v-model="loginForm.username"
                :placeholder="$t('lang.login.usernameInput')"
                type="text"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item :label="$t('lang.login.passwordLabel')">
              <el-input
                v-model="loginForm.password"
                :placeholder="$t('lang.login.passwordInput')"
                type="password"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <el-button
              size="mini"
              type="primary"
              @click="loginFormSubmit"
            >{{$t("lang.login.loginButton")}}</el-button>
          </el-col>
          <el-col :span="2">
            <router-link :to="{path: '/register'}">{{$t("lang.login.registerButton")}}</router-link>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "login",
  data() {
    return {
      loginForm: {}
    };
  },
  created() {},
  methods: {
    // 登录系统
    loginFormSubmit() {
      this.$http
        .get(
          "/api/sys/user/login?username=" +
            this.loginForm.username +
            "&password=" +
            this.loginForm.password
        )
        .then(res => {
          if (res.data.success) {
            localStorage.setItem("isLogin", true);
            this.$router.push({ path: "/home" });
          } else {
            this.$message({
              type: "error",
              message: res.data.message
            });
          }
        })
        .catch(res => {
          this.$message({ type: "error", message: "未知错误！==>" + res });
        });
    },
    changeLangEvent() {
      if (this.lang === "zh-CN") {
        this.lang = "en-US";
        this.$i18n.locale = this.lang; //关键语句
      } else {
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang; //关键语句
      }
      this.$http.get("/api/sys/user/language?lang=" + this.lang);
    }
  }
};
</script>

<style scoped>
.backgrd {
  background-image: url("../assets/touhou.png");
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 1000px;
}

.position-center-left {
  padding-left: 200px;
  padding-top: 200px;
}
</style>