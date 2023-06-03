<template>
    <div class="container">
        <div class="payment-history-title">
            <h3 class="title">購入履歴</h3>
        </div>
        <div class="history-area">
            <table border="1">
                <tr>
                    <th>購入ID</th>
                    <th>購入日時</th>
                    <th>購入金額</th>
                    <th>取得ポイント</th>
                </tr>
                <tr v-for="(history,index) in historyData" :key="index">
                    <td>{{history.id}}</td>
                    <td>{{history.created_at | formatDate}}</td>
                    <td>{{history.amount}}</td>
                    <td>{{history.point}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ResponseData from '~/models/apis/responseData';
@Component({})
export default class HISTORY extends Vue {
historyData: any = [];
async mounted() {
    let memberId = this.$auth.user.id
    let response = await ResponseData.paymentHistoryData(memberId);
    this.historyData = response.data
    console.log(this.historyData)
}
}
</script>
<style lang="scss">
.container {
    max-width: 800px;
    margin: 50px auto;
}
.payment-history-title {
    text-align: center;
    border-bottom: 1px solid #444444;
    max-width: 300px;
    margin: 0 auto;
}
.history-area {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
table {
  text-align: center;
  border-collapse: collapse;
  width: 800px;
  height: 200px;
}
th {
  color: #fff;/*文字色*/
  background: #0000CC;/*背景色*/	
}
tr {
    height: 50px;
}

</style>