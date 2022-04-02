// var cart = JSON.parse(localStorage.getItem("cartItem")) || [];
// console.log(cart);
var dataMobile = JSON.parse(localStorage.getItem("added"));
console.log(dataMobile);
displayData(dataMobile);
function displayData(dataMobile) {
  document.querySelector("#container").innerHTML=null
  document.querySelector("#containerCont").innerHTML=null

  dataMobile.map(function (elem, index) {
    var div = document.createElement("div");
    var section = document.createElement("section");

    var avtar = document.createElement("img");
    avtar.setAttribute("src", elem.image);

    var name = document.createElement("h5");
    name.setAttribute("id","name")
    name.innerText = `${elem.title}, `

    var price = document.createElement("h4");
    price.setAttribute("id","price")
    price.innerText = "₹"+  elem.price;

    var quant = document.createElement("h3");
    quant.innerText = "Quantity:-" + "1";


    var btn2 = document.createElement("button");
    btn2.innerText = "-";
   
    var btn = document.createElement("button");
    btn.innerText = "+";

     btn2.addEventListener("click", function () {
      decreaseQuant(index);
    });

    btn.addEventListener("click", function () {
      increaseQuant(index);
    });
    var remove= document.createElement("button")
    remove.setAttribute("class","removeItem")
    remove.innerHTML = "Remove";
    remove.addEventListener("click", function (index) {
        var cart = JSON.parse(localStorage.getItem("cartItem"))
        cart.splice(index, 1);
        localStorage.setItem("cartItem", JSON.stringify(cart))
        alert("Your item will be removeeted...");
        location.reload();
    })


    section.append(name, price, btn, quant,btn2,remove);
    document.querySelector("#containerCont").append(section);
    
    div.append(avtar);
    document.querySelector("#container").append(div);
  });
}

function showTotal() {
  var total = dataMobile.reduce(function (acc, elem) {
    return (acc += elem.price * elem.quant);
  }, 0);
  document.getElementById("total").textContent = "₹" + total;
  // document.getElementById("discount").textContent = `Total amount to pay ₹ ${total}`
  
}
showTotal();
// //coupan func//
document.querySelector("#promo").addEventListener("click", formSubmit);
function formSubmit() {
  var coupon = document.querySelector("#coupon").value;

  if (coupon == "masai30") {
    //  alert("succ")
    var total = dataMobile.reduce(function (acc, elem) {
      var tot = elem.price * elem.quant;
      var dis = elem.price * elem.quant * (30 / 100);
      return (acc += tot - dis);
    }, 0);
    document.querySelector("#total").innerText =
      "Your Total:" + " :-" + " " + total;

    var dis = dataMobile.reduce(function (acc, elem) {
      return (acc += elem.price * elem.quant * (30 / 100));
    }, 0);

    document.querySelector("#discount").innerText =
      "Discounts Rs." + " :-" + dis;

    alert("Your coupan is applied");
  } 
  else {
    alert(" Coupan NOT applied");
  }
}
function decreaseQuant(index) {
  // console.log(index);
  dataMobile[index].quant--;
  console.log(dataMobile);
  localStorage.setItem("cartItems", JSON.stringify(dataMobile));
  displayData(dataMobile); // this will show data when we move from men to cart//
  showTotal();
}

function increaseQuant(index) {
  // console.log(index);
  dataMobile[index].quant++;
  console.log(dataMobile);
  localStorage.setItem("cartItems", JSON.stringify(dataMobile));
  displayData(dataMobile); // this will show data when we move from men to cart//
  showTotal();
}
function redirect(){
  showTotal();
  localStorage.setItem("total",JSON.stringify(total));
  window.location.href = "checkout.html"
}