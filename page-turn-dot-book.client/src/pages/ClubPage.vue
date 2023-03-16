<template>
    <div :style="club?.isArchived ? { filter: 'grayscale(100%)' } : {}">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card text-start mt-2">
                        <img class="clubImg image-container" :src="club?.coverImg" :alt="club?.name">
                        <div v-if="!club?.isArchived && club?.creatorId == account.id" class="text-end icon-container"><i
                                class="mdi mdi-bookmark-remove selectable fs-1 px-2 pb-1 mx-2 glass-card rounded"
                                @click="archiveClub"></i>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{{ club?.name }}</h4>
                            <p class="card-text">{{ club?.bio }}</p>
                        </div>
                        <div class="row justify-content-end">
                            <div v-if="account.id" class="col-6 text-end m-2">
                                <button class="btn bg-success box-shadow" v-if="!foundMember" @click="createMember()"
                                    :disabled="club?.isArchived">Join Club</button>
                                <button class="btn bg-danger box-shadow" v-else @click="removeMember(foundMember.id)"
                                    :disabled="club?.isArchived">Leave Club</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-3 bg-danger p-2 ">
                    <h4>Club Members</h4>
                    <div class="d-flex">
                        <div v-for="m in members">
                            <router-link class="selectable" :to="{ name: 'Profile', params: { profileId: m.profile.id } }">
                                <img :src="m.profile.picture" :alt="m.name" class="profilePic m-1">
                            </router-link>
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
                        <p class="mb-3 px-2 text-start">We're eagerly awaiting the club's next book selection. Please reach
                            out
                            to
                            your club
                            owner for more information on the upcoming book.</p>
                    </div>
                    <div v-else>
                        <div>
                            <BookCard :book="activeClubBook" />
                        </div>
                        <h3 class="my-3">{{ activeClubBook.title }}</h3>
                    </div>
                </div>
            </div>
            <h3 class="text-center py-3">
                Club Comments!
            </h3>
            <div v-if="foundMember && !club?.isArchived">
                <CreateCommentForm />
            </div>
            <div class="row">
                <div v-if="comments.length > 0" :class="expanded ? 'expanded' : 'expandable'">
                    <div v-for="c in comments">
                        <CommentComponent :comment="c" />
                    </div>
                </div>
                <div v-else>
                    <div class="bg-dark text-light p-3 rounded box-shadow indent">
                        <p>no comments... yet?</p>
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center" v-if="comments.length > 2">
                    <button v-if="expanded" @click="expand" class='btn-cool text-center'>read less</button>
                    <button v-else @click="expand" class='btn-cool text-center'>read more</button>
                </div>
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
                        <div v-for="b in clubBooksId">
                            <div>

                                <BookCard :book="b" />
                                <div class="d-flex justify-content-between align-items-baseline px-3 pt-2">
                                    <i @click="clubBookVoting(b.id)" class="mdi mdi-star-outline selectable fs-4"
                                        title="vote for book"></i>
                                    <p class="fw-bold">Votes {{ b?.voteId?.length }}</p>
                                    <div v-if="account.id == club?.creatorId && !club?.isArchived">
                                        <div type="button" class="" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="selectable text-dark mdi mdi-dots-horizontal fs-3 "
                                                title="remove/set active book"></i>
                                        </div>
                                        <div class="dropdown-menu text-center fs-1">
                                            <div class="d-flex justify-content-evenly">
                                                <i class="mdi mdi-book-heart-outline text-dark selectable fs-1"
                                                    title="set book active" @click="setBookActive(b.id)"></i>
                                                <div>|</div>
                                                <i @click="removeClubBook(b.id)"
                                                    class="mdi mdi-cancel text-danger selectable fs-1"
                                                    title="remove book from club"></i>
                                            </div>
                                            <div class="list-group">

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
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
import CreateCommentForm from '../components/CreateCommentForm.vue';

