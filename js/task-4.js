const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //console.log(event.currentTarget.elements);
  const elements = event.currentTarget.elements;
  const formData = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  // Check if any form field is empty
  if (formData.email === "" || formData.password === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);

  event.currentTarget.reset();
}
