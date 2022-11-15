const joke = document.getElementById("joker");
const button = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.textContent = `${item.joke}`;
    });
};
btn.addEventListener("click", getJoke);
getJoke();
