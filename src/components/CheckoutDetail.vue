<template>
  <div class="whole-page">
    <div class="checkout-table-container">
      <div class="tables-container">
        <!-- Tabel Produk -->
        <div class="table-wrapper">
        <table class="checkout-table">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <td>
                <img :src="product.image" :alt="product.name" class="product-image" />
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <button @click="removeProduct(index)" class="delete-button">
                  <img src="/img/close.png" alt="Delete Icon" class="delete-icon" />
                </button>
                
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

            <!-- Tabel Informasi Transaksi -->
          <table class="transaction-table">
            <tbody>
              <tr>
                <td>ID Transaction</td>
                <td>#SH12000</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>$240.00</td>
              </tr>
              <tr>
                <td>Pajak</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Total Biaya</td>
                <td>$440.00</td>
              </tr>
              <tr>
                <td>Bank Transfer</td>
                <td>Mandiri</td>
              </tr>
              <tr>
                <td>No. Rekening</td>
                <td>2208 1996 1403</td>
              </tr>
              <tr>
                <td>Nama Penerima</td>
                <td>Shayna</td>
              </tr>
            </tbody>
          </table>

      <!-- Informasi Pembeli -->
      <div class="buyer-info-container">
        <h4 class="text-form">Informasi Pembeli:</h4>
        <form @submit.prevent="submitForm" class="buyer-info-form">
          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input type="text" id="name" v-model="buyerInfo.name" placeholder="Masukkan Nama" required />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="buyerInfo.email" placeholder="Masukkan Email" required />
          </div>
          <div class="form-group">
            <label for="phone">No. HP</label>
            <input type="text" id="phone" v-model="buyerInfo.phone" placeholder="Masukkan No. HP" required />
          </div>
          <div class="form-group">
            <label for="address">Alamat Lengkap</label>
            <textarea id="address" v-model="buyerInfo.address" placeholder="Masukkan Alamat Lengkap" required></textarea>
          </div>
        </form>
      </div>

      <!-- Tombol Konfirmasi -->
      <button class="custom-button">Simpan & Lanjut</button>

    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutDetail",
  data() {
    return {
      products: [
        { image: "/img/mickey1.jpg", name: "Mickey Baggy", price: "$20.00" },
        { image: "/img/mickey2.jpg", name: "Mickey Classic", price: "$30.00" },
        { image: "/img/mickey3.jpg", name: "Mickey Modern", price: "$40.00" }
      ],
      buyerInfo: {
        name: "",
        email: "",
        phone: "",
        address: ""
      }
    };
  },
  methods: {
    removeProduct(index) {
      this.products.splice(index, 1);
    },
    submitForm() {
      console.log("Informasi Pembeli:", this.buyerInfo);
      alert("Form berhasil disubmit!");
    }
  }
};
</script>

<style scoped>
.checkout-table-container {
  margin: 100px;
}

/* Kontainer fleksibel untuk kedua tabel */
.tables-container {
  display: flex;
  gap: 20px;
}

.table-wrapper {
  flex: 2;
}

.transaction-container {
  flex: 1;
}

.checkout-table,
.transaction-table {
  width: 100%;
  margin-bottom: 30px;
  border-collapse: collapse;
}

.checkout-table th {
  padding: 10px;
  text-align: center;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
  background-color: #f8f8f8;
  font-weight: bold;
}

.checkout-table td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.transaction-table td {
  border: none;
  padding: 10px;
  text-align: center;
}

.product-image {
  width: 140px;
  height: 140px;
  object-fit: cover;
  display: block;
}

.delete-button {
  background: none;
  border: none;
  cursor: pointer;
}

.delete-icon {
  width: 20px;
  height: 20px;
}

.button-container {
  text-align: right;
}

.confirm-button {
  background-color: #e7ab3b;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 6px;
}

table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
}

tr, td {
  border: none;
}

td {
  padding: 10px;
  text-align: center;
}

.buyer-info-form {
  margin-top: 20px;
  margin-bottom: 4%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.text-form {
  margin-top: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.checkout-table td:first-child {
  padding-left: 20px;
}

.checkout-table th:first-child {
  width: 140px;
}

.just-title-checkout {
  text-align: center;
}

.checkout-table td:nth-child(3) {
  color: #e7ab3b;
  font-weight: bold;
}

/* Tombol yang lebih menarik */
.custom-button {
  background-color: #e7ab3b;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  font-family: Arial, sans-serif;
}

.custom-button:hover {
  background-color: #d99a2f;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.custom-button:active {
  background-color: #c58b28;
  transform: translateY(0);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

/* Responsive untuk layar <= 768px */
@media (max-width: 768px) {
  .whole-page {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .checkout-table-container {
    margin: 0;
    width: 100%;
    padding: 0 10px;
  }

  .tables-container {
    flex-direction: column; /* Ubah menjadi satu kolom */
    gap: 10px;
  }

  .table-wrapper,
  .transaction-container {
    width: 100%;
  }

  .checkout-table td,
  .transaction-table td {
    padding: 8px;
  }

  .buyer-info-container {
    width: 100%;
    padding: 0 10px;
  }

  .buyer-info-form {
    gap: 10px;
  }

  .form-group input,
  .form-group textarea {
    font-size: 13px;
    padding: 8px;
  }

  .product-image {
    width: 100px;
    height: 100px;
  }

 .custom-button {
  margin-bottom: 20px;
  width: 100%;
  padding: 12px;
 }
}
</style>