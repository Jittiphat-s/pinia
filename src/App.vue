<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import BlogHeader from '@/views/BlogHeader.vue'
import JumboHead from '@/views/JumboHead.vue'
</script>

<template>
<!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>-->  

<div class="container">

  <BlogHeader></BlogHeader>
  <JumboHead title="ฟาร์มแมว" desc="PR-sweetie cattery House"></JumboHead>

  <div calss="main">
    <RouterView />
  </div>
<div class="footer"></div>
  
</div>
</template>

<style scoped></style>

  