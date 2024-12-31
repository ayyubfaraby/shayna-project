<template>
  <div>
    <Navbar />
    <main>
    <Carousel />
    <CardSlider />
    <BrandList />
    <LogoList />
    </main>
    <Footer />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import CardSlider from '@/components/CardSlider.vue';
import BrandList from '@/components/BrandList.vue';
import LogoList from '@/components/LogoList.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Navbar,
    Footer,
    CardSlider,
    BrandList,
    LogoList,
  },
};
</script>