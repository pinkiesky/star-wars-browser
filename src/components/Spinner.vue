<template>
  <div class="loader" :style="styles"/>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '32px',
    },
    height: {
      type: String,
      default: '32px',
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
.loader,
.loader:after {
  border-radius: 50%;
  width: 32px;
  height: 32px;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid #9BA0AA;
  border-right: 1.1em solid #9BA0AA;
  border-bottom: 1.1em solid #9BA0AA;
  border-left: 1.1em solid #4273AE;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  background-color #4273AE
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
