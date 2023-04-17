<template>
    <div class="container">
        <CommonHeader />
    </div>
</template>
<script lang="ts">
import CommonHeader from '~/components/CommonHeader.vue';
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
    components: {
        CommonHeader,
    }
})
export default class Header extends Vue {

}
    
</script>