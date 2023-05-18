const Productos = JSON.parse(localStorage.getItem('Productos'));
const Imagen = document.getElementById('imagenProducto');

const producto = Productos[0];

let img = document.createElement('img');

img.src = producto.url;
img.className += 'img-fluid';
img.className += 'rounded-start';
Imagen.appendChild(img);

let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let precio = document.getElementById("precio");
let categoria = document.getElementById("categoria");

/* Nombre */

let spanNombre = document.createElement('h1');
spanNombre.className += 'fw-bolder'
spanNombre.className += 'card-title'
spanNombre.textContent = producto.nombre
nombre.appendChild(spanNombre);

/* Categoria */

let spanCategoria = document.createElement('h3');
spanCategoria.className += 'fw-semibold'
spanCategoria.className += 'card-text'
spanCategoria.textContent = producto.categoria;
categoria.appendChild(spanCategoria);

/* Descripcion */

let spanDescripcion = document.createElement('p');
spanDescripcion.className += 'lh-lg'
spanDescripcion.className += 'card-text'
spanDescripcion.textContent = producto.descripcion;
descripcion.appendChild(spanDescripcion);

/* Precio */

let spanPrecio = document.createElement('h5');
spanPrecio.className += 'text-decoration-underline'
spanPrecio.textContent = producto.precio;
precio.appendChild(spanPrecio)


