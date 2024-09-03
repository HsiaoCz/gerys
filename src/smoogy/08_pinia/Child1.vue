<template>
    <div class="child1">
        <p>{{ userInfo.count }}</p>
        <br>
        <p @click="updateTodo">{{ todoStore.todos }},{{ todoStore.total }}</p>
    </div>
</template>

<script setup lang="ts">
import useInfoStore from '../../store/module/info';

// 获取仓库数据
let userInfo = useInfoStore();
console.log(userInfo.count)

// 引入组合式API函数仓库
import useTodoStore from '../../store/module/todo';
let todoStore = useTodoStore();

// 修改todo数据
const updateTodo = () => {
    todoStore.updateTodo();
}
</script>

<style>
.child1 {
    width: 200px;
    height: 200px;
    background-color: bisque;
}
</style>