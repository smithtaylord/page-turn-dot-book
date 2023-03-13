<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card text-start">
                    <img class="clubImg" :src="club?.coverImg" :alt="club?.name">
                    <div class="card-body">
                        <h4 class="card-title">{{ club?.name }}</h4>
                        <p class="card-text">{{ club?.bio }}</p>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-6 text-end m-2">
                            <button class="btn bg-success" v-if="!foundMember" @click="createMember()"
                                :disabled="club?.isArchived">Join Club</button>
                            <button class="btn bg-danger" v-else @click="removeMember(foundMember.memberId)"
                                :disabled="club?.isArchived">Leave Club</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3 bg-danger p-2 ">
                <h4>Club Members</h4>
                <div class="d-flex">
                    <div v-for="m in members">
                        <img :src="m.profile.picture" :alt="m - name" class="profilePic m-1">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid my-3">
        <div class="row">
            <div class="col-12 text-center bg-primary">
                <h1 class="my-3">Currently Reading</h1>
                <div v-if="!activeClubBook">
                    <img class=" mb-3 bookCover"
                        src="https://jackchovet.files.wordpress.com/2022/05/placeholder-cover-to-be-revealed.png?w=335"
                        alt="">
                    <p class="mb-3 px-2 text-start">We're eagerly awaiting the club's next book selection. Please reach out
                        to
                        your club
                        owner for more information on the upcoming book.</p>
                </div>
                <div v-else>
                    <div v-for="b in activeClubBook">
                        <BookCard :book="b" />
                    </div>
                    <h3>{{ activeClubBook.title }}</h3>
                </div>
            </div>
        </div>
        <div class="row">
            <CommentComponent />
        </div>
    </div>
    <!-- <div class="container-fluid bg-dark">
        <div class="row">
            <div v-for="c in comments" class="col-12 my-3">
                <div class="row d-flex align-content-center">
                    <div class="col-2">
                        <img :src="c.creator?.picture" alt="" class="profilePic">
                    </div>
                    <div class="col-8 bg-warning ms-2 rounded">
                        <p class="fw-bold m-0"> {{ c.creator.name }}</p>
                        <p class="m-0 mb-2">
                            {{ c.body }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="container-fluid bg-warning">
        <div class="row">
            <div class="col-12 text-center">
                <h1>Vote On Next Book</h1>
            </div>
            <div>
                <!-- TODO Check this out once we can log in! -->
                <div class="d-flex scroll-x">
                    <div v-for="b in clubBooks">
                        <div>
                            <i v-if="account.id == club.creatorId" class="mdi mdi-book-heart-outline selectable fs-3"
                                title="set book active"></i>
                            <BookCard :book="b" />
                            <i class="mdi mdi-star-outline selectable fs-5" title="vote for book"></i>
                            <p>total votes</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
import { watchEffect, computed, onMounted } from 'vue';
import { clubsService } from '../services/ClubsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { AppState } from '../AppState.js'
import ClubCard from '../components/ClubCard.vue';
import { useRoute, useRouter } from 'vue-router';
import { clubMembersService } from '../services/ClubMembersService';
import CommentComponent from "../components/CommentComponent.vue";
import { commentsService } from '../services/CommentsService.js';
import { booksService } from '../services/BooksService.js';

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        // TODO Check this out when we can log in!
        async function getClubBooks() {
            try {
                const clubId = route.params.clubId
                await clubsService.getClubBooks(clubId)
            } catch (error) {
                Pop.error(error, "getting club books")
            }
        }

        async function getClubById() {
            try {
                const clubId = route.params.clubId;
                logger.log(clubId);
                await clubsService.getClubById(clubId);
            }
            catch (error) {
                Pop.error("getting club by id");
                router.push("/");
            }
        }
        async function getMembersByClubId() {
            try {
                const clubId = route.params.clubId
                await clubMembersService.getMembersByClubId(clubId)
            } catch (error) {
                Pop.error(error.message)
            }
        }

        // async function getCommentsByClubId() {
        //     try {
        //         const clubId = route.params.clubId
        //         await commentsService.getCommentsByClubId(clubId)
        //     } catch (error) {
        //         logger.error(error)
        //         Pop.error(error.message)
        //     }
        // }

        watchEffect(() => {
            if (route.params.clubId) {
                getClubById();
                getMembersByClubId();
                getClubBooks();
                // getCommentsByClubId();
            }
        })

        return {
            route,
            club: computed(() => AppState.activeClub),
            members: computed(() => AppState.members),
            foundMember: computed(() => AppState.members.find(m => m.id == AppState.account.id)),
            myMembership: computed(() => AppState.members.find(m => m.clubId == AppState.activeClub.id)),
            account: computed(() => AppState.account),
            clubBooks: computed(() => AppState.activeClubBooks),
            activeClubBook: computed(() => AppState.activeClubBook),
            // comments: computed(() => AppState.comments),
            async createMember() {
                try {
                    await clubMembersService.createMember({ clubId: route.params.clubId })
                } catch (error) {
                    Pop.error('creating member')
                    logger.error(error)
                }
            },
            async removeMember(memberId) {
                try {
                    if (await Pop.confirm()) {
                        await clubMembersService.removeMember(memberId)
                        logger.log(memberId)
                    }
                } catch (error) {
                    Pop.error('removing member')
                    logger.error(error)
                }
            }
        };
    },
    components: { ClubCard, CommentComponent }
}
</script>


<style lang="scss" scoped>
.clubImg {
    height: 50vh;
    width: auto;

}

.profilePic {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px black;
}

.scroll-x {
    overflow-x: scroll;
    width: 100%;
    height: 40vh;
}

.bookCover {
    height: 40vh;
    // width: 100%;
    object-fit: cover;

}
</style>