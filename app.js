const form = document.querySelector("form");
const tweetInput = document.querySelector("#tweetInput");
const tweetList = document.querySelector("#tweetList");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const tweet = tweetInput.value;
  const li = document.createElement("li");
  li.textContent = tweet;
  tweetList.appendChild(li);
  tweetInput.value = "";
});

