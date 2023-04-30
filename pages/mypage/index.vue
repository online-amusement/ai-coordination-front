<template>
    <div class="container">
        <div class="mypage-title">
            <h3 class="title">マイページ</h3>
        </div>
        <form method="POST" action="" class="form-area" @submit.prevent>
            <div class="content-area">
                <label class="nickanme">ニックネーム：</label>
                <input type="text" :value="this.$auth.user.nickname" disabled/>
                <button type="button" @click="showNicknameModal()" class="profile-blue-btn">
                    変更
                </button>
            </div>
            <div class="content-area">
                <label class="email">メールアドレス：</label>
                <input type="text" :value="this.$auth.user.email" disabled/>
                <button type="button" @click="showEmailModal()" class="profile-orange-btn">
                    変更
                </button>
            </div>
            <div class="content-area">
                <label class="password">パスワード：</label>
                <input :type="inputType" id="password" :value="this.$auth.user.password" disabled/>
                <button type="button" @click="showPasswordModal()" class="profile-green-btn">
                    変更
                </button>
            </div>
        </form>
        <div class="logout-area" v-if="$auth.loggedIn">
            <button class="logout-btn" @click="logout()">ログアウト</button>
        </div>
        <div class="logout-area">
            <button class="back-btn" @click="back()">戻る</button>
        </div>

        <modal name="modal-member-nickname-edit" :height="550">
            <div class="modal-header">
                <h2 class="title">ニックネーム変更</h2>
            </div>
            <form method="POST" action="" class="form-modal-nickname-area" @submit.prevent>
                <div class="content-area">
                    <label class="nickanme">ニックネーム：</label>
                    <input type="text" v-model="nickname" />
                </div>
                <div class="edit-btn">
                    <button type="button" @click="editNickname()" class="edit-profile-btn">
                        変更
                    </button>
                    <button type="button" @click="modalHide()" class="modal-hide-btn">
                        戻る
                    </button>
                </div>
            </form>
        </modal>

        <modal name="modal-member-email-edit" :height="550">
            <div class="modal-header2">
                <h2 class="title">メールアドレス変更</h2>
            </div>
            <form method="POST" action="" class="form-modal-email-area" @submit.prevent>
                <div class="content-area">
                    <label class="email">メールアドレス：</label>
                    <input type="text" v-model="email" />
                </div>
                <div class="edit-btn">
                    <button type="button" @click="editEmail()" class="edit-profile-btn">
                        変更
                    </button>
                    <button type="button" @click="modalHide()" class="modal-hide-btn">
                        戻る
                    </button>
                </div>
            </form>
        </modal>

        <modal name="modal-member-password-edit" :height="550">
            <div class="modal-header3">
                <h2 class="title">パスワード変更</h2>
            </div>
            <form method="POST" action="" class="form-modal-password-area" @submit.prevent>
                <div class="content-area">
                    <label class="current-password">現在のパスワード：</label>
                    <input :type="inputType" id="password" v-bind:type="[isChecked == false ? 'password' : 'text']" @input="oldPassword = $event.target.value" :value="oldPassword" disabled/>
                    <span class="material-icons" @click="passwordCheck()" v-bind:class="[isChecked == false ? 'visibility' : 'visibility_off']">visibility</span>
                </div>
                <div class="content-area">
                    <label class="new-password">新パスワード：</label>
                    <input :type="inputType" id="new-password" v-bind:type="[pass_check == false ? 'password' : 'text']" @input="password = $event.target.value" :value="password" />
                    <span class="material-icons" @click="newPasswordCheck()" v-bind:class="[pass_check == false ? 'visibility' : 'visibility_off']">visibility</span>
                </div>
                <div class="content-area">
                    <label class="confirmation-password">パスワード確認：</label>
                    <input :type="inputType" id="password" v-bind:type="[pass_recheck == false ? 'password' : 'text']" @input="password_onfirmation = $event.target.value" :value="password_onfirmation" />
                    <span class="material-icons" @click="passwordReCheck()" v-bind:class="[pass_recheck == false ? 'visibility' : 'visibility_off']">visibility</span>
                </div>
                <div class="edit-btn">
                    <button type="button" @click="editPassword()" class="edit-profile-btn">
                        変更
                    </button>
                    <button type="button" @click="modalHide()" class="modal-hide-btn">
                        戻る
                    </button>
                </div>
            </form>
        </modal>

        <modal name="modal-member-edit-success" :height="550">
            <div class="modal-header4">
                <h2 class="title">変更完了</h2>
            </div>
            <div v-if="isEmailFlag == true" class="success-email">
                メールアドレスの変更に成功しました。
            </div>
            <div v-if="isNicknameFlag == true" class="success-nickname">
                ニックネームの変更に成功しました。
            </div>
            <div v-if="isPasswordFlag == true" class="success-password">
                パスワードの変更に成功しました。
            </div>
        </modal>
    </div>
</template>
<script lang="ts">
import { Context } from '@nuxt/types';
import { Component, Vue } from 'nuxt-property-decorator';
import ResponseData from '~/models/apis/responseData';

