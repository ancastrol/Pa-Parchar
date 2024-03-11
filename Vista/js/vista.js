class Vista {
    constructor() {
    }

    abrirModal(pModal) {
        pModal.style['pointer-events'] = 'none';
        pModal.style.opacity = 1;
    }

    cerrarModal(pModal) {
        pModal.style.pointerEvents = "none";
        pModal.style.opacity = 0;
    }


}