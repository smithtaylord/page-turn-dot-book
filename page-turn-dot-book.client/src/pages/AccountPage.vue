<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>


  <div class="container-fluid bg-warning container-ht">
    <div class="row">
      <div class="col-12 col-md-6 m-auto mt-5">
        <form @submit.prevent="editAccount()">
          <div class="form-floating mb-2">
            <input v-model="editable.picture" :placeholder="account.picture" required type="text" class="form-control"
              id="picture">
            <label for="floatingInput" class="form-label">Picture</label>
          </div>
          <div class="form-floating mb-2">
            <input v-model="editable.name" :placeholder="account.name" required type="text" class="form-control"
              id="name">
            <label for="floatingInput" class="form-label">Name</label>
          </div>
          <div class="form-floating mb-2">
            <input v-model="editable.bio" :placeholder="account.bio" required type="text" class="form-control" id="bio">
            <label for="floatingInput" class="form-label">Bio</label>
          </div>
          <button class="btn bg-danger mb-4" type="submit">Save Changes</button>
        </form>
      </div>
    </div>


  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { ref, watchEffect, onUpdated } from "vue"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { accountService } from "../services/AccountService"
export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      if (AppState.profile.id) {
        editable.value = { ...AppState.profile }
      }
    })
    onUpdated(() => {
      window.scrollTo(0, 0)
    })

    return {
      editable,
      async editAccount() {
        try {
          const formData = editable.value
          await accountService.editAccount(formData)
        } catch (error) {
          Pop.error(error.message)
          logger.error(error)
        }
      },
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
