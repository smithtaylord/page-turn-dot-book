<template>
    <div class="BookCard px-3">  
        <router-link :to="{name: 'Book', params:{isbn: book.isbn}}">
            <img class=" box-shadow mt-2 selectable bookCover" :src="book.coverImg" :alt="book.title" :title="book.title">
        </router-link>

    </div>
</template>


<script>
import { NYTBook } from '../models/NYTBook.js';

export default {
    props: { book: { type: NYTBook, required: true, } },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>

.bookCover{
    height: 35vh;
    // width: 100%;
    object-fit: cover;

}

</style>