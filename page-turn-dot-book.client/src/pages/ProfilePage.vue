<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <img :src="profile.picture" alt="">
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

export default {
    setup() {
        const route = useRoute()
        async function getProfileById() {
            try {
                const profileId = route.params.profileId
                logger.log(profileId)
                await profilesService.getProfileById(profileId)
            } catch (error) {
                logger.error(error)
                Pop.error(error.message)
            }
        }

        onMounted(() => {
            getProfileById()
        })

        return {
            profile: computed(() => AppState.profile)
        }
    }
}
</script>


<style lang="scss" scoped></style>