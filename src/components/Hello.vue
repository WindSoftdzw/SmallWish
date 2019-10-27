<template>
<div style= "width: 100%;height: 100%;overflow-x:scroll;overflow-y: hidden;" ref = "star" class="parent"   >
    <div class="hello" ref="starwars"  @touchmove="scrollif" @touchend="scroll">
        <!-- <img src="../assets/star.gif"> -->
        <div style="display: flex;flex-direction: column;height: 100%;width: 100%;">
          <div class="top">
            <shine class="shine-1" @touchmove="scrollif" @touchend="scroll"></shine>
            <div class="top-past">
              <div style="width:4%;display: flex;flex-direction: column;justify-content:flex-start;margin-bottom: 50px;">
                <div>
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: 84px;left: -10px;" src="../assets/address.png">
                  <img @click="get" v-if="list[0].url" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;margin-left: 3px;" :src="list[0].url">
                  <img @click="get" v-else style="width:30px;height: 30px;z-index: 10;margin-left: 8px;" src="../assets/default.png">
                </div>
                <img @click="get" style="width: 120%;margin-left: 40%;margin-top: 2px;z-index: 10;" src="../assets/star.png"  >
              </div>
              <div style="width:5%;margin-top:-50px; margin-left:35px;display: flex;flex-direction: column;justify-content:flex-start;">
                <div>
                   <img    @click="get" style="width: 62px;z-index: -1;position: relative;top: 86px;left: -13px;" src="../assets/address.png">
                   <img    @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;" :src="list[1].url">
                </div>
                <!-- 190 -->
                <img   @click="get" style="width: 120%;margin-left: 15%;margin-top: 2px;" src="../assets/star.png">
              </div>
              <div  style="margin-right: 60px;width:4%; display: flex;flex-direction: column;justify-content:flex-start;">
                  <div>
                      <img   @click="get" style="width: 62px;z-index: -1;position: relative;top: 83px;left: -12px;" src="../assets/address.png">
                      <img   @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;" :src="list[2].url">
                  </div>
                   <!-- 250 -->
                   <img   @click="get" style="width: 110%;margin-left: 30%;margin-top: 2px;z-index: 10;" src="../assets/star.png"  >
              </div>
            </div>
            <div class="top-past">
              <div style="width:4%;display: flex;flex-direction: column;justify-content:flex-start;">
                <div>
                  <img   @click="get" style="width: 62px;z-index: -1;position: relative;top: 84px;left: -12px;" src="../assets/address.png">
                  <img   @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 15;" :src="list[3].url">
                </div>
                 <!-- 250 -->
                 <img   @click="get" style="width: 120%;margin-left: 40%;margin-top: 2px;z-index: 15;" src="../assets/star.png"  >
              </div>
              <div style="width:4%;display: flex;flex-direction: column;justify-content:flex-start;">
                <div>
                  <img   @click="get" style="width: 62px;z-index: -1;position: relative;top: 84px;left: -12px;" src="../assets/address.png">
                  <img   @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;" :src="list[4].url">
                </div>
                <!-- 250 -->
                   <img  @click="get" style="width: 100%;margin-left: 40%;margin-top: 2px;z-index: 10;" src="../assets/star.png"  >
              </div>
              <div style="width:4%;display: flex;flex-direction: column;justify-content:flex-start;">
              <div>
                <img @click="get" style="width: 62px;z-index: -1;position: relative;top: 84px;left: -12px;" src="../assets/address.png">
                <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;" :src="list[5].url">
              </div>
              <!-- 250 -->
                  <img @click="get" style="width: 140%;margin-left: 25%;margin-top: 2px;z-index: 10;" src="../assets/star.png"  >
              </div>
            </div>
            <div class="top-past">
              <div  style="margin-right: 135px;width:4%;display: flex;flex-direction: column;justify-content:flex-start;">
                <div>
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: 84px;left: -12px;" src="../assets/address.png">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;" :src="list[6].url">
                </div>
                  <img @click="get" style="width: 100%;margin-left:40%;margin-top: 2px;" src="../assets/star.png"  >
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex;flex-direction: column;height: 100%;">
          <div class="top">
            <shine class="shine"></shine>
            <div class="top-past">
              <div style="padding-top: 35px;width:8%;margin-right:95px;display: flex;flex-direction: column;justify-content:flex-start;">
                <img @click="get" style="width:40px;height: 40px;border-radius: 40px;flex-shrink: 0;" :src="list[7].url">
                <img @click="get" style="width: 100%;margin-left: 10%;margin-top: 14px;" src="../assets/star.png"  >
                <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -87px;left: -13px;" src="../assets/address.png">
              </div>
              <div style="padding-top: 60px;width:4%;margin-right:55px;display: flex;flex-direction: column;justify-content:flex-start;">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;flex-shrink: 0;" :src="list[8].url">
                  <img @click="get" style="width: 180%;margin-left: 25%;margin-top: 14px;" src="../assets/star.png"  >
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -85px;left: -13px;" src="../assets/address.png">
              </div>
                <div style="padding-top: 70px;width:4%;margin-right:35px;display: flex;flex-direction: column;justify-content:flex-start;">
                    <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[9].url">
                    <img @click="get" style="width: 150%;margin-left: 50%;margin-top: 14px;z-index: 15;" src="../assets/star.png"  >
                    <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -80px;left: -13px;" src="../assets/address.png">
                </div>
            </div>
            <div class="top-past">
              <div style="padding-top: 150px;width:4%;margin-left:35px;display: flex;flex-direction: column;justify-content:flex-start;">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[10].url">
                  <img @click="get" style="width: 210%;margin-left:15%;margin-top: 14px;z-index: 10;" src="../assets/star.png"  >
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -88px;left: -13px;" src="../assets/address.png">
              </div>
              <div style="padding-top: 50px;width:4%;margin-left:35px;display: flex;flex-direction: column;justify-content:flex-start;">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[11].url">
                  <img @click="get" style="width: 140%;margin-left:50%;margin-top: 14px;" src="../assets/star.png"  >
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -78px;left: -13px;" src="../assets/address.png">
              </div>
              <div style="padding-top: 80px;width:4%;margin-left:115px;display: flex;flex-direction: column;justify-content:flex-start;">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[12].url">
                  <img @click="get" style="width: 90%;margin-left:80%;margin-top: 14px;z-index: 10;" src="../assets/star.png"  >
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -70px;left: -13px;" src="../assets/address.png">
              </div>
            </div>
            <div class="top-past">
              <div style="padding-top: 60px;width:4%;margin-left:35px;display: flex;flex-direction: column;justify-content:flex-start;">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[13].url">
                  <img @click="get" style="width: 150%;margin-left:50%;margin-top: 14px;" src="../assets/star.png"  >
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -80px;left: -13px;" src="../assets/address.png">
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex;flex-direction: column;height: 100%;">
          <div class="top" style="z-index: 95;">
            <shine class="shine"></shine>
            <div class="top-past">
                <div style="padding-top: 30px;width:4%;margin-left: 5px;display: flex;flex-direction: column;justify-content:flex-start;">
                    <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[14].url">
                    <img @click="get" style="width: 250%;margin-left:75%;margin-top: 14px;" src="../assets/star.png"  >
                    <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -80px;left: -13px;" src="../assets/address.png">
              </div>
              <div style="padding-top: 60px;width:4%;margin-right:35px;display: flex;flex-direction: column;justify-content:flex-start;">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[15].url">
                  <img @click="get" style="width: 180%;margin-left:110%;margin-top: 14px;" src="../assets/star.png"  >
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -75px;left: -13px;" src="../assets/address.png">
              </div>
            </div>
            <div class="top-past">
              <div style="padding-top: 60px;width:4%;margin-left:35px;display: flex;flex-direction: column;justify-content:flex-start;">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[16].url">
                  <img @click="get" style="width: 210%;margin-left:100%;margin-top: 14px;" src="../assets/star.png"  >
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -78px;left: -13px;" src="../assets/address.png">
              </div>
            </div>
            <div class="top-past">
              <div style="padding-top: 60px;width:4%;margin-right: 150px;display: flex;flex-direction: column;justify-content:flex-start;">
                  <img @click="get" style="width:40px;height: 40px;border-radius: 40px;z-index: 10;flex-shrink: 0;" :src="list[17].url">
                  <img @click="get" style="width: 250%;margin-left:90%;margin-top: 14px;" src="../assets/star.png"  >
                  <img @click="get" style="width: 62px;z-index: -1;position: relative;top: -78px;left: -13px;" src="../assets/address.png">
              </div>
            </div>
          </div>
          <div class="bottom">
              <img/>
          </div>
        </div>
    </div>
    <div class="bottom" >
              <div style="z-index: -1;text-align:center; color:#ac6311;font-size:22px;border-radius:50px;
              width:140px;height:40px;line-height:40px;background-color:#ffd800;margin-left:32%;" @click="toWish">许下星愿</div>
              <img src="../assets/fun.jpg" style="height:78%;width: 100%;">
          </div>
