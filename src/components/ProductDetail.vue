<template>
  <div class="container">
    <div class="content-wrapper">
      <!-- Foto di sebelah kiri -->
      <div class="pic-main">
        <img :src="`/img/${selectedImage}`" alt="Main Image" class="pic-size" />
      </div>

      <!-- Title dan Deskripsi di sebelah kanan -->
      <div class="text-content">
          <div class="category">
              <p>B A G</p>
          </div>
          <div class="name">
              <p>MICKEY BAGGY</p>
          </div>
          <div class="description">
              <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div class="price">
            <p>$64.00</p>
          </div>
          <div class="add-to-cart">
            <button>
              <router-link to="/checkout" class="nav-link">ADD TO CART</router-link>
            </button>
          </div>
      </div>
    </div>
  </div>

<!-- CAROUSEL SUB-MAIN -->
    <div class="owl-carousel owl-theme">
      <div class="item" v-for="(item, index) in images" :key="index">
        <div class="button-on-card">
          <img :src="`/img/${item.image}`" :alt="item.title" @click="changeMainImage(item.image)" />
        </div>
      </div>
    </div>
<!-- PENUTUP -->
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "ProductDetail",
  data() {
    return {
      selectedImage: "mickey1.jpg",  // Gambar default yang ditampilkan di atas
      images: [
        { image: "mickey1.jpg" },
        { image: "mickey2.jpg" },
        { image: "mickey3.jpg" },
        { image: "mickey4.jpg" },
      ],
    };
  },
  methods: {
    changeMainImage(image) {
      this.selectedImage = image;  // Memperbarui gambar utama sesuai dengan klik
    },
  },
  setup() {
    onMounted(() => {
      const $ = window.$;
      $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
        nav: false,  // Menyembunyikan kontrol prev/next
        dots: false, // Menyembunyikan dots navigasi
      });
    });
  },
};
</script>

<style scoped>
  .container {
    margin-top: 30px;
    margin-bottom: 0px;
    max-width: 100%;
  }

  .owl-carousel {
    padding: 20px;
    margin-bottom: 30px;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pic-main {
    flex-shrink: 0;
  }

  .pic-size {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .text-content {
    display: block;
    text-align: center;
    max-width: 300px;
  }

  .name {
    font-size: 46px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .description {
    font-size: medium;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #8b8b8b;
  }

  .category {
    font-size: medium;
    color: #a9a9a9;
    font-family: Arial, Helvetica, sans-serif;
  }

  .price {
    font-size: 37px;
    color: #e7ab3b;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .add-to-cart button{
    background-color: #e7ab3b;
    color: #ffffff;
    border: none;
    padding: 12px 40px;
    cursor: pointer;
  }

  /* Responsif untuk tampilan HP */
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .owl-carousel {
    padding: 0 100px; /* Menambah ruang di sisi kanan & kiri */
    }

    .pic-main {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .pic-size {
      width: 100%;
      max-width: 400px;
      height: auto;
    }

    .text-content {
      margin-left: 0;
      padding: 20px;
    }
  }

  /* Navbar di lapisan teratas */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 9999;
  }
</style>