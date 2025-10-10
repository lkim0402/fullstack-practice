let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

// if browser refreshes
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// adding new lead
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("leads", JSON.stringify(myLeads));
  render(myLeads);
});

// deleting all
deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  inputEl.value = "";
  render([]);
});

// saving the tab
tabBtn.addEventListener("click", function () {
  let tab = "";
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // takes a lil time (10-50ms)
    tab = tabs[0].url;
    console.log(tab);

    // they run immediately
    myLeads.push(tab);
    inputEl.value = "";
    localStorage.setItem("leads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// helper function to render
function render(list) {
  let listItems = "";

  for (let i = 0; i < list.length; i++) {
    listItems += `
      <li>
        <a href="${list[i]}" target="_blank" rel="noopener noreferrer">
          ${list[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}
