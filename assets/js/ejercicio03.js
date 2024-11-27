//[04] Agrega menú con categorías en página de productos
const loadCategories = () => {
    //Paso 1. Llamar al elemento del DOM (.menuCategory)
    const menuCategory = document.querySelector(".menuCategory")
    //Paso 2. Crear nuevos artículos según cada categoría
    //articulos con imagen y texto
    categories.forEach(cat => {
        // Crear un artículo para cada categoría: createElement
        const article = document.createElement('article')
        //Agregar el nombre de la categoría: textContent
        //<article>nombre de categoría</article>
        article.textContent = cat.name     
        // Asignar el color de fondo: style
        article.style.backgroundColor = cat.color   
        // Agregar el artículo al contenedor: appendChild
        menuCategory.appendChild(article)   
    })
    
}

loadCategories()