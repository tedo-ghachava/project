let navbar = document.getElementById('navBar')
let toggleButton = document.getElementById('burger-menu')

toggleButton.addEventListener('click', function(){
    this.classList.toggle('active')
    navbar.classList.toggle('active')
})