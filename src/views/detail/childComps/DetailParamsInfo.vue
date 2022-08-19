<!--  -->
<template>
  <div id="param-info" v-if="Object.keys(paramInfo).length !==0">
    <div class="prama-title">{{paramInfo.info.key}}</div>
    <table v-for="(table,index) in paramInfo.rule.tables" :key="index" class="info-size">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-prama">
      <tr v-for="(info,index) in paramInfo.info.set">
        <th>{{info.key}}</th>
        <td>{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.info.images">
      <img   :src="paramInfo.info.images[0]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailParamsInfo",
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    }
  },

}
</script>

<style  scoped>
#param-info {
  font-size: 3vw;
  padding: 1vh 3vw;
  border-bottom: 1vh solid rgba(128, 128, 128, 0.2);
  color: var(--color-high-text);
}
 .prama-title{
  text-align: left;
  padding: 1vh;
  color: black;
  font-weight: 1000;
  font-size: 4vw;
  text-align: center;
}
.info-size,
.info-prama {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.5);
  border-collapse: collapse; /* 可以合并邻近的边框，且可以让tr显示出边框 */
  margin: 0 auto;
  margin-bottom: 0.42rem;
  width: 80vw;
}
.info-size tr,
.info-prama tr {
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.5);
}

.info-size td:nth-child(1) {
  text-align: left;
  padding-right: 1rem;
  white-space: nowrap;
  color: black;
}
.info-size td,
.info-prama td {
  padding: 1vh;

}


.info-prama>tr>th{
  text-align: left;
  color: black;
  font-weight: 500;
}


.info-img img {
  width: 100%;
}
</style>
