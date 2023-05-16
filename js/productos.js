const seleccionarProducto = (codigo) => {
  let producto = productos.find((producto) => producto.codigo == codigo);
  Swal.fire({
    icon: 'error',
    title: 'Oops... se debe registrar para agregar el producto a Favoritos',
    text: '',
    footer: '<a href="">Quiere registrarse?</a>'
  })
};
const produc = document.getElementById("catalogo");
let productos = JSON.parse(localStorage.getItem("Productos"));
function mostrarCard() {
  let prod = productos.map((Producto) => {
    let card =`
    <div class="col-sm-6 col-md-4 col-lg-3 card-body bg-secondary text-white" style="max-width: 300px">
      <img src="${Producto.url}" class="card-img-top" alt="Imagen no Encontrada">
      <div class="card-body2">
        <h5 class="card-title">${Producto.nombre}</h5>
        <p class="card-text">${Producto.descripcion}</p>
        <button class="btn btn-primary" onClick=mostrarMensaje()>Agregar al Carrito</button>
        <button class="btn btn-warning" onClick=seleccionarProducto(${Producto.codigo})>Favoritos</button>
              <button class="btn btn-success">Comprar</button>
      </div>
    </div>`;
    return card;
  });
  produc.innerHTML = prod.join("");
}
mostrarCard();

function mostrarMensaje(mensaje) {
  Swal.fire({
    icon: 'error',
    title: 'Oops... se debe registrar para agregar el producto al Carrito',
    text: '',
    footer: '<a href="">Quiere registrarse?</a>'
  })
} 

