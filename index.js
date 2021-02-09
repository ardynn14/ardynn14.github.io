let items = {
    1: {
        name : "Cheese Burger",
        alt : "Cheese Burger picture",
        price : 5,
        img_url: "https://images.unsplash.com/photo-1561758033-563f9666b8c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    2: {
        name : "Curry Beef Burger",
        alt : "Curry Beef Burger picture",
        price : 7,
        img_url: "https://images.unsplash.com/photo-1562817981-221763b0c0e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
    },
    3: {
        name : "Bacon Burger",
        alt : "Bacon Burger picture",
        price : 6,
        img_url: "https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80"
    },
    4: {
        name : "Double Cheese Burger",
        alt : "Double Cheese Burger picture",
        price : 8,
        img_url: "https://images.unsplash.com/photo-1562817981-221763b0c0e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
    },
    5: {
        name : "Onion Ring Burger",
        alt : "Onion Ring Burger picture",
        price : 4,
        img_url: "https://images.unsplash.com/photo-1561758033-563f9666b8c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    6: {
        name : "Salsa Burger",
        alt : "Salsa Burger picture",
        price : 4,
        img_url: "https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80"
    },
    7: {
        name : "Salmon Burger",
        alt : "Salmon Burger picture",
        price : 10,
        img_url: "https://images.unsplash.com/photo-1561758033-563f9666b8c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    8: {
        name : "Jalapeno Burger",
        alt : "Jalapeno Burger picture",
        price : 5,
        img_url: "https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80"
    },
    9: {
        name : "Crab Burger",
        alt : "Crab Burger picture",
        price : 9,
        img_url: "https://images.unsplash.com/photo-1562817981-221763b0c0e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
    },
    10: {
        name : "One True Burger",
        alt : "One True Burger picture",
        price : 20,
        img_url: "https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80"
    }
};
let itemsBox = document.getElementById("items");
document.addEventListener("DOMContentLoaded", function(event) { 
    generateItem(items);
});

function generateItem(){
    let html = "";
    for(id in items){
        console.log(id);
        console.log(items[id].name);
        html += `<div class="item-card" onclick="addItem(${id})">
<h2 class="item-name">${items[id].name}</h2>
<img class="item-img"
src="${items[id].img_url ? items[id].img_url : `https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png`}" alt="${items[id].alt}">
<h3 class="item-price">Price : ${items[id].price.toString().split(".")[0]} $</h3>
</div>`;
    }
    itemsBox.innerHTML += html;
}

function addItem(id){
    let item = items[id];
    totalPrice(item.price);
}

function totalPrice(price){
    let currentPrice = document.getElementById("total-price");
    currentPrice.innerHTML = Number(currentPrice.textContent) + price;
}

function reset(){
    let currentPrice = document.getElementById("total-price");
    currentPrice.innerHTML = 0;
}