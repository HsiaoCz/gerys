<template>
    <div class="child">
        <h1>{{ infoStore.count }}</h1>
        <button @click="updateCount">click me to update store data</button>
    </div>
</template>

<script setup lang="ts">
import userInfoStore from "../../store/module/info";
// 获取小仓库对象
let infoStore = userInfoStore();
console.log(infoStore)

// 修改仓库数据
const updateCount = () => {
    // infoStore.count++
    // 使用patch 也可以修改数据
    // infoStore.$patch({
    //     count: 1111,
    // })

    // vuex的方法
    // 传递数据
    infoStore.updateNum(11, 12);
    // 仓库调用自身的方法去修改数据

}
</script>

<style scoped>
.child {
    width: 200px;
    height: 300px;
    background-color: aqua;
}
</style>