let saturate = document.getElementById("Saturate")
let contrast = document.getElementById("contrast")
let Grayscale = document.getElementById("Grayscale")
let Brightness = document.getElementById("Brightness")
let Sepia = document.getElementById("Sepia")
let blur = document.getElementById("blur")
let huerotate = document.getElementById("hue-rotate") 
let drop = document.getElementById("drop") 


let upload = document.getElementById("uploads")
let download = document.getElementById("download")

let reset = document.querySelector("span")
let img = document.getElementById("xr")
let imgbox = document.querySelector(".img-box")

function resetx() {
    img.style.filter = "none"
    saturate.value = "100"; Sepia.value = "0"; huerotate.value = "0"; Grayscale.value = "0"; blur.value = "0"; Contrast.value = "100";Brightness.value="100"
    
 
    
   
    
    
    

}

window.onload = function () {
    reset.style.display="none"
    download.style.display = "none"
    imgbox.style.display = "none"
    
    
}

let filters = document.querySelectorAll(" input");
filters.forEach(fil => {
    fil.addEventListener("input",function (){
        img.style.filter= `
            hue-rotate(${huerotate.value}deg) 
        
            saturate(${saturate.value}%) sepia(${Sepia.value}%) grayscale(${Grayscale.value}) blur(${blur.value}px) contrast(${Contrast.value}%)  brightness(${Brightness.value}%)
            `
            
            

        
        })
    
    
})




upload.onchange = function () {
    resetx()
    reset.style.display="block"
    download.style.display = "block"
    imgbox.style.display = "block"
    

    let file = new FileReader()
    file.readAsDataURL(upload.files[0])
    file.onload = function () {
        img.src = file.result
    }

    }
    
    

download.onclick = function () {
    download.href = img.src
}
