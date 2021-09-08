<template>
  <div class="home">
    <h1>Books</h1>
    <Filters/>
    <div class="books">
      <book
        v-for="book in books"
        :key="book.id"
        :book="book"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Book from "@/components/Book/Book.vue";
import Filters from "@/components/Filters/Filters.vue";
import {BooksActions} from "@/store/actions/books";

@Component({
  components: {
    Book,
    Filters
  },
})
export default class Home extends Vue {

  get books() {
    return this.$store.getters.books;
  }

  created() {
    this.$store.dispatch(BooksActions.GET_BOOKS);
  }
}
</script>

<style lang="scss">
  @import "Home";
</style>
