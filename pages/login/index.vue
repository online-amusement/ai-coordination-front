<template>
    <div>
        <div class="container">
            <h2 class="email-log-title">メールアドレスでログイン</h2>
        </div>
        <div class="input-form-area">
            <form method="POST" action="" @submit.prevent>
                <div class="email">
                    <label>メールアドレス：</label>
                    <input class="email-tex" v-model="form.email" type="text" name="email" placeholder="メールアドレスを入力してください。" />
                </div>
                <div class="password">
                    <label class="space">パスワード：</label>
                    <input class="password-tex" v-model="form.password" type="text" name="password" placeholder="パスワードを入力してください。" />
                </div>
                <div class="login-btn">
                    <button class="btn" type="button" @click="login">ログイン</button>
                </div>
                <div>{{ $auth.loggedIn }}</div>
            </form>
        </div>

        <div class="container-social-media">
            <h2 class="email-log-title">ソーシャルメディアでログイン</h2>
        </div>
        <div class="input-form-area">
            <form method="POST" action="" @submit.prevent>
                <div class="google-btn">
                    <button class="google" type="button" @click="googleLogin">
                        <img class="google-logo" src="/images/btn_google.png">
                        <label class="label-title">Googleでログイン</label>
                    </button>
                </div>
            </form>
        </div>
        <div class="input-form-area">
            <div class="account-area">
                <nuxt-link to="/registration" class="login-btn">
                    <h3 class="login-page">アカウントをお持ちでない方</h3>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ResponseData from '~/models/apis/responseData';

@Component({
    components: {

    }
})
export default class LOGIN extends Vue {
form:any = {
    email: '',
    password: '',
}
data:any = [];
error: string = '';

async login() {
    try {
        let response = await this.$auth.loginWith('local', {data:this.form})
        if(response.data.result = true) {
            this.data = response.data.data
            localStorage.setItem("auth._token.local",this.data)
            if(this.$auth.user.status != 0) {
                this.$router.push('/home/')
            }else {
                this.$router.push('/registration/profile/')
            }
       }else {
            this.error = response.data.message
            console.log(this.error)
       }
    }catch {
        
    }
}
googleLogin() {

}
}
</script>
<style lang="scss" scorped>
.email-log-title {
    text-align: center;
}
.input-form-area {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.email {
    margin-top: 30px;
}
.password {
    margin-top: 50px;
}
.space {
    letter-spacing: 5px;
}
input {
    width: 300px;
    height: 30px;
}
.login-btn {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.btn {
    width: 300px;
    height: 40px;
    border: #0000AA;
    background: #0000CC;
    color: #fff;
    border-radius: 5px;
}
.container-social-media {
    margin-top: 100px;
    margin-bottom: 50px;
}
.google {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background: #0000FF;
    color: #fff;
    border: none;
}
.google-logo {
    margin-left: -10px;
}
.google-btn {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.label-title {
    margin: 0 70px;
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
    max-width: 300px;
    margin-bottom: 50px;
  }
  .login-btn {
    text-decoration: none;
  }
}
@media screen and (max-width: 450px) {
    input {
        width: 350px;
        height: 30px;
    }
}
</style>