<template>
  <Surface v-if="character" width="800" height="600">
    <h2>{{ character.name }}</h2>
    <LabeledData label="height" postfix="sm">{{ character.height }}</LabeledData>
    <LabeledData label="mass" postfix="kg">{{ character.mass }}</LabeledData>
    <LabeledData label="hail color">{{ character.hair_color }}</LabeledData>
    <LabeledData label="eye color">{{ character.eye_color }}</LabeledData>
    <LabeledData label="birth year">{{ character.birth_year }}</LabeledData>
    <LabeledData label="gender">{{ character.gender }}</LabeledData>
  </Surface>
</template>

<script>
import Surface from '@/components/Surface.vue';
import LabeledData from '@/components/LabeledData.vue';
import api from '@/api';


export default {
  name: 'character',
  components: {
    Surface, LabeledData,
  },
  data() {
    return {
      character: null,
      error: null,
      network: false,
    };
  },
  created () {
    this.loadCharacterByRoute();
  },
  watch: {
    '$route': 'loadCharacterByRoute',
  },
  methods: {
    async loadCharacterByRoute() {
      this.character = null;
      this.network = true;
      this.error = null;

      try {
        const { id } = this.$route.params;
        this.character = await api.people.byId(id);
      } catch (err) {
        this.error = err;
        console.log(err);
      } finally {
        this.network = false;
      }
    },
  },
};
</script>


<style lang="stylus">
.label
  font-size 80%
  opacity .8
  text-transform uppercase
</style>
