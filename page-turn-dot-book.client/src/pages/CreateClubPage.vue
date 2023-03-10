<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="createClub()">
                    <div>
                        <label for="name" class="form-label">Name</label>
                        <input v-model="editable.name" required type="text" class="form-control" id="name">
                    </div>
                    <div>
                        <label for="bio" class="form-label">Bio</label>
                        <input v-model="editable.bio" required type="text" class="form-control" id="bio">
                    </div>
                    <div>
                        <label for="coverImg" class="form-label">CoverImg</label>
                        <input v-model="editable.coverImg" required type="text" class="form-control" id="coverImg">
                    </div>
                    <button class="btn bg-danger" type="submit">Create Club</button>
                </form>
            </div>
        </div>


    </div>
</template>


<script>
import { ref } from 'vue';
import { Club } from '../models/Club.js';
import { router } from '../router.js';
import { clubsService } from '../services/ClubsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    props: {
        club: { type: Club, required: true },
    },

    setup() {
        const editable = ref({})

        return {
            editable,
            async createClub() {
                try {
                    const formData = editable.value
                    const club = await clubsService.createClub(formData)
                    editable.value = {}
                    if (club?.id) {
                        router.push({ name: 'Club', params: { clubId: club.id } })
                    }
                } catch (error) {
                    logger.error(error)
                    Pop.error(error.message)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>