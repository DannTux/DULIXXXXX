const cartaCerrada = document.querySelector(".carta_cerrada");
const cartaAbierta = document.querySelector(".carta_SIN_abrir");

cartaCerrada.addEventListener("click", () => {
    cartaCerrada.classList.add("carta_cerrada_off");
    cartaAbierta.classList.add("carta_abierta");
});