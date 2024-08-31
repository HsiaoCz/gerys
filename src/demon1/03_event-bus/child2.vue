<template>
    <div class="child2">
        <h2>我是子组件2</h2>
        <button @click="handler">点击我给兄弟组件送一台法拉利</button>
    </div>
</template>

<script setup lang="ts">
// 引入$bus对象
import $bus from '../../bus';
// 点击按钮回调
const handler = () => {
    $bus.emit('car', { car: "法拉利" })
}
</script>

<style scoped>
.child2 {
    width: 300px;
    height: 200px;
    background: blue;
}
</style>