<template>
  <div>
    <el-container>
      <el-header>
        <menuTop></menuTop>
      </el-header>
      <el-container>
        <el-aside>
          <menuLeft></menuLeft>
        </el-aside>
        <el-container>
          <el-main>
            <transition name="move" mode="out-in">
              <router-view />
            </transition>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menuLeft from "@/components/LeftMenu.vue";
import menuTop from "@/components/TopMenu.vue";
export default {
  name: "home",
  components: { menuLeft, menuTop },
  data() {
    return {};
  }
};
</script>

<style scoped>
.el-header {
  color: #333;
  padding: 0px;
}
.el-footer {
  background-color: rgb(192, 192, 192);
  color: #333;
  line-height: 60px;
}
</style>
