"use strict";

// Select the element called section as the main container of the cards
const main = document.querySelector("section");

// Storing json data in a variable
const localJsonFile = "./ASSETS/JS/email.json";

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
window.addEventListener("DOMContentLoaded", () => {
  
  // Fet contents in JSON file
  fetch(localJsonFile)
    .then((response) => response.json()) // and the response we get is in json format
    .then((data) => {
      // we call that data here
      main.innerHTML = ""; // Initial content is empty
      data.forEach((el) => {
        // loop through the json data using forEach method
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
        <div class="d-flex align-items-center">
          <img src="${item.profile}" class="profile">
          <h4 class="ms-2 card-title"> ${item.sender}</h4> 
        </div>
        <div class="d-flex align-items-center">
          <p class="col text-muted card-date"> ${item.date}</p>
        </div>    
      </div>
      <p class="mt-4 text-muted card-subject">${item.subject}</p>
      <p class="text-truncate text-muted card-content">${item.content}</p>
    </li>`;
  // attach the newly created div element to the original div element, in this case to the class '.output'
  main.append(contain);
  // Add styling to the displayed content
  contain.classList.add("card");

  let allCards = [];
  let card = document.getElementsByClassName('card');
  for(let i = 0; i < card.length; i++) {
    allCards.push(card[i]);
  }
  allCards[0].classList.add("card-shadow");

}

