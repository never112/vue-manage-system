<template>
    <div class="container">
        <div class="plugins-tips">
            vue-echarts：Apache ECharts™ 的 Vue.js 组件。 访问地址：
            <a href="https://github.com/ecomfe/vue-echarts" target="_blank">vue-echarts</a>
        </div>
        <el-card class="mgb20" shadow="hover">
            <template #header>
                <div class="content-title">柱状图</div>
            </template>
            <v-chart class="schart" :option="barOptions" v-if="shows" />
        </el-card>
        <div>
            <testcomponet  :label="name"ref="content" :showenable="shows"/>
        </div>
        <button @click="edit(message)">父组件的按钮</button>
        <div>{{message}}</div>
        <Children2  ref="childx" :name="name" :age="age" showenable= shows @changename="cchan"/>
        <button @click="changeCount">父组件按钮__改变count的值</button>
    
       
    </div>
</template>

<script setup lang="ts" name="echarts">
import Children2 from './zz.vue'
import {  use } from 'echarts/core';
import { BarChart, LineChart, PieChart, MapChart } from 'echarts/charts';
import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';
import 'echarts-wordcloud';
//import  tm from './testcomponet'
import { barOptions, lineOptions, pieOptions, ringOptions, wordOptions, mapOptions } from './options';
import chinaMap from '@/utils/china';
import testcomponet from './testcomponet.vue';
import {ref,onMounted,defineComponent} from "vue";
import { VueCropper } from 'vue-cropper';
import { messageConfig } from 'element-plus';
const name = ref('LiuQing')
//var name="sdfsdfsdf"
const age = ref(18)
use([


    CanvasRenderer,
    BarChart,
    GridComponent,
    LineChart,
    PieChart,
    MapChart,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
]);
const label="zzzzzzz"
var shows=true
var message="sdfsdfszzzz5555"

let content = ref();
 
console.log("setup中使用：", content.value); // undefined
const cchan=(newname)=>{
    //console.log(newname)
    name.value=newname
}
 

 
const edit = (me) => {
  // 执行子组件中的 isChild 方法
  // 修改子组件中的 age 数据
  //content.value.info.age++;
  name.value="sdfsdfzzz123";
  shows=false
  console.log("44444444"+me)
  message="zzzzzzzzzz"
  content.value.keyname="sdfsdf"
  console.log(content.value.label);
  console.log(content.value.keyname);

  shows=true

}
const childx = ref()
const changeCount=()=>{
    //console.log(childx.value.count,'child.value.count')
    console.log(childx.value.changeCount,'child.value.changeCount')
    childx.value.changeCount(5)
}


</script>

<style scoped>
.schart {
    width: 100%;
    height: 400px;
}

.content-title {
    font-weight: 400;
    font-size: 22px;
    color: #1f2f3d;
}
</style>
