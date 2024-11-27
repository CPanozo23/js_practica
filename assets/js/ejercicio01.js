//[01] Utilizando una función, crea un menú principal que debe aparecer en el navbar de todos los archivos html.
// Las opciones del menú serán: home, productos, estadísticas, contacto
//Considera utilizar un array de objetos, por cada opción debe contener el texto a mostrar y su url

//Paso 1. Crear arreglo-> 
const menuBar = [
    {texto: "Home", url: "index.html"},
    {texto: "Productos", url: "products.html"},
    {texto: "Estadísticas", url: "statistics.html"},
    {texto: "Contacto", url: "contact.html"}
]
///////////////////////////
function loadMenuM(){
    //Paso 2. Llamar al elemento del DOM (#navbar)
    const navbar = document.querySelector("#navbar")
    //Paso 3. Crear variable auxiliar y agregar html que tendrá DOM
    let htmlAdd=""
    menuBar.forEach(option => {
        htmlAdd+=`<li><a href="${option.url}">${option.texto}</a></li>`
    })

    //Paso 4. Cargar html en el elemento del DOM
    navbar.innerHTML=htmlAdd
}

//[02] Utilizando una función, define un footer que contendrá los mismos enlaces del menú principal
function loadMenuS(){
    //Paso 1. Llamar al elemento del DOM (#navFooter)
    navFooter = document.querySelector("#navFooter");
    //Paso 2. Crear variable auxiliar y agregar html que tendrá DOM
    let html = "";
    menuBar.forEach((item) => {
        html += `<li><a href="${item.url}">${item.texto}</a></li>`;
    });
    //Paso 3. Cargar html en el elemento del DOM  
    navFooter.innerHTML = html;
}
//[03] Crea una función que ejecute a las funciones anteriores
function load(){
    loadMenuM()
    loadMenuS()
}

//load()

//[Pregunta 01] ¿De qué manera se podría mejorar el código anterior?
//Función de mejora
function loadMejora(){
    //Paso 2. Llamar al elemento del DOM (#navbar)
    const navbar = document.querySelector("#navbar")
    const navFooter = document.querySelector("#navFooter")
    //Paso 3. Crear variable auxiliar y agregar html que tendrá DOM
    let htmlAdd=""
    menuBar.forEach(option => {
        htmlAdd+=`<li><a href="${option.url}">${option.texto}</a></li>`
    })
    //Paso 4. Cargar html en el elemento del DOM
    navbar.innerHTML=htmlAdd
    navFooter.innerHTML=htmlAdd
}

loadMejora()