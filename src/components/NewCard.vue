<template>
    <div class="row mb-2">
       <div class="col-md-6" v-for="n in 10" :key="n" >
         <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
           <div class="col p-4 d-flex flex-column position-static">
             <strong class="d-inline-block mb-2 text-primary-emphasis">หัวข้อที่{{ n }}></strong>
             
             <img src="https://www.pinclipart.com/picdir/big/218-2185409_new-new-logo-new-sign-new-new-png.png" width=50 href="#">
             <h3 class="col-0 justify-content-end ">กิจกรรมเเนะนำ</h3>
             <div class="mb-1 text-body-secondary">Nov 12</div>
             <p class="card-text mb-auto">
                 ติดต่อผู้เพาะพันธุ์สัตว์เลี้ยง <br>
   
                 tel.093 580 9356 <br>
   
                 ยังไม่มีคะแนน (0 รีวิว) 
             </p>
             
             <RouterLink :to="{name: 'news', params: {id: n}}" class="icon-link gap-1 icon-link-hover stretched-link">
               Continue reading {{ n }} 

               
   
               <svg class="bi"><use xlink:href="#chevron-right"/></svg>
               
               
             </RouterLink><br>
             <!-- <button @click="addMenu">เพิ่มไปยังตระกร้าสินค้า</button> -->
           </div>
           
           <div class="col-auto d-none d-lg-block">
            <img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/320315426_1579472242511179_2105333197071377454_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGXLGVTAQidYzDhvls3ZrjqZv6tj0Nj7upm_q2PQ2Pu6oUUIJQ7JSmFho4aqBuZR3vQEkbh0QhIxE8FSOtbC8KL&_nc_ohc=Nmmm5C4dd48AX8Sellt&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfArHtXzPBJY8Df95Rl_Um0p1LjTDM9_CBsEy88eNHbrwQ&oe=6523D1DD" width=100 href="#">
           </div>
         </div>
       </div>
    </div>
   </template>
   <script setup>
   import { RouterLink } from 'vue-router'
   </script>