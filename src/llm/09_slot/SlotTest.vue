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
    </div>
</template>


<script setup lang="ts">
import Test from './Test.vue';

// 插槽:默认插槽、具名插槽、作用域插槽

</script>

<style scoped></style>