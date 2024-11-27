//[06] Utilizando https://dog.ceo/dog-api/, agrega una imagen random en el footer
const loadDog = async () => {
    try {
        //Paso 1. Obtener datos desde API
        const url= 'https://dog.ceo/api/breeds/image/random'
        const res= await fetch(url)
        //Paso 2. Parsear a JSON
        const data = await res.json()
        //Paso 3. Agregar datos de IMG al DOM
        const imgRandomDog = document.querySelector('#imgRandomDog')
        imgRandomDog.src=data.message
        imgRandomDog.alt="Perro random"
        imgRandomDog.style.maxHeight='400px'

    } catch (error) {
        alert("No se puede cargar la imagen")
    }
}
loadDog()