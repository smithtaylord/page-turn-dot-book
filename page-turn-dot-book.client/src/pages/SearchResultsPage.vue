<template>
    <div class="container-fluid bg-success">
        <div class="row">
            <div class="col-12 mt-2 d-flex flex-row justify-content-center justify-content-sm-end">
                <form @submit.prevent="searchBooks()" class="d-flex">
                    <div>
                        <input p-3 v-model="editable.query" type="text" class="form-control" placeholder="Search">
                    </div>
                    <div>
                        <button class="btn bg-danger" type="submit"> <i class="mdi mdi-magnify"></i></button>
                    </div>
                </form>
            </div>
            <div v-if="googleBooks[0]" v-for="b in googleBooks" class="col-6 col-md-4">
                <div class="my-3">
                    <router-link :to="{ name: 'Book', params: { isbn: b.isbn } }">
                        <div class="card">
                            <img :src="b.coverImg" :alt="b.title" class="bookImg" :title="b.title">
                        </div>
                    </router-link>
                </div>
            </div>
            <div v-else class="col-12 d-flex flex-row justify-content-center align-items-center mt-5 text-dark">
                <div>
                    <h1>Search Something</h1>
                    <p class="text-center"><i class="mdi mdi-magnify mdi-spin fs-1"></i></p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { ref, computed, onMounted } from "vue";
import { AppState } from "../AppState";
import { booksService } from "../services/BooksService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
    setup() {
        const editable = ref({})
        onMounted(() => {
            AppState.googleBooks = []
        })

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


<style lang="scss" scoped>
.card {
    min-height: 272px;
    min-width: 181px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.586);
}

@media (min-width: 768px) {
    .card {
        min-height: 60vh;
        max-width: 25vw;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.586)
    }

    .bookImg {
        min-height: 60vh;
        max-width: 25vw;
    }
}

.bookImg {
    height: 272px;
    object-fit: cover;
    transition: transform 0.2s;
}

.bookImg:hover {
    transform: scale(1.1);
}
</style>