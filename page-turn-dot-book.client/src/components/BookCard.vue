<template>
    <div class="BookCard">

        <img class="selectable" :src="book.coverImg" :alt="book.title" :title="book.title">

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


<style lang="scss" scoped></style>