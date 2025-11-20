const textArea = document.getElementById('text');
const counter = document.getElementById('counter');
const max = 20;

textArea.addEventListener('input', () => {

  let len = textArea.value.length;

  if (textArea.value === "Enter your text") {
    textArea.value = "";
  }
  if (len > max) {
    textArea.value = textArea.value.slice(0, max);
    len = max;
  }
  else {
    counter.textContent = "Counter : " + (max - len);

    let percent = ((max - len) / max) * 100;
    if (percent > 60) {
      counter.style.color = "green";
    }
    else if (percent > 30) {
      counter.style.color = "orange";
    }
    else {
      counter.style.color = "red";
    }
  }
})