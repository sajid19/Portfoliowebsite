const sections = document.querySelectorAll(".section");
const controlsbtn = document.querySelectorAll(".controls") ;
const controlButton  = document.querySelectorAll(".control");
const bodyMain = document.querySelector(".main");



function pageTransition() {
    // Button active class
    for(let i = 0; i< controlButton.length; i++){
        controlButton[i].addEventListener("click",function() {
            let currentbtn = document.querySelectorAll(".active-btn");
            currentbtn[0].className = currentbtn[0].className.replace("active-btn"," ");
            this.className += "active-btn";
            
        })
    }
    // section active class
    bodyMain.addEventListener("click", (e)=> {
        const id = e.target.dataset.id ;
        if (id){
            controlsbtn.forEach( (btn)=> {
                btn.classList.remove("active")
                
            })
            e.target.classList.add("active")
            sections.forEach((section)=> {
                section.classList.remove("active")
                
            })
            const element = document.getElementById(id);
            element.classList.add("active");

        }
        
    })
}
pageTransition();