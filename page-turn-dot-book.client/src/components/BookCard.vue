<template>
    <div class="BookCard">  
        <img class="px-3 mt-2 selectable bookCover" :src="book.coverImg" :alt="book.title" :title="book.title">

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
    height: 30vh;
    // width: 100%;
    object-fit: cover;

}

</style>