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

    <div v-if="account.id" class="container-fluid bg-primary">
        <div class="row">
            <div class="col-12 mt-1 mb-4 d-flex justify-content-between">
                <div v-if="!alreadyMyBook">
                    <button @click="addBookToReadBooks()" class="btn bg-danger selectable">Add To My Books</button>
                </div>


                <div v-if="myClubs">
                    <div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" @click="getMyClubs">
                                Add Book To Club
                            </button>
                            <ul class="dropdown-menu">
                                <li v-if="myClubs.length == 0" class="dropdown-item">You are not in any clubs</li>
                                <div v-for="m in myClubs">
                                    <AddToClubButton :club="m" />
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
        <div class="row bg-success">
            <h3 class="text-center py-3">
                Profile Comments!
            </h3>
            <div class="">
                <CreateCommentForm />
            </div>
            <div class=" mt-4 p-2">
                <div v-if="comments.length > 0" :class="expanded ? 'expanded' : 'expandable'">
                    <div v-for="c in comments">
                        <CommentComponent :comment="c" />
                    </div>
                </div>
                <div v-else>
                    <div class="bg-dark text-light p-3 rounded box-shadow indent">
                        <p>no comments... yet?</p>
                    </div>
                </div>
                <div class="d-flex flex-column align-items-center" v-if="comments.length > 2">
                    <button v-if="expanded" @click="expand" class='btn-cool text-center'>read less</button>
                    <button v-else @click="expand" class='btn-cool text-center'>read more</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import AddToClubButton from '../components/AddToClubButton.vue';
import CommentComponent from '../components/CommentComponent.vue';
import CreateCommentForm from '../components/CreateCommentForm.vue';
import { booksService } from '../services/BooksService';
import { clubsService } from '../services/ClubsService';
import { commentsService } from '../services/CommentsService';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {
        // const editable = ref({})
        const route = useRoute();
        const router = useRouter();
        const activeBook = route.params.isbn;
        async function getBookByISBN() {
            try {
                let isbn = route.params.isbn;
                await booksService.getBookByISBN(isbn);
            }
            catch (error) {
                Pop.error(error, "GET BOOK BY ISBN PROBS YO");
            }
        }
        async function getCommentsByIsbn() {
            try {
                const isbn = route.params.isbn
                await commentsService.getCommentsByIsbn(isbn)
            } catch (error) {
                logger.error(error)
                Pop.error(error.message)
            }
        }
        watchEffect(() => {
            if (route.params.isbn) {
                getCommentsByIsbn();
                getBookByISBN();
                // getMyClubs()
            }
        });
        return {
            activeBook,
            account: computed(() => AppState.account),
            comments: computed(() => AppState.comments),
            myClubs: computed(() => {
                let array = []
                AppState.myClubs.forEach(club => {
                    if (club.clubBooks.find(cb => cb.isbn == activeBook.isbn)) {
                        array.push(club)
                    }
                    else {
                        array.unshift(club)
                    }
                })
                return array
            }),
            googleBook: computed(() => AppState.googleBook),
            expanded: computed(() => AppState.expanded),
            myBooks: computed(() => AppState.readBooks),
            alreadyMyBook: computed(() => AppState.readBooks.find(a => a.isbn == activeBook)),
            booksInTheClub: computed(() => AppState.myClubs.find(c => c.clubBooks.find(b => b.isbn == route.params.isbn))),
            onImageError() {
                event.target.src = this.googleBook.googleImg;
            },
            expand() {
                logger.log(AppState.expanded);
                if (AppState.expanded) {
                    AppState.expanded = false;
                }
                else {
                    AppState.expanded = true;
                }
                logger.log(AppState.expanded);
            },
            async addBookToClub(clubId) {
                try {
                    // console.log(this.booksInTheClub);
                    const book = this.googleBook;
                    book.isbn = route.params.isbn;
                    book.clubId = clubId;
                    book.coverImg = this.googleBook.img;
                    await clubsService.addBookToClub(book);
                    router.push({ name: "Club", params: { clubId: clubId } });
                }
                catch (error) {
                    logger.log(error);
                    Pop.error(error.message);
                }
            },
            async addBookToReadBooks() {
                try {
                    const book = this.googleBook;
                    book.isbn = route.params.isbn;
                    book.coverImg = this.googleBook.img;
                    book.accountId = AppState.account.id;
                    if (await Pop.confirm("Have you read this book?")) {
                        await booksService.addBookToReadBooks(book);
                    }
                }
                catch (error) {
                    logger.log(error);
                    Pop.error(error.message);
                }
            },
            async getMyClubs() {
                try {
                    let profileId = AppState.account.id;
                    logger.log(profileId, "getmyclub profile id on active book page");
                    await clubsService.getMyClubs(profileId);
                }
                catch (error) {
                    Pop.error(error);
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
        };
    },
    components: { AddToClubButton, CommentComponent, CreateCommentForm }
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