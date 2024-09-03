<template>
    <div class="child1">
        <h1>grandson components</h1>
        <h1>{{ car }}</h1>
        <button @click="updateCar"></button>
    </div>
</template>


<script setup lang="ts">
import { inject } from 'vue';

// 注入祖先组件提供数据
// 需要参数：即为祖先提供数据的key
let car = inject("TOKEN");
console.log(car);

const updateCar = () => {
    // 应该为
    // car.value="自行车"
    car = "自行车"
}
</script>

<style scoped>
.child1 {
    width: 200px;
    height: 200px;
    background: red;
}
</style>
