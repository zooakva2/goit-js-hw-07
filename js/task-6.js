const controlsDiv = document.querySelector("#controls");
const boxesDiv = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const boxSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesDiv.innerHTML = "";
  boxesDiv.appendChild(fragment);
};

const destroyBoxes = () => {
  boxesDiv.innerHTML = "";
};

controlsDiv.addEventListener("click", (event) => {
  if (event.target.dataset.create) {
    const amount = parseInt(controlsDiv.querySelector("input").value);
    createBoxes(amount);
  }

  if (event.target.dataset.destroy) {
    destroyBoxes();
  }
});
