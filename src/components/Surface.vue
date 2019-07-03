<template>
  <div class="surface" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
};
</script>


<style lang="stylus" scoped>
.surface
  border 1px solid #eee
  border-radius 6px
  overflow hidden

  margin 6px
  padding 12px

  box-sizing border-box

  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  background-color white

  display flex
  flex-direction column
</style>
