<template>
    <div>
        <h1>v-model: 钱数 {{ money }} {{ pageNo }}</h1>
        <input type="text" v-model="info">
        <hr>
        <!-- props: 父组件给子组件的数据 -->
        <Child :modelValue="money" @update:modelValue="handler"></Child>

        <!-- v-model 在组件身上使用 -->
        <!-- 第一：相当于给子组件传递props[modelValue] -->
        <!-- 第二：相当于给子组件绑定了一个自定义事件update:modelValue -->
        <Child v-model="money"></Child>
        <!-- 子组件给父组件数据 自定义事件 -->

        <!-- 使用子组件 -->
        <Child1 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child1>
    </div>
</template>

<script setup lang="ts">
// v-model指令：收集表单数据，数据双向绑定
// v-model 也可以实现组件之间的通信 实现父子组件数据同步
// 父组件给子组件数据 props
// 子组件给父组件数据 自定义事件

import { ref } from "vue";
// 引入子组件
import Child from "./Child.vue"

// 引入组件
import Child1 from "./Child1.vue"

let info = ref("")

// 父组件的数据
let money = ref(10000);

// 自定义事件的调用
const handler = (num: any) => {
    // 将来接收子组件传递过来的数据
    money.value = num
}

// 父组件的数据
let pageNo = ref(1)
let pageSize = ref(13)

</script>

<style scoped></style>