<template>
  <div>
    <div class="card-area">
        <div class="card-number-area">
            <label>Card Number</label>
            <div id="card-number"></div>
        </div>
        <div class="card-expiry-area">
            <label class="letter-expiry">Card Expiry</label>
            <div id="card-expiry"></div>
        </div>
        <div class="card-cvc-area">
            <label class="letter-cvc">Card CVC</label>
            <div id="card-cvc"></div>
        </div>
        <div id="card-error"></div>
        <div class="pay-btn">
            <button id="custom-button" @click="createToken">購入</button>
        </div>
    </div>
    <modal name="modal-success-payment" :height="550">
        <div class="modal-header">
            <h2 class="title">ご購入ありがとうございます</h2>
        </div>
        <div class="success-message">
          <p>{{amount}}円で{{point}}ポイント購入しました。<br>
          {{point}}回分の画像の購入と作成が可能となります。</p>
        </div>
        <div class="edit-btn">
            <button type="button" @click="modalHide()" class="modal-hide-btn">
                確認
            </button>
        </div>
    </modal>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import ResponseData from '~/models/apis/responseData';
export default {
  props:["amount","point"],
  data () {
    return {
      token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    };
  },
  computed: {
    stripeElements () {
      return this.$stripe.elements();
    },
  },
  mounted () {
    // Style Object documentation here: https://stripe.com/docs/js/appendix/style
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.cardNumber = this.stripeElements.create('cardNumber', { style });
    this.cardNumber.mount('#card-number');
    this.cardExpiry = this.stripeElements.create('cardExpiry', { style });
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = this.stripeElements.create('cardCvc', { style });
    this.cardCvc.mount('#card-cvc');
  },
  beforeDestroy () {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async createToken () {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        // handle error here
        document.getElementById('card-error').innerHTML = error.message;
        return;
      }
      console.log(token);
      let memberId = this.$auth.user.id
      console.log(memberId);
      let response = await ResponseData.paymentHistory(memberId, this.amount, this.point)
      console.log(response);
      this.$modal.show('modal-success-payment');
      
    },
    modalHide() {
      this.$modal.hide('modal-payment');
      this.$modal.hide('modal-success-payment');
      this.$router.push('/payment/history');
    }
  }
};
</script>

<style scoped>
#custom-button {
  height: 30px;
  outline: 1px solid grey;
  background-color: green;
  padding: 5px;
  color: white;
}

#card-error {
  color: red;
}

.card-number-area {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
}
#card-number {
    border-radius: 5px;
    width: 250px;
    height: 30px;
    border: 1px solid #EEEEEE;
    background: #fff;
}
.card-expiry-area {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
}
.letter-expiry {
    letter-spacing: 1.5px;
}
#card-expiry {
    border-radius: 5px;
    width: 250px;
    height: 30px;
    border: 1px solid #EEEEEE;
    background: #fff;
}
.card-cvc-area {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
}
.letter-cvc {
    letter-spacing: 3.5px;
}
#card-cvc {
    border-radius: 5px;
    width: 250px;
    height: 30px;
    border: 1px solid #EEEEEE;
    background: #fff;
}
.pay-btn {
    display: flex;
    justify-content: center;
}
#custom-button {
    height: 35px;
    outline: 1px solid grey;
    background-color: #0000BB;
    padding: 5px;
    color: #fff;
    width: 200px;
    border: none;
    border-radius: 5px;
}
#card-error {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
label {
    margin-right: 5px;
}
.success-message {
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 50px;
}
.modal-hide-btn {
  background-color: #0000BB;
  color: #fff;
}
</style>