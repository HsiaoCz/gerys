<template>
    <div>
        <h1>Slot</h1>
        <Test>
            <!-- 匿名插槽 -->
            <div>
                <pre>大江东去</pre>
            </div>
            <!-- 具名插槽 -->
            <template v-slot:abc>
                <div>填充具名插槽</div>
            </template>

            <template v-slot:efg>
                <div>填充匿名插槽</div>
            </template>
        </Test>

        <Test1 :todos="todos">
            <template v-slot="todo">
                <h1>{{ todo }}</h1>
            </template>
        </Test1>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import Test from './Test.vue';

// 插槽:默认插槽、具名插槽、作用域插槽
// 作用域插槽：就是可以传递数据的插槽，子组件可以将数据回传给父组件
// 父组件可以决定这些回传的数据以何种结构或者外观在子组件内部去展示

import Test1 from './Test1.vue';

let todos = ref([
    { id: 1, title: "吃饭", done: true },
    { id: 2, title: "睡觉", done: true },
    { id: 3, title: "打豆豆", done: true },
    { id: 4, title: "打牌", done: true },
])
</script>

<style scoped></style>