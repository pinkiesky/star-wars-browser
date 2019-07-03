<template>
  <div class="char-grid">
    <Char v-for="ch in list" :key="ch">{{ ch }}</Char>
  </div>
</template>

<script>
import Char from './Char';

export default {
  components: {
    Char,
  },
  data() {
    return {
      list: [1, 2, 3, 4]
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
