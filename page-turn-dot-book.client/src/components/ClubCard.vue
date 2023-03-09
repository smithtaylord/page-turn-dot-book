<template>
    <div class="ClubCard box-shadow m-3 bg-warning text-center d-flex flex-column p-3 align-items-center">
<div>

    <img class="rounded-circle club-picture mb-2" :src="club.coverImg" :alt="club.name">
    <h4 class="text-limit" >{{ club.name }}</h4>
    <router-link class="selectable" :to="{name: 'Club', params: {clubId: club.id}}">
        <button class="btn bg-danger selectable mt-2">Join</button>
    </router-link>
</div>
</div>
</template>


<script>
import { Club } from '../models/Club.js';

export default {
    props: {club: { type: Club, required: true, }},
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.club-picture{
    height: 15vh;
    width: 15vh;
    object-fit: cover;
}

.ClubCard{
    width: 70vw;
    // max-height: 50vh;
    contain: content;
}
.text-limit{
    overflow: hidden;
    text-overflow: clip;
    // max-width: 100%;
    max-height: 25px;
}
</style>