<template>
  <div style="position: fixed;width: 100%;height: 100%;top: 0;z-index: -1;">
    <img
      v-show="item.left > shine"
      v-for="(item,index) in list1"
      :key="index + ''"
      style="position: fixed"
      :style="{top: item.top + 'px',left: item.left + 'px'}"
      src="../assets/shine.png"
    />
    <img
      v-show="item1.left < shine"
      v-for="(item1,index1) in list2"
      :key="index1+30"
      style="position: fixed"
      :style="{top: item1.top + 'px',left: item1.left + 'px'}"
      src="../assets/shine.png"
    />
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
export default {
  mounted () {
    this.timer = setInterval(this.shineClick, 3000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  data () {
    return {
      shine: 82,
      list1: [
        {
          top: 32,
          left: 28
        },
        {
          top: 56,
          left: 89
        },
        {
          top: 152,
          left: 120
        },
        {
          top: 352,
          left: 270
        },
        {
          top: 352,
          left: 334
        },
        {
          top: 26,
          left: 91
        },
        {
          top: 391,
          left: 11
        },
        {
          top: 264,
          left: 90
        },
        {
          top: 46,
          left: 35
        },
        {
          top: 11,
          left: 15
        },
        {
          top: 25,
          left: 325
        },
        {
          top: 107,
          left: 5
        },
        {
          top: 196,
          left: 223
        },
        {
          top: 37,
          left: 285
        },
        {
          top: 219,
          left: 255
        },
        {
          top: 48,
          left: 275
        },
        {
          top: 559,
          left: 10
        },
        {
          top: 347,
          left: 192
        },
        {
          top: 190,
          left: 240
        },
        {
          top: 185,
          left: 318
        },
        {
          top: 462,
          left: 123
        },
        {
          top: 358,
          left: 165
        },
        {
          top: 527,
          left: 70
        },
        {
          top: 395,
          left: 94
        },
        {
          top: 243,
          left: 295
        },
        {
          top: 120,
          left: 280
        },
        {
          top: 428,
          left: 28
        },
        {
          top: 257,
          left: 171
        },
        {
          top: 196,
          left: 21
        }
      ],
      list2: [
        {
          top: 120,
          left: 280
        },
        {
          top: 300,
          left: 120
        },
        {
          top: 420,
          left: 60
        },
        {
          top: 500,
          left: 180
        },
        {
          top: 60,
          left: 320
        },
        {
          top: 265,
          left: 280
        },
        {
          top: 395,
          left: 241
        },
        {
          top: 300,
          left: 140
        },
        {
          top: 592,
          left: 340
        },
        {
          top: 340,
          left: 95
        },
        {
          top: 420,
          left: 160
        },
        {
          top: 240,
          left: 190
        },
        {
          top: 489,
          left: 254
        },
        {
          top: 366,
          left: 150
        },
        {
          top: 523,
          left: 285
        },
        {
          top: 460,
          left: 182
        },
        {
          top: 581,
          left: 310
        },
        {
          top: 415,
          left: 40
        },
        {
          top: 352,
          left: 162
        },
        {
          top: 428,
          left: 310
        },
        {
          top: 245,
          left: 95
        },
        {
          top: 195,
          left: 146
        },
        {
          top: 62,
          left: 390
        },
        {
          top: 471,
          left: 190
        },
        {
          top: 320,
          left: 290
        },
        {
          top: 429,
          left: 230
        },
        {
          top: 410,
          left: 30
        },
        {
          top: 156,
          left: 190
        },
        {
          top: 485,
          left: 350
        }
      ]
    }
  },
  methods: {
    shineClick () {
      let index = Math.ceil(Math.random() * 355)
      this.shine = index
      console.log(index)
    },
    get () {
      this.shine++
      console.log(this.shine)
    }
  }
}
</script>
