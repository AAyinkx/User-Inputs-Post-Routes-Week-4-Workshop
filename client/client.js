console.log("Test");

const messageForm = document.getElementById("message-form");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(messageForm);
  const formValues = Object.fromEntries(formData);
  console.log("Message received");
  console.log(formValues);

  //!Like preparing a parcel to go through customs 😂
  fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

//Event Listener
messageForm.addEventListener("submit", handleSubmit);
