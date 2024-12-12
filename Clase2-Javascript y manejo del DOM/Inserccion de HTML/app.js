const botonBajar = document.getElementById("decrement");
const botonSubir = document.getElementById("increment");

function contadorS() {
  const menu = document.getElementById("increment");
  const numer = document.getElementById("number").innerText;
  const numerEntero = parseInt(numer);
  if (numerEntero <= 0) {
    alert("El numero no puede ser igual a cero.");
  } else {
    document.getElementById("number").innerText = numerEntero + 1;
  }
}

function contadorN() {
  const menu = document.getElementById("increment");
  const numer = document.getElementById("number").innerText;
  const numerEntero = parseInt(numer);
  if (numerEntero <= 0) {
    alert("El numero no puede ser igual a cero.");
  } else {
    document.getElementById("number").innerText = numerEntero - 1;
  }
}

document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("nombre").value;
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review";
    const reviewName = document.createElement("h3");
    reviewName.textContent = name;

    const reviewDate = document.createElement("p");
    reviewDate.textContent = new Date().toLocaleDateString();
    reviewContainer.appendChild(reviewName);
    reviewContainer.appendChild(reviewDate);
    document.getElementById("reviewsContainer").appendChild(reviewContainer);
  });
