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
                    <el-checkbox size="small" v-model="o.istrue"/>
                </el-col>
                <el-col :span="5">
                    <el-input placeholder="地址" clearable size="small" v-model="o.input_status.add_content"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-input placeholder="x" clearable size="small" v-model="o.input_status.x_content"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-input placeholder="y" clearable size="small" v-model="o.input_status.y_content"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-input placeholder="z" clearable size="small" v-model="o.input_status.z_content"></el-input>
                </el-col>
                <el-col :span="2">
                    <el-input placeholder="角度" clearable size="small" v-model="o.input_status.angle_content"></el-input>
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
        istrue: true,
        input_status: {
            add_content: '',
            x_content: '',
            y_content: '',
            z_content: '',
            angle_content: '',
        }
    },
    {
        id: 2,
        istrue: false,
        input_status: {
            add_content: '',
            x_content: '',
            y_content: '',
            z_content: '',
            angle_content: '',
        }
    },
    {
        id: 3,
        istrue: true,
        input_status: {
            add_content: '',
            x_content: '',
            y_content: '',
            z_content: '',
            angle_content: '',
        }
    },
    {
        id: 4,
        istrue: false,
        input_status: {
            add_content: '',
            x_content: '',
            y_content: '',
            z_content: '',
            angle_content: '',
        }
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