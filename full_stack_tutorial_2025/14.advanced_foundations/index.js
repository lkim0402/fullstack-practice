const labelCardEl = document.getElementById("label-card");

const text = "Hello,";
const names = [{ name: "Sally" }, { name: "Mike" }, { name: "Rob" }];

labelCardEl.innerHTML = names
  .map((nameObj) => {
    return `
  <p>${text} ${nameObj.name}</p>`;
  })
  .join("");
