<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex flex-row">
                <form @submit.prevent="searchBooks()">
                    <input v-model="editable.query" type="text" class="form-control" placeholder="Search">
                    <button class="btn btn-primary" type="submit"> <i class="mdi mdi-magnify"></i></button>
                </form>
            </div>
            <div v-for="b in googleBooks" class="col-6 col-md-2">
                <div class="my-3">
                    <div class="card">
                        <router-link :to="{ name: 'Book', params: { isbn: b.isbn } }">
                            <img :src="b.coverImg" :alt="b.title">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { ref, computed } from "vue";
import { AppState } from "../AppState";
import { booksService } from "../services/BooksService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
    setup() {
        const editable = ref({})
        return {

            editable,
            googleBooks: computed(() => AppState.googleBooks),
            async searchBooks() {
                try {
                    let searchData = editable.value
                    await booksService.searchBooks(searchData)
                } catch (error) {
                    Pop.error(error.message)
                    logger.error(error)
                }
            }

        }
    }
}
</script>


<style lang="scss" scoped></style>