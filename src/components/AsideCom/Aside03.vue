<template>
    <el-card>
        <template #header>
            <div class="card-header">
                <span>显示设置</span>
            </div>
        </template>
        <el-row>
            <el-col :span="8" class="col_center">
                <el-button>开始记录轨迹</el-button>
            </el-col>
            <el-col :span="8" class="col_center">
                <el-button>生成轨迹路线</el-button>
            </el-col>
            <el-col :span="8" class="col_center col_end">
                <el-button>隐藏网格线</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" class="col_center">
                <el-button>轨迹坐标导出</el-button>
            </el-col>
            <el-col :span="8" class="col_center">
                <el-button>显示界面复位</el-button>
            </el-col>
            <el-col :span="8" class="col_center col_end">
                <el-button>清除显示信息</el-button>
            </el-col>
        </el-row>
        <el-input v-model="textarea" :rows="2" type="textarea" placeholder="Please input" />
    </el-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
const textarea = ref('')
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
    justify-content: space-between;
}

.col_end {
    justify-content: flex-end;
}
</style>