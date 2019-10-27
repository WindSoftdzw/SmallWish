<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html,body {
  margin: 0px;
  height: 100%;
  width: 100%;
}
#app{
  height: 100%;
  width: 100%;
  padding-bottom: 0%;
}
</style>
