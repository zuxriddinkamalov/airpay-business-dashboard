<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
</style>

<script>
import { BASE_COLOR, hexToRGBA, rgbToCSSVar } from './helpers/colors';

export default {
  name: 'App',
  mounted() {
    let baseColor = VUE_APP_MAIN_COLOR;
    let cssRGB = rgbToCSSVar(hexToRGBA(baseColor, 1));
    document.documentElement.style.setProperty(
      '--primary-color',
      `${baseColor}`
    );
    document.documentElement.style.setProperty(
      '--rgb-primary-color',
      `${cssRGB}`
    );
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
