const boton = document.querySelector('.boton-contacto');
let contrasenia = document.getElementById('contrasenia').value;
let contrasenia2 = document.getElementById('contrasenia');
let contrasenia_segura = document.getElementById('nueva-contrasenia').value;
let contrasenia_segura2 = document.getElementById('nueva-contrasenia');

const diccionario = {
    'a':'4',
    'e':'3',
    'i':'1',
    'o':'0',
    's':'5',
    't':'7',
    'g':'8'
}

function cambiarContrasenia(contra , diccionario) {
    const listaContrasenia = [];
    const contrasenia = contra.length;
    for (let indice = 0; indice <= contrasenia ; indice++){
        const actual = contra[indice];
        if (actual in diccionario){
            //console.log(diccionario[actual]);
            listaContrasenia.push(diccionario[actual]);
            }
        else{
            listaContrasenia.push(actual);
            }
        //console.log(actual);
        }
        const nuevaContrasenia = listaContrasenia.join("");
        return nuevaContrasenia
}

contrasenia2.addEventListener("keyup" , function(){
    contrasenia_segura = cambiarContrasenia(this.value , diccionario);
    console.log(contrasenia_segura);
    return contrasenia_segura
})

boton.addEventListener("click" ,function() {
    contrasenia_segura2.style.display = "flex";
    contrasenia2.style.display = "none";
})

/*function verificar() {
    document.getElementsByName("nueva-contrasenia").value = contrasenia;
}*/