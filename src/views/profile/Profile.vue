<template>
  <div class="profile">
    <nav-bar class="navBar">
      <div slot="center">小方商城</div>
    </nav-bar>
    <div class="userInfo">
      <div class="info">
        <div>
          <img class="userImg" src="~assets/img/profile/user.svg" alt="">
        </div>
        <div>
          <p>登陆/注册</p>
          <p>
            <img src="~assets/img/profile/phone.svg" alt="">
            暂无绑定手机号
          </p>
        </div>
      </div>
      <div class="point">
        <div>
          <P><span>0.00</span>元</P>
          <P>我的余额</P>
        </div>
        <div>
          <P><span>0</span>个</P>
          <P>我的优惠</P>
        </div>
        <div>
          <P><span>0</span>分</P>
          <P>我的积分</P>
        </div>
      </div>
    </div>
    <div class="infoList">
      <ul>
        <li>我的消息</li>
        <li>积分商城</li>
        <li>会员卡</li>
        <li>我的购物车</li>
        <li>下载购物APP</li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Profile",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .profile {
    /*background-color: #333;*/
  }
  .navBar{
    color: white;
    background-color: var(--color-tint);
    font-weight: bold;
  /*  border-bottom: 1px solid black;*/
  /*  box-sizing: border-box;*/
  }

  .userInfo{

  }

  .info{
    color: white;
    display: flex;
    background-color: var(--color-tint);
    padding: 10px 0;
  }

  .info div:first-child{
    padding:  0 10px;
    display: flex;
    align-items: center;


  }

  .info div:first-child img{
    width: 60px;
    height: 60px;
  }

  .info div:last-child{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info div:last-child img{
    width: 20px;
    height: 20px;
    margin-right: 3px;
  }

  .info div p:first-child{
    font-size: 16px;
  }
  .info div p:last-of-type{
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
  }

  .point{
    display: flex;
    padding: 5px 0;
    background-color: #fff;
    border-bottom: 10px solid #eee;
  }

  .point div{
    flex: 1;
    text-align: center;
    padding: 10px;
    border-right: 1px solid #eee;
    font-size: 12px;
  }

  .point div:last-of-type{
    border-left: none;
  }

  .point div p{
    margin-bottom: 5px;
  }

  .point div p span{
    color: hsl(120,60%,55%);
    font-size: 21px;
    font-weight: bold;
  }

  .infoList{

  }
  .infoList li{
    list-style: none;
    padding: 13px 0px;
    margin-left: 30px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    color: #333;
  }

  .infoList li::before{
    content: "";
    width: 8px;
    height: 13px;
    display: inline-block;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    position: relative;
    left: -15px;
    top: 50%;
  }

  .infoList li:nth-of-type(3){
    border-bottom: 10px solid #eee;
    margin-left: 0;
    padding-left: 30px;
  }

  .infoList li:last-of-type{
    border-bottom: none;
  }

</style>
