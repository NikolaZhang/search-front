<template>
  <div class="backgrd">
    <!-- form表单区域 -->
    <div class="position-center-left">
        <div>
        <el-row>
          <el-col :span="3"><h1>我小叮当、</h1></el-col>
        </el-row>
      </div>
      <el-form :model="registerForm" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="用户名：">
              <el-input v-model="registerForm.username" placeholder="请输入用户名" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="密码：">
              <el-input v-model="registerForm.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="确认密码：">
              <el-input v-model="registerForm.passwordConfirm" placeholder="请再次确认密码" type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <el-button size="mini" type="primary" @click="registerFormSubmit">注册</el-button>
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
          this.$message({ type: "error", message: "未知错误！==>" + res });
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