export default {
    setup() {
        const route = useRoute();
        // const ref = ref({'b.voteId'});
        const router = useRouter();
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

        async function getCommentsByClubId() {
            try {
                const clubId = route.params.clubId
                await commentsService.getCommentsByClubId(clubId)
            } catch (error) {
                logger.error(error)
                Pop.error(error.message)
            }
        }

        watchEffect(() => {
            if (route.params.clubId) {
                getClubById();
                getMembersByClubId();
                getClubBooks();
                getCommentsByClubId();
            }
        })

        return {
            route,
            club: computed(() => AppState.activeClub),
            members: computed(() => AppState.members),
            foundMember: computed(() => AppState.members.find(m => m.accountId == AppState.account.id)),
            myMembership: computed(() => AppState.members.find(m => m.club.id == AppState.activeClub.id)),
            account: computed(() => AppState.account),
            clubBooksId: computed(() => AppState.activeClubBooks),
            activeClubBook: computed(() => AppState.activeClubBook),
            comments: computed(() => AppState.comments),
            expanded: computed(() => AppState.expanded),
            async createMember() {
                try {
                    await clubMembersService.createMember({ clubId: route.params.clubId })
                } catch (error) {
                    Pop.error('creating member')
                    logger.error(error)
                }
            },
            async clubBookVoting(clubBooksId) {
                try {
                    let clubMembers = this.foundMember.id
                    await clubMembersService.clubBookVoting(clubBooksId, clubMembers)
                } catch (error) {
                    Pop.error('add and unadd vote to Book')
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
            },
            async setBookActive(clubBookId) {
                try {
                    const clubId = route.params.clubId;
                    // logger.log(clubBookId + '- club book id     ' + clubId + '-clubId')
                    await clubsService.setBookActive(clubBookId, clubId)
                } catch (error) {
                    Pop.error(error, '[setting book to active]')
                }
            },
            async removeClubBook(clubBookId) {
                try {
                    if (await Pop.confirm('Are you sure you want to remove this book from the club?', 'Some members might not like that...')) {
                        await clubsService.removeClubBook(clubBookId)
                    }
                } catch (error) {
                    Pop.error(error, '[removing club book]')
                }
            },
            expand() {
                logger.log(AppState.expanded)
                if (AppState.expanded) {
                    AppState.expanded = false
                } else {
                    AppState.expanded = true
                }
                logger.log(AppState.expanded)
            },
            async archiveClub() {
                try {
                    const clubId = route.params.clubId
                    if (await Pop.confirm('Are you sure you want to archive this club?', 'Make sure to let all your members know, some of them might be sad...')) {
                        await clubsService.archiveClub(clubId)
                    }
                } catch (error) {
                    Pop.error(error, '[archive club]')
                }
            }

        };
    },
    components: { ClubCard, CommentComponent, CreateCommentForm }
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
    height: 45vh;
}

.bookCover {
    height: 40vh;
    // width: 100%;
    object-fit: cover;

}

.expandable {
    max-height: 35vh;
    overflow: hidden;
}

.expanded {
    max-height: none;
}

.btn-cool {
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    position: relative;
    background-color: transparent;
    transition: .2s cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0.6;
}

.btn-cool::after {
    content: '';
    border-bottom: 3px double rgb(214, 207, 113);
    width: 0;
    height: 100%;
    position: absolute;
    margin-top: -5px;
    top: 0;
    left: 5px;
    visibility: hidden;
    opacity: 1;
    transition: .2s linear;
}

.btn-cool .icon {
    transform: translateX(0%);
    transition: .2s linear;
    animation: attention 1.2s linear infinite;
}

.btn-cool:hover::after {
    visibility: visible;
    opacity: 0.7;
    width: 90%;
}

.btn-cool:hover {
    letter-spacing: 2px;
    opacity: 1;
}

.btn-cool:hover>.icon {
    transform: translateX(30%);
    animation: none;
}

@keyframes attention {
    0% {
        transform: translateX(0%);
    }

    50% {
        transform: translateX(30%);
    }
}

.image-container {
    position: relative;
    display: inline-block;
}

.icon-container {
    position: absolute;
    top: 0;
    right: 0;
}

.glass-card {
    color: white;
    text-shadow: 1px 1px 2px black;
    background-color: #5360645a;
    width: 100%;
    backdrop-filter: blur(7px)
}
</style>