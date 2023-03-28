<template>
  <span class="navbar-text">
    <button class="btn bg-primary w-100" @click="login" v-if="!user.isAuthenticated">
      Login
    </button>
    <div v-else>
      <div class="">
        <div class="">
          <router-link :to="{ name: 'Account' }">
            <button class="btn bg-danger w-100 selectable mb-2" data-bs-dismiss="offcanvas" aria-label="Close-OffCanvas">
              Manage Account
            </button>
          </router-link>
          <button class="btn bg-primary w-100 selectable mb-2" data-bs-dismiss="offcanvas" aria-label="Close-OffCanvas"
            @click="logout">
            <i class="mdi mdi-logout"></i>
            logout
          </button>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
