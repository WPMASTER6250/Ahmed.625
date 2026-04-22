const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;

  const li = document.createElement("li");
  li.textContent = name + " (" + id + ")";
  list.appendChild(li);

  form.reset();
});
