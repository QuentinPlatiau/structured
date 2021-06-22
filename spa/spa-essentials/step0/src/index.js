import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/style.css";

// load an analog clock
import { AnalogClock } from "customizable-analog-clock";
// const { AnalogClock } = require ("customizable-analog-clock"); // Node syntax require() would also work
import logo from "./img/js-logo.png";
import music from "./sound/Infecticide-11-Pizza-Spinoza.mp3";

const stopStartSound = () => {
  const myAudioPlayer = document.querySelector("#audioPlayer");

  if (myAudioPlayer.paused) myAudioPlayer.play();
  else myAudioPlayer.pause();
};

const header = document.querySelector("header");
header.addEventListener("click", stopStartSound);

// Create the audio and load the file via webpack file-loader
const myPlayer = `<audio id="audioPlayer" controls autoplay>
        <source
          src="${music}"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>`;

const main = document.querySelector("main");
main.innerHTML += myPlayer;

// the Webpack file-loader recognise /src/img/js-logo.png as local file and replace
//"./image/js-logo.png" with the final path to the image in the output directory (/dist)
const footerPhoto = new Image();
footerPhoto.src = logo;
footerPhoto.src = logo;
footerPhoto.height = 50;
const footer = document.querySelector("footer");
footer.appendChild(footerPhoto);

// add a wrapper for the clock
main.innerHTML += `  <br><br><div 
                          id="my-clock"                          
                          style="width: 200px; height: 200px;"  
                          class="mx-auto"                       
                      </div>`;
// create and attach the clock to the wrapper (#my-clock)
const clock = new AnalogClock({
  htmlElement: "my-clock",
  showIndicators: true,
});

// add the #page div within the main
const pageDiv = document.createElement("div");
pageDiv.id = "page";
main.appendChild(pageDiv);

/**
 * Render a view of the pizzas into the #page div
 */
const pizzaView = async () => {
  try {
    // hide data to inform if the pizza menu is already printed
    const response = await fetch("http://localhost:3000/pizzas"); // fetch return a promise => we wait for the response

    if (!response.ok) {
      // status code was not 200, error status code
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    const pizzas = await response.json(); // json() returns a promise => we wait for the data
    // create a wrapper to provide a responsive table
    const tableWrapper = document.createElement("div");
    tableWrapper.className = "table-responsive pt-5";
    // create an HTMLTableElement dynamically, based on the pizzas data (Array of Objects)
    const table = document.createElement("table");
    table.className = "table table-danger";
    tableWrapper.appendChild(table);
    // deal with header
    const thead = document.createElement("thead");
    const header = document.createElement("tr");
    thead.appendChild(header);
    const header1 = document.createElement("th");
    header1.innerText = "Pizza";
    const header2 = document.createElement("th");
    header2.innerText = "Description";
    header.appendChild(header1);
    header.appendChild(header2);
    table.appendChild(thead);
    // deal with data rows for tbody
    const tbody = document.createElement("tbody");
    pizzas.forEach((pizza) => {
      const line = document.createElement("tr");
      const titleCell = document.createElement("td");
      titleCell.innerText = pizza.title;
      line.appendChild(titleCell);
      const descriptionCell = document.createElement("td");
      descriptionCell.innerText = pizza.content;
      line.appendChild(descriptionCell);
      // hide info within each row, the pizza id
      line.dataset.pizzaId = pizza.id;
      tbody.appendChild(line);
    });
    table.appendChild(tbody);
    // add the HTMLTableElement to the main, within the #page div
    pageDiv.appendChild(tableWrapper);
  } catch (error) {
    console.error("pizzaView::error", error);
  }
};

// call the asynchrone function to print the list of pizzas
pizzaView();
