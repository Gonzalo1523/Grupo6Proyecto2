// ...
let contadorId = 0;
const ActualizarLista = () => {
	let Productos = JSON.parse(localStorage.getItem("Productos"));
	let ProductosFavoritos = Productos.filter((Producto) => (Producto.favorito != undefined && Producto.favorito))

	console.log(ProductosFavoritos);
	let productoVista = ProductosFavoritos.map((producto) => {
		contadorId++;
		let productoVIsta = `
		<tr id="producto-${contadorId}"> <!-- Añade el id único al HTML -->
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
				<button class="btn btn-primary">Enviar </button>
			</div>
			</td>
		</tr>
		`;

		return productoVIsta;
	}).join("");
	contenedorCards.innerHTML = productoVista;
};
ActualizarLista();
