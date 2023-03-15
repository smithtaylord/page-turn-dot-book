<template>
    <div class="component">
        <form @submit.prevent="handleSubmit()">
            <div class="py-3">
                <textarea required v-model="editable.body" class="form-control p-2"
                    placeholder="Join the conversation!" style="height: 100px"
                    maxlength="2500" minlength="2"></textarea>
                <div class="d-flex justify-content-end py-3">
                    <button class="btn bg-primary text-dark fw-bold box-shadow" type="submit">post comment</button>
                </div>
            </div>
        </form>

    </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { commentsService } from '../services/CommentsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        const editable = ref({})
        const route = useRoute()
        return {
            editable,
            account: computed(() => AppState.account),
            async handleSubmit() {
                try {
                    const commentData = editable.value
                    commentData.parentId = route.params.clubId || route.params.profileId
                    logger.log(commentData)
                    await commentsService.createComment(commentData)
                    editable.value = {}
                } catch (error) {
                    logger.error(error)
                    Pop.error(error.message)
                }
            },
        }
    }
}
</script>


<style lang="scss" scoped></style>