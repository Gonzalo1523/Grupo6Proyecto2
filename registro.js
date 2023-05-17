const signupForm=document.querySelector(`#signupForm`)
signupForm-addEventListener(`submit`,(e)=>{
    e.preventDefault()
    const name=document.querySelector(`#name`) .value
    const email=document.querySelector(`#email`) .value 
    const paassword=document.querySelector(`#password`) .value

    const Users = JSON.parse(localStorage.getItem(`users`)) || []
    const isUserRegistered= Users.find(user => user.email===email)
    if(isUserRegistered){
        return alert(`El usuario yaa esta registrado`)
    }
    Users.push({name:name, email:email , paassword:paassword,})
    localStorage.setItem(`users`,JSON.stringify(Users))
    alert (`registro exitoso`)
    window.location.href="pruebaLogin.html"
})