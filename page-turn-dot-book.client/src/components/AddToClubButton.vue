<!-- booksInTheClub: computed(() => AppState.myClubs.find(c => c.clubBooks.find(b => b.isbn == route.params.isbn))), -->
<template>
      <div>
        <li v-if="!club.clubBooks.find(b => b.isbn == isbn)" class="dropdown-item" @click="addBookToClub(club.club?.id)">{{
          club.club?.name }}</li>
      </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'

import { clubsService } from '../services/ClubsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
  props: {
    club: {type: Object, required: true}
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    return {
      myClubs: computed(() => AppState.myClubs),
      isbn: computed(() => route.params.isbn),
      googleBook: computed(() => AppState.googleBook),
      async addBookToClub(clubId) {
        try {
          // console.log(this.booksInTheClub);
          const book = this.googleBook
          book.isbn = route.params.isbn
          book.clubId = clubId
          book.coverImg = this.googleBook.img
          await clubsService.addBookToClub(book)
          router.push({ name: "Club", params: { clubId: clubId } })
        } catch (error) {
          logger.log(error)
          Pop.error(error.message)
        }
      },
      async getMyClubs() {
        try {
          let profileId = AppState.account.id
          logger.log(profileId, "getmyclub profile id on active book page")
          await clubsService.getMyClubs(profileId)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>

