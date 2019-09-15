<template>
  <div class="backgrd">
    <!-- form表单区域 -->
    <div class="position-center-left">
        <div>
        <el-row>
          <el-col :span="3"><h1>{{$t("lang.register.title")}}</h1></el-col>
        </el-row>
      </div>
      <el-form :model="registerForm" label-width="150px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item :label='$t("lang.register.usernameLabel")'>
              <el-input v-model="registerForm.username" :placeholder='$t("lang.register.usernameInput")' type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item :label='$t("lang.register.passwordLabel")'>
              <el-input v-model="registerForm.password" :placeholder="$t('lang.register.passwordInput')" type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item :label='$t("lang.register.passwordConfirmLabel")'>
              <el-input v-model="registerForm.passwordConfirm" :placeholder="$t('lang.register.passwordConfirmInput')" type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <el-button size="mini" type="primary" @click="registerFormSubmit">{{$t("lang.register.registerButton")}}</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      registerForm: {}
    };
  },
  created() {},
  methods: {
    // 注册系统
    registerFormSubmit() {
      this.$http
        .get(
          "/api/sys/user/register?username=" +
            this.registerForm.username +
            "&password=" +
            this.registerForm.password
        )
        .then(res => {
          this.$message({
            type: res.data.success ? "success" : "error",
            message: res.data.message
          });
        })
        .catch(res => {
          this.$message({ type: "error", message:  res });
        });
    }
  }
};
</script>

<style scoped>
.backgrd {
  background-image: url("../assets/molisha.png");
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: 40%;
  width: 100%;
  height: 1000px;
}

.position-center-left {
  padding-left: 200px;
  padding-top: 200px;
}
</style>