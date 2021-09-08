import {BooksActions} from "@/store/actions/books";
import {request} from "@/helpers/utils";
import {BooksMutations} from "@/store/mutations/books";
import {IBook} from "@/models/IBook";
import {IFilter} from "@/models/IFilter";

export default {
  actions: {
    async [BooksActions.GET_BOOKS]({ commit }: any) {
      const books = await request('https://fakerestapi.azurewebsites.net/api/v1/books');
      commit(BooksMutations.SET_BOOKS, books);
    },
    [BooksActions.ADD_FILTER]({ commit }: any, filter: IFilter) {
      commit(BooksMutations.ADD_FILTER, filter);
    }
  },
  mutations: {
    [BooksMutations.SET_BOOKS](state: any, books: IBook[]) {
      state.books = books;
    },
    [BooksMutations.ADD_FILTER](state: any, filter: IFilter) {

      const filterExistIndex = state.filters.findIndex((f: IFilter) => f.type === filter.type);
      if (filterExistIndex > -1 ) {
        state.filters[filterExistIndex].value = filter.value;
        return;
      }

      state.filters.push(filter);
    }
  },
  state: {
    books: [],
    filters: []
  },
  getters: {
    allBooks(state: any) {
      return state.books;
    },
    books(state: any) {
      const dateFilter = state.filters.find((f: IFilter) => f.type === 'publishDate');
      const titleFilter = state.filters.find((f: IFilter) => f.type === 'title');

      if (!dateFilter && !titleFilter) {
       return state.books;
      }

      return state.books.filter((b: IBook) => {
        if (dateFilter && titleFilter) {
          return b.publishDate === dateFilter.value && b.title === titleFilter.value;
        }

        if (!dateFilter && titleFilter) {
          return b.title === titleFilter.value;
        }

        if (dateFilter && !titleFilter) {
          return b.publishDate === dateFilter.value;
        }

      });
    }
  }
}
