<template>
  <div class="char-grid">
    <Char v-for="p in people" :key="p.url" :char="p"/>
  </div>
</template>

<script>
import Char from './Char.vue';

export default {
  components: {
    Char,
  },
  props: {
    people: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
};
</script>

<style lang="stylus" scoped>
.char-grid
  display: flex
  flex-direction row
  flex-wrap wrap
  justify-content center
</style>
