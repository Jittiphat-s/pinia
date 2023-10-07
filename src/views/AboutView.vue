<script setup>
//import {ref} from 'vue'
  //import store
  import { useCounterStore } from '@/stores/counter'
  //variable
  //const x = ref(0)
  const counterA = useCounterStore()

  //function
</script>


<template>
  <div class="about">
  <h1>count = {{ counterA.count }}</h1>
  <h2>doubleCount = {{ counterA.doubleCount }}</h2><br>

    <h1> ติดต่อผู้เพาะพันธุ์สัตว์เลี้ยง <br>

tel.093 580 9356 <br>

ยังไม่มีคะแนน (0 รีวิว) </h1>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
