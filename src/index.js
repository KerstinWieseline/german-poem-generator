function genneratePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    new Typewriter("#poem", {
      strings: "Here comes a poem!",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", genneratePoem);