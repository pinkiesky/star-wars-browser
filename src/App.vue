<template>
  <div id="app">
    <nav>
      <h1>Star Wars Browser</h1>
      <router-link to="/">Characters</router-link>
      <router-link to="/ss">Spaceships</router-link>
      <router-link to="/films">Films</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="stylus" scoped>
#app
  width 100%
  margin 0 auto

  @media screen and (min-width: 800px)
    max-width 800px

nav
  padding 8px 0
  display flex
  flex-direction row
  align-items baseline

  @media screen and (max-width: 600px) {
    justify-content center
    align-items center
    flex-direction column
  }

  > *
    margin 0 6px
</style>
