class Vista {
    constructor() {
    }

    /*Limpiar contededor main*/

    limpiarContenido(idContenedor){
        document.getElementById(idContenedor).innerHTML = "";
    }

    /*Mostrar plantilla elegida en el destino elegido*/

    mostrarPlantilla(form, destino){
        let dest = document.getElementById(destino);
        dest.innerHTML = "";
        let templateContent = document.getElementById(form);
        if(templateContent){
            let clon = templateContent.content.cloneNode(true);
            dest.appendChild(clon);
        }
    }

    abrirModal(modal) {
        let pModal = document.getElementById(modal);
        pModal.style['pointer-events'] = 'unset';
        pModal.style.opacity = 1;
    }

    cerrarModal(modal) {
        let pModal = document.getElementById(modal);
        pModal.style['pointer-events'] = 'none';
        pModal.style.opacity = 0;
    }

}