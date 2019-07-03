<template>
  <div class="labeled-data">
    <div class="label">{{ label }}</div>
    <div class="data"><slot></slot> <span class="postfix">{{ postfix }}</span></div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    postfix: String,
  },
};
</script>


<style scoped lang="stylus">
.labeled-data
  margin 4px 0

.label
  font-size 80%
  opacity .7
  text-transform uppercase
  margin-bottom -2px

.postfix
  opacity .7
  margin-left 2px

</style>
