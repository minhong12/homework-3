const products = [
    {
        img:"img/image 26.png",
        name:"Fresh and Healthy Mixed Mayonnaise Salad",
        price:"$30",
    },
    {
        img:"img/image 26(1).png",
        name:"The Creamiest Creamy Chicken",
        price:"$30",
    },
    {
        img:"img/image 26(2).png",
        name:"Fruity Pancake with Orange & Blueberry",
        price:"$30",
    }
];
showProducts = (data)=>{
    let Product_item = document.querySelector(".products");
    Product_item.innerHTML = "";
    if (Product_item) {
        for (let item of data) {
            Product_item.innerHTML += `
            <div class="prods">
            <div class="prod-img">
                <img src="${item.img}" alt="">
            </div>
            <div class="prod-desc">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
        </div>
            `;
        }
    }
}
showProducts(products);

checkProducts = ()=>{
    
}