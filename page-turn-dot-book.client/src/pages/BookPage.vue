<template>
    <div class="container-fluid bg-primary" v-if="googleBook">
        <div class="row">
            <div class="col-12 my-4 px-4">
                <div class="d-flex justify-content-center">
                    <img class="book-img" :src="googleBook?.img" :alt="googleBook.title" v-on:error="onImageError">
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-primary">
        <div class="row">
            <div class="col-12 mt-1 mb-4 d-flex justify-content-between">
                <button class="btn bg-danger selectable">Add To My Books</button>
                <button class="btn bg-danger selectable">Add To My Club</button>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-3">{{ googleBook?.title }}</h1>
                <p class="mt-2 mb-4 fs-3 px-3 py-0 text-end">-{{ googleBook?.author }}</p>
                <p class="mt-2 mb-5 fs-4 px-3 py-0">{{ googleBook?.description }}</p>
                <p class="my-3 fs-3 p-0">{{ googleBook?.genre }}</p>
                <!-- TODO categories need mapped through -->
            </div>
        </div>
    </div>

    <div class="container-fluid my-4 bg-primary">
        <div class="row">
            <div class="col-12">
                <!-- <form @submit.prevent="createComment()">
                    <div class="">
                        <label for="comment" class="form-label">
                        </label>
                        <input v-model="editable.comment" type="textarea" placeholder="Enter Comment Here..."
                            class="form-control">
                    </div>
                </form> -->
            </div>
        </div>
    </div>
</template>


<script>
import { watchEffect, computed } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { booksService } from '../services/BooksService';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        // const editable = ref({})
        const route = useRoute()


        async function getBookByISBN() {
            try {
                let isbn = route.params.isbn
                await booksService.getBookByISBN(isbn)
            } catch (error) {
                Pop.error(error, 'GET BOOK BY ISBN PROBS YO')
            }
        }

        watchEffect(() => {
            if (route.params.isbn) {
                getBookByISBN()
            }
        })
        return {
            googleBook: computed(() => AppState.googleBook),
            onImageError() {
                event.target.src = this.googleBook.googleImg
            }
            // editable,

            // async createComment() {
            //     try {
            //         const formData = editable.value
            //         await 
            //     } catch (error) {
            //         Pop.error(error, "Create Comment Is Broken!")
            //     }
            // }
        }
    }
}
</script>


<style lang="scss" scoped>
.book-img {
    height: 50vh;
    width: auto;
    object-fit: cover;


}
</style>