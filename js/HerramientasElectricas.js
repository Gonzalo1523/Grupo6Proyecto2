const card = document.getElementById("cardHE")

let ProductosLS = JSON.parse(localStorage.getItem("Productos"))

let ProductosHE = ProductosLS.filter((producto)=>producto.categoria == "Herramientas Electricas")

console.log(ProductosHE);

ProductosHE.forEach(producto => {
    /*
        <div class="col-md-3 py-3 py-md-0">
            <div class="card">

                <img src="" alt="" />

                <div class="card-body">
                    <a href="./producto3.html" class="text-reset" style="text-decoration: none">
                        <h3 class="text-center">Livius Tempranillo 2010 D.O. Rioja</h3>
                        <p class="text-center">Solo en Vinos Wine.</p>
                        <div class="star text-center">
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                        </div>
                    </a>
                    <h2>
                        $1000
                        <a href="carrito.HTML">
                            <span>
                                <li class="fa-solid fa-cart-shopping"></li>
                            </span>
                        </a>
                    </h2>
                </div>

            </div>
        </div>
     */

    let div1 = document.createElement('div')
    div1.className += "col-md-3 py-3 py-md-0"

    let divCard = document.createElement('div')
    divCard.className += "card"

    let imgInicio = document.createElement('img')
    imgInicio.src = producto.url;

    divCard.appendChild(imgInicio)

    /* card body */

    let divCardBody = document.createElement('div')
    divCardBody.className += "card-body"

    let etiquetaA = document.createElement('a')
    etiquetaA.className += "text-reset"
    etiquetaA.style.textDecoration = 'none'

    etiquetaA.href = "./error404-2.html"

    let H3Nombre = document.createElement('h3');
    H3Nombre.textContent = producto.nombre;
    etiquetaA.appendChild(H3Nombre);

    let descripcion = document.createElement('p')
    descripcion.textContent = producto.descripcion;
    etiquetaA.appendChild(descripcion);

    divCardBody.appendChild(etiquetaA);

    let h2Precio = document.createElement('h2')
    h2Precio.textContent = producto.precio
    divCardBody.appendChild(h2Precio)

    divCard.appendChild(divCardBody);
    div1.appendChild(divCard)
    
    card.appendChild(div1)
});