const modal = document.querySelector(".modal")
const modalContent = document.querySelector(".modal-content")
const btn = document.querySelector(".btn")
const close = document.querySelector(".close")

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

// open modal
function openModal(e) {
    e.preventDefault();
    modal.style.display = 'block';
}

// close modal
function closeModal() {
    modalContent.classList.add("slide-up")
    setTimeout(() => {
        modal.style.display = 'none';
        modalContent.classList.remove("slide-up")
    }, 500)
    
    
}