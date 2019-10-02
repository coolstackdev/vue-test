<template>
  <v-container fluid v-if="!loading">
    <v-layout column>
      <v-flex>
        Name: {{brand.name}}
      </v-flex>
      <v-flex v-for="(item, index) in brand.state_registrations" :key="index">
        state {{index + 1}}: {{item.state}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import Api from "@/Api";

export default {
  data() {
    return {
      brand: null,
      loading: true
    };
  },
  methods: {
    ...mapMutations({
      setCurrentBrand: "setCurrentBrand"
    }),
  },
  async created() {
    // connect to api
    let entity_id = this.$route.params.id;
    let { data } = await Api.getBrand(entity_id);

    // save to vuex store
    this.setCurrentBrand(data);

    this.brand = this.$store.state.currentBrand;
    this.loading = false;
  },
};
</script>