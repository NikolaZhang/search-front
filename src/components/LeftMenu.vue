<template>
<div class="sidebar">
    <el-menu class="sidebar-el-menu" router :default-active="$route.path" :collapse="collapse" background-color="#303133" text-color="#fff" active-text-color="#ffd04b" unique-opened style="height: 1000px;">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{$t("lang.leftMenu.dataManage")}}</span>
            </template>
            <el-submenu index="1-1">
                <template slot="title">
                    <span>{{$t("lang.leftMenu.database")}}</span>
                </template>
                <el-menu-item index="/home/db-user">{{$t("lang.leftMenu.userManage")}}</el-menu-item>
                <el-menu-item index="/home/db-role">{{$t("lang.leftMenu.roleManage")}}</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
                <template slot="title">
                    <span>{{$t("lang.leftMenu.es")}}</span>
                </template>
                <el-menu-item index="/home/es-index">{{$t("lang.leftMenu.indexManage")}}</el-menu-item>
                <el-menu-item index="/home/es-analy">{{$t("lang.leftMenu.analyManage")}}</el-menu-item>
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
    computed: {},
    methods: {}
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
}
</style>
