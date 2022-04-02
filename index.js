const getData=async()=>{
  try {
    var res=await fetch(``)
    var data=await res.json()
    console.log(data.category_results[0])
    append(data.category_results)
  } catch (error) {
    console.log(error)
  }
}
getData()
var parent=document.getElementById("parent")
const append = (data) => {
  parent.innerHTML = null;
  data.map((elem) => {
      
      var div = document.createElement('div')
      
      var img = document.createElement('img')
      img.setAttribute("id", "#thumbSingle")
      img.src = elem.image;
      var title = document.createElement('h3')
      title.innerText= elem.title
      title.addEventListener('click', function() {
             proDetails(elem)
             window.location.href="productD.html"
      })
      var p = document.createElement('p')
      p.innerText = elem.price.value;
      div.append(img, p)
      parent.append(div)
  })
}
let proArr=[]||JSON.stringify(localStorage.getItem('productDetail'))
function proDetails(elem) {
  proArr.push(elem)
  console.log(proArr)
  localStorage.setItem("productsDetail",JSON.stringify(proArr))
}