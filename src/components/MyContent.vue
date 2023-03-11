<template>
    <el-main>
        <el-card>
            <template #header>
                <div class="card-header">
                    <span>位置显示</span>
                </div>
            </template>
            <div class="v-charts" id="chartRef" :style="{ width: '900px', height: '1000px' }" />
        </el-card>

    </el-main>
</template>
<script lang="ts" setup>
import {
    ScatterChart,
    ScatterSeriesOption
} from 'echarts/charts';
import {
    GridComponent,
    GridComponentOption
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { onMounted } from 'vue';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
    GridComponentOption | ScatterSeriesOption
>;

// 注册必须的组件
echarts.use([
    GridComponent,
    ScatterChart,
    UniversalTransition,
    CanvasRenderer
]);
onMounted(() => {
    initChart();
});
function initChart() {
    let chart = echarts.init(document.getElementById('chartRef')!);
    var option: ECOption;

    option = {
        xAxis: {},
        yAxis: {},
        series: [
            {
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33],
                    [14.0, 8.96],
                    [12.5, 6.82],
                    [9.15, 7.2],
                    [11.5, 7.2],
                    [3.03, 4.23],
                    [12.2, 7.83],
                    [2.02, 4.47],
                    [1.05, 3.33],
                    [4.05, 4.96],
                    [6.03, 7.24],
                    [12.0, 6.26],
                    [12.0, 8.84],
                    [7.08, 5.82],
                    [5.02, 5.68]
                ],
                type: 'scatter'
            }
        ]
    };
    option && chart.setOption(option);
}

</script>
<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>