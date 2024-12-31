<template>
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
          <a href="/">
            <img src="../../public/img/logo_website_shayna.png" alt="MyLogo" />
          </a>
        </div>

        <div class="nav-home">
              <router-link to="/" class="nav-link">Home</router-link>
            <img src="../../public/img/next-button.png" alt="Icon" class="icon-1" />
              <router-link to="/product" class="nav-link">Detail</router-link>
            <img src="../../public/img/next-button.png" alt="Icon" class="icon-2" />
              <router-link to="/checkout" class="nav-link">Checkout</router-link>
            <img src="../../public/img/next-button.png" alt="Icon" class="icon-2" />
              <router-link to="/final" class="nav-link">Success</router-link>
        </div>

        <!-- Link Keranjang Belanja -->
        <div class="nav-links">
          <a href="#">
            Keranjang Belanja 
            <img src="../../public/img/market.png" alt="Shopping Cart" class="shopping-cart" />
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  /* Navbar style */
  .navbar {
    background-color: #ffffff;
    width: 100%;
    padding: 25px 0; /* Atur padding agar tetap simetris */
    box-sizing: border-box; /* Agar padding tidak mempengaruhi ukuran navbar */
    position: relative;
    display: flex; /* Gunakan flexbox untuk navbar */
    justify-content: space-between; /* Jarak antara logo dan menu */
    align-items: center; /* Vertikal tengah */
    margin-top: 30px;
    margin-bottom: 30px;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 30px;
  }
  
  .logo img {
    width: 160px; /* Ukuran logo */
    height: auto; /* Menjaga rasio aspek gambar */
    display: block; /* Menghindari spasi di bawah gambar */
  }
  
  .nav-links {
    font-size: 22px;
  }
  
  .nav-links a {
    color: #000000;
    text-decoration: none;
    display: flex; /* Flexbox untuk merapikan teks dan ikon */
    align-items: center;
  }
  
  .shopping-cart {
    margin-left: 15px; /* Jarak antara teks dan ikon */
    width: var(--shopping-cart-width, 27px); /* Lebar ikon dengan nilai default */
    height: var(--shopping-cart-height, auto); /* Tinggi ikon mengikuti proporsional */
  }

  a {
    text-decoration: none; 
    color: #D3D3D3; 
    transition: color 0.3s ease; 
  }

  a.router-link-active {
    color: #000000;
  }

.nav-home {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Jarak antar elemen */
  margin-left: 80px;
  margin-right: 60px;
}


.icon-1 {
  height: 20px;
  width: 20px;
  margin-bottom: -5px;
}

.icon-2 {
  height: 20px;
  width: 20px;
  margin-bottom: -5px;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Memberikan jarak antara elemen-elemen */
}

  /* Responsif */
  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }
    .nav-links {
      font-size: 18px;
    }
    .shopping-cart {
      width: var(--shopping-cart-mobile-width, 20px); /* Lebar ikon pada layar kecil */
    }
  }
  </style>
  