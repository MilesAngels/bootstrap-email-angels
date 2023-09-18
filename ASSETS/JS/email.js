"use strict";

const main = document.querySelector("section");
//console.log(output); // <div class="output"></div>

//output.textContent = "New Content";
//console.log(output); // <div class="output">New content</div>

// Storing json data in a variable
const localJsonFile = "./ASSETS/JS/email.json";

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", () => {
  
  fetch(localJsonFile)
    .then((response) => response.json()) // and the response we get is in json format
    .then((data) => {
      // we call that data here
      // console.log(data); // check the data on the console
      main.innerHTML = ""; // Initial content is empty
      data.forEach((el) => {
        // loop through the json data using forEach method
        // console.log(el);
        jsonList(el); // calling jsonList function
        
      });
    });
});

// Create a function to display the json data dynamically on the webpage
async function jsonList(item) {
  // Create a new div element dynamically
  const contain = document.createElement("article");
  // get the required details from the local.json file to the div element using innerHTML
  contain.innerHTML = `
    <li class="card-body">
      <div class="d-flex justify-content-between">
        <div class="d-flex justify-content-start">
          <img src="${item.profile}" class="profile">
          <h4 class="ms-2 fs-3 card-title"> ${item.sender}</h4> 
        </div>
        <div>
          <p class="col text-muted"> ${item.time}<p>
        </div>    
      </div>
      <p class="mt-3 text-muted">${item.subject}<p>
      <p class="mt-2 text-truncate card-text">${item.content}</p>
    </li>`;
  // attach the newly created div element to the original div element, in this case to the class '.output'
  main.append(contain);
  // Add styling to the displayed content
  contain.classList.add("card");
  contain.classList.add("shadow");
}
