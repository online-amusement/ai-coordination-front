<template>
    <header class="header">
        <div class="logo-area" @click="backHome()">
            <img class="logo" src="/images/logo.png">
        </div>
        <div v-if="$auth.loggedIn" class="menu-area" @click="openMenu">
            <img class="menu-btn" src="/images/menu.png">
        </div>
        <div v-else class="log-btn">
            <nuxt-link to="/login">ログイン</nuxt-link>
        </div>
        <div v-if="$auth.loggedIn" class="news">
            <a href="/news" class="menu-area-btn">
                <img src="/images/bell.png" class="news-btn">
            </a>
        </div>
        <div v-if="$auth.loggedIn" class="menu" v-bind:class="{'is-active' : open }">
            <a href="/home" class="menu-area-btn">
                <div class="menu__item">トップページ</div>
            </a>
            <a href="#" class="menu-area-btn">
                <div class="menu__item">サービス内容</div>
            </a>
            <a href="/mypage" class="menu-area-btn">
                <div class="menu__item">マイページ</div>
            </a>
            <a href="/news" class="menu-area-btn">
                <div class="menu__item">お知らせ</div>
            </a>
            <a href="#" class="menu-area-btn">
                <div class="menu__item">購入履歴</div>
            </a>
            <a href="#" class="menu-area-btn">
                <div class="menu__item">オリジナル画像作成</div>
            </a>
        </div>
    </header>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
})
export default class CommonHeader extends Vue {
open: boolean = false;

backHome() {
    this.$router.push('/home');
}
openMenu() {
    this.open = !this.open;
    console.log(this.open)
}
}
</script>
<style lang="scss" scoped>
.logo {
    width: 80px;
    height: auto;
    margin-left: 10px;
}
.menu-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3;
    width: 60px;
    height: auto;
    margin-right: 10px;
}

.header {
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    height: 90px;
    align-items: center;
    border-bottom: 1px solid #888888;
}
.menu{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #888888;
}
.menu__item{
  width: 100%;
  height: auto;
  padding: .5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}
.menu{
  transform: translateX(50vw);
  transition: all .3s linear;
  z-index: 2;
}
/* アニメーション後のメニューの状態 */
.menu.is-active{
  transform: translateX(0);
}
.login-btn {
    margin-right: 30px;
    cursor: pointer;
}
.menu-area-btn {
    text-decoration: none;
}
.news-btn {
    position: fixed;
    top: 20px;
    right: 100px;
    z-index: 3;
    width: 60px;
    height: auto;
    margin-right: 10px;
}
</style>