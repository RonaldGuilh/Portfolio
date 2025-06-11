function toggleMenu(){
  const btnMobile = document.querySelector(".hamburguer");
  const menuMobile = document.querySelector(".mobile-menu");

  btnMobile.addEventListener('click', () =>{
    btnMobile.classList.toggle('active');
    menuMobile.classList.toggle('active')
  })
}

toggleMenu();

function menuServices(){
  const menuAtivo = document.querySelectorAll(".nav-services a");

  menuAtivo.forEach(ativo => {
    ativo.addEventListener("click", (e) => {
      e.preventDefault();

      menuAtivo.forEach(l => l.classList.remove('ativo'));

      ativo.classList.add('ativo');
    })
  })
}

menuServices();

/* Select service ⬎ */

const tabNav = document.querySelectorAll(".js-tabnav li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if(tabNav.length && tabContent.length){
tabContent[0].classList.add('ativo')

function activeTab(index){
  tabContent.forEach((content) => {
    content.classList.remove('ativo')
  })
  tabContent[index].classList.add('ativo');
}

tabNav.forEach((itemNav, index) => {
  itemNav.addEventListener('click', () => {
    activeTab(index);
  })
})
}