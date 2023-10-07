//เมนูอาหาร 

// menuList [(
//     {title:'Stir-fried basil and pork',img:'https://a.cdn-hotels.com/gdcs/production46/d1018/d82d9c8c-8b6e-45a1-9346-124415a574f9.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 45, rating: 5},
//     {title:'Spicy green papaya salad',img:'https://a.cdn-hotels.com/gdcs/production73/d1742/496b95ba-5a96-4728-84c5-f5abf8ce763d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 50, rating: 5},
//     {title:'Spicy shrimp soup',img:'https://a.cdn-hotels.com/gdcs/production28/d353/1a4556f8-80ec-4c9d-b5fe-a067f8205db8.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 80, rating: 4.5},
//     {title:'Spicy green papaya salad',img:'https://a.cdn-hotels.com/gdcs/production73/d1742/496b95ba-5a96-4728-84c5-f5abf8ce763d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 5, rating: 5},
//     {title:'Red curry',img:'https://a.cdn-hotels.com/gdcs/production162/d920/76741ec4-324b-412e-950a-bc6c3d64987d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',price: 60, rating: 5},
// )]

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
  // const x =ref(500)
  const menuList = ref([
    // {title:'Stir-fried basil and pork',img:'',price: 45, rating: 5},
    // {title:'Spicy green papaya salad',img:'',price: 50, rating: 5},
    // {title:'Spicy shrimp soup',img:'',price: 80, rating: 4.5},
    // {title:'Spicy green papaya salad',img:'',price: 5, rating: 5},
    // {title:'Red curry',img:'',price: 60, rating: 5}
  ])


  function deleteMenu(i){
    // console.log(i);

    // menuList.value.pop(i)

    menuList.value.splice(i, 1) // ลบตำแหน่งที่ i จำนวน 1 ตัว 
  }

  function addMenu(x){
    menuList.value.push(x);
  }

  return {  menuList, deleteMenu, addMenu }
})


export const useProductStore = defineStore( 'productStore',
 () => {
  // const x =ref(500)
  const productList = ref([
    { id: 1, name: 'Product 1', price: 45 },
    { id: 2, name: 'Product 2', price: 50 },
    { id: 3, name: 'Product 3', price: 50 },
    { id: 4, name: 'Product 4', price: 50 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 50 },
    { id: 7, name: 'Product 7', price: 50 },
    { id: 8, name: 'Product 8', price: 50 },
    { id: 9, name: 'Product 9', price: 50 },
    { id: 10, name: 'Product 10', price: 50 },
    // Add more products as needed
  ])

  function addProduct(y){
    productList.value.push(y);
  }

  return { addProduct }
})

