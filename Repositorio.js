const Producto = {   
    "Productos":[
        {
            "nombre": "Taladro",
            "codigo": 0,
            "url": "https://bergalloypastrone.vtexassets.com/arquivos/ids/156060/Taladro-Percutor-Skil-6555-13mm-550w-Velocidad-Variable-1.jpg?v=637710274357000000",
            "descripcion": "Con el taladro eléctrico Skil TP711 podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo.",
            "precio": "$ 10.200",
            "categoria": "Herramientas Electricas"
        },
        {
            "nombre": "Pistola Neumatica",
            "codigo": 1,
            "url": "https://siglo21myh.com.ar/wp-content/uploads/2022/11/pistola-neumatica-nc4258-1.png",
            "descripcion": "Diseño ergonométrico. Ideal para uso semi-profesional. Sistema “Rocking Dog”. Mango Soft Grip antideslizante.",
            "precio": "$ 17.870",
            "categoria": "Herramientas Neumatica"
        },
        {
            "nombre": "Portalampara",
            "codigo": 2,
            "url": "https://storage.googleapis.com/fs_static/stores/s730_cz1b/images/products/m/porta-lampara-negro-3-p_98655.jpg",
            "descripcion": "Portalámpara Mignon E-14 3 Piezas NEGRO. Diametro: 30 mm , Largo : 50 mm. Base con rosca para niple 3/8",
            "precio": "$ 550",
            "categoria": "Electronica del Hogar"
        },
        {
            "nombre": "Tijera de Podar",
            "codigo": 3,
            "url": "https://media.istockphoto.com/id/182440238/es/foto/cizallas.jpg?s=612x612&w=0&k=20&c=VmXDTT7OPwJjPcX4NolsvvMrWdjomO-SG6qK3F985HM=",
            "descripcion": "Mango ergonómico curvo, con topes internos. Más comodidad, firmeza y seguridad durante el uso.",
            "precio": "$ 2.500",
            "categoria": "Jardineria"
        },
        {
            "nombre": "Portalampara",
            "codigo": 2,
            "url": "https://storage.googleapis.com/fs_static/stores/s730_cz1b/images/products/m/porta-lampara-negro-3-p_98655.jpg",
            "descripcion": "Portalámpara Mignon E-14 3 Piezas NEGRO. Diametro: 30 mm , Largo : 50 mm. Base con rosca para niple 3/8",
            "precio": "$ 550",
            "categoria": "Electronica del Hogar"
        },
        {
            "nombre": "Portalampara",
            "codigo": 2,
            "url": "https://storage.googleapis.com/fs_static/stores/s730_cz1b/images/products/m/porta-lampara-negro-3-p_98655.jpg",
            "descripcion": "Portalámpara Mignon E-14 3 Piezas NEGRO. Diametro: 30 mm , Largo : 50 mm. Base con rosca para niple 3/8",
            "precio": "$ 550",
            "categoria": "Electronica del Hogar"
        },
        {
            "nombre": "Portalampara",
            "codigo": 2,
            "url": "https://storage.googleapis.com/fs_static/stores/s730_cz1b/images/products/m/porta-lampara-negro-3-p_98655.jpg",
            "descripcion": "Portalámpara Mignon E-14 3 Piezas NEGRO. Diametro: 30 mm , Largo : 50 mm. Base con rosca para niple 3/8",
            "precio": "$ 550",
            "categoria": "Electronica del Hogar"
        },
    ],
    "Usuarios":[
        {
            "Nombre": "David Antonio Moreno",
            "NombreUsuario": "DavidMoreno",
            "Contraseña": "1234",
            "rol": "Administrador"
        },
        {
            "Nombre": "Gonzalo Sebastian Trejo",
            "NombreUsuario": "GonzaloTrejo",
            "Contraseña": "1234",
            "rol": "Usuario"
        },
        {
            "Nombre": "Nestor Nicolas Veliz",
            "NombreUsuario": "NicolasVeliz",
            "Contraseña": "1234",
            "rol": "Usuario"
        },
        {
            "Nombre": "Juan Agustin Sanchez",
            "NombreUsuario": "AgustinSanchez",
            "Contraseña": "1234",
            "rol": "Usuario"
        }
    ]
}

localStorage.setItem("Productos",JSON.stringify(Producto.Productos))
localStorage.setItem("Usuarios",JSON.stringify(Producto.Usuarios))