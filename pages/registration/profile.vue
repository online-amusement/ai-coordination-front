<template>
    <div>
        <div class="container">
            <h2 class="profile-title">プロフィール登録</h2>
            <div class="profile-area">
                <form method="POST" action="">
                    <div class="nickname">
                        <label class="nickname-title">ニックネーム：</label>
                        <input type="text" class="nickname-inp" v-model="nickname" />
                    </div>
                    <div class="password">
                        <label class="password-title">パスワード：</label>
                        <input type="text" class="password-inp" v-model="password" />
                    </div>
                    <div class="regist-btn">
                    <button class="btn" type="button" @click="profileRegist()">登録</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import ResponseData from '~/models/apis/responseData';

@Component({
    components: {}
})
export default class VERIFY extends Vue { 
token:string =  '';
nickname: string =  '';
password: string = '';
result: string = '';
error: string = '';

    
async created() {
    let params = this.getParams(location.search);
    this.token = params.token
    console.log(this.token)
}
getParams = (params: string): { [key: string]: string } => {
    const paramsArray = params.slice(1).split('&')
    const paramsObject: { [key: string]: string } = {}
    paramsArray.forEach(param => {
        paramsObject[param.split('=')[0]] = param.split('=')[1]
    });
    return paramsObject;
}
async profileRegist() {
    const response = await ResponseData.officialRegistration(this.nickname, this.password, this.token);
    console.log(response)
    if(response.status = 200) {
        this.result = response.message + '送信したメールからログインしてください。'
        this.nickname = '';
        this.password = '';
    }else {
        this.error = response.message + 'メールの期限が切れてる可能性があります。ご確認ください。'
    }
}

}
</script>
<style lang="scss" scoped>
.profile-area {
    max-width: 1200px;
    margin: 0 auto;
}
.profile-title {
    text-align: center;
    margin-bottom: 100px;
}
.nickname {
    display: flex;
    justify-content: center;
    align-items: center;
}
.password {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
}
.regist-btn {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
</style>