<template>
    <div class="container">
        <div class="payment-title">
            <h3 class="title">ポイント購入</h3>
        </div>
        <div class="notes">
            <p class="caution">
                ※1ポイントにつき1枚の画像の購入、あるいは画像の作成が可能
            </p>
        </div>
        <div class="payment-area" v-for="(payment,index) in payments.generally" :key="`generally-${index}`">
            <div class="point">
                {{ payment.points }}ポイント
            </div>
            <div class="amount">
                <button type="button" class="payment-btn" @click="paymentModal(payment.amount,payment.points)">
                    ¥{{ payment.amount }}購入
                </button>
            </div>
        </div>
        <div class="payment-area" v-for="(paymentLimit,index) in payments.limits" :key="`limits-${index}`">
            <div class="sale">
                <div class="point">
                    {{ paymentLimit.points }}ポイント
                    <label class="ad" v-if="payments.limits">
                        期間限定<br>セール
                    </label>
                </div>
            </div>
            <div class="amount">
                <button type="button" class="payment-btn" @click="paymentModal(paymentLimit.amount, paymentLimit.points)">
                    ¥{{ paymentLimit.amount }}購入
                </button>
            </div>
        </div>
        <modal name="modal-payment" :height="550">
            <div class="modal-header">
                <h2 class="title">購入フォーム</h2>
            </div>
            <Payment :amount="this.amount" :point="this.point" />
            <div class="edit-btn">
                <button type="button" @click="modalHide()" class="modal-hide-btn">
                    戻る
                </button>
            </div>
        </modal>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ResponseData from '~/models/apis/responseData';
import Payment from '~/components/Payment.vue'
import { paymentHistory } from '~/vendor/apis/ai_coordination';
@Component({
    components: {
        Payment,
    }
})
export default class PAYMENT extends Vue {
payments: any = [];
amount: number = 0;
point: number = 0;
async mounted() {
    let response = await ResponseData.payments();
    console.log(response)
    this.payments = response.data
}
async paymentModal(amount:number, point:number) {
    console.log(amount)
    console.log(point)
    this.amount = amount
    this.point = point
    this.$modal.show('modal-payment');
}
payment() {
    
}
modalHide() {
    this.$modal.hide('modal-payment');
}
}
</script>
<style lang="scss">
.container {
    max-width: 800px;
    margin: 50px auto;
}
.payment-title {
    text-align: center;
    border-bottom: 1px solid #444444;
    max-width: 300px;
    margin: 0 auto;
}
.notes {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    .caution {
        margin: 10px;
    }
}
.payment-area {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    .point {
        width: 180px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #999999;
        align-items: center;
    }
    .payment-btn {
        width: 150px;
        height: 40px;
        border-radius: 5px;
        color: #fff;
        background: #0000BB;
        font-size: 16px;
        border: none;
    }
    .ad {
        display: flex;
        justify-content: center;
        color: #fff;
        border: 1px solid;
        background: #FF0000;
        text-align: center;
        border-radius: 5px;
        font-size: 12px;
        width: 80px;
    }
}
.modal-header {
    display: flex;
    justify-content: center;
    background: #FF0000;
    color: #fff;
    margin-bottom: 40px;
}
.edit-btn {
    display: flex;
    justify-content: center;
}
.modal-hide-btn {
    height: 35px;
    outline: 1px solid grey;
    background-color: #AAAAAA;
    padding: 5px;
    color: #fff;
    width: 170px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    border: none;
}
</style>