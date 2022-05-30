// On clicking remove button the item should be removed from DOM as well as localstorage.

var data= JSON.parse(localStorage.getItem("coffee")) || [];

apply(data)

function apply(data){
        // console.log(data)
        let container = document.getElementById('bucket');
        container.innerHTML=null

        data.forEach(function(el,index){

            let div = document.createElement('div');
           

            let t = document.createElement('p');
            t.innerText=el.title;

            let image = document.createElement('img');
            image.src= el.image;

            let p =document.createElement('p');
            p.innerText=el.price;

            let removebtn = document.createElement('button');
            removebtn.innerHTML = "Remove";
            removebtn.addEventListener("click",function(){
                removeItem(el,index)
            })

            div.append(t,image,p,removebtn);
            container.append(div)

        })
}
// apply(data)


function removeItem(el,index){
    data.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(data))
    console.log(data);
    apply(data)
    total_p()
    
}

function total_p(){
var totalprice = data.reduce(function(sum,el,index,arr){
    return sum+Number(el.price)
},0)
let n = document.getElementById('total_amount');
n.innerHTML=totalprice;
}
total_p()
let checkout=document.getElementById('confirm_checkout');
checkout.addEventListener("click",redirect)

function redirect(){
    window.location.href="checkout.html"
}