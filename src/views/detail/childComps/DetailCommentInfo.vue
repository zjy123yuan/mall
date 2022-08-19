<!--  -->
<template>
    <div id="detail_commentInfo">
    <div class="commentInfo_title">
      <span class="commentInfo_name">用户评价</span>
      <span class="commentInfo_more" >更多</span>
    </div>
    <div  v-if="Object.keys(rate).length != 0">
    <div class="commentInfo_info">
      <div class="u_info">
        <img :src="rate.user.avatar" alt="" />
        <span>{{ rate.user.uname }}</span>
      </div>
      <div class="commentInfo_content">
        <div class="content">{{ rate.content }}</div>
        <p class="content_info">
          {{ rate.created |showdata}} {{ rate.style }}
        </p>
      </div>
    </div>
    <div class="shop_reply" v-if="rate.explain != null">
      {{ rate.explain }}
    </div>
    <div class="commentInfo_img" v-if="rate.images != null">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in rate.images"
        :key="index"
      />
    </div>
    </div>
    <div v-else class="no_have">
      <span>暂时没有用户评价</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils.js";
export default {
  name:'DetailCommentInfo',
  props:{
    rate:{
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
  filters:{
    showdata(date){
      const time = new Date(date*1000)
      return formatDate(time,'yyyy-dd-MM HH:mm:ss')
    }
  },
  methods:{
    
  }
}
</script>

<style  scoped>
#detail_commentInfo {
  font-size: 2vh;
  padding: 1vh 2vw;
  border-bottom: 1vh solid rgba(128, 128, 128, 0.2);
}
.commentInfo_title {
  padding: 0.5vh 0;
  padding-bottom: 2vh;
  border-bottom: 0.1vh solid rgba(128, 128, 128, 0.3);
  position: relative;
}

.commentInfo_more {
  position: absolute;
  right: -1.5vw;
  top: 0;
}
.commentInfo_more::after {
  content: "";
  background: url("~assets/img/detail/right_arrow.svg") 0 0/1.06rem 1.06rem;
  display: inline-block;
  position: relative;
  top: 0.8vh;
  width: 5vw;
  height: 5vw;
}

.u_info {
  padding: 0.42vh 0;
  line-height: 10vw;
  display: flex;
}
.u_info img {
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  border: 0.04vw solid rgba(225, 224, 224, 0.993);
}
.u_info span {
  margin-left: 2vw;
}

.content {
  line-height: 4vh;
  color: #666;
}
.content_info {
  color: #999;
  padding: 0.5vh 0;
}

.shop_reply {
  border-top: 0.04rem solid rgba(128, 128, 128, 0.4);
  padding: 0.5vh 1vw;
  color: gray;
  line-height: 3vh;
  background-color: rgb(241, 239, 239);
}

.commentInfo_img img {
  margin-right: 2vw;
  width: auto;
  height: 15vh;
}
.no_have{
  padding: 1vh 0;
  text-align: center;
}
</style>
