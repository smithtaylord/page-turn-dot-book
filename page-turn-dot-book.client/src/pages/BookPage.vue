<template>
    <div class="component">

        <h1>youre on the book page yo!</h1>

        <div>
            {{ googleBooks.volumeInfo }}
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
            googleBooks: computed(() => AppState.googleBooks)
        }
    }
}
</script>


<style lang="scss" scoped></style>