const allBox = document.getElementById('container')
// console.log(allBox)
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => {
    sessionStorage.setItem('ApiData', JSON.stringify(data))
    for(let i = 0; i < data.length; i++){
        allBox.innerHTML+= `<div class="box" id="box${i+1}"><img src=${data[i].image} height="150px" widht="150px" alt="image" /><h3>${data[i].title}</h3><div class="box2"><p>${data[i].price}</p><button class="container-btn2" id="btnDetails${i+1}">show details</button></div><div class="box3" id="details${i+1}"><h2>${data[i].category}</h2><p>${data[i].description}</p><p>${data[i].rating}:<span>${data[i].rating.rate}</span><pre>${data[i].rating.count}</pre></p></div></div>`

        
        //next section
        // const btn = document.createElement("button");
        // btn.innerHTML = 'show details'
        // document.body.appendChild(btn);
      

        // const childDiv = document.createElement("div")
        // childDiv.class = "box"
        // const childImg = document.createElement("img")
        // childImg.src = data[i].image
        // childDiv.appendChild(btn)
        // childImg.alt = "Image"
        // childImg.height = 100 + "px"
        // childImg.width = 100 + "px"
        // const h3 = document.createElement('h3')
        // h3.innerHTML = data[i].title
        // const p = document.createElement('p')
        // p.innerHTML = data[i].price
        // childDiv.appendChild(childImg)
        // childDiv.appendChild(h3)
        // childDiv.appendChild(p)
        // allBox.appendChild(childDiv)

    }

    const btnClass = document.getElementsByClassName("container-btn2")
    // console.log(btnClass);
    for(let i=0; i<btnClass.length; i++){
        btnClass[i].addEventListener("click",(e)=>{
            btntoggle(e.target.id, document.getElementById(e.target.id).parentElement.nextElementSibling.id);
           
           

        })
    }
    function btntoggle(btnId,divId){
        const bId = document.getElementById(btnId)
        const dId = document.getElementById(divId)

        // console.log(bId.innerHTML);
        if(bId.innerHTML == "show details"){
            
            dId.classList.add("box3Details")
            dId.classList.remove("box3")
            bId.innerHTML = "show less"
            
        } else{
            dId.classList.remove("box3Details")
            dId.classList.add("box3")
            bId.innerHTML = "show details"
        }
        
    };

   
})
.catch((err) => console.log(err));