<template>
<div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#303133" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" disabled>
            <label>Nikola Zhang</label>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">{{$t("lang.topMenu.workCenter")}}</template>
            <el-menu-item index="2-1">1</el-menu-item>
            <el-menu-item index="2-2">2</el-menu-item>
            <el-menu-item index="2-3">3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">{{$t("lang.topMenu.messageCenter")}}</el-menu-item>
        <el-menu-item index="5" class="avatar-pos">
            <avatarRight></avatarRight>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
import avatarRight from "./Avator.vue";
export default {
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1"
        };
    },
    components: {
        avatarRight
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style scoped>
.avatar-pos {
    float: right;
    margin-right: 50px;
}
</style>
