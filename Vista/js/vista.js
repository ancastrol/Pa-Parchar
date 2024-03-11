const openModal = document.querySelector('.compraBtn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click',()=>{
    modal.classList.add('.modal--show');
});

closeModal.addEventListener('click',()=>{
    modal.classList.remove('.modal--show');
});