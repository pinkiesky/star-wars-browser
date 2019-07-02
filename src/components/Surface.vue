<template>
  <div class="surface">
    <slot></slot>
  </div>
</template>

<style lang="stylus" scoped>
.surface
  border 1px solid #eee
  border-radius 3px

  margin 4px
  padding 8px

  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  background-color white
</style>
