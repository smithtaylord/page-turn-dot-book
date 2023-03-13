<template>
    <div class="container-fluid bg-warning container-ht">
        <div class="row">
            <div class="col-12 mt-5">
                <form @submit.prevent="createClub()">
                    <div class="form-floating">
                        <input v-model="editable.name" required type="text" class="form-control" id="name">
                        <label for="floatingInput" class="form-label">Name</label>
                    </div>
                    <div class="form-floating my-3">
                        <input v-model="editable.bio" required type="text" class="form-control" id="bio">
                        <label for="floatingInput" class="form-label">Bio</label>
                    </div>
                    <div class="form-floating">
                        <input v-model="editable.coverImg" required type="text" class="form-control" id="coverImg">
                        <label for="floatingInput" class="form-label">Url</label>
                    </div>
                    <button class="btn bg-danger mt-4" type="submit">Create Club</button>
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


<style lang="scss" scoped>
.container-ht {
    min-height: 100vh;
}

input {
    text-shadow: 0px 0px 1px black;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;

}

// font-family: 'Playfair Display', serif;
</style>