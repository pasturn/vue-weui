<template>
  <div id="app">
    <WeuiButton />
  </div>
</template>

<script>
import Button from './pages/WeuiButton'

export default {
  name: 'app',
  components: {
    'WeuiButton': Button
  }
}
</script>

<style>
#app {
  font-family: -apple-system-font,Helvetica Neue,Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
