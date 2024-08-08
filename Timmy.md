# some

## 1、组件通信方式

### 1.1、Vue2的组件通信方式

- porpos:可以实现父子组件、子父组件、甚至兄弟组件通信
- 自定义事件： 可以实现子父组件通信
- 全局事件总线$bus: 可以实现任意组件通信
- pubsb: 发布订阅模式实现任意组件通信
- vuex: 集中式状态管理容器，实现任意组件通信
- ref: 父组件获取子组件实例VC，获取子组件的响应式数据以及方法
- slot: 插槽（默认插槽，具名插槽、作用域插槽）实现父子组件通信。。。

#### 1.1.1、props

props可以实现父子组件通信，在vue3中我们可以通过defineProps获取父组件传递的数据，且在组件内部不需要引入defineProps方法可以直接使用

父组件给组件传递数据

#### 1.1.2、自定义事件

在vue框架中事件分为两种：一种是原生的DOM事件，另一种自定义事件
原生DOM事件可以让用户与网页进行交互，自定义事件可以实现子组件给父组件传递数据

#### 1.1.3、全局事件总线

全局事件总线可以实现任意组件通信，在vue2中可以根据VM与VC关系推出全局事件总线
但是在vue3中没有Vue构造函数，也就没有Vue.prototype，以及组合式API写法没有this
那么vue3想实现全局事件总线的功能可以使用插件mitt实现

#### 1.1.4、v-model 组件之间的通信

v-model可以实现父子组件同步