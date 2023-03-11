<template>
    <el-card shadow="always">
        <el-row class="mb-4 aside-00">
            <el-button>自动定位</el-button>
            <el-select v-model="value" class="m-2" :options="options" @change="handleChange"
                :placeholder="options[0].label">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-button>动态图</el-button>
        </el-row>
    </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const value = ref([]);
const handleChange = (value: any) => {
    console.log(value)
}
const options = [
    {
        value: 'static_position',
        label: '静态定位'
    },
    {
        value: 'dynamic_position',
        label: '动态定位'
    }
]
</script>
<style scoped>
.aside-00 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}
</style>