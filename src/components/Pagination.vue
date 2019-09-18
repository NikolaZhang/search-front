// 该组件使用方法参考
// <uploadMine
// ref="uploadMine"
// :uploadMsg="communityUploadData"
// v-on:update="receiveBannerUrl"
// ></uploadMine>

<template>
  <div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pagination.sizes"
        :page-size="pagination.size"
        :total="pagination.total"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pagination"],
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
        currentPage : 1
    };
  }
};
</script>