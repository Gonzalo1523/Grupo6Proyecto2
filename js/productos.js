const seleccionarProducto = (codigo) => {
  let producto = productos.find((producto) => producto.codigo == codigo);
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Su producto se agrego correctamente a Favoritos",
    showConfirmButton: false,
    timer: 1500,
  });
};
const produc = document.getElementById("catalogo");
let productos = JSON.parse(localStorage.getItem("Productos"));
function mostrarCard() {
  let prod = productos.map((Producto) => {
    let card = `
    <div class="card-body bg-light border border-5" style="width: 18rem; text-align: center; margin: 30px 30px;">
        <div class="card-body">
        <a href="eror404.html"><img src="${Producto.url}" class='imgCard' class="card-img-top"></a>
            <h5 class="card-title">${Producto.nombre}</h5>
            <h6 class="card-title">${Producto.descripcion}</h6>
            <h6 class="card-title">${Producto.precio}</h6>
            <h6 class="card-title">${"Categoria: " + Producto.categoria}</h6>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary" onClick=mostrarMensaje()>Agregar al Carrito</button>
            <button class="btn btn-warning" onClick=seleccionarProducto(${Producto.codigo})>Favoritos</button>
            <button class="btn btn-success">Comprar</button>
        </div>
    </div>
    </div>`;
    return card;
  });
  produc.innerHTML = prod.join("");
}
mostrarCard();

function mostrarMensaje(mensaje) {
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Su producto se agrego correctamente al Carrito ",
    showConfirmButton: false,
    timer: 1500,
  });
} 
