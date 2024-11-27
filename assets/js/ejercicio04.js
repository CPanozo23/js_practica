//[05] Agrega productos en página de productos

const loadProducts = () => {
    loadCategoryProducts("Perro", "#dogs")
    loadCategoryProducts("Gato", "#cats")
    loadCategoryProducts("Pequeñas mascotas", "#little")
}

//Función para cargar productos filtrados según la categoría
//recibe la categoría y el id del contenedor en DOM
const loadCategoryProducts = (category, containerId) => {
    //Paso 1 Llamar al elemento del DOM (.prodCategory)
    const container = document.querySelector(containerId)
    //Paso 2 Filtrar los productos según la categoría
    const filterProd = products.filter((el) => el.category === category)
    //Paso 3 Recorrer los productos filtrados y agregar al contenedor
    //elemento hijo: article y lo que se requiera adentro (img, h4, p)
    //agregar classList product
    filterProd.forEach((elem) => {
        const article = document.createElement("article")
        article.innerHTML += `
        <img src="${elem.urlImg}" alt=${elem.name}/> 
        <h4>${elem.name}</h4> 
        <p>Marca: ${elem.brand}</p>
        <p>Precio: ${elem.price}</p>
        <p>Unidades: ${elem.units}</p>`
        container.appendChild(article);
    })
}

loadProducts()
