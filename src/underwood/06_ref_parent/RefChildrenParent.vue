<template>
    <div class="box">
        <h1>
            this is parent {{ money }}
        </h1>
        <button @click="handler">dept from som component</button>
        <Son ref="son"></Son>
        <hr>
        <Dau></Dau>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// ref:可以获取真实的DOM节点，可以获取到子组件实例VC
// $parent 可以在子组件内部获取父组件的实例

// 父组件
let money = ref(1000000);
// 子组件
import Son from "./Son.vue";
import Dau from "./Daughter.vue";

// 获取子组件的实例
let son = ref()

// 父组件内部的实例
const handler = () => {
    money.value + 10
    son.value.money -= 10
    son.value.fly()
}

// 对外暴露父组件的数据
defineExpose({
    money,
})
</script>
<style scoped>
.box {
    width: 100vw;
    height: 500px;
    background-color: pink;
}
</style>