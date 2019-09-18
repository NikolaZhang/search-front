<template>
<div>
    <div>
        <el-form :model='userForm' label-width='100px' label-position="left" style="width: 100%">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item :label='$t("lang.userForm.usernameLabel")'>
                        <el-input v-model='userForm.user_name' type='text' :placeholder='$t("lang.userForm.usernameInput")'></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item :label='$t("lang.userForm.roleLabel")'>
                        <el-select v-model='userForm.role' :placeholder='$t("lang.userForm.choose")'>
                            <el-option v-for='item in roleList' :key='item.value' :label='item.label' :value='item.value'>
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item :label='$t("lang.userForm.cipherLabel")'>
                        <el-select v-model='userForm.cipher' :placeholder='$t("lang.userForm.cipherLabel")'>
                            <el-option :label='$t("lang.userForm.man")' value='MAN'></el-option>
                            <el-option :label='$t("lang.userForm.woman")' value='WOMAN'></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item :label='$t("lang.userForm.phoneLabel")'>
                        <el-input v-model.number='userForm.phone' type='number' :placeholder='$t("lang.userForm.phoneInput")'></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item :label='$t("lang.userForm.descriptionLabel")'>
                        <el-input v-model='userForm.description' type='text' :placeholder='$t("lang.userForm.descriptionInput")'></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="2">
                    <el-button type='primary' style='margin-left: 10px' icon='el-icon-search' @click='searchUser'>{{$t("lang.userForm.searchUser")}}</el-button>
                </el-col>
                <el-col :span="2">
                    <el-button type='primary' style='margin-left: 10px' icon='el-icon-clean' @click='reset'>{{$t("lang.userForm.reset")}}</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
    <div>
        <el-table :data='userTable' highlight-current-row border stripe style='width: 100%'>
            <el-table-column prop='id' label='ID' align='center'></el-table-column>
            <el-table-column prop='username' :label='$t("lang.userForm.userTable.usernameLabel")' align='center'></el-table-column>
            <el-table-column prop='role' :label='$t("lang.userForm.userTable.roleLabel")' align='center'></el-table-column>
            <el-table-column prop='cipher' :label='$t("lang.userForm.userTable.cipherLabel")' align='center'></el-table-column>
            <el-table-column prop='phone' :label='$t("lang.userForm.userTable.phoneLabel")' align='center'></el-table-column>
            <el-table-column prop='description' :label='$t("lang.userForm.userTable.descriptionLabel")' align='center'></el-table-column>
            <el-table-column prop='createTime' :label='$t("lang.userForm.userTable.createTimeLabel")' align='center'></el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            userForm: {},
            roleList: [],
            userTable: []
        }
    },
    created() {
      this.searchUser();
    },
    methods: {
      searchUser() {
        let param = this.$common.jsonToGetRequestParam(this.userForm, 1, 10);

        console.log('请求参数：', param);
        this.$http.get('/api/sys/user/list' + param)
        .then(res => {
          console.log('查询用户返回结果：', res)
        }).catch(res => {
          
        });
      },
      reset() {

      },
    }
}
</script>

<style>

</style>
