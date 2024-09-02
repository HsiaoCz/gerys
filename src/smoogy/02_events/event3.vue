<template>
  <div>
    <h1>事件</h1>
    <!-- 原生DOM事件 -->
    <pre @click="handler">
    大江东去，浪淘尽，千古风流人物
    </pre>
    <button @click="handler1(1, 2, 3, 4)">点击我传递多个参数</button>
    <hr>
    <!-- 在vue2中这种写法为自定义事件，可以通过.native修饰符变为原生的DOM事件 -->
    <!--在vue3中为原生的DOM事件 -->
    <!-- vue3 原生的DOM事件不管是放在标签身上、组件标签身上都是原生DOM事件 -->
    <event1 @click="handler2"></event1>

    <!-- 引入子组件 -->
    <!-- 绑定自定义事件xxx:实现子组件给父组件传递数据 -->
    <event2 @xxx="handler3" @click="handler4"></event2>
  </div>
</template>

<script setup lang="ts">
// 引入子组件
import event1 from './event1.vue';
// 引入子组件2
import event2 from './event2.vue';
// 事件回调 1
const handler = (event: any) => {
  // event 即为事件对象
  console.log(event)
  alert(123);
};

// 事件回调2
const handler1 = (a: any, b: any, c: any, $event: any) => {
  console.log(a, b, c, $event)
}

// 事件的回调3
const handler2 = () => {
  console.log("hello")
}

// 事件的回调4
// 这里param 接收子组件传递来的参数
const handler3 = (param1: any, param2: any) => {
  console.log(param1, param2)
}

// 事件的回调5
const handler4 = (param1: any, param2: any) => {
  console.log(param1, param2)
}
</script>

<style scoped></style>
