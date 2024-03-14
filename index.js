
//selectores
let chucheriaContainer = document.querySelector('.chucheria-container')
let h6 = document.querySelector('.contenedor-chuches')
let mostrarChucheriasBtn = document.getElementById('MostrarChucheriasBtn')
let contenedor = document.querySelector('.contenedor')
let inputSolicitar = document.getElementById('inputSolicitar')
let btnSolicitar = document.getElementById('btnSolicitar')
let contenedorResultados = document.querySelector('.contenedor-resultados')
let resultadosCompra = document.getElementById('resultadosCompra')
let inputPassword =document.getElementById('inputPassword')
let btnPassword= document.getElementById('btnPassword')
let totalVentas = 0 

//eventos para eliminar chuches y titulo al cargar pagina
window.onload = function(){
    chucheriaContainer.parentNode.removeChild(chucheriaContainer)
    h6.parentNode.removeChild(h6)  
}
//funcion para limpiar el html
function limpiarHTML(){
    while(resultadosCompra.firstChild){
        resultadosCompra.removeChild(resultadosCompra.firstChild)
    }
}
// evento para mostrar chuches
mostrarChucheriasBtn.addEventListener('click',function(e){
    e.preventDefault()
    contenedor.appendChild(h6).appendChild(chucheriaContainer)
    mostrarChucheriasBtn.setAttribute('disabled',"return soloNumero(event)")
    
})
//evento para comprar chucherias y mostrar en html
btnSolicitar.addEventListener('click',function(e){
    e.preventDefault()
    limpiarHTML()
    const valorInput = inputSolicitar.value;
    if(valorInput ===''){
        alert("Por favor ingrese la fila y la columna Deseada")
    }else if(isNaN(valorInput)){
        alert('Por favor ingrese solo Numeros')
    }else if(valorInput.length > 2 || valorInput.length<2){
        alert('posicion  invalida')
    }else{
        let fila = parseInt(valorInput[0])
        let columna =parseInt(valorInput[1])
        if(cantidad[fila][columna]>0){
            cantidad[fila][columna]--
            totalVentas += precioChucherias[fila][columna]
            let chucheria = document.createElement('h6')
            chucheria.innerText = `Has Comprado 1 ${chucherias[fila][columna]} con exito`
            resultadosCompra.appendChild(chucheria)
        }else{
            alert('Lo Sentimos No Hay')
        }
    }
    inputSolicitar.value =''
})
//evento para administrar maquina chucheria
    btnPassword.addEventListener("click",function(e){
        e.preventDefault()
        let Password = inputPassword.value
        if(Password==="TecChu2022"){
            //mostrar html si la clave es correcta
            contenedorResultados.innerHTML =`
            <h5 class="pt-3 text-center"> haz ingresado al Modo Administrador</h5>
            <div class="input-group mb-4 mt-4">
            <input type="text" class="form-control" id="inputPosicion" placeholder="Ingrese Posicion" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <input type="text" class="form-control" id="inputcatidad" placeholder="Ingrese cantidad" aria-label="Recipient's username" aria-describedby="basic-addon2">
            </div>
            <div class="input-group-append text-center">
            <button class="btn btn-outline-dark" type="button" id="btnRellenar">Rellenar</button>
            </div>    
            
            <div class="cantidadAgregada"></div>
            
            <div class="d-grid gap-2">
            <button class="btn btn-outline-danger mt-4" type="button"id="btnApagarMaquina">Apagar Maquina</button>
            </div>
            
            <div id class="ventasContainer text-center mt-3"></div>
            `  
        }else{
            //si no es la clave informar
            alert('contraseña incorrecta')
        }        
        let boton = document.getElementById('btnRellenar')
        boton.addEventListener("click",function(e){
            limpiarHTML()
            e.preventDefault()
            let inputPosicion = document.getElementById('inputPosicion').value
            let inputCantidad = document.getElementById('inputcatidad').value

            let fila = parseInt(inputPosicion[0])
            let columna = parseInt(inputPosicion[1])

            cantidad[fila][columna] = Number( inputCantidad) + Number(cantidad[fila][columna])
            let mostrar = document.querySelector('.cantidadAgregada')//mostar cantidad 
            mostrar.innerHTML =`<h6>Cantidad final de  ${chucherias[fila][columna]}s :${cantidad[fila][columna]}</h6>`
        })
    let btnApagarMaquina= document.getElementById('btnApagarMaquina')
    btnApagarMaquina.addEventListener('click',function(){
        let ventasContainer = document.querySelector('.ventasContainer')
        ventasContainer.innerHTML =`<h5>las ventas totales son igual a ${totalVentas.toFixed(2)} 🤑</h5>`
    setTimeout(function(){
        chucheriaContainer.parentNode.removeChild(chucheriaContainer)
        h6.parentNode.removeChild(h6)    
    },3000)
    })
})