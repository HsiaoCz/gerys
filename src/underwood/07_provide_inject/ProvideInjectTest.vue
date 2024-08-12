<template>
    <div class="box">
        <h1>Provide与Inject</h1>
        <hr>
        <child></child>
    </div>
</template>

<script setup lang="ts">
import child from './Child.vue';
import { provide, ref } from "vue";

// vue3 提供provide(提供)与inject(注入)，可以实现隔辈儿组件传递数据
let car = ref("法拉利")

// provide 是一个方法
// 第一个参数就是提供的数据 的Key
// 第二个参数：祖先组件提供的数据
provide("TOKEN", car)
</script>


<style scoped>
.box {
    width: 100vw;
    height: 600px;
    background-color: skyblue;
}
</style>