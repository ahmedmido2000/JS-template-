let header= document.querySelector("header")
let images=["./images/1.webp","./images/2.webp","./images/3.webp","./images/4.webp","./images/5.webp"]
let i =0;

let yesBTN=document.querySelector(".yes")
let noBTN=document.querySelector(".no")
let backgrounds=document.querySelector(".bg ul")
let backgroundList=document.querySelectorAll(".bg ul img")


function changeBG(){
    header.style.backgroundImage=`url(${images[i]})`
    if(noBTN.classList.contains("active")){
        header.style.backgroundImage=`url(${images[i]})`
    }
    else if (yesBTN.classList.contains("active")){

        setTimeout(() => {
            changeBG()
            i++
            if(i===5){
                i=0
            }
        }, 2000);
    }
}
changeBG()



let gear=document.querySelector(".settings i")
let settings=document.querySelector(".settings")
gear.onclick=function(){
    gear.classList.toggle("fa-spin")
    if(gear.classList.contains("fa-spin")){
        settings.style.left="-200px"
        settings.style.left="0"
    }
    else{
        settings.style.left="-200px"
    }
}



let colors=document.querySelectorAll(".change-colors ul li")
window.onload=function (){
    if(localStorage.getItem("yes")){
        yesFun()
    }
    else{
        noFun()
        if(localStorage.getItem("bg")){
            header.style.backgroundImage=`url(${localStorage.getItem("bg")})`
        }

    }
    if(localStorage.getItem("color")){
        document.body.style.setProperty("--main-color",localStorage.getItem("color"))
        colors.forEach(function(c){
                if(c.getAttribute("color")===localStorage.getItem("color")){
                    let x=document.querySelector(".active")
                     x.classList.remove("active")
                    c.classList.add("active")
            }
        })
    }
}


colors.forEach(color => { 
    color.addEventListener("click",function(e){
        document.body.style.setProperty("--main-color",e.target.getAttribute("color"))
        localStorage.setItem("color",e.target.getAttribute("color"))
        let x=document.querySelector(".active")
        x.classList.remove("active")
        e.target.classList.add("active")


        
    })
});





noBTN.addEventListener("click",noFun)
function noFun(){
    yesBTN.classList.remove("active")
    noBTN.classList.add("active")
    localStorage.removeItem("yes")
    changeBG()
    backgrounds.style.visibility="visible"
}
yesBTN.addEventListener("click",yesFun)
function yesFun(){
    noBTN.classList.remove("active")
    yesBTN.classList.add("active")
    localStorage.setItem("yes","x")
    changeBG()
    backgrounds.style.visibility="hidden"
}

backgroundList.forEach(img =>{
    img.onclick=function(e){
        header.style.backgroundImage=`url(${e.target.getAttribute("src")})`
        localStorage.setItem("bg",e.target.getAttribute("src"))
        backgroundList.forEach(img =>{
        img.classList.remove("active")
        e.target.classList.add("active")

        
        })
    }
})


let skills = document.querySelector(".skills")
window.onscroll=function () {
    // بعد العنصر عن بداية الصفحه الارتفاع يعنى
    let offsetTop=skills.offsetTop
    // ارتفاع العنصر نفسه كله على بعضه
    let offsetHeight=skills.offsetHeight
    // ارتفاع الشاشه نفسها
    let windowHeight=window.innerHeight
    // انت عملت سكرول قد ايه
    let windowScroll=window.pageYOffset
    if(windowScroll>(offsetTop+offsetHeight-windowHeight)){
        let spans=document.querySelectorAll(".skills .skills-container span")
        spans.forEach(span =>{
            span.style.width=span.getAttribute("per")
        })
    }
}


document.querySelector(".overlay").remove()
let gallery=document.querySelectorAll(".gallery .container img")
gallery.forEach((img)=> {
    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div")
        overlay.classList.add("overlay")
        document.body.appendChild(overlay) 
        let imageContainer =document.createElement("div")
        imageContainer.classList.add("myDiv")
        let head = document.createElement("h2")
        let myhead=document.createTextNode(img.getAttribute("alt"))
        head.appendChild(myhead)
        imageContainer.appendChild(head)
        let image =document.createElement("img")
        imageContainer.appendChild(image) 
        image.src=img.src
        let span =document.createElement("span")
        let close =document.createTextNode("x")
        span.classList.add("close")
        span.appendChild(close)
        imageContainer.appendChild(span)
        document.body.appendChild(imageContainer) 
    })
});
document.addEventListener("click",function(e){
    if(e.target.classList.contains("close")){
        document.querySelector(".overlay").remove()
        document.querySelector(".myDiv").remove()
    }

})



let clearBTN=document.querySelector(".clear-localstorage button")
clearBTN.onclick=function(){
    localStorage.clear()
    yesFun()
    window.location.reload()
}


let sellect=document.querySelector(".sellect i")
let navList=document.querySelector("header nav ul")
sellect.onclick=function () {
    if(navList.style.display==="block"){
        navList.style.display="none"
        sellect.classList.remove("open")
    }
    else {
        navList.style.display="block"
        sellect.classList.add("open")
    }
}