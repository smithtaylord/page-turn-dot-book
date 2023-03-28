<template>
    <div class="ClubCard ClubCard-large box-shadow m-3 bg-warning  d-flex flex-column p-3 ">
        <div v-if="club.isArchived" class="text-end fs-3"><i class="mdi mdi-lock text-end text-dark"></i></div>
        <div class="text-center align-items-center">
            <img class="rounded-circle club-picture mb-2" :src="club.coverImg" :alt="club.name">
            <h4 class="text-limit">{{ club.name }}</h4>
            <router-link class="selectable" :to="{ name: 'Club', params: { clubId: club.id } }">
                <button class="btn bg-danger selectable mt-2">View</button>
            </router-link>
        </div>
    </div>
</template>


<script>
import { Club } from '../models/Club.js';

export default {
    props: { club: { type: Club, required: true, } },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.club-picture {
    height: 15vh;
    width: 15vh;
    object-fit: cover;
}

.ClubCard {
    width: 70vw;
    contain: content;
}

@media screen and (min-width: 600px) {
    .ClubCard {
        width: 25vw;
        contain: content;
    }
}



.text-limit {
    overflow: hidden;
    text-overflow: clip;
    // max-width: 100%;
    max-height: 60px;
}
</style>