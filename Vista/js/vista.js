class Vista {
    constructor() {
    }

    
    abrirModal() {
        let pModal = document.getElementById('modalUrl');
        pModal.style['pointer-events'] = 'unset';
        pModal.style.opacity = 1;
    }


    cerrarModal() {
        let pModal = document.getElementById('modalUrl');
        pModal.style['pointer-events'] = 'none';
        pModal.style.opacity = 0;
    }


}