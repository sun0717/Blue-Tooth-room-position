<template>
    <el-aside width="500px">
        <Aside00 class="gap"/>
        <Aside01 class="gap"/>
        <Aside02 class="gap"/>
        <Aside03/>
    </el-aside>
</template>
<script lang="ts" setup>
import Aside00 from './AsideCom/Aside00.vue';
import Aside01 from './AsideCom/Aside01.vue';
import Aside02 from './AsideCom/Aside02.vue';
import Aside03 from './AsideCom/Aside03.vue';
</script>
<style scoped>
.gap {
    margin-bottom: 30px;
}
</style>