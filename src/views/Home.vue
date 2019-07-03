<template>
  <div>
    <CharGrid v-if="!people.loading && people.data" :people="people.data.results"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharGrid from '@/components/character/CharGrid.vue';
import api from '@/api';


export default {
  name: 'home',
  components: {
    CharGrid,
  },
  data() {
    return {
      people: {
        loading: false,
        data: null,
        error: null,
      },
    };
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async loadPeople() {
      this.people.loading = true;
      this.people.error = null;

      try {
        this.people.data = await api.people.list();
      } catch (err) {
        this.people.error = err;
        console.error(err);
      } finally {
        this.people.loading = false;
      }
    },
  },
};
</script>
