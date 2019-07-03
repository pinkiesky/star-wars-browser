<template>
  <div id="app">
    <h1>Star Wars Browser</h1>
    <router-view/>
  </div>
</template>

<style lang="stylus" scoped>
#app
  width 100%
  margin 0 auto

  @media screen and (min-width: 800px)
    max-width 800px
</style>
