document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const producto = await obtenerProducto(id);
  const contenedor = document.getElementById('producto');

  contenedor.innerHTML = `
    <div class="card mx-auto shadow" style="max-width: 500px;">
    
      <div class="card-body">
        <h3 class="card-title">${p.nombre}</h3>
        <p class="card-text">${p.descripcion}</p>
        <h4 class="text-success">${p.precio.toFixed(2)} €</h4>
        <img src="${p.img}" alt="${p.nombre}" class="img-fluid mb-4">
        <button id="agregar" class="btn btn-success mt-3">Añadir al carrito</button>
      </div>
    </div>
  `;

  const card = contenedor.querySelector('.card');
  const title = contenedor.querySelector('.card-title');
  const text = contenedor.querySelector('.card-text');
  card.style.border = '2px solid #4a28a7ff';
  title.style.color = '#c9dd12ff';
  text.style.fontSize = '1.1rem';
  card.style.backgroundColor = '#a7b623ff';

  document.getElementById('agregar').addEventListener('click', () => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto añadido al carrito 🛒');
  });
});
