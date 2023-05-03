const botonAgregar = document.getElementById('botonAgregar');
const contenedorCards = document.getElementById('contenedorCards');
let contadorId = 0;

botonAgregar.addEventListener('click', () => {
	const nuevaFila = document.createElement('tr');
	nuevaFila.setAttribute('id', `fila${contadorId}`);
	
	nuevaFila.innerHTML = `<td class="align-middle"><img src="https://via.placeholder.com/150x150" alt="Producto 1"></td>
	<td class="align-middle">
		<h5 class="mb-0">Producto 1</h5>
		<p class="mb-0">Descripción del producto 1.</p>
	</td>
	<td class="align-middle">$10.00</td>
	<td class="align-middle">
		<button class="btn btn-primary">Comprar</button>
	</td>
	<td class="align-middle">
		<button class="btn btn-danger">Eliminar Producto</button>
	</td>`;
	contenedorCards.appendChild(nuevaFila);
	contadorId++;

	const botonEliminar = nuevaFila.querySelector('.btn-danger');
	botonEliminar.addEventListener('click', () => {
		const filaAEliminar = nuevaFila;
		contenedorCards.removeChild(filaAEliminar);
	});
});
