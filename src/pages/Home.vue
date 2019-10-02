<template>
  <v-container v-if="!loading" fluid grid-list-md>
    <v-layout>
      <v-flex v-for="(brand, index) in brands" :key="index" xs12 sm6 md4 lg3>
        <BrandCard :brand="brand"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import Api from "@/Api";
import BrandCard from "@/components/BrandCard";

export default {
  data() {
    return {
      brands: null,
      loading: true
    };
  },
  methods: {
    ...mapMutations({
      setBrands: "setBrands"
    }),
  },
  components: {
    BrandCard
  },
  async created() {
    // connect to api
    let { data } = await Api.getBrands();

    // save to vuex store
    this.setBrands(data);
   
    this.brands = this.$store.state.brands;
    this.loading = false;
  }
};
</script>