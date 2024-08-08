<template>
    <div class="child">
        <p>我是子组件2</p>
        <button @click="handler">点击我触发自定义事件</button>
        <button @click="$emit('click', 'ak', 'j20')">点击我触发自定义事件</button>
    </div>
</template>


<script setup lang="ts">
// 利用defineEmits方法返回函数触发自定义事件
// defineEmits方法不需要引入直接使用
let $emit = defineEmits(['xxx', 'click'])
console.log($emit)

const handler = () => {
    // 第一个参数：事件类型 第二个参数，第三个参数 第n个参数为注入数据
    $emit("xxx", "addds", "hangmu")
}
</script>

<style scoped>
.child {
    width: 400px;
    height: 200px;
    background: pink;
}
</style>