<template>
    <div>
        <common-header></common-header>
        <main>
			<nuxt />
		</main>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
    components: {
        CommonHeader: () => import("@/components/CommonHeader.vue"),
    }
})
export default class layout extends Vue {

}
    
</script>