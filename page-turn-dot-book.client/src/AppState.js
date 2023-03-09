import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  expanded: false,


  /** @type {import('./models/Book').Book[]} */
  books: [],

  /** @type {import('./models/GoogleBook').GoogleBook | null} */
  googleBook: null,

  /** @type {import('./models/Club').Club[]} */
  clubs: [],

  /** @type {import('./models/Club').Club | null} */
  activeClub: null,

  /** @type {import('./models/ClubMember').ClubMember[]} */
  members: [],
  
  
  /** @type {import('./models/Comment').Comment[]} */
  comments: [],

})
