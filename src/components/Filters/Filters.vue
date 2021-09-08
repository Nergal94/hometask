<template>
  <div class="filters">
    <div class="filter mr-8">
      <label class="mr-8">Find for title</label>
      <select v-model="title" @change="setTitleFilter">
        <option value="">Reset</option>
        <option
          v-for="book in books"
          :key="book.id"
        >{{ book.title }}</option>
      </select>
    </div>
    <div class="filter">
      <label class="mr-8">Find for date</label>
      <select v-model="publishDate" @change="setDateFilter">
        <option value="">Reset</option>
        <option
          v-for="book in books"
          :key="book.id"
        >{{ book.publishDate }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import {BooksActions} from "@/store/actions/books";
  @Component
  export default class Filters extends Vue {
    title = '';
    publishDate = null;

    get books() {
      return this.$store.getters.allBooks;
    }

    setTitleFilter() {
      const filter = {
        type: 'title',
        value: this.title
      }
      this.$store.dispatch(BooksActions.ADD_FILTER, filter);
    }

    setDateFilter() {
      const filter = {
        type: 'publishDate',
        value: this.publishDate
      }
      this.$store.dispatch(BooksActions.ADD_FILTER, filter);
    }
  }
</script>

<style lang="scss">
  @import "Filters";
</style>
