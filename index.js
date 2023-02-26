function converter() {
  const valorDolar = document.getElementById("valor").value;
  const valorReal = valorDolar * 5.5; // Taxa de câmbio atual

  if (valorDolar == "" || valorDolar <= 0) {
    alert("Digite um valor válido!");
    valorDolar.focus();
  } else {
    document.getElementById("resultado").textContent = `R$${valorReal.toFixed(
      2
    )}`;
  }

}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  converter();
});
