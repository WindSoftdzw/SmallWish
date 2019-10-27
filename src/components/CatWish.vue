<template>
    <div style="height: 100%;width: 100%;display: flex;overflow: hidden;" ref="homePage">
        <div class="top">
          <el-carousel :autoplay="false" indicator-position="none" height="550px" @change="indexChange" :loop="false" arrow="always">
            <el-carousel-item v-for="(item,index) in list" :key="index">
                <img  style="width: 10%;height: 8%;margin-left: 45%;margin-bottom: 1%;border-radius: 50%;" :src="item.userUrl"/>
                <!-- <img src="../assets/shine.png" style="width: 3px;"> -->
                <div style="color: #d2d2d2;margin-left: 45%;width: 30%;font-size: 13px;align: center;">{{item.userName}}</div>
                <div class="wish-speak">{{item.wish}}</div>
                <div class="wish-money">{{item.haveMoney}}/{{item.wishMoney}}</div>
                <img v-if="(item.status == 0)" src="../assets/2.png" style="width: 80%;margin-left:10%;">
                <img v-else src="../assets/0.png" style="width: 80%;margin-left:10%;">
                <div class="opreation">
                    <div style="width: 20%;">
                        <img @click="loveClick" src="../assets/1.png" v-if="item.loveStatus == 0" style="width: 60%;margin-left: 20%;">
                        <img @click="hasLoveClick" src="../assets/3.png" v-else style="width: 60%;margin-left: 20%;">
                        <div style="color: #ffffff;font-size: 13px;text-align: center;">{{item.love}}人祝福</div>
                    </div>
                    <div style="width: 20%;" v-if="item.status==0">
                        <img @click="go()" src="../assets/money.png" style="width: 60%;margin-left: 20%;">
                        <div @click="go()" style="color: #FFFFFF;font-size: 13px;text-align: center;">小捐一笔</div>
                    </div>
                </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="bottom">
            <div v-if="(status==0)" style="text-ali:center; color:#ac6311;font-size:15px;border-radius:50px;
              width:140px;height:40px;line-height:40px;background-color:#ffd800;margin-left:32%;text-align: center;position: absolute;top: 20%;z-index: 101;" @click="go(list[pageIndex].wishMoney)">为他/她实现</div>
            <img src="../assets/fun.jpg" style="height:100%;width: 100%;">
        </div>
    </div>
</template>
<script>
// import Swiper from 'swiper'
import shine from '@/tools/starShine.vue'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'CatWish',
  components: {
    shine
  },
  data () {
    return {
      active: false,
      msg: '闭眼三秒，写下你的小小心愿！',
      userName: '叶枫',
      num: 42,
      status: 0,
      pageIndex: 0,
      mouseIndexX: 0,
      mouseIndexY: 0,
      list: [{
        userName: '叶枫',
        userUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572756092&di=1c35e930b7f6b2cb6bec670b65c6da55&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F16%2F20181216144135_sumsw.jpg',
        wish: '不用工作',
        haveMoney: 1000,
        wishMoney: 1000000,
        love: 56,
        status: 0,
        loveStatus: 0
      }, {
        userName: '叶枫',
        userUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572756092&di=1c35e930b7f6b2cb6bec670b65c6da55&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F16%2F20181216144135_sumsw.jpg',
        wish: '不用工作',
        love: 56,
        haveMoney: 100,
        wishMoney: 100,
        status: 1,
        loveStatus: 1
      }]
    }
  },
  methods: {
    activeClick () {
      this.msg = ''
      this.active = true
    },
    touchStart (e) {
      this.mouseIndexX = e.targetTouches[0].clientX
      this.mouseIndexY = e.targetTouches[0].clientY
    },
    loveClick () {
      // 点赞请求
    },
    hasLoveClick () {
      this.$message(
        {
          message: '你已经点过赞了',
          type: 'warning',
          center: true,
          showClose: true
        }
      )
    },
    go (a) {
      console.log(a)
      this.$router.push({path: '/donation', query: {money: a}})
    },
    indexChange (e) {
      this.pageIndex = e
      this.status = this.list[e].status
    }
  }
}
</script>
<style scoped>
@import url("../../node_modules/swiper/dist/css/swiper.css");
.el-carousel__container{
    height: 80%;
}
.active{
    color: darkgoldenrod;
}
.not-active{
    color: #ffffff;
}
.swiper-container {
    width: 100%;
    height: 500px;
}
.top{
    padding-top: 5%;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 85%;
    width: 100%;
    border: none;
    z-index: 99;
    background: -moz-linear-gradient(top, #000000 0%, #ffffff 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#000000), color-stop(100%,#ffffff));
    background: -webkit-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: -o-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: -ms-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: linear-gradient(to bottom, #001e40 -30%,#0455ae 120%);
}
    .wish-speak{
        color: #795548;
        font-weight: 600;
        text-align: center;
        position: relative;
        font-size: 14px;
        top: 30%;
        width: 50%;
        margin-left: 25%;
    }
    .wish-money{
        color: #795548;
        font-weight: 400;
        text-align: center;
        position: relative;
        font-size: 12px;
        top: 40%;
        width: 50%;
        margin-left: 25%;
    }
    .opreation{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 5%;
    }
    .txt-area{
        height: 25%;
        width: 80%;
        margin-left: 10%;
        z-index: 999;
        font-size: 15px;
        /* margin-top: 30%; */
        resize:none;
        background: rgba(0, 0, 50, 0.3);
        /* opacity: 0.3; */
        /* font-optical-sizing:  */
        border: none;
        outline: none;
    }
    .input-area{
        width: 100%;
        padding-left: 8%;
        z-index: 999;
        display: flex;
        flex-direction: row;
        margin-top: 10%;
    }
    .input-m{
         color: #d2d2d2;
         display: flex;
         flex-direction: row;
         font-size: 20px;
         width: 70%;
         height: 35px;
         line-height: 35px;
         border: none;
        outline: none;
    }
    .input-m input{
        background: rgba(0, 0, 50, 0.3);
         color: #ffffff;
         font-size: 20px;
         width: 60%;
         height: 35px;
         border: none;
        outline: none;
        padding-left: 25px;
        text-align: center;
        font-weight: 500;
    }
.bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 20%;
    width: 100%;
}
</style>
