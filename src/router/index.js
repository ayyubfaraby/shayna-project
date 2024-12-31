import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Product from '../pages/Product.vue';
import Checkout from '../pages/Checkout.vue';
import Final from '@/pages/Final.vue';

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home 
  },
  { path: '/product',
    name: 'Product', 
    component: Product 
  },
  { path: '/checkout',
    name: 'Checkout', 
    component: Checkout 
  },
  { path: '/final',
    name: 'Final', 
    component: Final 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;