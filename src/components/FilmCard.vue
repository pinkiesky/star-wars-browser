<template>
  <Surface width="350px">
    <h3>{{ film.title }}</h3>
    <LabeledData label="director">{{ film.director }}</LabeledData>
    <LabeledData label="producer">{{ film.producer }}</LabeledData>
    <LabeledData label="release">{{ film.release_date }}</LabeledData>
    <LabeledData label="description">{{ film.opening_crawl }}</LabeledData>
  </Surface>
</template>

<script>
import Surface from './Surface.vue';
import LabeledData from './LabeledData.vue';

export default {
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  components: {
    Surface, LabeledData,
  },
};
</script>
