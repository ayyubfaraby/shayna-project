<template>
    <div>
      <Navbar />
      <main>
        <CheckoutDetail />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import CheckoutDetail from '@/components/CheckoutDetail.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Checkout',
    components: {
      Navbar,
      CheckoutDetail,
      Footer,
    },
  };
  </script>