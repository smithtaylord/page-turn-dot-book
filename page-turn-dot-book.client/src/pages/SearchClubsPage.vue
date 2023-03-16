<template>
  <div class="container-fluid bg-success">
    <div class="row">
      <div class="col-6 dropdown">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton"
          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter Clubs by Type: {{ filterCategory }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button @click="changeFilterCategory('')" class="dropdown-item" href="#">All</button>
          <button @click="changeFilterCategory('casual')" class="btn btn-outline-light dropdown-item">Casual
            Readers</button>
          <button @click="changeFilterCategory('speed')" class="btn btn-outline-light dropdown-item">Speed
            Readers</button>
          <button @click="changeFilterCategory('single cat moms')" class="btn btn-outline-light dropdown-item">Single Cat
            Moms</button>
          <button @click="changeFilterCategory('horror')" class="btn btn-outline-light dropdown-item">Horror</button>
          <button @click="changeFilterCategory('series')" class="btn btn-outline-light dropdown-item">Series</button>
          <button @click="changeFilterCategory('fantasy')" class="btn btn-outline-light dropdown-item">Fantasy</button>
          <button @click="changeFilterCategory('author-based')" class="btn btn-outline-light dropdown-item">Author
            Based</button>
          <button @click="changeFilterCategory('non-fiction')"
            class="btn btn-outline-light dropdown-item">Non-Fiction</button>
          <button @click="changeFilterCategory('elite')" class="btn btn-outline-light dropdown-item">Elite
            Readers</button>
          <button @click="changeFilterCategory('sci-fi')" class="btn btn-outline-light dropdown-item">Sci-Fi</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="c in clubs">
        <ClubCard :club="c" />
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, ref, computed } from 'vue';
import { AppState } from '../AppState';
import ClubCard from '../components/ClubCard.vue';
import { clubsService } from '../services/ClubsService';
import Pop from '../utils/Pop';

export default {
  setup() {
    const filterCategory = ref('')
    async function getAllClubs() {
      try {
        await clubsService.getAllClubs()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      getAllClubs()
    })

    return {
      filterCategory,
      clubs: computed(() => {
        if (!filterCategory.value) {
          return AppState.clubs
        }
        else {
          return AppState.clubs.filter(c => c.type == filterCategory.value)
        }
      }),

      changeFilterCategory(category) {
        filterCategory.value = category
      }
    };
  },
  components: { ClubCard }
}
</script>


<style lang="scss" scoped></style>