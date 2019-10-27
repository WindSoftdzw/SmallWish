<template>
  <div style="height: 100%;width: 100%;display: flex;overflow: hidden;">
        <div class="top">
            <div class="form-info">
                <div class="title">捐款信息</div>
                <div class="form-input">
                    <div style="margin-top: 4%;height: 100%;width: 20%;" class="flex-row">
                        捐款金额
                        <div class="must">*</div>
                    </div>
                    <input v-model="money">
                    <div style="margin-top: 4%;height: 100%;margin-left: 5%;padding-left: 5%;">元</div>
                </div>
                <div class="form-input">
                    <div style="margin-top: 4%;height: 100%;width: 20%;">姓名</div>
                    <input placeholder="请输入姓名或选择匿名">
                    <div style="margin-top: 4%;height: 100%;margin-left: 5%;width: 20%;" class="flex-row">
                        <input type="checkbox">
                        <div style="width: 80%;">匿名</div>
                    </div>
                </div>
                <div class="form-input">
                    <div style="margin-top: 4%;height: 100%;width: 20%;">与哈工程关系</div>
                    <el-select v-model="relationship" placeholder="请选择与哈工程关系" style="margin-left: 15%;width: 63%;"
                    >
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                 <div class="form-input">
                    <div style="margin-top: 4%;height: 100%;width: 20%;">支付方式</div>
                    <el-select v-model="pay" style="margin-left: 38%;width: 40%;"
                    >
                        <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <el-button type="success" style="width: 80%;margin-left: 10%;margin-top: 15%;margin-bottom: 5%;"> 立即捐款</el-button>
                <el-checkbox @change="console(agree)" style="margin-left: 20%;margin-bottom: 5%;color: white;" v-model="agree" >
                    同意《<a href="http://www.baidu.com">基金会法律声明</a>》
                </el-checkbox>
            </div>
        </div>
        <div class="bottom">
              <img src="../assets/fun.jpg" style="height:100%;width: 100%;">
          </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      options: [{
        value: '校友',
        label: '校友'
      }, {
        value: '教职工',
        label: '教职工'
      }, {
        value: '在校学生',
        label: '在校学生'
      }, {
        value: '其他',
        label: '其他'
      }],
      options1: [{
        value: '微信支付',
        label: '微信支付'
      }, {
        value: '支付宝支付',
        label: '支付宝支付'
      }],
      relationship: '',
      pay: '微信支付',
      agree: 1,
      money: ''

    }
  },
  mounted (e) {
    console.log(this.$route.query)
    this.money = this.$route.query.money
  },
  methods: {
    console (a) {
      console.log(a)
    },
    go () {
      this.$router.push({path: '/hello'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:link {color: #409EFF}
a:visited {color: #409EFF} /* 已被访问过的链接 蓝色 */
a:hover {color: #409EFF} /* 鼠标悬浮在上的链接 蓝色 */
a:active {color: #409EFF} /* 鼠标点中激活链接 蓝色 */
.must{
    color: red;
}
.flex-row{
    display: flex;
    flex-direction: row;
}
.top{
    padding-top: 5%;
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
    .form-info{
        display: flex;
        background: rgba(200,200,200,0.4);
        flex-direction: column;
        justify-content: space-around;
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        height: 75%;
        padding-top: 10px;
    }
    .form-input{
        padding-left: 5%;
        margin-top: 2%;
        background: rgba(0, 0, 50, 0.3);
        width: 95%;
        height: 13%;
        line-height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        color: white;
        font-size: 13px;
    }
    .form-input input{
        background: rgba(0, 0, 50, 0);
        border: none;
        outline: none;
        color: white;
        margin-left: 5%;
        width: 55%;
        direction: rtl;
    }
.bottom{
    position: absolute  ;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 20%;
    width: 100%;
}
.title{
    font-size: 13px;
    padding-left: 15px;
    color: #909399;
    padding-left: 15px;
}
</style>
