// =====================================
// PRODUCTOS DE LA TIENDA
// =====================================

const productos = [
    {
        id: 1,
        nombre: "Audífonos Bluetooth",
        precio: 25.99,
        imagen: "🎧",
        descripcion: "Audífonos inalámbricos de excelente calidad."
    },

    {
        id: 2,
        nombre: "Teclado Gamer",
        precio: 39.99,
        imagen: "⌨️",
        descripcion: "Teclado mecánico perfecto para jugar."
    },

    {
        id: 3,
        nombre: "Mouse Gamer",
        precio: 19.99,
        imagen: "🖱️",
        descripcion: "Mouse rápido y preciso para videojuegos."
    },

    {
        id: 4,
        nombre: "Control Gamer",
        precio: 49.99,
        imagen: "🎮",
        descripcion: "Control compatible con computadora."
    },

    {
        id: 5,
        nombre: "Laptop",
        precio: 599.99,
        imagen: "💻",
        descripcion: "Laptop para trabajo, estudio y entretenimiento."
    },

    {
        id: 6,
        nombre: "Smartphone",
        precio: 299.99,
        imagen: "📱",
        descripcion: "Teléfono inteligente con excelente rendimiento."
    },

    {
        id: 7,
        nombre: "Cámara",
        precio: 149.99,
        imagen: "📷",
        descripcion: "Cámara digital para tus mejores fotografías."
    },

    {
        id: 8,
        nombre: "Bocina Bluetooth",
        precio: 34.99,
        imagen: "🔊",
        descripcion: "Bocina portátil con sonido potente."
    }
];


// =====================================
// CARRITO
// =====================================

let carrito = [];


// =====================================
// MOSTRAR PRODUCTOS
// =====================================

function mostrarProductos() {

    const lista = document.getElementById("listaProductos");

    lista.innerHTML = "";

    productos.forEach(producto => {

        const tarjeta = document.createElement("div");

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

                <div class="precio">
                    $${producto.precio.toFixed(2)}
                </div>

                <button
                    class="agregar"
                    onclick="agregarAlCarrito(${producto.id})"
                >
                    🛒 Agregar al carrito
                </button>

            </div>
        `;

        lista.appendChild(tarjeta);
    });
}


// =====================================
// AGREGAR AL CARRITO
// =====================================

function agregarAlCarrito(id) {

    const producto = productos.find(
        producto => producto.id === id
    );

    if (!producto) return;

    carrito.push(producto);

    actualizarCarrito();

    alert(
        producto.nombre +
        " fue agregado al carrito."
    );
}


// =====================================
// ACTUALIZAR CARRITO
// =====================================

function actualizarCarrito() {

    const contenedor =
        document.getElementById("productosCarrito");

    const contador =
        document.getElementById("contador");

    const totalElemento =
        document.getElementById("total");

    contador.textContent = carrito.length;

    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {

        contenedor.innerHTML =
            "<p>Tu carrito está vacío.</p>";

    } else {

        carrito.forEach((producto, index) => {

            total += producto.precio;

            const item =
                document.createElement("div");

            item.className = "item-carrito";

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

                <button
                    class="eliminar"
                    onclick="eliminarProducto(${index})"
                >
                    Eliminar
                </button>

            `;

            contenedor.appendChild(item);
        });
    }

    totalElemento.textContent =
        total.toFixed(2);
}


// =====================================
// ELIMINAR PRODUCTO
// =====================================

function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarCarrito();
}


// =====================================
// MOSTRAR CARRITO
// =====================================

function mostrarCarrito() {

    const carritoVentana =
        document.getElementById("carrito");

    carritoVentana.style.display = "flex";

    actualizarCarrito();
}


// =====================================
// CERRAR CARRITO
// =====================================

function cerrarCarrito() {

    const carritoVentana =
        document.getElementById("carrito");

    carritoVentana.style.display = "none";
}


// =====================================
// COMPRAR
// =====================================

function comprar() {

    if (carrito.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;
    }

    let total = carrito.reduce(
        (suma, producto) =>
            suma + producto.precio,
        0
    );

    alert(
        "¡Gracias por tu compra!\n\n" +
        "Total: $" +
        total.toFixed(2)
    );

    carrito = [];

    actualizarCarrito();

    cerrarCarrito();
}


// =====================================
// INICIAR TIENDA
// =====================================

mostrarProductos();
actualizarCarrito();
