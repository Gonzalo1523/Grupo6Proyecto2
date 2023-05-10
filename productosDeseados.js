const contenedorCards = document.getElementById("contenedorCards");
import Productos from "./Productos.json" assert { type: "json" };

localStorage.setItem("Productos", JSON.stringify(Productos.Productos));

const ActualizarLista = () => {
  let Productos = JSON.parse(localStorage.getItem("Productos"));

  //contenedorCards.innerHTML = Productos.map((producto) => {
  let productoVista = Productos.map((producto) => {
    let productoVIsta = `
		<tr>
			<td class="align-middle d-none d-md-table-cell text-center"><img src="${producto.url}" alt="Producto 1"></td>
			<td class="align-middle">
				<h5 class="mb-0">${producto.nombre} 1</h5>
				<p class="mb-0">${producto.descripcion}</p>
			</td>
			<td class="align-middle">${producto.precio}</td>
			<td class="align-middle">
		    <div class= "btn-group-vertical">
			    <button class="btn btn-primary">Comprar</button>
				<button class="btn btn-danger">Eliminar </button>
			</div>
			</td>
		</tr>
		`;
    return productoVIsta;
  }).join("");
  contenedorCards.innerHTML = productoVista;
};
ActualizarLista();
