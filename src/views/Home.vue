<template>
  <div>
    <CharGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharGrid from '@/components/character/CharGrid.vue';
import api from '../api';


export default {
  name: 'home',
  components: {
    CharGrid,
  },
};
</script>
