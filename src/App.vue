<template>
  <div id="app" class="row">
    <div class="col s12">
      <Navig />
    </div>
    <router-view id="page-view"></router-view>
  </div>
</template>

<script>
import Navig from '@/components/Nav'
export default {
  name: 'app',
  components: {
    Navig
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  height: 100%;
}

#page-view {
  height: 100%;
}
</style>
