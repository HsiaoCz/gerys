<template>
    <div class="box">
        <h1>我是默认插槽</h1>
        <!-- 默认插槽 -->
        <slot></slot>
        <h1>我是子组件默认插槽</h1>
        <h1>具名插槽填充数据</h1>
        <slot name="abc"></slot>
        <h1>具名插槽填充数据</h1>
        <slot name="efg"></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.box {
    width: 100px;
    height: 200px;
    background-color: skyblue;
}
</style>