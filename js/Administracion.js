const form = document.getElementById("formProducto");
const tableBody = document.getElementById("tableBody");

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
    let Productos = JSON.parse(localStorage.getItem("Productos"));

    if (Productos != null) {
        tableBody.innerHTML = Productos.map((Producto, index) => {
            return `<tr>
                        <td>${Producto.nombre}</td>
                        <td>${Producto.descripcion}</td>
                        <td>${Producto.codigo}</td>
                        <td class="text-break">${Producto.url}</td>
                        <td>
                            <div class="btn-group-vertical">
                                <button type="button" class="btn btn-primary" onClick=EliminarProducto(${index})>Eliminar</button>
                                <button type="button" class="btn btn-success" onClick=EditarProducto(${index})>Editar</button>
                            </div>
                        </td>
                    </tr>`;
        }).join("");
    }
};
ActualizarTabla();

const EliminarProducto = (index) => {
    let Productos = JSON.parse(localStorage.getItem("Productos"));
    Productos.splice(index, 1);

    localStorage.setItem("Productos", JSON.stringify(Productos));
    ActualizarTabla();
};

const EditarProducto = (index) => {
    let Productos = JSON.parse(localStorage.getItem("Productos"));
    let Producto = Productos.at(index);

    document.getElementById("NombreProducto").value = Producto.nombre;
    document.getElementById("Descripcion").value = Producto.descripcion;
    document.getElementById("url").value = Producto.url;
    document.getElementById("Codigo").value = Producto.codigo;

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

        Productos[index] = Producto;
        localStorage.setItem("Productos", JSON.stringify(Productos));
        ActualizarTabla();

        document.getElementById("NombreProducto").value = "";
        document.getElementById("Descripcion").value = "";
        document.getElementById("url").value = "";

        Array.from(editar).forEach((elemento) => {
            elemento.style.display = 'none' 
        })

        document.getElementById("btnGuardar").style.display = 'block';
    };
};

const generarCodigo = () => {
    let Productos = JSON.parse(localStorage.getItem("Productos"));
    if(Productos != null && Productos.lenght != 0){
        let ultimoCodigo = Math.max(...Productos.map((producto)=>{return parseInt(producto.codigo)}))
        return ultimoCodigo + 1;
    }else{
        return 0;
    }
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
