const signupForm = document.querySelector(`#signupForm`);
signupForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const Nombre = document.querySelector(`#Nombre`).value;
  const NombreUsuario = document.querySelector(`#NombreUsuario`).value;
  const email = document.querySelector(`#email`).value;
  const Contraseña = document.querySelector(`#Contraseña`).value;

  const usuario = {
    Contraseña: Contraseña,
    Nombre: Nombre,
    NombreUsuario: NombreUsuario,
    email: email,
    rol: "Usuario",
  };

  const Usuarios = JSON.parse(localStorage.getItem(`Usuarios`));

  if (Usuarios != undefined && Usuarios.length > 0) {
    const UsuarioRegistrado = Usuarios.find(
      (usuario) => usuario.email === email
    );

    if (UsuarioRegistrado) {
        signupForm.reset();
        return Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario ya registrasdo",
        });
    }

    Usuarios.push(usuario);
    localStorage.setItem(`Usuarios`, JSON.stringify(Usuarios));
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Usuario Registrado`,
      showConfirmButton: false,
      timer: 1500,
    });
    signupForm.reset();
  } else {
    let Usuarios = [usuario];
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Usuario Registrado`,
      showConfirmButton: false,
      timer: 1500,
    });
    signupForm.reset();
  }
});
