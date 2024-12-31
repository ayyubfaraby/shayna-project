<template>
  <div>
    <Navbar />
    <main>
      <ProductDetail />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Product',
  components: {
    Navbar,
    ProductDetail,
    Footer,
  },
};
</script>