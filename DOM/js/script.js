// select quantity using query selector all 
var quantity_price= document.getElementsByClassName("product_price")
var quantity = document.getElementsByClassName("Quantity")
var price = document.getElementsByClassName("Price")
var total =document.getElementById("total")
var sumtotal= 0 
console.log()


console.log(quantity)
/*for(var i in quantity)
{
    console.log (i)
    
}*/
var product_price = 0;


for(let i =0; i<quantity.length; i++ ){
    sumtotal=sumtotal+Number(price[i].innerHTML)
    total.innerHTML=sumtotal
    quantity_price[i].innerHTML=price[i].innerHTML
    quantity[i].addEventListener("keyup",function(event){
        console.log(quantity[i].key)
        if(quantity[i].key==="ArrowUp"){
            product_price = quantity[i].value*price[i].innerHTML
            quantity_price[i].innerHTML= product_price 
            sumtotal=sumtotal+product_price
            total.innerHTML=sumtotal
        }

     
        

    })
}

