<template>
    <el-tree-v2
      style="max-width: 600px"
      :data="data"
      :props="propss"
      :height="208"
      v-if="props.showenable"
    />
  </template>
  <script lang="ts" setup>
import { installLabelLayout } from 'echarts/types/dist/shared';
import {defineComponent,watch,getCurrentInstance,nextTick,ref} from   "vue";
import { VueCropper } from 'vue-cropper';
var showA=true
const props = defineProps({
    value: {
      type: String,
      default: "六卿",
    },
    label: {
      type: String,
      default: "zzzz"
    },
    children: {
      type: String,
      default: "children"
    },
    showenable:{
        type: Boolean,
      default: true

    }
  })


  const message = ref('Hello!')
const changeMessage = async newMessage => {
message.value = newMessage
var data = createData(4, 30, 40)
await nextTick()
console.log('Now DOM is updated')
}
  
//   that.$forceUpdate()


    //const data = createData(4, 30, 40)
  
  interface Tree {
    id: string
    label: string
    children?: Tree[]
  }

  
  const getKey = (prefix: string, id: number) => {
    return `${prefix}-${id}`
  }
  let keyname="dddd"
  
  const createData = (
    maxDeep: number,
    maxChildren: number,
    minNodesNumber: number,
    deep = 1,
    key =props.label
  ): Tree[] => {
    let id = 0
    return Array.from({ length: minNodesNumber })
      .fill(deep)
      .map(() => {
        const childrenNumber =
          deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
        const nodeKey = getKey(key, ++id)
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber
            ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
            : undefined,
        }
      })
  }
  
  const propss = {
    value: 'id',
    label: 'label',
    children: 'children',
  }




  //
  var data = createData(4, 30, 40)
 

  watch(() => props.label, (newCount, oldCount) => {
  console.log(`count changed from ${oldCount} to ${newCount}`);
    ///data = [];

data = createData(2, 10, 4)
  console.log(data)
//   let { ctx: that } = getCurrentInstance()
 

// nextTick(() => {
//    showA=true
// });
})

 

  </script>