<template>
    <div class="container">
        <div class="title-news-contents">
            <h3 class="title-news">お知らせ</h3>
        </div>
        <div class="main-container" v-for="news in newsData" :key="news.id">
            <div class="img-area">
                <img :src="news.image" class="img">
            </div>
            <div class="detail">
                <img src="/images/new.png" style="width:40px;" class="img">
                <div class="news-date-time-area">
                    <label class="news-date-time-title">掲載日時</label>
                    <p class="news-date-time">{{ news.started_at }}</p>
                </div>
                <div class="news-title-area">
                    <label class="news-title">タイトル</label>
                    <p class="news-title-name">{{ news.title }}</p>
                </div>
                <div class="news-description-area">
                    <label class="news-description-title">内容</label>
                    <p class="news-description">{{ news.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Context } from '@nuxt/types';
import ResponseData from '~/models/apis/responseData';
import News from '~/models/entitis/news';

@Component({})
export default class NEWS extends Vue {
newsData: any = [];
    async mounted() {
        let response = await ResponseData.news();
        this.newsData = response.data
        console.log(this.newsData);
    }
}
</script>
<style lang="scss">
.title-news-contents {
    text-align: center;
    border-bottom: 1px solid #444444;
    max-width: 300px;
    margin: 0 auto;
}
.main-container {
    display: flex;
    max-width: 800px;
    margin: 100px auto;
}
.img-area {
    margin-right: 20px;
}
.img {
    width: 256px;
}
@media screen and (max-width:414px) {
    .main-container {
        display: block;
    }
    .img-area {
        margin-left: 50px;
    }
    .datetime-area {
        margin-left: 50px;
    }
}
.news-date-time-area {
    display: flex;
    align-items: center;
    .news-date-time-title {
        border-bottom: 1px solid #000;
        width: 70px;
    }
    .news-date-time {
        margin-left: 20px;
    }
}
.news-title-area {
    display: flex;
    align-items: center;
    .news-title {
        border-bottom: 1px solid #000;
        width: 70px;
    }
    .news-title-name {
        margin-left: 20px;
    }
}
.news-description-area {
    display: flex;
    align-items: center;
    .news-description-title {
        border-bottom: 1px solid #000;
        width: 70px;
    }
    .news-description {
        margin-left: 20px;
    }
}
.title {
    border-bottom: 1px solid #000;
}
.description {
    border-bottom: 1px solid #000;
}
</style>