</div>
</template>
<script>
import shine from '@/tools/starShine.vue'
export default {
  name: 'Hello',
  components: {
    shine
  },
  data () {
    return {
      width: 0,
      ifscroll: false,
      list: [{},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'https://wx1.sinaimg.cn/mw690/740ea70dly1g5w6jbxorej20u011h778.jpg'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://img4.imgtn.bdimg.com/it/u=4061777676,1387056566&fm=26&gp=0.jpg'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'},
        {url: 'http://mrw.so/4GAWkK'}
      ]
    }
  },
  methods: {
    scroll: function () {
      // this.scrollWidth = this.$refs.star.scrollLeft
      if (this.ifscroll) {
        if (this.$refs.star.scrollLeft + this.$refs.star.clientWidth + 1 > this.$refs.starwars.clientWidth) {
          this.$refs.star.scrollLeft = 0
        } else if (this.$refs.star.scrollLeft === 0) {
          this.$refs.star.scrollLeft = this.$refs.star.clientWidth * 2
          this.ifscroll = false
        }
      }
      this.ifscroll = false
    },
    scrollif: function () {
      // console.log(this.ifscroll)
      if (this.$refs.star.scrollLeft + this.$refs.star.clientWidth + 1 > this.$refs.starwars.clientWidth) {
        this.ifscroll = true
      } else if (this.$refs.star.scrollLeft === 0) {
        this.ifscroll = true
      }
    },
    prevent: function () {
      event.preventDefault()
    },
    get: function () {
      this.$router.push({path: '/catWish', name: 'CatWish'})
    },
    toWish () {
      this.$router.push({path: '/wish', name: 'Wish'})
    }
  }
}
</script>
<style scoped>
.parent::-webkit-scrollbar{
    display: none;
}
.shine-1{
  z-index: -1;
  position: fixed;
}
.hello{
    color: aqua;
    /* text-align: center; */
    font-size: 3em;
    width: 300%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
}
.top{
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 100.5%;
    border: none;
    z-index: 99;
    background: -moz-linear-gradient(top, #000000 0%, #ffffff 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#000000), color-stop(100%,#ffffff));
    background: -webkit-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: -o-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: -ms-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: linear-gradient(to bottom, #001e40 0%,#0455ae 120%);
}
.top-past{
  height: 25%;
  display: flex;
  flex-direction:row;
  /* z-index: 10; */
  justify-content: space-around;
}
.bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 27%;
    width: 100%;
}
</style>
