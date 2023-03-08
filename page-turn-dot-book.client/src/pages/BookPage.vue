<template>
    <div class="container-fluid bg-primary" v-if="googleBook">
        <div class="row">
            <div class="col-12 my-4 px-4">
                <div>
                    <img class="book-img" :src="googleBook?.img" alt="Hello There">
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
                <p class="text-center my-3 fs-2 p-0">{{ googleBook?.title }}</p>
                <p class="mt-2 mb-4 fs-3 px-3 py-0">{{ googleBook?.author }}</p>
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
    height: 60vh;
    width: 100%;

}
</style>