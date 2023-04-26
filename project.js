(() => {
  const refs = {
    open: document.querySelector("[modal-open]"),
    modal: document.querySelector("[modal]"),
    close: document.querySelector("[modal-close]"),
  };

  refs.open.addEventListener("click", onClick);
  refs.close.addEventListener("click", onClick);

  function onClick() {
    refs.modal.classList.toggle("is-hidden");
  }
})();