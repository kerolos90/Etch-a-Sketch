const container = document.querySelector("#container");
container.setAttribute(
  "style",
  "border-style:solid;border-width:thin;height:500px;width:500px;"
);

//Creates grid
const grid_container = document.querySelector("#grid_container");
function create_grid(squares) {
  grid_container.setAttribute(
    "style",
    `display: grid; grid-template-columns: repeat(${squares}, 1fr);  max-width: 500px;
    min-height: 500px;
   `
  );
  for (let i = 0; i < squares * squares; i++) {
    //Creates divs
    const div = document.createElement("div");
    //Adds divs to grid
    grid_container.appendChild(div);
    div.setAttribute("style", "background:white;border: 1px solid;");

    //Add hover effect
    div.addEventListener("mouseenter", function (e) {
      let x = Math.floor(Math.random() * 255);
      let y = Math.floor(Math.random() * 255);
      let z = Math.floor(Math.random() * 255);
      e.target.style.background = `rgb(${x},${y},${z})`;
    });
  }
}

//Reset buttton. If user picks number over 64 or non-number, error alerts user. Otherwise grid is resized.
const bttn = document.querySelector("#reset_bttn");
bttn.addEventListener("click", () => {
  let new_squares = prompt("Enters number of squares:", "");
  if (new_squares > 64) {
    alert("Entry can't be higher than 64!");
  } else if (isNaN(new_squares)) {
    alert("Entry has to be a number!");
  } else {
    while (grid_container.firstChild) {
      grid_container.removeChild(grid_container.lastChild);
    }
    create_grid(new_squares);
  }
});
//Initial grid with 16 by 16 squares
create_grid(16);
