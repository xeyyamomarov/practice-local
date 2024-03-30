let createBtn = document.createElement("button");
let inputName = document.createElement("input");
createBtn.innerText = "Create";
let mainDiv = document.querySelector(".main");
let array = [];
createBtn.addEventListener("click", createUser);
const userBoxs = document.createElement("div");

function setLocal() {
  localStorage.setItem("users", JSON.stringify(array));
}

let localData = localStorage.getItem("users");
if (localData) {
  array = JSON.parse(localData);
}

function createUser() {
  if (!inputName.value) return null;
  const newUser = {
    id: array.length + 1,
    name: inputName.value,
  };
  inputName.value = "";
  array.push(newUser);
  getUser();
  setLocal();
}

function deleteItem(id){
  let findIndex = array.findIndex(element => element.id === id)
  array.splice(findIndex,1)
  getUser()
  setLocal()
}

function getUser() {
  userBoxs.innerHTML = "";
  array.map((user) => fetchUser(user));
}

function fetchUser(user) {
  const userDiv = document.createElement("div");
  userDiv.classList.add("userDiv");
  const userName = document.createElement("h1");
  let deleteBtn = document.createElement("button")
  deleteBtn.innerText = "delete"
  deleteBtn.addEventListener("click", () => deleteItem(user.id))
  userName.textContent = user.name;
  userBoxs.append(userDiv);
  userDiv.append(userName,deleteBtn);
}

getUser();

mainDiv.append(createBtn, inputName, userBoxs);

