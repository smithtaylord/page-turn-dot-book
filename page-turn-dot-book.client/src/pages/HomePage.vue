<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-sm-block d-md-none homePagePic ">
        <p class="text-light py-5 px-2 fs-3 text-shadow">
          At PageTurn.Book, we offer tools for hosting
          book clubs and tools for finding book club
          members.
        </p>
        <div v-if="account.id">
          <router-link class="selectable" :to="{ name: 'CreateClub' }">
            <button class="mb-3 btn bg-danger selectable">
              Create a Club
            </button>
          </router-link>
        </div>
      </div>
      <div class="col-12 d-none d-md-block d-xxl-block LGhomePagePic">
        <p class="text-light py-5 px-2 fs-3 text-shadow">
          At PageTurn.Book, we offer tools for hosting
          book clubs and tools for finding book club
          members.
        </p>
        <div v-if="account.id">
          <router-link class="selectable" :to="{ name: 'CreateClub' }">
            <button class="mb-3 btn bg-danger selectable">
              Create a Club
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12  bg-custom-primary">
        <h1 class="text-center mt-2">
          New & Popular
        </h1>
        <div class="d-flex scroll-x">
          <div v-for="b in Books" class="">
            <BookCard :book="b" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-custom-danger">
        <h1 class="text-center mt-2">Let's get clubbin'!</h1>
        <div class="d-flex scroll-x mb-3">
          <div v-for="c in clubs">
            <ClubCard :club="c" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import BookCard from '../components/BookCard.vue';
import { booksService } from '../services/BooksService.js';
import { clubsService } from '../services/ClubsService.js';
import Pop from '../utils/Pop.js';
import ClubCard from '../components/ClubCard.vue';

export default {
  setup() {
    async function getNYTBooks() {
      try {
        await booksService.getNYTBooks();
      }
      catch (error) {
        Pop.error(error, "get NYT books ");
      }
    }

    async function getAllClubs() {
      try {
        await clubsService.getAllClubs()
      } catch (error) {
        Pop.error(error)
      }
    }


    onMounted(() => {
      getNYTBooks();
      getAllClubs();
    });

    return {
      Books: computed(() => AppState.Books),
      clubs: computed(() => AppState.clubs),
      account: computed(() => AppState.account),
    };
  },
  components: { BookCard, ClubCard }
}

</script>

<style scoped lang="scss">
.homePagePic {
  background-image: url(https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80);
  background-size: cover;

}

.LGhomePagePic {
  background-image: url(public/bookbackground.jpeg);
  background-size: cover;
}

.scroll-x {
  overflow-x: scroll;
  width: 100%;
  height: 40vh;
}

// ::-webkit-scrollbar {
//   width: 10px;
//   height: 10px;
//   background-color: #CCF3FD;
//   border-radius: 10px;
// }

// ::-webkit-scrollbar-thumb {
//   background-color: #56C7FB;
//   border-radius: 10px;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background-color: #56C7FB;
// }
</style>
