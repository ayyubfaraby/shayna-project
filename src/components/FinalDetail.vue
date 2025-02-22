<template>
    <div class="whole-page">
        <div class="container">
            <img src="/img/success-buy.png" class="atur-gambar">
            <h3 class="title-text">Sukses Terbayar!</h3>
            <p class="first-text">Silakan tunggu update terbaru dari kami via email</p>
            <p class="second-text">yang sudah Anda daftarkan sebelumnya.</p>
            <div class="button-container">
                <button class="confirm-button">
                    <router-link to="/" class="nav-link">BACK TO HOME</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.whole-page {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Agar konten selalu penuh di layar */
}

.container {
  text-align: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
}

.title-text {
  margin-top: 20px;
}

.first-text {
  margin-top: 20px;
}

.second-text {
  margin-top: -14px;
}

.confirm-button {
  background-color: #e7ab3b;
  color: white;
  border: none;
  padding: 10px 35px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
}

.atur-gambar {
  width: 100%;
  max-width: 330px;
  height: auto;
}

/* Responsif untuk layar 768px */
@media (max-width: 768px) {
  .whole-page {
    margin-top: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    padding: 10px;
    margin: 0;
  }

  .atur-gambar {
    max-width: 280px;
  }
}
</style>
