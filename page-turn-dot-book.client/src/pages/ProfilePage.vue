<template>
    <div class="container-fluid bg-success profile-size">
        <div class="row">
            <div class="col-12">
                <router-link v-if="profile.id == account.id" class="selectable" :to="{ name: 'Account' }">
                    <div class="text-end"><i class="mdi mdi-pencil icon-size"></i></div>
                </router-link>
                <div v-else class="text-end"><i class="mdi mdi-account-circle icon-size"></i></div>
                <div class="text-center">
                    <img class="position-move profile-pic" :src="profile.picture" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-primary">
        <div class="row">
            <div class="col-12 mt-5">
                <div class="row mt-5">
                    <div class="col-9 m-auto bg-danger text-center">
                        <h1 class="my-3">{{ profile.name }}</h1>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-11 m-auto bg-warning fs-3">
                        <p>{{ profile.bio }}</p>
                    </div>
                </div>
                <div class="row mt-4">
                    <!-- <div class="col-10 m-auto">
                        <CommentComponent />
                    </div> -->
                </div>
                <div class="row mt-3">
                    <div class="col-11 m-auto bg-warning">
                        <div class="row mt-3">
                            <div class="col-8 m-auto bg-danger text-center">
                                <h4 class="my-3">{{ profile.name }} Read Books</h4>
                            </div>
                        </div>
                        <div v-if="profileBooks" class="row my-2">
                            <div class="d-flex scroll-x">
                                <div v-for="b in profileBooks" class="col-11 m-auto text-center">
                                    <BookCard :book="b" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-11 m-auto bg-danger">
                        <div class="row mt-3">
                            <div class="col-8 m-auto bg-danger text-center">
                                <h4 class="my-3">{{ profile.name }} Clubs</h4>
                            </div>
                        </div>

                        <div v-if="clubs" class="row mt-2">
                            <div class="d-flex scroll-x">
                                <div v-for="c in clubs" class="col-11 m-auto text-center">
                                    <ClubCard :club="c.club" />
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
import { AppState } from '../AppState.js';
import { computed, watchEffect } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService.js'
import CommentComponent from '../components/CommentComponent.vue';
import { clubsService } from '../services/ClubsService.js';
import ClubCard from '../components/ClubCard.vue';
import { booksService } from '../services/BooksService.js';
import BookCard from '../components/BookCard.vue';

export default {
    setup() {
        const route = useRoute();
        async function getProfileById() {
            try {
                const profileId = route.params.profileId;
                logger.log(profileId);
                await profilesService.getProfileById(profileId);
            }
            catch (error) {
                logger.error(error);
                Pop.error(error.message);
            }
        }

        async function getProfilesClubs() {
            try {
                const profileId = route.params.profileId;
                await clubsService.getMyClubs(profileId)
            } catch (error) {
                Pop.error(error.message)
            }
        }

        async function getProfilesBooks() {
            try {
                const profileId = route.params.profileId;
                await booksService.getProfilesBooks(profileId)
            } catch (error) {
                Pop.error(error.message)
            }
        }

        watchEffect(() => {
            if (route.params.profileId) {
                getProfileById();
                getProfilesClubs();
                getProfilesBooks();
            }
        });
        return {
            profile: computed(() => AppState.profile),
            clubs: computed(() => AppState.myClubs),
            profileBooks: computed(() => AppState.readBooks),
            account: computed(() => AppState.account)
        };
    },
    components: { CommentComponent, ClubCard, BookCard }
}
</script>


<style lang="scss" scoped>
.profile-pic {
    height: 160px;
    width: 160px;
    border-radius: 50%;
}

.profile-size {
    max-height: 20vh;
}

.icon-size {
    font-size: 30px;
}

.position-move {
    transform: translateY(1vh);
}

.scroll-x {
    overflow-x: scroll;
    width: 100%;
    height: 40vh;
}
</style>