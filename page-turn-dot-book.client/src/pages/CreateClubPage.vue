<template>
    <div class="container-fluid bg-warning container-ht">
        <div class="row">
            <div class="col-12 mt-5">
                <form @submit.prevent="createClub()">
                    <div class="form-floating">
                        <input v-model="editable.name" required type="text" class="form-control" id="name" maxlength="20">
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
                    <label for="type" class="form-label m-0 mt-3 text-dark">Club Type</label>
                    <select v-model="editable.type" required class="form-select" id="type">
                        <option selected value="casual">Casual</option>
                        <option value="elite">Elite</option>
                        <option value="speed">Speed</option>
                        <option value="single cat moms">Single Cat Moms</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="horror">Horror</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="series">Series</option>
                        <option value="author-based">Author Based</option>
                    </select>
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