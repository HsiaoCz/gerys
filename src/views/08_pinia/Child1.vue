<template>
    <div class="child1">
        <p>{{ userInfo.count }}</p>
    </div>
</template>

<script setup lang="ts">
import useInfoStore from '../../store/module/info';

// 获取仓库数据
let userInfo = useInfoStore();
console.log(userInfo.count)
</script>

<style>
.child1 {
    width: 200px;
    height: 200px;
    background-color: bisque;
}
</style>