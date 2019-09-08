<template>
  <div class="backgrd">
    <div class="position-center-left">
      <div>
        <el-row>
          <el-col :span="3">
            <h1>我小叮当、</h1>
          </el-col>
        </el-row>
      </div>
      <br />
      <br />
      <!-- form表单区域 -->
      <el-form :model="loginForm" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="用户名：">
              <el-input v-model="loginForm.username" placeholder="请输入用户名" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="密码：">
              <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <el-button size="mini" type="primary" @click="loginFormSubmit">我要进入。。。</el-button>
          </el-col>
          <el-col :span="2">
            <router-link :to="{name: 'register'}">免费注册</router-link>
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
            localStorage.setItem("isLogin", JSON.stringify(true));
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