<template>
  <Surface width="250px" height="250px">
    {{ char.name }}
  </Surface>
</template>

<script>
import Surface from '../Surface';

export default {
  components: {
    Surface
  },
  props: {
    char: {
      type: Object,
      required: true,
    },
  },
}
</script>
