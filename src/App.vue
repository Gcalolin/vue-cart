<template>
  <div id="app">
    <router-view/>
    <tarbar></tarbar>
  </div>
</template>

<script>
import tarbar from './components/tarbar.vue'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    'tarbar': tarbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
