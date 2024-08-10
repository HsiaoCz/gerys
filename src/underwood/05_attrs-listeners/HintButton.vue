<template>
    <div title="$attrs.title">
        <h1>1222</h1>
        <el-button :="$attrs"></el-button>
        <h1 v-bind="{ a: 1, b: 2 }"></h1>
    </div>
</template>

<script setup lang="ts">
// 接收父组件传递过来的数据
// 引入useAttrs 方法：获取组件标签身上的属性与事件
// 原生DOM事件 和自定义事件都可以接收到
import { useAttrs } from 'vue';
// 此方法执行会返回一个对象
let $attrs = useAttrs();
console.log($attrs)

// 万一用props接收title
let props = defineProps(["title"])
console.log(props.title)

// console.log($attrs)
// porps 接收了参数 attrs就接收不到了 优先级props更高

// props与useAttrs方法都可以获取父组件传递过来的属性与属性值
// 但是Props接收了 useAttrs方法就获取不到了
</script>

<style scoped></style>