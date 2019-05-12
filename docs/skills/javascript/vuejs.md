# VusJs

## Vue 双向数据绑定原理

  Object.defindproperty:数据劫持，结合发布-订阅模式
  Object.defindproperty 劫持各个属性的 setter 和 getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
