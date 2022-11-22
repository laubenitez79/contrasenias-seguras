let cambio_contrasenia = null;
let cambio_contrasenia_estilo = document.getElementById('nueva-contrasenia');
let contra = null;
let contra_estilo = document.getElementById('contrasenia');

function cambiarContrasenia(){
    const diccionario = {
        'a':'4',
        'e':'3',
        'i':'1',
        'o':'0',
        's':'5',
        't':'7',
        'g':'8'
    }

    contra = document.getElementById('contrasenia').value;
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
    document.getElementById('nueva-contrasenia').value = nuevaContrasenia;
    contra_estilo.style.display = "none";
    cambio_contrasenia_estilo.style.display = "block";
    
}