<template>
  <div class="container">
    <div class="area-title">
      <h2>Aiコーディネート使い方</h2>
    </div>
    <div class="main-container">
      <div class="step-1">
        <div class="step-1-title">
          <h3 class="_step">ステップ1.</h3>
        </div>
        <div class="image-index">
          <img class="description-1" src="/images/description-1.png">
          <div class="detail">
            <p>まずは自分の等身大の画像をアップデートしよう。</p>
          </div>
        </div>
      </div>

      <div class="step-2">
        <div class="step-1-title">
          <h3 class="_step">ステップ2.</h3>
        </div>
        <div class="image-index">
          <img class="description-1" src="/images/description-2.png">
          <div class="detail">
            <p>試着したい洋服を選択しよう。</p>
          </div>
        </div>
      </div>

      <div class="step-3">
        <div class="step-1-title">
          <h3 class="_step">ステップ3.</h3>
        </div>
        <div class="image-index">
          <img class="description-1" src="/images/description-2.png">
          <div class="detail">
            <p>試着したい洋服を選択しよう。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="account-area">
      <nuxt-link to="/login" class="login-btn">
        <h3 class="login-page">さっそく使ってみる</h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {
  }
})
  
export default class INDEX extends Vue {

}
</script>
<style lang="scss" scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #333;
}
.area-title {
  text-align: center;
  color: #333333;
}
.step-1-title {
  max-width: 150px;
  text-align: center;
  color: #333333;
  border-bottom:1px solid #333333;
  margin-top: 50px;
}
.description-1 {
  width: 200px;
}
.image-index {
  margin: 15px 100px;
  display: flex;
}
.step-1 {
  max-width: 800px;
  margin: 0 auto;
}
.step-2 {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
}
.step-3 {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
}
.account-area {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .login-page {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    border-bottom: 1px solid #333;
    max-width: 200px;
    margin-bottom: 50px;
  }
}
.login-btn {
  cursor: pointer;
  text-decoration: none;
}
@media screen and (max-width:480px){
  .image-index {
    margin: 15px 100px;
    display: block;
  } 
}
</style>
