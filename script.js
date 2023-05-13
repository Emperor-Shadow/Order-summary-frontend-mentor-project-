var changeBtn = document.querySelector('#change'),
selection = document.querySelectorAll('.click'),
showYear = document.querySelector("#addyear"),
showPlan = document.querySelector("#inner")

changeBtn.addEventListener("click" , ()=>{
  document.querySelector(".choose").style.display = "block";
  document.querySelector(".container").style.filter = "blur(20px)"
})

check = () =>{
  selection.forEach(selection => {
    selection.addEventListener('click', function () {
        
        showPlan.innerText = this.querySelector("#plan").innerText;
        
        showYear.innerText = this.querySelector("#year").innerText;
        
          document.querySelector(".container").style.filter = "blur(0px)"
          
        document.querySelector(".choose").style.display = "none";
      });
})
}

check();
