<template>
  <div>
    <CharGrid v-if="people" :people="peopleList"/>
    <infinite-loading @infinite="loadNextPartOfData">
      <Spinner slot="spinner"/>
    </infinite-loading>
  </div>
</template>

<script>
// @ is an alias to /src
import InfiniteLoading from 'vue-infinite-loading';
import CharGrid from '@/components/character/CharGrid.vue';
import Spinner from '@/components/Spinner.vue';
import api from '@/api';


export default {
  name: 'home',
  components: {
    CharGrid, InfiniteLoading, Spinner,
  },
  data() {
    return {
      /**
       * Last swapi answer. `null` for first request
       * @type {Object|null}
       */
      people: null,
      /**
       * Full flat collections of `people.results`
       * @type {Array}
       */
      peopleList: [],
    };
  },
  methods: {
    async loadNextPartOfData($state) {
      if (this.people && !this.people.next) {
        $state.complete();
        return;
      }

      try {
        this.people = await api.people.list(this.people);
        this.peopleList.splice(this.peopleList.length, 0, ...this.people.results);

        $state.loaded();
      } catch (err) {
        $state.error();
      }
    },
  },
};
</script>
