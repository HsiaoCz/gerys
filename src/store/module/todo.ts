// 定义组合式API仓库

import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 创建小仓库

let useTodoStore = defineStore("todo", () => {
  let todos = ref([
    { id: 1, title: "吃饭" },
    { id: 2, title: "睡觉" },
    { id: 3, title: "打豆豆" },
  ]);
  // 定义一个数组
  let arr = ref([1, 2, 3, 4]);

  // 计算属性
  const total = computed(() => {
    return arr.value.reduce((prev, next) => {
      return prev + next;
    }, 0);
  });
  // 箭头函数务必要返回一个对象：属性与方法可以提供给组件使用
  return {
    todos,
    arr,
    total,
    updateTodo() {
      console.log(todos.value);
      todos.value.push({ id: 5, title: "hello" });
    },
    // 如果想计算属性
  };
});

export default useTodoStore;
