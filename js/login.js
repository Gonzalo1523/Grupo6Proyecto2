const loginForm = document.querySelector(`#loginForm`)

loginForm.addEventListener(`submit`, (e)=>{
    e.preventDefault()

    const email=document.querySelector(`#email`).value
    const password=document.querySelector(`#password`).value

    const Usuarios = JSON.parse(localStorage.getItem(`Usuarios`)) || []

    console.log(Usuarios);
    const UsuarioValidado = Usuarios.find(usuario => usuario.email===email && usuario.Contraseña===password )

    console.log(UsuarioValidado);

    if(!UsuarioValidado){
        return Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario y/o contrase incorrectos",
        });
    }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Bienvenido ${UsuarioValidado.Nombre}`,
            showConfirmButton: false,
            timer: 1500
        })
        localStorage.setItem("UsuarioLogueado", JSON.stringify(UsuarioValidado));
        if (UsuarioValidado != undefined && UsuarioValidado != ""){
            if(UsuarioValidado.rol == "Administrador"){
                document.getElementById("AdministracionProductos").style.display = "block";
                console.log(UsuarioValidado);
            }
            document.getElementById("Login").style.display = "none"
            document.getElementById("Logout").style.display = "block"
            document.getElementById("Logout").onclick = () => {
                localStorage.setItem("UsuarioLogueado", "")
                document.getElementById("AdministracionProductos").style.display = "none";
                document.getElementById("Login").style.display = "block"
                document.getElementById("Logout").style.display = "none"
            }
        }
    }
    loginForm.reset()
})