<template>
    我是子组件哦
    <p>子组件得到的name：{{ props.name }}</p>
    <p>子组件得到的age：{{ props.age }}</p>
    <button @click="changename('df')"> change df</button>
    ``````````````````````<br/>
    count:{{count}}
  </template>
  <script setup lang="ts">
  import { defineProps, defineEmits, defineExpose,ref} from 'vue'

  
  const props = defineProps({
    name: {
      type: String,
      default: "六卿",
    },
    age: {
      type: Number,
      default: 279
    }
  })
  const emits = defineEmits(['changename']);
  const changename=(name)=>{
    console.log("change name"+name)
    //name.value=name
    emits('changename',name)
  }
  const count =ref(100)
  const changeCount=(num)=>{
    count.value=--count.value+num
  }
  defineExpose({
    changeCount
  })
  </script>
