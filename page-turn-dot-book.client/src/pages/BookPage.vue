<template>
    <div class="component">

        <h1>youre on the book page yo!</h1>

    </div>
</template>


<script>
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { booksService } from '../services/BooksService';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        const route = useRoute()


        async function getBookByISBN(){
            try {
                let isbn = route.params.isbn
                await booksService.getBookByISBN(isbn)
            } catch (error) {
                Pop.error(error,'GET BOOK BY ISBN PROBS YO')
            }
        }

        watchEffect(() => {
            if(route.params.isbn){
                getBookByISBN()
            }
        })
        return {}
    }
}
</script>


<style lang="scss" scoped></style>