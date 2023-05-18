const ActualizarVistaUsuario = () => {
    let UsuarioLogueado = JSON.parse(localStorage.getItem("UsuarioLogueado"));
    if (UsuarioLogueado != undefined && UsuarioLogueado != ""){
        if(UsuarioLogueado.rol == "Administrador"){
            document.getElementById("AdministracionProductos").style.display = "block";
        }
        document.getElementById("Login").style.display = "none"
        document.getElementById("Logout").style.display = "block"
        console.log(UsuarioLogueado);
    }else{
        document.getElementById("AdministracionProductos").style.display = "none";
        document.getElementById("Login").style.display = "block"
        document.getElementById("Logout").style.display = "none"
    }
}
ActualizarVistaUsuario();

if(document.getElementById("Logout").style.display == "block"){
    document.getElementById("Logout").onclick = () => {
        localStorage.setItem("UsuarioLogueado", "")
        document.getElementById("AdministracionProductos").style.display = "none";
        document.getElementById("Login").style.display = "block"
        document.getElementById("Logout").style.display = "none"
    }
}

