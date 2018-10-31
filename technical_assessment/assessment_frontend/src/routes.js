import Vue from 'vue'
import productList from './components/product-list.vue';
import singleProduct from './components/singleProduct.vue';
import previewProduct from './components/previewProduct.vue';
import create from './components/addProduct.vue';



import { store } from './store/store.js';


export const routes = [
 { path: '', redirect: '/product-listings'},
 { path: '/product-listings', component: productList},
 { path: '/product-listing/:id', component: singleProduct},
 { path: '/preview/:id', component: previewProduct},
 { path: '/create', component: create},
 { path: '*', redirect: '/product-listings' },
]
