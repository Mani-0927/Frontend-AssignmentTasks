document.getElementById("refreshBtn").addEventListener("click", fetchUsers);
async function fetchUsers() {
  document.getElementById('spinner').style.display = "block";
  const body = document.querySelector("#userTable tbody");
  body.innerHTML = "";



  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users");
  const user = await res.json();

  user.forEach(e => {
    const row = `<tr>
    <td>${e.name}</td>
    <td>${e.email}</td>
    <td>${e.address.city}</td>
    </tr>`;
    body.innerHTML += row;
  });

  document.getElementById('spinner').style.display = "none";
}

fetchUsers();