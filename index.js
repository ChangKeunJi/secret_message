// btoa : ASC Character => 8 Binary => Devide to  6 Binary => Base64 Character

// atob : Base64 => ASC

// message.com/index.html/?color=red#value

// Domain => message.com

// Path => /index.html/

// Query String => ?color=red

// Hash, Fragment => #value
// : The only part browser can manage its own informations

const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");

  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;

  linkInput.select();

  console.log(encrypted);
});
