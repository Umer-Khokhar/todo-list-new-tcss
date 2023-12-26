import "./style.css";
document.addEventListener('DOMContentLoaded', e => {
  const input = document.getElementById("todo-input");
  const output = document.querySelector("#output");
  
  function getStorage() {
    output.innerHTML = localStorage.getItem("list");
  }
  
  getStorage();
  
  function setStorage() {
    localStorage.setItem("list", output.innerHTML);
  }
  
  input.addEventListener("keyup", (e) => {
    let target = e.key;
  
    if (target === "Enter") {
      let outputData = input.value.trim();
  
      if (outputData !== "") {
        getData(outputData);
        setStorage();
      }
    }
  });
  
  function getData(data) {
    let myLi = document.createElement("li");
    myLi.innerHTML = `${data} <img src="delete.png" alt="delete-image" width='32'>`;
    myLi.classList.add("flex",'bg-sky-500', "justify-between", "items-center", 'p-2', 'rounded-md', 'pointer-cur', 'mt-4', 'text-white', 'font-semibold');
    output.appendChild(myLi);
    input.value = "";
  }
  
  output.addEventListener("click", (e) => {
    let mytarget = e.target;
  
    if (mytarget.tagName === "IMG") {
      let li = mytarget.closest("li");
      li.remove();
      setStorage();
    } else if (mytarget.tagName === "LI") {
      mytarget.classList.toggle("line-throw-text");
      setStorage();
    }
  });

})
