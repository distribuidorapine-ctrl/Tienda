// ==========================================
// ⚽ FÚTBOL STORE - SISTEMA DE TIENDA
// ==========================================


// ==========================================
// PRODUCTOS
// ==========================================

const productos = [

    {
        id: 1,
        nombre: "Camiseta Fútbol",
        precio: 35.00,
        imagen: "👕",
        categoria: "Camisetas",
        descripcion: "Camiseta deportiva para los verdaderos fanáticos."
    },

    {
        id: 2,
        nombre: "Balón Profesional",
        precio: 45.00,
        imagen: "⚽",
        categoria: "Balones",
        descripcion: "Balón de fútbol para partidos y entrenamientos."
    },

    {
        id: 3,
        nombre: "Zapatos de Fútbol",
        precio: 65.00,
        imagen: "👟",
        categoria: "Zapatos",
        descripcion: "Zapatos diseñados para mejorar tu rendimiento."
    },

    {
        id: 4,
        nombre: "Guantes de Portero",
        precio: 30.00,
        imagen: "🧤",
        categoria: "Accesorios",
        descripcion: "Guantes con excelente agarre para porteros."
    },

    {
        id: 5,
        nombre: "Short Deportivo",
        precio: 22.00,
        imagen: "🩳",
        categoria: "Ropa",
        descripcion: "Short cómodo para entrenamientos y partidos."
    },

    {
        id: 6,
        nombre: "Medias de Fútbol",
        precio: 12.00,
        imagen: "🧦",
        categoria: "Accesorios",
        descripcion: "Medias deportivas resistentes y cómodas."
    },

    {
        id: 7,
        nombre: "Conos de Entrenamiento",
        precio: 18.00,
        imagen: "🔶",
        categoria: "Entrenamiento",
        descripcion: "Perfectos para ejercicios y entrenamientos."
    },

    {
        id: 8,
        nombre: "Mochila Deportiva",
        precio: 40.00,
        imagen: "🎒",
        categoria: "Accesorios",
        descripcion: "Mochila para transportar todo tu equipo."
    }

];


// ==========================================
// CARRITO
// ==========================================

let carrito = [];


// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

function mostrarProductos() {

    const lista =
        document.getElementById("listaProductos");

    if (!lista) return;

    lista.innerHTML = "";

    productos.forEach(producto => {

        const tarjeta =
            document.createElement("div");

        tarjeta.className = "producto";

        tarjeta.innerHTML = `

            <div class="producto-imagen">
                ${producto.imagen}
            </div>

            <div class="producto-info">

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="descripcion">
                    ${producto.descripcion}
                </p>

                <p>
                    <strong>
                        ${producto.categoria}
                    </strong>
                </p>

                <div class="precio">
                    $${producto.precio.toFixed(2)}
                </div>

                <button
                    class="agregar"
                    onclick="agregarAlCarrito(${producto.id})"
                >
                    ⚽ Agregar al carrito
                </button>

            </div>

        `;

        lista.appendChild(tarjeta);

    });

}


// ==========================================
// AGREGAR PRODUCTO
// ==========================================

function agregarAlCarrito(id) {

    const producto =
        productos.find(
            producto => producto.id === id
        );

    if (!producto) return;


    // Buscar si ya existe

    const existente =
        carrito.find(
            item => item.id === id
        );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            ...producto,

            cantidad: 1

        });

    }


    actualizarCarrito();

    mostrarCarrito();


    console.log(
        "Producto agregado:",
        producto.nombre
    );

}


// ==========================================
// ACTUALIZAR CARRITO
// ==========================================

