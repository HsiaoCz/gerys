<template>
    <div class="box">
        <h1>props: 我是父组件</h1>
        <hr>
        <Child info="hello" :money="money"></Child>
    </div>
</template>

<script setup lang="ts">
// props: 可以实现父子组件通信，props数据还是只读的
import Child from "./child.vue";
import { ref } from "vue";
let money = ref(10000);

</script>

<style scoped>
.box {
    width: 100vw;
    height: 400px;
    background-color: yellowgreen;
}
</style>