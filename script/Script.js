window.addEventListener("load",()=>{
    document.querySelectorAll(".placeholder").forEach((ph)=>{
        ph.classList.remove("placeholder")
    })
})



const year = document.getElementById("year");
year.innerHTML=(new Date().getFullYear());