function actualizarCarrito() {

    const contenedor =
        document.getElementById(
            "productosCarrito"
        );

    const contador =
        document.getElementById(
            "contador"
        );

    const totalElemento =
        document.getElementById(
            "total"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    let total = 0;

    let cantidadTotal = 0;


    // Carrito vacío

    if (carrito.length === 0) {

        contenedor.innerHTML = `

            <p>
                ⚽ Tu carrito está vacío.
            </p>

            <p>
                ¡Agrega productos para comenzar!
            </p>

        `;

    }


    // Mostrar productos

    carrito.forEach(
        (producto, index) => {

            const subtotal =
                producto.precio *
                producto.cantidad;


            total += subtotal;

            cantidadTotal +=
                producto.cantidad;


            const item =
                document.createElement("div");

            item.className =
                "item-carrito";


            item.innerHTML = `

                <div class="item-carrito-info">

                    <h4>
                        ${producto.imagen}
                        ${producto.nombre}
                    </h4>

                    <p>
                        $${producto.precio.toFixed(2)}
                    </p>

                </div>


                <div>

                    <button
                        onclick="disminuirCantidad(${index})"
                    >
                        −
                    </button>

                    <strong>
                        ${producto.cantidad}
                    </strong>

                    <button
                        onclick="aumentarCantidad(${index})"
                    >
                        +
                    </button>

                </div>


                <strong>
                    $${subtotal.toFixed(2)}
                </strong>


                <button
                    class="eliminar"
                    onclick="eliminarProducto(${index})"
                >
                    🗑️
                </button>

            `;


            contenedor.appendChild(item);

        }
    );


    // Actualizar contador

    if (contador) {

        contador.textContent =
            cantidadTotal;

    }


    // Actualizar total

    if (totalElemento) {

        totalElemento.textContent =
            total.toFixed(2);

    }

}


// ==========================================
// AUMENTAR CANTIDAD
// ==========================================

function aumentarCantidad(index) {

    if (!carrito[index]) return;

    carrito[index].cantidad++;

    actualizarCarrito();

}


// ==========================================
// DISMINUIR CANTIDAD
// ==========================================

function disminuirCantidad(index) {

    if (!carrito[index]) return;


    if (carrito[index].cantidad > 1) {

        carrito[index].cantidad--;

    } else {

        carrito.splice(index, 1);

    }


    actualizarCarrito();

}


// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

function eliminarProducto(index) {

    if (!carrito[index]) return;


    carrito.splice(index, 1);


    actualizarCarrito();

}


// ==========================================
// MOSTRAR CARRITO
// ==========================================

function mostrarCarrito() {

    const ventana =
        document.getElementById(
            "carrito"
        );


    if (!ventana) return;


    ventana.style.display = "flex";


    actualizarCarrito();

}


// ==========================================
// CERRAR CARRITO
// ==========================================

function cerrarCarrito() {

    const ventana =
        document.getElementById(
            "carrito"
        );


    if (!ventana) return;


    ventana.style.display = "none";

}


// ==========================================
// FINALIZAR COMPRA
// ==========================================

function comprar() {


    if (carrito.length === 0) {

        alert(
            "⚽ Tu carrito está vacío."
        );

        return;

    }


    let total = 0;


    carrito.forEach(
        producto => {

            total +=
                producto.precio *
                producto.cantidad;

        }
    );


    const confirmacion =
        confirm(

            "🏆 RESUMEN DE COMPRA\n\n" +

            "Productos: " +
            carrito.length +
            "\n\n" +

            "TOTAL: $" +
            total.toFixed(2) +

            "\n\n" +

            "¿Deseas finalizar la compra?"

        );


    if (!confirmacion) {

        return;

    }


    alert(

        "🎉 ¡COMPRA REALIZADA!\n\n" +

        "Gracias por comprar en " +
        "Fútbol Store ⚽\n\n" +

        "Total pagado: $" +
        total.toFixed(2)

    );


    // Vaciar carrito

    carrito = [];


    actualizarCarrito();

    cerrarCarrito();

}


// ==========================================
// CERRAR CARRITO AL HACER CLICK AFUERA
// ==========================================

window.addEventListener(
    "click",
    function(event) {

        const ventana =
            document.getElementById(
                "carrito"
            );


        if (
            event.target === ventana
        ) {

            cerrarCarrito();

        }

    }
);


// ==========================================
// TECLA ESC PARA CERRAR CARRITO
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            cerrarCarrito();

        }

    }
);


// ==========================================
// INICIAR TIENDA
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarProductos();

        actualizarCarrito();

    }
);
