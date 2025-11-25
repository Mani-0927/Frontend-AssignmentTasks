const setup = document.getElementById('setup');
const punchline = document.getElementById('punchLine');

const nextBtn = document.getElementById('nextBtn');

function getJoke() {
  nextBtn.disabled = true;
  nextBtn.textContent = "Loading...";

  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(
      response => response.json()
    )
    .then(data => {
      setup.textContent = data.setup;
      punchline.textContent = data.punchline;
    })
  .catch(() => {
    setup.textContent = "Failed to load data 😒..";
    punchline.textContent = "";
  })
  .finally(() => {
    nextBtn.disabled = false;
    nextBtn.textContent = "Next Joke...";
  });
}

setup.addEventListener('click', getJoke);
nextBtn.addEventListener('click', getJoke);
