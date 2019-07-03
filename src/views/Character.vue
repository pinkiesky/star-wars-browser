<template>
  <div>
    <Spinner v-if="character.network"/>
    <Surface v-else="">
      <h2>{{ character.data.name }}</h2>
      <div class="info-container">
        <LabeledData label="height" postfix="sm">{{ character.data.height }}</LabeledData>
        <LabeledData label="mass" postfix="kg">{{ character.data.mass }}</LabeledData>
        <LabeledData label="hail color">{{ character.data.hair_color }}</LabeledData>
        <LabeledData label="eye color">{{ character.data.eye_color }}</LabeledData>
        <LabeledData label="birth year">{{ character.data.birth_year }}</LabeledData>
        <LabeledData label="gender">{{ character.data.gender }}</LabeledData>
      </div>
    </Surface>
    <Spinner v-if="films.network"/>
    <Surface v-else="">
      <h2>Films</h2>
      <div style="display: flex; flex-direction: row; overflow: auto">
        <FilmCard v-for="film in films.data" :key="film.episode_id" :film="film"/>
      </div>
    </Surface>
  </div>
</template>

<script>
import Surface from '@/components/Surface.vue';
import FilmCard from '@/components/FilmCard.vue';
import LabeledData from '@/components/LabeledData.vue';
import Spinner from '@/components/Spinner.vue';
import api, { instance } from '@/api';


export default {
  name: 'character',
  components: {
    Surface, LabeledData, FilmCard, Spinner,
  },
  data() {
    return {
      character: {
        data: null,
        error: null,
        network: true,
      },
      films: {
        data: null,
        error: null,
        network: false,
      },
    };
  },
  created() {
    this.loadCharacterByRoute();
  },
  watch: {
    $route: 'loadCharacterByRoute',
  },
  methods: {
    async loadCharacterByRoute() {
      this.character.network = true;
      this.films.network = true;

      try {
        const { id } = this.$route.params;
        this.character.data = await api.people.byId(id);
      } catch (err) {
        this.character.error = err;
        console.error(err);
      } finally {
        this.character.network = false;
      }

      try {
        const fetching = this.character.data.films
          .map(instance.get);
        this.films.data = await Promise.all(fetching);
      } catch (err) {
        this.films.error = err;
        console.error(err);
      } finally {
        this.films.network = false;
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

.info-container
  display flex
  flex-direction row
  justify-content space-between
  flex-wrap wrap

  > div
    @media screen and (max-width: 600px)
      flex 1 0 33.3%
</style>
