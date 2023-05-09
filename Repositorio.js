const Producto = {   
    "Productos":[
        {
            "nombre": "taladro",
            "codigo": 0,
            "url": "https://bergalloypastrone.vtexassets.com/arquivos/ids/156060/Taladro-Percutor-Skil-6555-13mm-550w-Velocidad-Variable-1.jpg?v=637710274357000000",
            "categoria": "herramientas electricas"
        },
        {
            "nombre": "Pistola Neumatica",
            "codigo": 1,
            "url": "https://siglo21myh.com.ar/wp-content/uploads/2022/11/pistola-neumatica-nc4258-1.png",
            "categoria": "herramientas Neumatica"
        },
        {
            "nombre": "Portalampara",
            "codigo": 2,
            "url": "https://bergalloypastrone.vtexassets.com/arquivos/ids/156060/Taladro-Percutor-Skil-6555-13mm-550w-Velocidad-Variable-1.jpg?v=637710274357000000",
            "categoria": "Electronica del hogar"
        },
        {
            "nombre": "Tijera de Podar",
            "codigo": 3,
            "url": "https://media.istockphoto.com/id/182440238/es/foto/cizallas.jpg?s=612x612&w=0&k=20&c=VmXDTT7OPwJjPcX4NolsvvMrWdjomO-SG6qK3F985HM=",
            "categoria": "Jardineria"
        }
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