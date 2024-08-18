<template class="box">
    <div>
        <h1>Pinia</h1>
        <hr>
        <div class="container">
            <Child></Child>
            <Child1></Child1>
        </div>

    </div>
</template>

<script setup lang="ts">
// vue : 集中式管理状态容器，可以实现任意组件之间通信
// 核心概念: state、mutations、actions、getters、modules

// pinia: 集中式管理状态容器，可以实现任意组件之间的通信
// 核心概念: state、actions、getters
// pinia 两种写法 选择式API 组合式API
// import child1
import Child from "./Child.vue"
// import child1
import Child1 from "./Child1.vue"

</script>

<style scoped>
.box {
    width: 300px;
    height: 400px;
    background-color: skyblue;
}

.container {
    display: flex;
}
</style>