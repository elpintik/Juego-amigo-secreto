let amigosLista = [];
let amigosSorteados = [];
let amigosMaximo = amigosLista.length;

//esta función seleciona la etiqueta en html y le agraga un texto
function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo(){
    let amigoRecibido = document.querySelector('#amigo').value;
    //valida si esta vacio o si envio un número, ya que solo quiero recir
    //nombres de personas
    if(amigoRecibido == "" || !isNaN(amigoRecibido)){
        alert("Ingrese el nombre de un amigo, no se acepta espacios vacíos ni números");
        limpiarCaja();
    } else{
        // le digo que me revise si hay un valor con este dato recibido del input
        if(amigosLista.includes(amigoRecibido)){
            asignarTexto('.section-title', 'el nombre del amigo ya esta registrado');
            limpiarCaja();
        }else{
            //de lo contrario que me agregue en la lista ese nombre porque no lo encontro duplicado.
            amigosLista.push(amigoRecibido);
            limpiarCaja();
            asignarTexto('.section-title', 'sigue agregando nombres de tus amigos :)');
        }
    }
    function mostrarAmigo(){
        let listaAmigosLi = document.getElementById("listaAmigos");
        listaAmigosLi.innerHTML = "";
        for(let i = 0; i < amigosLista.length; i++){
            let nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = amigosLista[i];
            listaAmigosLi.appendChild(nuevoElemento);
        }
    }
    console.log(amigosLista);
    mostrarAmigo();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    if(amigosLista == ""){
        alert("Primero debe agregar el nombre de un amigo");
    }else{
        let amigoSecreto = Math.floor(Math.random()*amigosLista.length);
        let nombreAmigo = amigosLista[amigoSecreto];
        asignarTexto('.section-title', `su amigo secreto es.. ${nombreAmigo}`);
    }

    if(amigosLista.length == amigosSorteados.length){
        asignarTexto('.section-title', `Ya se sortearon todos sus amigos`);
        return;
    }

    let amigoSecretoGenerado;
    do{
        amigoSecretoGenerado = Math.floor(Math.random() * amigosLista.length);
    } while (amigosSorteados.includes(amigoSecretoGenerado));
    
    amigosSorteados.push(amigoSecretoGenerado);
    let nombreDeAmigo = amigosLista[amigoSecretoGenerado];
    asignarTexto('.section-title', `Su amigo secreto es... ${nombreDeAmigo}`);
}

