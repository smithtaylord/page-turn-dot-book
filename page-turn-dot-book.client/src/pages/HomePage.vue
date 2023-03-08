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
      <div class="col-12 bg-primary">
        <h1>
          New & Popular
        </h1>
        <h1>
          book component goes here
        </h1>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-danger">
        <h1>Let's get clubbin'!</h1>
        <h1>Club Component Card goes here</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { booksService } from '../services/BooksService.js';
import Pop from '../utils/Pop.js';


export default {




  setup() {

    async function getNYTBooks(){
      try {
        await booksService.getNYTBooks()
      } catch (error) {
        Pop.error(error, 'get NYT books ')
      }
    }


    onMounted(() => {
      getNYTBooks()
    })
    return {}
  }
}
</script>

<style scoped lang="scss">
.homePagePic {
  background-image: url(https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80);
  background-size: cover;

}


</style>
