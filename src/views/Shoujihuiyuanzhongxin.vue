<template>
  <div class="public">
    <div class="huiyuandl">
        <div><img class="tupian" src="../assets/images/u7066.png" alt=""></div>
        <ul v-if="cd">{{sjh}}</ul>
        <div class="zd" v-if="ab">
          <a href="#/outter/register"><p>注册</p></a>
          <a href="#/outter/login"><p>登录</p></a>
        </div>
    </div>
        <div class="bottom">
            <div class="ddzh" @click="tc">
              <div>
                <img src="../assets/images/u5092.png" alt="">
                <p>我的订单</p>
              </div>
              <span>{{xy}}</span>
            </div>
            <div class="ddzh"  @click="tc1">
              <div>
                <img src="../assets/images/u5102.png" alt="">
                <p>账户设置</p>
              </div>         
               <span>{{xy}}</span>
            </div>
        </div>
        <div @click="logOut" class="tui" v-if="cd"><p class="tcdl">退出登录</p></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      xy: ">",
      ab: true,
      cd: true,
      qrsc: false,
      sjh:"",
    };
  },
  methods: {
    open2() {
      
    },
    tc(){
      this.ajax
        .post("/xinda-api/sso/login-info", this.qs.stringify({}))
        .then(data => {
          var omg = data.data.status;
          if(omg == 0){
            this.$confirm('请先登录', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$router.push({
              path:"/outter/login",
            });
            // this.$message({
            //   type: 'success',
            //   message: '登录成功!'
            // });
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '取消登录'
            // });          
          });
          }else{
            this.$router.push({
              path:"/Huiyuanzhongxin/Huiyuanzhongxinindex",
            });
          }
        });
    },
    tc1(){
      this.ajax
        .post("/xinda-api/sso/login-info", this.qs.stringify({}))
        .then(data => {
          var omg = data.data.status;
          if(omg == 0){
            this.$confirm('请先登录', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$router.push({
              path:"/outter/login",
            });
            // this.$message({
            //   type: 'success',
            //   message: '登录成功!'
            // });
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '取消登录'
            // });          
          });
          }else{
            this.$router.push({
              path:"/Huiyuanzhongxin/HuiyuanzhongxinAccount",
            });
          }
        });
    },
   
    quxiao(){
      this.qrsc = !this.qrsc
    },
    logOut() {
      this.status = "wait";
      this.ajax
        .post("/xinda-api/sso/logout", this.qs.stringify({}))
        .then(data => {
          this.ab = 1;
          this.cd = 0;
        });
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.$parent.$parent.status = "wait";
    this.ajax
      .post("/xinda-api/member/info", this.qs.stringify({}))
      .then(data => {
        this.sjh = data.data.data.cellphone;
      });
    this.ajax
      .post("/xinda-api/member/info", this.qs.stringify({}))
      .then(data => {
        this.$parent.$parent.status = "wait1";
        if (data.data.data) {
          this.ab = !this.ab;
        } else {
          this.cd = !this.cd;
        }
      });
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media (max-width: 768px) {
  .tckuang{
      width:100%;
      height:100%;
      z-index:66;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.2);
      .tanchuk {
        width: 70%;
        height: 150px;
        z-index: 66;
        position: absolute;
        background: #fff;
        .tss{
          font-size:18px;
          margin-top: 5%;
        }
        p {
          text-align: center;
          margin-top: 8%;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        li {
          display: inline-block;
          margin: 25px 20px 0 20px;
          padding: 7px 25px;
          color: #fff;
        }
        .qd {
          background: #2693d4;
        }
        .qx {
          background: #9c9c9c;
        }
      }
    }
  .public {
    width: 100%;
    .huiyuandl {
      text-align: center;
      padding-top: 120px;
      .tupian {
        width: 25%;
      }
      .zd {
        margin-top: 15px;
      }
      p {
        display: inline-block;
        padding: 7px 25px;
        margin: 0 10px;
        border-radius: 5px;
        color: #fff;
        background-color: #2693d4;
      }
    }
    .tui {
      text-align: center;
      // display: none;
    }
    .tcdl {
      display: inline-block;
      margin-top: 40px;
      color: #fff;
      padding: 12px 125px;
      background-color: #2693d4;
    }
    .bottom {
      margin-top: 80px;
      .ddzh {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        margin: 1rem 2rem;
        background: #f7f7f7;
        line-height: 50px;
        color: #ccc;
        span {
          font-size: 25px;
          vertical-align: middle;
          padding-right: 5px;
        }
        p {
          margin-left: 10px;
          font-size: 17px;
          line-height: 17px;
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
        }
        img {
          margin-left: 5px;
          width: 22px;
          height: 22px;
          vertical-align: middle;
        }
      }
    }
  }
}
@media (min-width: 769px) {
  .public {
    display: none;
  }
}
</style>
