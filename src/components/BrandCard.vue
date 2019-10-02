<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-card-title>{{ brand.name }}</v-card-title>
    <v-card-title>Number of registrations: {{ brand.state_registrations.length }}</v-card-title>
    <v-card-actions>
      <v-btn color="success" @click="goDetail(brand.entity_id)">Detail View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["brand"],
  methods: {
    goDetail(entity_id) {
      this.$router.push('/detail/' + entity_id);
    }
  }
};
</script>