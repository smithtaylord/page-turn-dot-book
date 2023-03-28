<template>
  <nav class="navbar navbar-expand-xxl navbar-dark bg-dark bg-gradient px-3 justify-content-between">
    <div>
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <h1 class="">
          <i class="mdi mdi-book-open-variant fs-1 text-light"></i>
          PageTurn.Book
        </h1>
      </router-link>
    </div>
    <div class="displayButton">
      <button class="btn bg-dark selectable" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample">
        <i class="fs-1 mdi mdi-menu" title="open-menu"></i>
      </button>
    </div>
  </nav>
  <!-- OLD NAVBAR STUFF BELOW LEFT FOR REF -->

  <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
      <Login />
    </div> -->
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
.displayButton {
  justify-self: inherit;
  overflow: hidden;
}

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

/* @media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
} */
</style>
