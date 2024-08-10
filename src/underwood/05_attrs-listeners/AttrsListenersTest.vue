<template>
    <div>
        <h1>useAttrs</h1>
        <el-button type="primary" size="small" :icon="Edit"></el-button>
        <el-button type="primary" size="small" :icon="Check"></el-button>
        <el-button type="primary" size="small" :icon="Delete"></el-button>
        <el-button type="primary" size="small" :icon="Message"></el-button>
        <el-button type="primary" size="small" :icon="Search"></el-button>
        <el-button type="primary" size="small" :icon="Star"></el-button>
        <!-- 自定义的组件 -->
        <HintButton type="primary" size="small" :icon="Edit" title="编辑按钮"></HintButton>
    </div>
</template>


<script setup lang="ts">
// vue3 框架提供一个方法useAttrs方法，它可以获取组件身上的属性与事件！！
// 图标组件
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from "@element-plus/icons-vue"
import HintButton from "./HintButton.vue";
</script>


<style scoped></style>