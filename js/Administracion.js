const form = document.getElementById("formProducto");
const tableBody = document.getElementById("tableBody");
const tableHead = document.getElementById("tableHead");
let atributosVisibles = ["nombre", "codigo", "imagen", "categoria", "precio"]

const AgregarProducto = (Producto) => {
    let Productos = JSON.parse(localStorage.getItem("Productos"));

    if (Productos == null) {
        let ProductosNew = [Producto];
        localStorage.setItem("Productos", JSON.stringify(ProductosNew));
    } else {
        Productos.push(Producto);
        localStorage.setItem("Productos", JSON.stringify(Productos));
    }
};

const ActualizarTabla = () => {
    let Productos = JSON.parse(localStorage.getItem("Productos"))
    tableBody.innerHTML = "";
    if (Productos != null && Productos.length != 0) {
        Productos.forEach((Producto) => {
            let tr = document.createElement("tr")
            for (let key in Producto) {
                if (atributosVisibles.find((atributo) => (atributo == key || key == 'url')) != undefined) {
                    let td = document.createElement("td")
                    switch(key){
                        case "precio":
                            td.style.maxWidth = "200px"
                            td.textContent = `${Producto[key]}`
                            break;
                        case "url":
                            let img = document.createElement("img");
                            img.src = Producto[key];
                            img.style.width = '200px'
                            img.style.height = '200px'
                            td.appendChild(img)
                            //td.appendChild(img)
                            break;
                        default:
                            td.style.maxWidth = "150px"
                            td.className += "text-wrap"
                            td.textContent = Producto[key]
                    }
                    tr.appendChild(td)
                }
            }

            let buttonGroup = document.createElement("div")
            buttonGroup.className = "btn-group-vertical"

            let buttonEliminar = document.createElement("button")
            buttonEliminar.textContent = "Eliminar"
            buttonEliminar.className = "btn btn-danger"

            buttonEliminar.onclick = () => {
                Swal.fire({
                    title: `Eliminar`,
                    text: `¿Seguro desea eliminar ${Producto.nombre}?`,
                    icon: 'error',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Elimnar',
                    cancelButtonText: 'Cancelar'
                  }).then((result) => {
                    if(result.isConfirmed){
                        let Productos = JSON.parse(localStorage.getItem("Productos"));
                        let index = Productos.findIndex((elemento)=> elemento.codigo == Producto.codigo)
                        Productos.splice(index, 1);
                        localStorage.setItem("Productos", JSON.stringify(Productos));
                        tableBody.removeChild(tr)
                    }
                  })
                  
            };;

            let buttonEditar = document.createElement("button")
            buttonEditar.textContent = "Editar"
            buttonEditar.className = "btn btn-success"

            buttonEditar.onclick = () => {
                let Productos = JSON.parse(localStorage.getItem("Productos"));

                let ProductoLS = Productos.find((ProductoLS)=>ProductoLS.codigo == Producto.codigo)

                document.getElementById("NombreProducto").value = ProductoLS.nombre;
                document.getElementById("Descripcion").value = ProductoLS.descripcion;
                document.getElementById("url").value = ProductoLS.url;
                document.getElementById("Categoria").value = ProductoLS.categoria;
                document.getElementById("Precio").value = ProductoLS.precio;
                document.getElementById("CodigoInput").value = ProductoLS.codigo;

                document.getElementById('Codigo').style.display = "block";
                document.getElementById('btnGuardar').textContent = "Editar"
            };

            buttonGroup.appendChild(buttonEliminar)
            buttonGroup.appendChild(buttonEditar)

            let td = document.createElement("td")
            td.appendChild(buttonGroup);

            tr.appendChild(td)

            tableBody.appendChild(tr)
        })
    }
};
ActualizarTabla();

const generarHead = () => {
    let tr = document.createElement("tr")
    atributosVisibles.forEach((atributo) => {
        let td = document.createElement("th")
        td.textContent = atributo
        tr.appendChild(td)
    })
    let td = document.createElement("td");
    tr.appendChild(td)
    tableHead.appendChild(tr)
}
generarHead();

const generarCodigo = () => {
    return crypto.randomUUID();
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const Producto = {
        nombre: evento.target[0].value,
        codigo: evento.target[5].value,
        url: evento.target[2].value,
        categoria: evento.target[3].value,
        descripcion: evento.target[1].value,
        precio: evento.target[4].value,
    };

    if(Producto.codigo == ""){
        let Productos = JSON.parse(localStorage.getItem("Productos"));
        Producto.codigo = generarCodigo()
        Productos.push(Producto)
        localStorage.setItem("Productos", JSON.stringify(Productos));
        ActualizarTabla();
    }else{
        let Productos = JSON.parse(localStorage.getItem("Productos"));
        let index = Productos.findIndex((producto)=>producto.codigo==Producto.codigo)
        Productos[index]=Producto;
        localStorage.setItem("Productos", JSON.stringify(Productos));
        ActualizarTabla();
    }

    document.getElementById("NombreProducto").value = "";
    document.getElementById("Descripcion").value = "";
    document.getElementById("url").value = "";
    document.getElementById("Categoria").value = "";
    document.getElementById("Precio").value = "";
    document.getElementById("CodigoInput").value = "";
    document.getElementById("Codigo").style.display = "none";
    document.getElementById('btnGuardar').textContent = "Guardar"

});


const limpiarDatos = () => {
    document.getElementById("NombreProducto").value = "";
    document.getElementById("Descripcion").value = "";
    document.getElementById("url").value = "";
    document.getElementById("Categoria").value = "";
    document.getElementById("Precio").value = "";
    document.getElementById("CodigoInput").value = "";
    document.getElementById("Codigo").style.display = "none";
    document.getElementById('btnGuardar').textContent = "Guardar"
}