const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  destroyBoxes();
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      div.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
    input.value = "";
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
