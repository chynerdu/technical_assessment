<template>
<div>
<app-header></app-header>
<notifications group="foo" class = "my-style" :max = '1'/>
<div >
    <transition name="slide" mode="out-in">
        <router-view :key= "$route.fullPath"></router-view>
    </transition>
</div>
<app-footer></app-footer>

</div>
</template>
<script>
import myheader from './components/header.vue';
import myfooter from './components/footer.vue';
  export default {
      components : {

          'app-header' : myheader,
          'app-footer' : myfooter,
      }
  }
</script>

<style>
   .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-out 0.5s  forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 0.5s  forwards;
    }
    .my-style{
    opacity:0.9;
    }
    .notification-title {
        font-size:1.5em;
    }
    .notification-content{
        font-size:1.3em;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
 
</style>
