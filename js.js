const navBar__mobileContainer = document.querySelector('.navBar__mobileContainer')
const hambu = document.querySelector('.hambu')

hambu.addEventListener('click',()=> {
    navBar__mobileContainer.classList.toggle('active')
})