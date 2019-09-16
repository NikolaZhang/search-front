<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      router
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      style="height: 1000px;"
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="'/home'+item.index + subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="'/home'+item.index + subItem.index + threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="'/home'+item.index + subItem.index"
                :key="subItem.index"
              >{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          index: "/data-db",
          title: "数据库数据维护",
          subs: [
            {
              index: "/user",
              title: "用户管理"
            },
            {
              index: "/role",
              title: "权限配置"
            }
          ]
        },
        {
          index: "/data-es",
          title: "ES数据配置",
          subs: [
            {
              index: "/index",
              title: "索引"
            },
            {
              index: "/analy",
              title: "分词器配置"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      console.log(this.$route.path);
      return this.$route.path.replace("/", "");
    }
  },
  methods: {}
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
</style>