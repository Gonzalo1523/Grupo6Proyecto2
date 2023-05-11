const form = document.getElementById("formProducto");
const tableBody = document.getElementById("tableBody");
const tableHead = document.getElementById("tableHead");
let atributosVisibles = ["nombre", "codigo", "categoria", "descripcion", "precio"]

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

const limpiarTabla = () =>{
    for(let i = 0; i < tableBody.children.length; i++){
        let hijo = tableBody.children[i];
        console.log(hijo);
        tableBody.removeChild(hijo)
    }
}

const ActualizarTabla = () => {
    let Productos = JSON.parse(localStorage.getItem("Productos"))
    

    if (Productos != null) {
        Productos.forEach((Producto, index) => {
            let tr = document.createElement("tr")
            for (let key in Producto) {
                if (atributosVisibles.find((atributo) => atributo == key) != undefined) {
                    let td = document.createElement("td")
                    td.textContent = Producto[key]
                    tr.appendChild(td)
                }
            }

            let buttonGroup = document.createElement("div")
            buttonGroup.className = "btn-group-vertical"

            let buttonEliminar = document.createElement("button")
            buttonEliminar.textContent = "Eliminar"
            buttonEliminar.className = "btn btn-danger"
            buttonEliminar.onclick = (index) => {
                if (index != 0) {
                    let Productos = JSON.parse(localStorage.getItem("Productos"));
                    Productos.splice(index, 1);
            
                    localStorage.setItem("Productos", JSON.stringify(Productos));

                    tableBody.removeChild(tr)
                }
            };;

            let buttonEditar = document.createElement("button")
            buttonEditar.textContent = "Editar"
            buttonEditar.className = "btn btn-success"
            buttonEditar.onclick = (index) => {
                if (index != 0) {
                    let Productos = JSON.parse(localStorage.getItem("Productos"));
                    let Producto = Productos.at(index);
            
                    document.getElementById("NombreProducto").value = Producto.nombre;
                    document.getElementById("Descripcion").value = Producto.descripcion;
                    document.getElementById("url").value = Producto.url;
                    document.getElementById("Codigo").value = Producto.codigo;
                    document.getElementById("Categoria").value = Producto.categoria;
                    document.getElementById("Precio").value = Producto.precio;
            
                    document.getElementById("btnGuardar").style.display = 'none';
                    let editar = document.getElementsByClassName("Editar");
            
                    Array.from(editar).forEach((elemento) => {
                        elemento.style.display = 'block'
                    })
            
                    editar[1].onclick = () => {
                        Producto.nombre = document.getElementById("NombreProducto").value;
                        Producto.descripcion = document.getElementById("Descripcion").value;
                        Producto.Codigo = Producto.codigo;
                        Producto.url = document.getElementById("url").value;

                        Producto.categoria = document.getElementById("Categoria").value;
                        Producto.precio = document.getElementById("Precio").value;
            
                        Productos[index] = Producto;
                        localStorage.setItem("Productos", JSON.stringify(Productos));
                        ActualizarTabla();
            
                        document.getElementById("NombreProducto").value = "";
                        document.getElementById("Descripcion").value = "";
                        document.getElementById("url").value = "";
                        document.getElementById("Categoria").value = "";
                        document.getElementById("Precio").value = "";
            
                        Array.from(editar).forEach((elemento) => {
                            elemento.style.display = 'none'
                        })
            
                        document.getElementById("btnGuardar").style.display = 'block';
                    };
                }
            
            };;

            buttonGroup.appendChild(buttonEliminar)
            buttonGroup.appendChild(buttonEditar)

            let td = document.createElement("td")
            td.appendChild(buttonGroup);

            tr.appendChild(td)

            tableBody.appendChild(tr)
        })
    }
    limpiarTabla()
};
ActualizarTabla();

const generarHead = () => {
    let tr = document.createElement("tr")
    atributosVisibles.forEach((atributo) => {
        let td = document.createElement("th")
        td.textContent = atributo
        tr.appendChild(td)
    })

    tableHead.appendChild(tr)
}
generarHead();

const generarCodigo = () => {
    return crypto.randomUUID();
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let codigo = generarCodigo();

    const Producto = {
        nombre: evento.target[0].value,
        descripcion: evento.target[1].value,
        url: evento.target[2].value,
        codigo: codigo,
    };

    AgregarProducto(Producto);
    ActualizarTabla();

    document.getElementById("NombreProducto").value = "";
    document.getElementById("Descripcion").value = "";
    document.getElementById("Codigo").value = "1234";
    document.getElementById("url").value = "";
    alert('Se guardaron los datos correctamente');
});
