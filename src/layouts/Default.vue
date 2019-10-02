<template>
  <div>
    <Header />
    <div id="main_area">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
#main_area {
  min-height: 90vh;
  padding: 20px;
}
</style>