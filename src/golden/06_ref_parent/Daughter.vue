<template>
    <div class="dau">
        <h1>this is daught component {{ money }}</h1>
        <button @click="handler($parent)">click this button will make money add 10000</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


// daughter money
let money = ref(100000)

const handler = ($parent: any) => {
    money.value += 10000
    console.log($parent)
    $parent.money -= 10000
}
</script>


<style scoped>
.dau {
    width: 300px;
    height: 300px;
    background: hotpink;
}
</style>