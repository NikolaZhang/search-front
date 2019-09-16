<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      router
      :default-active="$route.path"
      :collapse="collapse"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      style="height: 1000px;"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>数据管理</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">
            <span>数据库数据维护</span>
          </template>
          <el-menu-item index="/home/db-user">用户管理</el-menu-item>
          <el-menu-item index="/home/db-role">权限配置</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">
            <span>ES数据维护</span>
          </template>
          <el-menu-item index="/home/es-index">索引管理</el-menu-item>
          <el-menu-item index="/home/es-analy">分词器配置</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      
    };
  },
  computed: {
  },
  methods: {}
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
</style>