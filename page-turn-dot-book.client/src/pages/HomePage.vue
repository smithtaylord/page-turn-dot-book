<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 homePagePic ">
        <p class="text-light py-5 px-2 fs-3 text-shadow">
          At PageTurn.Book, we offer tools for hosting
          book clubs and tools for finding book club
          members.
        </p>
        <button class="mb-3 btn bg-danger selectable">
          Create a Club
        </button>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12  bg-primary">
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
      <div class="col-12 bg-danger">
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

.scroll-x {
  overflow-x: scroll;
  width: 100%;
  height: 40vh;
}
</style>
