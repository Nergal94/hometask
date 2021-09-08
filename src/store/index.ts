import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import books from "@/store/modules/books";

export default new Vuex.Store({
  modules: {
    books
  }
})
