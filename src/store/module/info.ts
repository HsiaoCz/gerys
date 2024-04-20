// 定义info 小仓库
import { defineStore } from "pinia";

// 方法需要传递两个参数 第一个参数：小仓库名字
// 第二个参数 小仓库配置对象
// defineStore方法执行会返回一个函数，函数作用就是让组件可以获取仓库数据

let useInfoStore = defineStore("info", {
  // 存储数据:state
  state: () => {
    return {
      count: 99,
      arr: [1, 2, 3, 4, 5, 5, 8, 6, 7, 6],
    };
  },
  // actions 添加方法
  actions: {
    // 注意 函数没有了context上下文对象
    // 使用this this 是仓库的对象
    // 没有了commit、没有mutation
    updateNum(a: any, b: any) {
      console.log(a, b);
      this.count++;
    },
  },
  getters: {
    total() {
      let result: any = this.arr.reduce((prev: number, next: number) => {
        return prev + next;
      }, 0);
      return result;
    },
  },
});

// 对外暴露数据
export default useInfoStore;
