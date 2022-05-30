// Add the coffee to local storage with key "coffee"
let api= "https://masai-mock-api.herokuapp.com/coffee/menu";

async function showCoffee(){
    let res = await fetch(api)

    let data = await res.json();

    // console.log(data.menu.data)

    apply(data.menu.data);
}
showCoffee()

function apply(data){

    let container = document.getElementById('menu');

    data.map(function(el,index){

    let div = document.createElement('div');
        //type of coffee, image, price and add to bucket button
    let type = document.createElement('p');
    type.innerText= el.title;

    let image = document.createElement('img');
    image.src=el.image;

    let price = document.createElement('p');
    price.innerText=el.price;

    let btn = document.createElement('button');
    btn.innerHTML="Add to bucket";
    btn.addEventListener("click",function(){
            addtoBucket(el)
    })
    
    div.append(type,image,price,btn)
    container.append(div)
    })

   
}
 

function addtoBucket(el){
     bucketData.push(el);
     localStorage.setItem("coffee",JSON.stringify(bucketData));
     console.log(bucketData)
     window.location.reload();
}
var bucketData= JSON.parse(localStorage.getItem("coffee")) || [];

var count = bucketData.length;


let n =document.getElementById('coffee_count')
n.innerHTML=count;
