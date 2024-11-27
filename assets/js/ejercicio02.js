//[03] En Home muestra una galería de imágenes con los 3 productos más vendidos

const topProducts = () => {
    //Paso 1. Ordenar los productos de mayor a menor según la propiedad 'sells' (utiliza sort y slice)
    //sort: ordena arreglo principal
    //slice: crea un nuevo arreglo desde la posicion 0 toma 3 elementos
    const topList = products.sort((a, b) => b.sells - a.sells).slice(0, 3)  
    //Paso 2. Obtener el contenedor del DOM donde vamos a mostrar los nombres (#topProducts) 
    const topProducts = document.querySelector("#topProducts")
    //Paso 3. Crear variable auxiliar y agregar html que tendrá DOM
    //por cada producto crear un article que tendrá la imagen del producto y su nombre
    let htmlAdd=""
    topList.forEach((product) =>{
        htmlAdd += `
            <article>
                <img src="${product.urlImg}" alt="${product.name}">
                <h4>${product.name}</h4>
            </article>
        `
    })
    //Paso 4. Cargar html en el elemento del DOM
    topProducts.innerHTML = htmlAdd;
}
topProducts()