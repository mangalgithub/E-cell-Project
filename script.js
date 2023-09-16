var clickedBtnId = [];
function handleNavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const clickableDivs = document.querySelectorAll(".boxgrid");
var isReverting = false;
clickableDivs.forEach((div, indx) => {
  div.addEventListener("click", function () {
    if (isReverting) return;
    else if (div.id === "b9") {
      isReverting = true;
      retracePath(0);
    } else {
      handleButtonClick(div);
      clickedBtnId.push(div);
    }
  });
});

function retracePath(idx) {
  if (idx == clickedBtnId.length) {
    clickedBtnId = [];
    isReverting = false;
    return;
  }
  clickedBtnId[idx].style.backgroundColor = "#00407A";

  setTimeout(() => {
    retracePath(idx + 1);
  }, 500);
}

function handleButtonClick(div) {
  div.style.backgroundColor = "red";
}
