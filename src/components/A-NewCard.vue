<script setup>

import { useRoute } from 'vue-router';
import { ref } from 'vue'
import { menuStore } from '@/stores/menu'

const allmenu = menuStore()
// const cartList = []


function addMenu(){
    const aMenu = ref({title:'Stir-fried basil and pork',img:'',price: 45, rating: 5})
    // allmenu.menuList.value.push(aMenu.value) 
    allmenu.addMenu(aMenu.value)//ส่งข้อมูลไปเพิ่มในstore

}


const route = useRoute()
const id = parseInt(route.params.id)

</script>
<template>
 <div class="row mb-2">
    <div class="col-md-6" >
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">หัวข้อ{{ n }}>.</strong>

          <img src="https://www.pinclipart.com/picdir/big/218-2185409_new-new-logo-new-sign-new-new-png.png" width=50 href="#">

          <h3 class="mb-0">กิจกรรมเเนะนำ {{ id }}.</h3>
          <div class="mb-1 text-body-secondary">Nov 12</div>
          <p >
              <img src="" width=90 href="#">

              <img src="" width=150 href="#">

              <img src="" width=150 href="#">

              <img src="" width=90 href="#">
            </p>
          <p class="card-text mb-auto">
            ดช.บริติชสีบลู วัย1ขวบ💙🐻
            ฟอร์มหมี ✅
            รัฐบาลบริติช #wcf<br>

            ติดต่อผู้เพาะพันธุ์สัตว์เลี้ยง <br>

            tel.093 580 9356 <br>

            ยังไม่มีคะแนน (0 รีวิว) 
          </p><br>

          <button @click="addMenu">เพิ่มไปยังตระกร้าสินค้า</button>

          

        </div>
        
        <div class="col-auto d-none d-lg-block">
          <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/320315426_1579472242511179_2105333197071377454_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=MF_F0wHE0f8AX8qd8Xf&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfBuA51Fy-AkksWKFrUvuw1H2iRKahDOhNl19phzQ74gdw&oe=6513FFDD" width=100 href="#">
        </div>
      </div>
    </div>
 </div>


 
</template>
