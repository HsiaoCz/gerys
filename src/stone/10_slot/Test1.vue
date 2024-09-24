<template>
    <div class="box">
        <h1>作用域插槽</h1>
        <p>{{ todos }}</p>
        <ul>
            <li :style="{ color: item.done ? 'green' : 'red' }" v-for="item in todos" :key="item.id">{{ item.title }}
                <!-- 作用域插槽：可以将数据回传给父组件 -->
                <slot :$row="item"></slot>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// 通过props 接收父组件传递过来的数据
defineProps(["todos"]);
</script>

<style scoped>
.box {
    width: 100vw;
    height: 400px;
    background-color: skyblue;
}
</style>