<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card text-start">
                    <img class="clubImg" :src="club?.coverImg" :alt="club?.name">
                    <div class="card-body">
                        <h4 class="card-title">{{ club.name }}</h4>
                        <p class="card-text">{{ club.bio }}</p>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-6 text-end m-2">
                            <button class="btn bg-success" v-if="!foundMember" @click="createMember()"
                                :disabled="club.isArchived">Join Club</button>
                            <button class="btn bg-danger" v-else @click="removeMember(foundMember.memberId)"
                                :disabled="club.isArchived">Leave Club</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3 bg-danger p-2 ">
                <h4>Club Members</h4>
                <div class="d-flex">
                    <div v-for="m in members">
                        <img :src="m.picture" :alt="m - name" class="profilePic m-1">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid my-3">
        <div class="row">
            <div class="col-12 text-center bg-primary">
                <h1>Currently Reading</h1>
                <p> PLACEHOLDER </p>
                <h4 class="m-0"> Souper Cool Book</h4>
                <h6 class="mb-3"> Author McAuthor</h6>
            </div>
        </div>
        <div class="row">
            <CommentComponent />
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

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
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

        watchEffect(() => {
            if (route.params.clubId) {
                getClubById();
                getMembersByClubId();
            }
        })

        return {
            route,
            club: computed(() => AppState.activeClub),
            members: computed(() => AppState.members),
            foundMember: computed(() => AppState.members.find(m => m.id == AppState.account.id)),
            myMembership: computed(() => AppState.members.find(m => m.clubId == AppState.activeClub.id)),
            account: computed(() => AppState.account),
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