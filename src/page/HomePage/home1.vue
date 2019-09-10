<template>
  <div>
    <div>
      <el-input v-model="document" placeholder="请输入" style="width:200px"></el-input>
    </div>
    <br><br>
    <div>
      <el-button type="primary" style="margin-left: 10px" icon="el-icon-search" @click="query">搜索</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "search",
  data() {
    return {
      document: ""
    };
  },
  methods: {
    query() {
      this.msgAlert("success", "success");
      axios({
          url: "http://127.0.0.1:8100/document/" + this.document,
          method: 'get'
      }).then(res => {
          this.msgAlert('success', '文件被找到');
      }).catch(res => {
          this.msgAlert('error', '文件没找到');
      });
    },
    msgAlert(type, msg) {
      this.$message({
        type: type,
        message: msg
      });
    }
  }
};
</script>

<style>
</style>