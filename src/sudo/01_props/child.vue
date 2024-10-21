<script setup lang="ts">
// 组合式API
// 需要使用defineProps方法去接收父组件传递过来的数据
// defineProps是vue3提供的方法，不需要引入直接使用
let props = defineProps(['info', 'money']) // 数组或对象的写法都行
console.log(props)

// 按钮点击的回调
const updateProps = () => {
    // props.money +=1
    // props 的数据是只读的
    console.log(props.info)
    console.log(props.money)
}
</script>

<template>
    <div class="son">
        <h1>我是子组件:hello</h1>
        <p>{{ props.info }}</p>
        <p>{{ props.money }}</p>


        <!-- props 可以省略前面的名字 -->
        <p>{{ info }}</p>
        <p>{{ money }}</p>

        <!-- props 数据只读 -->
        <button @click="updateProps">修改</button>
    </div>
</template>

<style scoped>
.son {
    width: 400px;
    height: 200px;
    background-color: hotpink;
}
</style>