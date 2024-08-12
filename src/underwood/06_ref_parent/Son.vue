<template>
    <div class="son">
        <h1>this is son components {{ money }}</h1>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';


let money = ref(10000)

const fly = () => {
    console.log("我可以飞")
}
// 组件内部数据对外关闭，别人不能访问
// 如果想让外部访问需要通过defineExpose方法对外暴露

defineExpose({
    money,
    fly,
})
</script>

<style scoped>
.son {
    width: 300px;
    height: 500px;
    background-color: skyblue;
}
</style>