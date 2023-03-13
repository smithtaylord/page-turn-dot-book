<template>
  <header class="sticky-top">
    <Navbar />
  </header>
  <main class="bg-success">
    <router-view />
  </main>
  <footer class="bg-dark text-light">

    <span class="text-light d-flex align-items-center">
      <h6 class="mx-2 pt-1">Made with <i class="mdi mdi-heart"></i> using</h6>
      <img src="https://developer.nytimes.com/files/poweredby_nytimes_65a.png?v=1583354208350" alt=""
        class="px-2 bg-light logo rounded py-1">
      <h6 class="mx-2 pt-1">&</h6>
      <img src="https://books.google.com/googlebooks/images/poweredby.png" alt="" class="px-2 bg-light logo rounded py-1">
    </span>
  </footer>
  <Modal />
  <OffCanvas />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Modal from './components/Modal.vue'
import Navbar from './components/Navbar.vue'
import OffCanvas from './components/OffCanvas.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, OffCanvas, Modal }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  margin-bottom: 0;
  display: grid;
  place-content: center;
  height: 32px;
}

.logo {
  height: 25px;
  width: auto;
}
</style>
