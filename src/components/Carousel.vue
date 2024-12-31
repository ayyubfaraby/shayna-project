<template>
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../public/img/hero-1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/img/hero-2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
    
<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

  export default {
    name: "Carousel",
  };    
</script>
    
<style scoped>
.carousel-owl-owl {
  margin-bottom: 60px;
}
    
.carousel-control-prev-icon,
  .carousel-control-next-icon {
  filter: invert(1); /* Mengubah ikon menjadi hitam */
}
    
</style>    