@Component({}) 
export default class MYPAGE extends Vue {
nickname: string = "";
email: string = "";
oldPassword: string = this.$auth.user.password;
password: string = "";
password_onfirmation: string = "";
isChecked: boolean = false;
pass_check:boolean = false;
pass_recheck:boolean = false;
message: string = "";
isEmailFlag: boolean = false;
isNicknameFlag: boolean = false;
isPasswordFlag: boolean = false;

passwordCheck() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked)
}
newPasswordCheck() {
    this.pass_check = !this.pass_check;
    console.log(this.pass_check)
}
passwordReCheck() {
    this.pass_recheck = !this.pass_recheck;
    console.log(this.pass_recheck)
}
inputType() {
    return this.isChecked ? "text" : "password";
}
showNicknameModal() {
    this.$modal.show("modal-member-nickname-edit")
}
showEmailModal() {
    this.$modal.show("modal-member-email-edit")
}
showPasswordModal() {
    this.$modal.show("modal-member-password-edit")
}
async editPassword() {
    let response = await ResponseData.memberPasswordEdit(this.password, this.password_onfirmation)
    console.log(response);
    this.isPasswordFlag = true
    this.$modal.hide('modal-member-password-edit');
    this.$modal.show("modal-member-edit-success");
    setTimeout(() => {
        this.$modal.hide('modal-member-edit-success');
        location.reload()
    }, 2000);
    
}
async editEmail() {
    let response = await ResponseData.memberEmailEdit(this.email)
    console.log(response)
    this.isEmailFlag = true
    this.$modal.hide('modal-member-email-edit');
    this.$modal.show("modal-member-edit-success");
    setTimeout(() => {
        this.$modal.hide('modal-member-edit-success');
        location.reload()
    }, 2000);
}
async editNickname() {
    let response = await ResponseData.memberNicknameEdit(this.nickname)
    console.log(response)
    this.$modal.hide('modal-member-nickname-edit');
    this.isNicknameFlag = true
    this.$modal.show("modal-member-edit-success");
    setTimeout(() => {
        this.$modal.hide('modal-member-edit-success');
        location.reload()
    }, 2000);
    
}
modalHide() {
    this.$modal.hide('modal-member-nickname-edit');
    this.$modal.hide('modal-member-email-edit');
    this.$modal.hide('modal-member-password-edit');
}
logout() {
    this.$auth.logout()
    this.$router.push("/")
}
back() {
    this.$router.go(-1)
}

}
</script>
<style lang="scss" scoped>
.mypage-title {
    text-align: center;
    border-bottom: 1px solid #444444;
    max-width: 300px;
    margin: 0 auto;
}
.form-area {
    max-width: 1200px;
    margin: 100px auto;
}
.form-modal-nickname-area {
    max-width: 1200px;
    margin: 150px auto;
}
.form-modal-email-area {
    max-width: 1200px;
    margin: 150px auto;
}
.form-modal-password-area {
    max-width: 1200px;
    margin: 100px auto;
}
.content-area {
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
}
input {
    width:300px;
    height: 30px;
}
.nickanme {
    letter-spacing: 2px;
}
.password {
    letter-spacing: 5px;
}
.new-password {
    letter-spacing: 5px;
}
.confirmation-password {
    letter-spacing: 2px;
}
.edit-btn {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    .edit-profile-btn {
        width: 200px;
        height: 35px;
        margin: 20px 5px;
        background: #0000BB;
        color: #fff;
        border-radius: 5px;
        border: none;
    }
    .modal-hide-btn {
        width: 200px;
        height: 35px;
        margin: 20px 0px 0px 5px;
        border: none;
        background: #BBBBBB;
        border-radius: 5px;
        color: #fff;
    }
}
.profile-blue-btn {
    width: 60px;
    height: 35px;
    background: #0000BB;
    border: none;
    border-radius: 5px;
    color: #fff;
}
.profile-orange-btn {
    width: 60px;
    height: 35px;
    background: #FF5F17;
    border: none;
    border-radius: 5px;
    color: #fff;
}
.profile-green-btn {
     width: 60px;
    height: 35px;
    background: #228B22;
    border: none;
    border-radius: 5px;
    color: #fff;
}
.logout-area {
    display: flex;
    justify-content: center;
    .logout-btn {
        width: 350px;
        height: 40px;
        background: #FF0000;
        border: none;
        border-radius: 5px;
        color: #fff;
    }
}
.back-btn {
    width: 200px;
    height: 35px;
    margin: 20px 0px 0px 5px;
    border: none;
    background: #BBBBBB;
    border-radius: 5px;
    color: #fff;
    margin-top: 100px;
}
.modal-header {
    height: 50px;
    background: #0000BB;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
        text-align: center;
        color: #fff;
    }
}
.modal-header2 {
    height: 50px;
    background: #FF5F17;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
        text-align: center;
        color: #fff;
    }
}
.modal-header3 {
    height: 50px;
    background: #228B22;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
        text-align: center;
        color: #fff;
    }
}
.modal-header4 {
    height: 50px;
    background: #FF0000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.success-email {
    display: flex;
    justify-content: center;
    margin-top: 200px;
}
.success-nickname {
    display: flex;
    justify-content: center;
    margin-top: 200px;
}
.success-password {
    display: flex;
    justify-content: center;
    margin-top: 200px;
}
</style>