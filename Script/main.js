
const ContenidoCarrito = document.getElementById("ContenidoCarrito");

const verCarrito = document.getElementById("verCarrito");

const VentanaCarrito = document.getElementById("VentanaCarrito");

let ContenidoVentanaCarrito



//ARRAY DE PRODUCTOS//
const Productos = [{
    nombre: "cactus Grusonii",
    precio: 2500,
    tipo: "Exterior",
    img: "Imagenes/Plantas Carrito/cactus Grusonii.jpg",
},

{
    nombre: "Calathea Thalia",
    precio: 1800,
    tipo:  "Interior",
    img:"Imagenes/Plantas Carrito/Calathea Thalia.jpg",
},

{
    nombre: "Lavanda",
    precio: 1800,
    tipo:  "Exterior",
    img:"Imagenes/Plantas Carrito/Lavanda.jpg",
},

{
    nombre: "Potus",
    precio: 1800,
    tipo:  "Interior",
    img:"Imagenes/Plantas Carrito/Potus.jpg",
},

{
    nombre: "Malvon Italiano",
    precio: 1800,
    tipo:  "Exterior",
    img:"Imagenes/Plantas Carrito/malvón italiano.jpeg"
},

{
    nombre: "Sansevieria Trifasciata",
    precio: 1800,
    tipo:  "Exterior",
    img:"Imagenes/Plantas Carrito/Sansevieria Trifasciata.jpg",
},
];


//GET ITEM PARA GUARDAR EN EL LOCAL STORAGE//
let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];


//RECORRO TODOS LOS PRODUCTOS Y LOS MUESTRO EN EL HTML DANDOLE CLASES PARA ESTILOS//
Productos.forEach((plantas) => {
    let content = document.createElement("div");
    content.className = "CartadeCompra";
     content.innerHTML = `
     <img src="${plantas.img}" class="ImagenProductos">
     <h3>${plantas.nombre}</h3>
     <p class="Precio">${plantas.precio}$</p>
     `;
//APPEND PARA INYECTAR TODO EL CONTENIDO//
     ContenidoCarrito.append(content);



//CREO UN BOTON PARA AGREGAR EL PRODUCTO//
     let botonComprar = document.createElement("button")
     botonComprar.innerText = "Agregar al Carrito";
     botonComprar.className = "Agregar al Carrito";

     content.append(botonComprar);
//ADD EVEN LISTENER PARA CUANDO HAGA CLICK ME "PUSHEE" TODOS LOS PRODUCTOS DEL ARRAY A UN ARRAY VACIO (CARRITO)//
     botonComprar.addEventListener("click" , () =>{
        carrito.push({
            nombre : plantas.nombre,
            precio : plantas.precio,
            img : plantas.img,
            tipo : plantas.tipo,
        });
        console.log(carrito);
//FUNCION PARA GUARDAR EN EL LOCALSTORAGE//        
        saveLocal();

     });
   
}); 
//CREO EL HEADER DE LA VENTANA CARRITO Y SU FUNCIONALIDAD CON ADDEVENTELISTENER//
verCarrito.addEventListener("click" , () => {
    VentanaCarrito.innerHTML = "";
    VentanaCarrito.style.display = "flex"
    const ventanaCarritoHeader = document.createElement("div");
    ventanaCarritoHeader.className = "ventanaCarritoHeader";
    ventanaCarritoHeader.innerHTML =`
    <h1 class="TituloVentanaCarrito"> Carrito🌻 </h1>

    `;

    VentanaCarrito.append(ventanaCarritoHeader);
//CREO EL BOTON "CERRAR"//
    const botonVentana = document.createElement("h1");
    botonVentana.innerText = "Cerrar";
    botonVentana.className = "ventanaCarritoBoton";

    botonVentana.addEventListener("click", () => {
        VentanaCarrito.style.display = "none";
    });

    ventanaCarritoHeader.append(botonVentana);
//RECORO DE NUEVO EL CARRITO PERO ESTA VEZ PARA MANDAR TODO DENTRO DE LA VENTANA CARRITO//
    carrito.forEach((plantas) => {
        ContenidoVentanaCarrito = document.createElement("div");
        ContenidoVentanaCarrito.className = "ventanaCarritoContenido"
        ContenidoVentanaCarrito.innerHTML = `
        <img src="${plantas.img}" class="ImagenProductosCarrito">
        <h3 class="nombrePlantasCarrito">${plantas.nombre}</h3>
        <p class="Precio">precio:${plantas.precio}$</p>

        `;

        VentanaCarrito.append(ContenidoVentanaCarrito);

    });
//USO EL METODO REDUCE PARA ACUMULAR EL PRECIO DE LOS PRDUCTOS Y TENER UN TOTAL//
    const total = carrito.reduce((acc, el) => acc + el.precio, 0 );
    
    const compraTotal = document.createElement("div")
    compraTotal.className = "compraTotalVentana"
    compraTotal.innerHTML = `Precio Final: ${total}$`;
    VentanaCarrito.append(compraTotal);

});
//FUNCION DEL LOCAL STORAGE//
const saveLocal = () => {
    localStorage.setItem("Carrito", JSON.stringify(carrito));

}



