<script setup>
import { ref } from 'vue'
import { menuStore } from '@/stores/menu'


const allmenu = menuStore()
const alist = allmenu.menuList

function del(i){
    //console.log(i);
    allmenu.deleteMenu(i);
}



function addMenu(){
    const aMenu = ref({title:'Stir-fried basil and pork',img:'',price: 45, rating: 5})
    const bMenu = ref({title:'Spicy green papaya salad',img:'',price: 50, rating: 5})
    const cMenu = ref({title:'Spicy shrimp soup',img:'',price: 80, rating: 4.5})
    const dMenu = ref({title:'Spicy green papaya salad',img:'',price: 5, rating: 5})
    const eMenu = ref({title:'Red curry',img:'',price: 60, rating: 5})
    
    
    allmenu.menuList.value.push(aMenu.value) 
    allmenu.addMenu(aMenu.value)//ส่งข้อมูลไปเพิ่มในstore
    allmenu.addMenu(bMenu.value)
    allmenu.addMenu(cMenu.value)
    allmenu.addMenu(dMenu.value)
    allmenu.addMenu(eMenu.value)
    
    
}



</script>
<template>
    <div>
        <h1>คำสั่งซื้อ</h1>
        <!-- <ul>
            <li v-for="(n, index) in alist" :key="index">{{ n.title }}, {{ n.price }}. <button @click="del(index)">ลบ</button></li>
            
        </ul> -->
        <!-- <ul>การสั่งซื้อสำเร็จ</ul> -->
        <button @click="addMenu">ยืนยันการสั่งซื้อ</button>
    </div>

    <NewCard></NewCard>
        
        <table class="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>AllPrice</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, index) in alist" :key="index">
                <td>{{ n.title }}</td>
                <td>{{ n.price }}</td>
                <td><button @click="del(index)">ลบ</button></td>
            </tr>
          
          </tbody>
          <tfoot>
            
          </tfoot>
        </table>
    


</template>



// <!-- <tbody><tr><td><img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfDB8MHx8fDA%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" class="img-thumbnail" width="150"> &nbsp; Ice Caramel Maciato</td><td class="txt">199 Baht.</td>

// <td><button class="ct-bt">-</button><span class="mx-2">2</span><button class="ct-bt">+</button></td><td>398 Baht.</td><td><button class="remove-bt">delete</button></td><td><button class="pay-bt">Confirm</button></td></tr></tbody> -->