<script setup>
import { useCounterStore } from '@/stores/counter'
defineProps({
  msg: {
    type: String,
    required: true
  }
})

const counterA = useCounterStore()
function up(){
  counterA.increment()
}

</script>

<template>
  <div class="greetings">
    <h1 class="green" @mouseover="up()">{{ msg }}</h1>
    <!-- <h1>count = {{ counterA.count }}</h1>
    <h2>doubleCount = {{ counterA.doubleCount }}</h2> -->

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
