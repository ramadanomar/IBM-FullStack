function compute() {
  var principal = document.getElementById("principal").value;
  if (principal == "") {
    alert("Please enter a principal amount");
    return false;
  } else if (principal <= 0) {
    alert("Please enter a positive principal amount");
    return false;
  }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  var result = document.getElementById("result");

  result.innerHTML =
    "\nIf you deposit <span class='result'>" +
    principal +
    "</span>,\nat an interest rate of <span class='result'>" +
    rate +
    "%</span>." +
    "\nYou will recieve an amount of <span class='result'>" +
    interest +
    "\n</span> in the year <span class='result'>" +
    year +
    "</span>.";
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
