const MenuNav = document.querySelector(".links-nav");
const hamburguer = document.querySelector(".hamburguer-nav");
const body = document.querySelector("body");
hamburguer.addEventListener("click", function () {
  MenuNav.classList.toggle("active");
  document.querySelector(".line--top").classList.toggle("active");
  document.querySelector(".line--center").classList.toggle("active");
  document.querySelector(".line--botton").classList.toggle("active");
}); 
const p = document.getElementsByClassName("contact-input__item");
for (let index = 0; index < p.length; index++) {
    p[index].addEventListener("keyup", function () {
        if(this.value.length >= 1)
          this.classList.add("active")
        else
          this.classList.remove("active")
    })
    
}




