const menuToggle=document.querySelector('.toggle')
const navigation=document.querySelector('.navigation')
let imgBx=document.querySelectorAll('.imgBx')

menuToggle.addEventListener('click',toggleMenu)

function toggleMenu(){
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}

imgBx.forEach(item=>item.addEventListener('click',()=>item.classList.toggle('active')))