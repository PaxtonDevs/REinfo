document.getElementById("getButton").addEventListener("click", apiRequest);

async function apiRequest() {
  const valueBucket = document.querySelector("input").value;
  try {
    const response = await fetch(`http://localhost:8000/api/${valueBucket}`);
    const data = await response.json();

    // console.log(data)
    document.getElementById("infoText").innerText = data.text;

    document.getElementById("image").src = data.image;
  } catch (error) {
    console.log(error);
  }
}
