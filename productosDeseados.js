const botonAgregar = document.getElementById('botonAgregar');
const agregarCard = document.getElementById('cardAgregada');
const contenedorCards = document.getElementById('contenedorCards');
let contadorId = 0;

botonAgregar.addEventListener('click', () => {
	const nuevaCard = document.createElement('div');
	nuevaCard.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
	nuevaCard.setAttribute('id', `card${contadorId}`);
	
	const cardContenido = `
    <div class="card bg-secondary text-white">
      <img src="..." class="card-img-top" alt="Imagen no Encontrada"
        style="max-width: 100%; height: auto;">
      <div class="card-body">
        <h5 class="card-title">Titulo del Producto</h5>
        <p class="card-text">Descripcion de el producto</p>
        <a href="#" class="btn btn-primary d-block">¡Comprar!</a>
        <br>
        <a href="#" class="btn btn-primary d-block botonEliminar">Eliminar Producto</a>
      </div>
    </div>`;

	nuevaCard.innerHTML = cardContenido;
	contenedorCards.appendChild(nuevaCard);
	contadorId++;


	const botonEliminar = nuevaCard.querySelector('.botonEliminar');
	botonEliminar.addEventListener('click', () => {
		const cardAEliminar = nuevaCard;
		contenedorCards.removeChild(cardAEliminar);
	});

	
	
});

