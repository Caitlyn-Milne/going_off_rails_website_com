const A_CHAR_CODE = "A".charCodeAt(0);

document.querySelectorAll(".effect").forEach((element) => {
  element.onmouseover = (event) => {
    scrambleEffect(event.target);
    console.log("wow");
  };
});
function scrambleEffect(element) {
  if (element.classList.contains("shuffle")) return;

  let countdown = Math.floor(Math.random() * 16) + 8;

  let interval = setInterval(() => {
    let rand = Math.floor(Math.random() * 52);
    element.classList.add("shuffle");
    element.innerHTML = numberToLetter(rand);
    if (element.dataset.value == element.innerHTML || --countdown <= 0) {
      element.innerHTML = element.dataset.value;
      clearInterval(interval);
      element.classList.remove("shuffle");
    }
  }, 30);
}

function numberToLetter(number) {
  number += A_CHAR_CODE;
  if (number > 90) number += 6;
  return String.fromCharCode(number);
}

document.querySelectorAll(".letter").forEach((element) => {
  element.onclick = (event) => {
    element.classList.add("broken");
    setTimeout(() => element.classList.remove("broken"), 1000);
  };
});
