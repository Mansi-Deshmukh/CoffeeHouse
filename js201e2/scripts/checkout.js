 let alt = document.getElementById('order-form');
 var form = document.getElementById('form');
//  let id;
 function getdata(n,m,a){
     this.name = n;
     this.number =m;
     this.address =a;
 }

 function getOrder(){
    event.preventDefault();
    let name = form.name.value;

    let num = form.number.value;

    let add = form.address.value;
    
    // console.log(name,num,add)
    if(name.length>0 && num.length>0 && add.length>0){
        // alert("Your order is accepted ")
        debouncing();
    }
 }

function debouncing(msg,delay){
       
    setTimeout(function(){
        alert("Your order is accepted")
    },0)
    setTimeout(function(){
        alert("Your order is being Prepared")
    },3000)
    setTimeout(function(){
        alert("Your order is being packed")
    },8000)
    setTimeout(function(){
        alert("Your order is out for delivery")

    },10000)
    setTimeout(function(){
        alert("Order delivered")
    },12000)
 }
