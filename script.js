let product=document.getElementById("product");
let description=document.getElementById("description");
let price=document.getElementById("price");
let btn=document.getElementById("btn");
let box=document.getElementById("box");
let box2=document.getElementById("box2");
let totalPrice=document.getElementById("totalPrice");


btn.addEventListener("click", function(){
    if(product.value=="" || description.value=="" || price.value==""){
        alert("Please insert valid Details")
    }else{
    box.innerHTML += `Your product ${product.value} <br>Description: ${description.value} <br> Price ${price.value} <br> <button id="btn2" onclick= "addToCard()">Buy now</button>`;

    }
});

function addToCard(){

    box2.innerHTML += `<h2> Product: ${product.value} </h2> 
    <br>
    <h2> Price: ${price.value}</h2>`;
};


function updateTotal(){
var amount=0;
amount+=parseInt(price.value);
var total=amount+price;
totalPrice.textContent=`${total.value}`;
}

// function updateTotal(){
//     let amount=0;
//     for(var i=0; i< amount.length; i++){
//         var price = parseFloat(items[i].innerText.split(`-$`)[1]);
//         amount+=price;
//     }
// }