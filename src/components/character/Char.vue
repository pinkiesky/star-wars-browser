<template>
  <Surface width="250px" height="250px">
    <div class="char-bg" :class="{ 'char-bg_female': char.gender === 'female' }"/>
    <div class="char-name">{{ char.name }}</div>
    <div class="char-desc">
      Films: {{ char.films.length }}, starships: {{ char.starships.length }}
    </div>
    <router-link
      :to="{ name: 'char', params: { id: charId }}"
    >Info</router-link>
  </Surface>
</template>

<script>
import Surface from '../Surface.vue';

export default {
  components: {
    Surface,
  },
  props: {
    char: {
      type: Object,
      required: true,
    },
  },
  computed: {
    /**
     * Computing unique character id by `url` field.
     * Ex. "https://host/api/v1/people/$N/" -> "$N"
     * @returns {string} character id
     */
    charId() {
      const urlParts = this.char.url
        .split('/')
        .filter(s => s.length);

      return urlParts[urlParts.length - 1];
    },
  },
};
</script>

<style lang="stylus">
.char-bg
  width calc(100% + 12px*2)
  margin -12px -12px 12px -12px

  height 65%
  background-color gray
  background-size cover
  background-image url(../../assets/sitt-male.png)

.char-bg_female
    background-image url(../../assets/sitt-fmale.png)

.char-name
  font-size 130%

.char-desc
  font-size 90%
  opacity .8
  flex 1 1 auto
</style>
