<template>
    <div class="container">
        <div class="original-area">
            <button type="button" class="original-btn">オリジナル画像作成</button>
        </div>
        <div class="news-area">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(news,index) in newsData" :key="index">
                    <img :src="news.image" style="width:300px;">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div slot="button-prev" class="swiper-button-prev"></div>
                <div slot="button-next" class="swiper-button-next"></div>
            </swiper>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ResponseData from '~/models/apis/responseData';
import News from '~/models/entitis/news';
@Component({
})
export default class HOME extends Vue {
newsData: any = [];
publishableKey: any;
token: any;
cardNumber: any;
cardExpiry: any;
cardCvc: any;

data() {
    return {
        swiperOption: {
        speed: 1000,//スライドの切り替わりスピード
        spaceBetween: 30,//各スライドの余白
        centeredSlides: true,//スライダーを真ん中に
        slidesPerView: 1,
        loop: true, //無限ループ
            autoplay: { //スライドの自動切り替え
                delay: 5000,//スライドの自動切り替えの秒数
                disableOnInteraction: false//何らかのアクション後の自動切り替えを再開
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        },
        token: null,
    }
}
async mounted() {
    let response = await ResponseData.news();
    this.newsData = response.data
    console.log(this.newsData);
}

}
</script>
<style lang="scss" scoped>
.original-area {
    display: flex;
    justify-content: center;
    .original-btn {
        width: 250px;
        height: 35px;
        background: #0000FF;
        color: #fff;
        border: none;
        border-radius: 5px;
        margin-bottom: 50px;
    }
}
.swiper-container {
  height: 400px;
  max-width: 800px;
}
.swiper-wrapper {
    transition-duration: 0ms;
    transform: translate3d(-2860px, 0px, 0px);
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-left:1px solid #fff;
}
.swiper-button-prev,
.swiper-button-next {
    width: 50px;
    height: 50px;
}
.swiper-button-prev:after,
.swiper-button-next:after {
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    height: 50px;
    width: 50px;
    margin: auto;
}
.swiper-button-prev:after {
    background-image: url(/images/prev.png);
}
.swiper-button-next:after {
    background-image: url(/images/next.png);
}
</style>