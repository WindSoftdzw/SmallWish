<template>
    <div style="height: 100%;width: 100%;display: flex;overflow: hidden;">
        <div class="top">
           <shine></shine>
            <img style="width: 15%;margin-left: 38%;margin-top: 5%;margin-bottom: 1%;" src="../assets/star1.png"/>
            <!-- <img src="../assets/shine.png" style="width: 3px;"> -->
            <div style="color: #f1dc21;margin-left: 35%;margin-bottom: 5%;">我的微心愿</div>
            <textarea v-model="msg" @click="activeClick" class="txt-area" :class="active ? 'not-active' : 'active'"></textarea>
            <div class="input-area">
                <div style="margin-right: 5%;color: white;font-size: 15px;line-height: 30px;z-index: 999;">心愿目标:</div>
                <div class="input-m">
                    <div style="position: relative;left: 25px;opacity: 0.5;">￥</div>
                    <input />
                </div>
            </div>
            <div style="text-align:center; color:#ac6311;font-size:15px;border-radius:50px;
              width:140px;height:40px;line-height:40px;background-color:#ffd800;margin-left:32%;margin-top: 50px;" @click="go">许下星愿</div>
        </div>
        <div class="bottom">
              <img src="../assets/fun.jpg" style="height:100%;width: 100%;">
          </div>
    </div>
</template>
<script>
import shine from '@/tools/starShine.vue'
export default {
  name: 'Wish',
  components: {
    shine
  },
  data () {
    return {
      active: false,
      msg: '闭眼三秒，写下你的小小心愿！'
    }
  },
  methods: {
    activeClick () {
      if (this.msg === '闭眼三秒，写下你的小小心愿！') {
        this.msg = ''
      }
      this.active = true
    },
    go () {
      this.$router.push({path: '/hello'})
    }
  }
}
</script>
<style scoped>
.active{
    color: darkgoldenrod;
}
.not-active{
    color: #ffffff;
}
.top{
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    height: 80%;
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
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 20%;
    width: 100%;
}
</style>
