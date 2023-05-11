function seleccionarProducto(index) {
  let producto = productos[index];
  producto.favorito = true;
  productos.splice(index, 1, producto);
  localStorage.setItem("Productos",JSON.stringify(productos))//actualizar el local storage
};

const produc = document.getElementById("catalogo");
let productos = JSON.parse(localStorage.getItem("Productos"));
function mostrarCard() {
  let prod = productos.map((Producto, index) => {
    let card = `
    <div class="col-sm-12 col-md-6 col-lg-6 my-2">
      <div class="card shadow bg-light border border-0">
        <div class="card-body">
        <a href="eror404.html"><img src="${Producto.url}" class='imgCard'></a>
          <h5 class="card-title">${Producto.nombre}</h5>
          <h6 class="card-title">${"Categoria: " + Producto.categoria}</h6>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary " onClick=seleccionarProducto(${index})>Favoritos</button>
        </div>
      </div>
    </div>`;
    return card;
  });
  produc.innerHTML = prod.join("");
}
mostrarCard();
