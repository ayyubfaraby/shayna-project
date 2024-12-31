<template>
    <div>
      <Navbar />
      <main>
        <FinalDetail />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import FinalDetail from '@/components/FinalDetail.vue';
  
  export default {
    name: 'Checkout',
    components: {
      Navbar,
      FinalDetail,
      Footer,
    },
  };
  </script>