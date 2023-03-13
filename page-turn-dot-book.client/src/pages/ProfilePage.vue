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
                        This is where your biography will go! Coming soon to you!!!
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-10 m-auto">
                        <CommentComponent />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-11 m-auto bg-warning">
                        <div class="row mt-3">
                            <div class="col-8 m-auto bg-danger text-center">
                                <h4 class="my-3">{{ profile.name }} Read Books</h4>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-11 m-auto bg-dark text-center">
                                This is Where The Books Ive Read Will Go!
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-11 m-auto bg-warning">
                        <div class="row mt-3">
                            <div class="col-8 m-auto bg-danger text-center">
                                <h4 class="my-3">{{ profile.name }} Clubs</h4>
                            </div>
                        </div>
                        <div v-if="Clubs" class="row mt-2">
                            <div v-for="c in Clubs" class="col-11 m-auto bg-dark text-center">
                                <ClubCard :club="c" />
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

        onMounted(() => {
            getProfileById();
            getProfilesClubs();
        });
        return {
            profile: computed(() => AppState.profile),
            Clubs: computed(() => AppState.myClubs)
        };
    },
    components: { CommentComponent, ClubCard }
}
</script>


<style lang="scss" scoped>
.profile-pic {
    height: 160px;
    width: 160px;
    border-radius: 50%;
}
</style>