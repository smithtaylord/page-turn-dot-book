<template>
    <div class="component">
        <div class="container-fluid bg-dark rounded">
            <div class="row">
                <div class="row d-flex align-content-center p-2">
                    <div class="col-2">
                        <router-link class="selectable" :to="{ name: 'Profile', params: { profileId: comment.creatorId } }">
                            <img :src="comment.creator.picture" alt="" class="profilePic box-shadow">
                        </router-link>
                    </div>
                    <div class="col-8 bg-warning w-75 box-shadow ms-3 rounded">
                        <p class="fw-bold m-0">{{ comment.creator.name }} <i v-if="account.id == comment.creatorId"
                                class="text-end mdi mdi-close-circle-outline text-danger selectable" title="delete comment"
                                @click="deleteComment(comment.id)"></i>
                        </p>
                        <p class="m-0 mb-2">
                            {{ comment.body }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- OLD CREATE COMMENT FORM BELOW ABSTRACTED TO ITS OWN COMPONENT -->


    <!-- <form @submit.prevent="handleSubmit()" class="">
                <div class="align-items-center">
                    <input v-model="editable.body" placeholder="Leave a comment..." class="input" name="comment"
                        type="text">
                    <button aria-label="Type comment here" type="submit" class="fs-3">
                        <i class="mdi mdi-send"> </i>
                    </button>
                </div>
            </form> -->
    <!-- <form @submit.prevent="handleSubmit()">
                <div class="py-3">
                    <textarea required v-model="editable.body" class="form-control p-2"
                        placeholder="Join the conversation! Leave your comments on the book below...." style="height: 100px"
                        maxlength="2500" minlength="2"></textarea>
                    <div class="d-flex justify-content-end py-3">
                        <button class="btn bg-success text-dark fw-bold box-shadow" type="submit">post comment</button>
                    </div>
                </div>
            </form> -->
</template>


<script>
import { ref, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { commentsService } from "../services/CommentsService.js"

export default {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    setup() {
        // const editable = ref({})
        // const route = useRoute()
        // watchEffect(() => {
        //     if (route.params.clubId) {
        //         getCommentsByClubId();
        //     }
        // })
        // async function getCommentsByClubId() {
        //     try {
        //         const clubId = route.params.clubId
        //         await commentsService.getCommentsByClubId(clubId)
        //     } catch (error) {
        //         logger.error(error)
        //         Pop.error(error.message)
        //     }
        // }
        return {
            // editable,
            // profile: computed(() => AppState.account),
            comments: computed(() => AppState.comments),
            clubs: computed(() => AppState.clubs),
            account: computed(() => AppState.account),
            async deleteComment(commentId) {
                try {
                    await commentsService.deleteComment(commentId)
                } catch (error) {
                    Pop.error(error, '[delete comment]')
                }
            }
            // async handleSubmit() {
            //     try {
            //         const commentData = editable.value
            //         commentData.parentId = route.params.clubId
            //         logger.log(commentData)
            //         await commentsService.createComment(commentData)
            //         editable.value = {}
            //     } catch (error) {
            //         logger.error(error)
            //         Pop.error(error.message)
            //     }
            // },
        }
    }
}
</script>


<style lang="scss" scoped>
// .input {
//     max-width: 200px;
//     min-height: 40px;
//     padding: 10px;
//     font-family: 'Courier New', Courier, monospace;
//     outline: none;
//     background: #e8e8e8;
//     box-shadow: 5px 5px 17px #c8c8c8,
//         -5px -5px 17px #ffffff;
//     border: none;
//     border-radius: 10px;
//     transition: all .5s;
// }

// .input:focus {
//     background: #e8e8e8;
//     box-shadow: inset 5px 5px 17px #c8c8c8,
//         inset -5px -5px 17px #ffffff;
// }

.profilePic {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px black;
}
</style>