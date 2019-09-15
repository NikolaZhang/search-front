<template>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="../assets/emo.jpg" />
    </el-avatar>
  </div>
</template>
<script>
export default {
  methods: {
    data() {
      return {};
    },
    errorHandler() {
      return true;
    }
  }
};
</script>
