<template>
    <el-card>
        <template #header>
            <div class="card-header">
                <span>定位器列表</span>
            </div>
        </template>
        <div class="text item">
            <el-row>
                <el-col :span="2">
                    ·
                </el-col>
                <el-col :span="5">
                    地址
                </el-col>
                <el-col :span="5">
                    x
                </el-col>
                <el-col :span="5">
                    y
                </el-col>
                <el-col :span="5">
                    z
                </el-col>
                <el-col :span="2">
                    角度
                </el-col>
            </el-row>
        </div>
        <div v-for="o in list_mock" :key="o.id" class="text item">
            <el-row>
                <el-col :span="2">
                    <el-checkbox size="large" v-model="o.istrue"/>
                </el-col>
                <el-col :span="5">
                    <el-input placeholder="地址" clearable></el-input>
                </el-col>
                <el-col :span="5">
                    <el-input placeholder="x" clearable></el-input>
                </el-col>
                <el-col :span="5">
                    <el-input placeholder="y" clearable></el-input>
                </el-col>
                <el-col :span="5">
                    <el-input placeholder="z" clearable></el-input>
                </el-col>
                <el-col :span="2">
                    <el-input placeholder="角度" clearable></el-input>
                </el-col>
            </el-row>
        </div>
        <el-row>
            <el-col :span="8" class="col_center">
                <el-button>关闭节点</el-button>
            </el-col>
            <el-col :span="8" class="col_center">
                <el-button>删除节点</el-button>
            </el-col>
            <el-col :span="8" class="col_center">
                <el-button>设置节点</el-button>
            </el-col>
        </el-row>
    </el-card>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

let list_mock = reactive([
    {
        id: 1,
        istrue: true
    },
    {
        id: 2,
        istrue: false
    },
    {
        id: 3,
        istrue: true
    },
    {
        id: 4,
        istrue: false
    }
]);

</script>
<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
    text-align: center;
}

.item {
    margin-bottom: 18px;
}

.col_center {
    display: flex;
    justify-content: center;
}
</style>