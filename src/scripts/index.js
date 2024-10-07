// Função para abrir o modal e preencher as informações
function openModal(event) {
    const postContainer = event.target.closest(".post__container");
    const userImage = postContainer.querySelector(".user__image").src;
    const username = postContainer.querySelector(".main__name").textContent;
    const userRole = postContainer.querySelector(".main__role").textContent;
    const postTitle = postContainer.querySelector(".post__title").textContent;
    const postContent = postContainer.querySelector(".post__paragraph").textContent;
  
    const modalUserImage = document.getElementById("modalUserImage");
    const modalUsername = document.getElementById("modalUsername");
    const modalUserRole = document.getElementById("modalRole");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
  
    modalUserImage.src = userImage;
    modalUsername.textContent = username;
    modalUserRole.textContent = userRole;
    modalTitle.textContent = postTitle;
    modalContent.textContent = postContent;
  
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  }
  
  // Função para fechar o modal
  function closeModal() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
  
  const openPostButtons = document.querySelectorAll(".openPost__button");
  openPostButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });
  
  const closeModalButton = document.getElementById("closeModalButton");
  closeModalButton.addEventListener("click", closeModal);
  