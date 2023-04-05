const ekle=document.querySelector("#sepeteekle");
const ekles=document.querySelectorAll("#sepeteekle");
const eklendi=document.querySelector(".eklendi");
let number=0;

console.log("Merhaba")
ekles.forEach((ekle)=>{ekle.addEventListener("click",()=>{
    if(!ekle.classList.contains("ekle-btn")){
        ekle.classList.add("ekle-btn");
        number++;
       ekle.innerHTML="Sepete Eklendi."
    }
    else{
        ekle.classList.remove("ekle-btn");
        number--;
        ekle.innerHTML="Sepete Ekle";
    }
    if(number>=1){
        eklendi.classList.add("display")
        eklendi.innerHTML=number;
    }
    else{
        eklendi.classList.remove("display")
        eklendi.innerHTML=0;
    }
       
    });})
