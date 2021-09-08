<template>
  <div class="book">
    <div class="book__head">
      <h3 class="book__title">{{ book.title }}</h3>
      <span class="book__date">{{ publishDate }}</span>
    </div>
    <div class="book__body">
      <p>{{ book.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator";
  import {IBook} from "@/models/IBook";

  @Component
  export default class Book extends Vue{
    @Prop() book!: IBook;

    get publishDate() {
      return new Date(this.book.publishDate).toLocaleString();
    }
  }
</script>

<style lang="scss">
  @import "Book";
</style>
