<template>
    <div class="component">


    </div>
</template>


<script>
import { GoogleBook } from '../models/GoogleBook.js';

export default {
    props: { googleBook: { type: GoogleBook, required: true, } },
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped></style>