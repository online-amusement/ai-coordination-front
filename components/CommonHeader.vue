<template>
    <header class="header">
            <div class="logo-area" @click="backHome()">
                <img class="logo" src="/images/logo.png">
            </div>
            <div v-if="$auth.loggedIn" class="menu-area" @click="openMenu">
                <img class="menu-btn" src="/images/menu.png">
            </div>
            <div v-else class="login-btn">
                <nuxt-link to="/login">ログイン</nuxt-link>
            </div>
            <div class="menu" v-bind:class="{'is-active' : open }">
                <div class="menu__item">TOP</div>
                <div class="menu__item">ABOUT</div>
                <div class="menu__item">BLOG</div>
                <div class="menu__item">CONTACT</div>
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
<style lang="scss">
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
}
/* アニメーション後のメニューの状態 */
.menu.is-active{
  transform: translateX(0);
}
.login-btn {
    margin-right: 30px;
    cursor: pointer;
}
</style>