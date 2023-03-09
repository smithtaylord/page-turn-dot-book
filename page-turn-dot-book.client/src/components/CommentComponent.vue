<template>
    <div class="component">
        <div class="d-flex flex-row">
            <form @submit.prevent="handleSubmit()" class="input">
                <div class="form-control">
                    <input v-model="editable.body" placeholder="Leave a comment..." class="input" name="comment"
                        type="text">
                    <button aria-label="Type comment here" type="submit" class="fs-3">
                        <i class="mdi mdi-send"> </i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { commentsService } from "../services/CommentsService.js"

export default {
    setup() {
        const editable = ref({})
        const route = useRoute()
        return {
            editable,
            profile: computed(() => AppState.account),
            comments: computed(() => AppState.comments),

            async handleSubmit() {
                try {
                    const commentData = editable.value
                    commentData.parentId = route.params.clubId
                    logger.log(commentData)
                    await commentsService.createComment(commentData)
                    editable.value = {}
                } catch (error) {
                    logger.error(error)
                    Pop.error(error.message)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.input {
    max-width: 200px;
    min-height: 40px;
    padding: 10px;
    font-family: 'Courier New', Courier, monospace;
    outline: none;
    background: #e8e8e8;
    box-shadow: 5px 5px 17px #c8c8c8,
        -5px -5px 17px #ffffff;
    border: none;
    border-radius: 10px;
    transition: all .5s;
}

.input:focus {
    background: #e8e8e8;
    box-shadow: inset 5px 5px 17px #c8c8c8,
        inset -5px -5px 17px #ffffff;
}
</style>