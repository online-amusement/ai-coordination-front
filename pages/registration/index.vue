<template>
    <div>
        <div class="title">
            <h2 class="regist-title">新規会員登録</h2>
        </div>
        <div class="media-select-email">
            <h4 class="media-email">メールアドレスで会員登録</h4>
        </div>
        <div class="container">
            <form method="POST" action="" @submit.prevent>
                <div class="email">
                    <label class="form-title">メールアドレス：</label>
                    <input type="text" v-model="email">
                </div>
                <div class="regist-btn">
                    <button class="btn" type="button" @click="regist()">登録</button>
                </div>
            </form>
        </div>
        <div class="result">
            {{ this.result }}
        </div>

        <div class="media-select-google">
            <h4 class="media-google">ソーシャルメディアで会員登録</h4>
        </div>
        <div class="container">
            <form method="POST" action="" @submit.prevent>
                <div class="google-btn">
                    <button class="google" type="button" @click="googleLogin()">
                        <img class="google-logo" src="/images/btn_google.png">
                        <label class="label-title">Googleでログイン</label>
                    </button>
                </div>
            </form>
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
export default class REGISTRATION extends Vue {
email: string = '';
result: string = '';
error: string = '';

async regist() {
    const response = await ResponseData.temporaryRegistration(this.email)
    if(response.status = 200) {
        this.result = response.message + 'メールアドレス宛にメールを送信しました。';
    }else {
        this.error = 'エラーが発生しました。'
    }
    this.email = '';
}
googleLogin() {

}
}
</script>
<style lang="scss" scoped>
.title {
    text-align: center;
}
.media-select-email {
    margin-top: 50px;
    text-align: center;
}
.media-select-google {
    margin-top: 50px;
    text-align: center;
}
.container {
    max-width: 1200px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
}
.container {
    margin-top: 30px;
}
.regist-btn {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
.media-google {
    margin-top: 150px;
}
.google-btn {
    display: flex;
    justify-content: center;
    margin-top: 30px;
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
.result {
    text-align: center;
}
</style>