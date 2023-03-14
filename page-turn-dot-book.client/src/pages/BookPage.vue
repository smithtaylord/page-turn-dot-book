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

    <div v-if="notSignedIn" class="container-fluid bg-primary">
        <div class="row">
            <div class="col-12 mt-1 mb-4 d-flex justify-content-between">
                <div v-if="!alreadyMyBook">
                    <button @click="addBookToReadBooks()" class="btn bg-danger selectable">Add To My Books</button>
                </div>


                <div v-if="myClubs">
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Add Book To Club
                            </button>
                            <ul class="dropdown-menu">
                                <div v-for="m in myClubs">
                                    <li class="dropdown-item" @click="addBookToClub(m.club?.id)">{{ m.club?.name }}</li>
                                </div>

                            </ul>
                        </div>



                        <!-- 
                        <button   class="btn bg-danger selectable">{{ m.club.name }}</button>
                        <div>sample</div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-3">{{ googleBook?.title }}</h1>
                <p class="mt-2 mb-4 fs-3 px-3 py-0 text-end">-{{ googleBook?.author }}</p>
                <p class="mt-2 mb-5 fs-4 px-3 py-0">
                <div :class="expanded ? 'expanded' : 'expandable'">
                    {{ googleBook?.description }}
                </div>
                </p>
                <div class="d-flex flex-column align-items-center">
                    <button v-if="expanded" @click="expand" class='btn-cool text-center'>read less</button>
                    <button v-else @click="expand" class='btn-cool text-center'>read more</button>
                </div>
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
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import { booksService } from '../services/BooksService';
import { clubsService } from '../services/ClubsService';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        // const editable = ref({})
        const route = useRoute()
        const router = useRouter()
        const activeBook = route.params.isbn

        // async function getMyClubs() {
        //     try {
        //         let profileId = AppState.account.id
        //         logger.log(profileId, "getmyclub profile id on active book page")
        //         await clubsService.getMyClubs(profileId)
        //     } catch (error) {
        //         Pop.error(error)
        //     }
        // }


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
                // getMyClubs()
            }
        })
        return {
            activeBook,
            account: computed(() => AppState.account),
            myClubs: computed(() => AppState.myClubs),
            googleBook: computed(() => AppState.googleBook),
            expanded: computed(() => AppState.expanded),
            myBooks: computed(() => AppState.readBooks),
            alreadyMyBook: computed(() => AppState.readBooks.find(a => a.isbn == activeBook)),
            notSignedIn: computed(() => AppState.account.id != AppState.profile.id),

            onImageError() {
                event.target.src = this.googleBook.googleImg
            },
            expand() {
                logger.log(AppState.expanded)
                if (AppState.expanded) {
                    AppState.expanded = false
                } else {
                    AppState.expanded = true
                }
                logger.log(AppState.expanded)
            },

            async addBookToClub(clubId) {
                try {
                    const book = this.googleBook
                    book.isbn = route.params.isbn
                    book.clubId = clubId
                    book.coverImg = this.googleBook.img
                    await clubsService.addBookToClub(book)
                    router.push({ name: "Club", params: { clubId: clubId } })
                } catch (error) {
                    logger.log(error)
                    Pop.error(error.message)
                }
            },

            async addBookToReadBooks() {
                try {

                    const book = this.googleBook
                    book.isbn = route.params.isbn
                    book.coverImg = this.googleBook.img
                    book.accountId = AppState.account.id
                    if (await Pop.confirm('Have you read this book?')) {
                        await booksService.addBookToReadBooks(book)
                    }
                } catch (error) {
                    logger.log(error)
                    Pop.error(error.message)
                }
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

.expandable {
    max-height: 25vh;
    overflow: hidden;
}

.expanded {
    max-height: none;
}

.btn-cool {
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    position: relative;
    background-color: transparent;
    transition: .2s cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0.6;
}

.btn-cool::after {
    content: '';
    border-bottom: 3px double rgb(214, 207, 113);
    width: 0;
    height: 100%;
    position: absolute;
    margin-top: -5px;
    top: 0;
    left: 5px;
    visibility: hidden;
    opacity: 1;
    transition: .2s linear;
}

.btn-cool .icon {
    transform: translateX(0%);
    transition: .2s linear;
    animation: attention 1.2s linear infinite;
}

.btn-cool:hover::after {
    visibility: visible;
    opacity: 0.7;
    width: 90%;
}

.btn-cool:hover {
    letter-spacing: 2px;
    opacity: 1;
}

.btn-cool:hover>.icon {
    transform: translateX(30%);
    animation: none;
}

@keyframes attention {
    0% {
        transform: translateX(0%);
    }

    50% {
        transform: translateX(30%);
    }
}
</style>