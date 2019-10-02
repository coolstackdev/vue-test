<template>
  <div id="app">
    <v-app>
      <Default>
        <router-view/>
      </Default>
    </v-app>
  </div>
</template>

<script>
import Default from './layouts/Default';

export default {
  components: {
    Default
  }
};
</script>