<template>
    <div class="box">
        <h1>全局事件总线$bus</h1>
        <hr>
        <div class="container">
            <Child1></Child1>
            <Child2></Child2>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入子组件
import $bus from "../../bus";
import Child1 from "./Child.vue";
import Child2 from "./Child1.vue";
// 引入mitt
// emit 送数据
// on 接收数据
// 组合式API 函数
import { onMounted } from "vue";
// 组件挂载完毕的时候，当前组件绑定一个事件，接受将来兄弟组件传递来的数据

onMounted(() => {
    // 第一个参数：即为事件类型 第二个参数：即为事件的回调
    $bus.on("car", (car) => {
        console.log(car)
    })
})

</script>

<style scoped>
.bos {
    width: 100vw;
    height: 400px;
    background: yellowgreen;
}

.container {
    display: flex;
    justify-content: space-between;
}
</style>