const loginForm = document.querySelector(`#loginForm`)
loginForm.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    const email=document.querySelector(`#email`) .value
    const password=document.querySelector(`#password`).value
    const Users= JSON.parse(localStorage.getItem(`users`)) || []
    const validUsers =Users.find(user => user-email=== email , user.password===password ,)
    if(!validUsers){
        return alert(`usuario invalido o contraseña falsa!`)
    }
    alert(`bienvenido ${validUsers.name}`)
    window.location.href="index.hmtl"

})