
function displayPoem(response) {
   new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}


function genneratePoem(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "0c43aab85t9fo6a6712276a1886b3109";
    let prompt = `Generate a german poem about ${instructionInput.value}`;
    let context =
      "The user instructions are: You love the german language and you can write short poems with four lines in german, please write in basic html. Make a <br> after each line. Do not include a title. Do not mention html in the result. Please sign the poem with `SheCodes AI` inside a <strong> element at the end. Please make sure to follow the instructions.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<span class="blink">Here comes a german poem about ${instructionInput.value}!</span>`;

    axios.get(apiUrl).then(displayPoem);
    
   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", genneratePoem);