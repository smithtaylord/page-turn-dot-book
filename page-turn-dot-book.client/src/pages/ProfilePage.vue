<template>
    <div class="container-fluid bg-success">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <img class="profile-pic" :src="profile.picture" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-primary">
        <div class="row">
            <div class="col-12">
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
import { computed, onMounted } from 'vue';
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

        onMounted(() => {
            getProfileById();
            getProfilesClubs();
            getProfilesBooks();
        });
        return {
            profile: computed(() => AppState.profile),
            clubs: computed(() => AppState.myClubs),
            profileBooks: computed(() => AppState.readBooks)
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

.scroll-x {
    overflow-x: scroll;
    width: 100%;
    height: 40vh;
}
</style>