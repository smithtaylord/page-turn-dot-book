<template>
    <div class="OffCanvas bg-warning">


        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header bg-warning">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <i class="mdi mdi-book-open-variant text-dark"></i>
                    PageTurn.Book</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close-OffCanvas"></button>
            </div>
            <div class="offcanvas-body bg-warning">
                <div class="d-flex flex-column">
                    <router-link :to="{ name: 'CreateClub' }">
                        <button class="btn bg-primary mb-2 w-100" data-bs-dismiss="offcanvas"
                            aria-label="Close-OffCanvas">Create
                            Club</button>
                    </router-link>
                    <router-link :to="{ name: 'Search' }">
                        <button class="btn bg-success mb-2 w-100" data-bs-dismiss="offcanvas"
                            aria-label="Close-OffCanvas">Search
                            Books</button>
                    </router-link>
                    <router-link :to="{ name: 'About' }" class="">
                        <Button class="btn bg-danger mb-2 w-100" data-bs-dismiss="offcanvas"
                            aria-label="Close-OffCanvas">About</Button>
                    </router-link>
                    <router-link v-if="account.id" :to="{ name: 'Profile', params: { profileId: account.id } }">
                        <button class="btn bg-danger w-100" data-bs-dismiss="offcanvas" aria-label="Close-OffCanvas">My
                            Profile</button>
                    </router-link>
                    <Login />

                </div>

            </div>
        </div>



    </div>
</template>


<script>
import { AppState } from '../AppState.js';
import Login from './Login.vue';
import { computed } from 'vue';

export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        };
    },
    components: { Login }
}
</script>


<style lang="scss" scoped></style>